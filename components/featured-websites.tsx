"use client";

export function FeaturedWebsites() {
  const websites = [
    {
      title: "Brush-ish",
      url: "https://brush-ish-zeta.vercel.app/",
      description: "Creative platform",
    },
    {
      title: "Master Events",
      url: "https://master.d1xzb6fnbyc61m.amplifyapp.com/",
      description: "Event management",
    },
    {
      title: "Beanzy",
      url: "https://www.beanzy.in/",
      description: "Coffee & lifestyle",
    },
    {
      title: "NXT Events",
      url: "https://www.nxtevents.in/",
      description: "Event platform",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-screen p-4 mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-block mb-4">
            <div className="text-sm font-mono text-gray-500 tracking-widest">
              FEATURED WORK
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Featured <br />
            <span className="text-gray-400">Websites</span>
          </h2>
          <div className="w-12 h-1 bg-white mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl">
            A collection of live websites and platforms showcasing diverse
            design and functionality across various industries.
          </p>
        </div>

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {websites.map((website, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              {/* Website Info */}
              <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black via-black to-transparent">
                <h3 className="text-xl font-bold text-white mb-1">
                  {website.title}
                </h3>
                <p className="text-sm text-gray-400">{website.description}</p>
              </div>

              {/* iframe Container */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={website.url}
                  title={website.title}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              {/* Visit Link */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-gray-300 font-mono text-sm"
                >
                  Visit Website
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <p className="text-gray-500 text-sm font-mono">
            Each project represents a unique blend of design and technology,
            tailored to meet specific business goals and user needs.
          </p>
        </div>
      </div>
    </section>
  );
}
