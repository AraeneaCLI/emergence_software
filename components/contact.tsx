"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/AraeneaCLI", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yash-mankar-23b453269/",
      icon: "linkedin",
    },
    { name: "Email", url: "mailto:yash.mankar520@gmail.com", icon: "mail" },
    { name: "Phone", url: "tel:+919324858237", icon: "phone" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-black border-t border-gray-900"
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Let&apos;s Create Something{" "}
            <span className="text-gray-500">Extraordinary</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about
            technology, I&apos;m always open to interesting conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-16">
          {/* Contact form */}
          {/* <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-10 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-lg focus:border-white focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-lg focus:border-white focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-lg focus:border-white focus:outline-none transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-lg focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div> */}

          {/* Contact info */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-between space-y-12">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">
                Direct Contact
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:yash.mankar520@gmail.com"
                    className="text-white font-semibold hover:text-gray-300 transition-colors"
                  >
                    yash.mankar520@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+919324858237"
                    className="text-white font-semibold hover:text-gray-300 transition-colors"
                  >
                    +91 9324858237
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">
                    Thane, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">
                Follow My Work
              </p>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-3 group text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-1 h-4 bg-gradient-to-b from-white to-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Status badge */}
            <div className="border-t border-gray-800 pt-8">
              <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-800 px-4 py-3 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-12 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Yash Rajeshwar Mankar. Crafted with precision and passion.
          </p>
        </div>
      </div>
    </section>
  );
}
