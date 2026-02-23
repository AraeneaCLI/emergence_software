"use client";

import React, {
  useRef,
  useEffect,
  Suspense,
  useState,
  useLayoutEffect,
  useMemo,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Float,
  Center,
  Html,
  useProgress,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-[#A25F26] font-bold text-lg whitespace-nowrap">
        {progress.toFixed(0)}% Loading
      </div>
    </Html>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <Html center>
          <img
            src={this.props.fallbackImage}
            alt="Fallback Product"
            className="w-64 h-auto object-contain drop-shadow-xl"
          />
        </Html>
      );
    }
    return this.props.children;
  }
}

function Model({ url, liquidColor }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useFrame((state, delta) => {
    if (groupRef.current && !hovered) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  useLayoutEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = false;
        if (child.name === "bottle") {
          const oldMat = child.material;
          child.material = new THREE.MeshPhysicalMaterial({
            map: oldMat.map,
            color: oldMat.color,
            normalMap: oldMat.normalMap,
            roughness: 0.1,
            metalness: 0.0,
            transmission: 1.0,
            thickness: 1.2,
            ior: 1.5,
            transparent: true,
            opacity: 1,
            side: THREE.FrontSide,
            envMapIntensity: 1.5,
          });
        }
        if (child.name === "liquid") {
          child.material.side = THREE.DoubleSide;
          child.material.roughness = 0.4;
          child.material.color = new THREE.Color(liquidColor);
        }
      }
    });
  }, [clonedScene, liquidColor]);

  return (
    <group
      ref={groupRef}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "grab";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      <Center>
        <primitive object={clonedScene} scale={1} dispose={null} />
      </Center>
    </group>
  );
}

export default function BottleScene({
  model,
  liquidColor = "#F3E5AB",
  fallbackImage = "https://beanzy-soy.s3.ap-south-1.amazonaws.com/website/flavours/bottle-fallback.png",
}) {
  useEffect(() => {
    if (model) useGLTF.preload(model);
  }, [model]);

  if (!model) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <img src={fallbackImage} alt="Bottle" className="w-64" />
      </div>
    );
  }

  return (
    <div className="w-full lg:h-[65vh] h-[100vh] relative z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        className="bg-transparent"
      >
        {/* <ambientLight intensity={0.8} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} /> */}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />

        <Float speed={12} rotationIntensity={0} floatIntensity={0.2}>
          <ErrorBoundary fallbackImage={fallbackImage}>
            <Suspense fallback={<Loader />}>
              <Model url={model} liquidColor={liquidColor} />
            </Suspense>
          </ErrorBoundary>
        </Float>

        <Environment preset="lobby" />
      </Canvas>
    </div>
  );
}
