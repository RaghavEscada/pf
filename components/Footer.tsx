"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navigation = {
  services: [
    { title: "Deal Sourcing", href: "#" },
    { title: "Due Diligence", href: "#" },
    { title: "Operator Placement", href: "#" },
    { title: "Post-Acquisition Support", href: "#" },
    { title: "Portfolio Management", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Track Record", href: "#" },
    { name: "Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  resources: [
    { name: "Case Studies", href: "#" },
    { name: "Market Reports", href: "#" },
    { name: "Acquisition Guide", href: "#" },
    { name: "Operator Handbook", href: "#" },
    { name: "Help Center", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white relative overflow-hidden" id="contact">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)'
        }}
      ></div>

      <div className="relative z-10">
        {/* Contact Section */}
        <div className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-blue-500/20 border border-blue-500/30 mb-8">
                <span className="text-2xl mr-3">🚀</span>
                <span className="text-blue-200 font-bold text-lg">Ready to Get Started?</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Let&apos;s Accelerate Your
                <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Acquisition Journey</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Join the entrepreneurs and funds who&apos;ve already discovered the Pocket Fund advantage.
                Schedule a consultation to discuss your acquisition strategy and unlock your next deal.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <motion.a
                  href="mailto:hello@pocketfund.co"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/25"
                >
                  📧 Get in Touch
                </motion.a>
                <motion.a
                  href="https://calendly.com/pocketfund"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-blue-500/50 hover:border-blue-500 text-blue-300 hover:text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 backdrop-blur-sm text-center hover:bg-blue-500/10"
                >
                  📅 Book a Call
                </motion.a>
                <motion.a
                  href="https://tally.so/r/pocketfund"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 text-center shadow-lg hover:shadow-emerald-500/25"
                  target="_blank"
                  rel="noreferrer"
                >
                  📝 Quick Form
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="border-t border-white/10 py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="xl:grid xl:grid-cols-3 xl:gap-16">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div className="block max-w-fit">
                  <div className="inline-flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-white p-3 overflow-hidden">
                      <Image
                        src="/pflogo.webp"
                        alt="Pocket Fund Logo"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">
                        <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Pocket</span>
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Fund</span>
                      </p>
                      <p className="text-base text-gray-400">Micro-Acquisition Experts</p>
                    </div>
                  </div>
                </div>

                <p className="max-w-md text-lg text-gray-300 leading-relaxed">
                  Empowering entrepreneurs and funds to build wealth through strategic micro-acquisitions.
                  From deal sourcing to operator placement, we handle the complexity so you can focus on growth.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-300 text-base">
                    <span className="text-blue-400 text-xl">📍</span>
                    <span>Mumbai, India + Global Remote Operations</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300 text-base">
                    <span className="text-blue-400 text-xl">📧</span>
                    <a href="mailto:hello@pocketfund.co" className="hover:text-blue-400 transition-colors">
                      hello@pocketfund.co
                    </a>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-300 text-base">
                    <span className="text-blue-400 text-xl">🌐</span>
                    <span>24/7 Deal Flow Monitoring</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <a
                    href="https://linkedin.com/company/pocketfund"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-full border border-white/20 p-4 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:scale-110"
                  >
                    <LinkedIn className="w-6 h-6 text-gray-400 transition-colors group-hover:text-blue-400" />
                  </a>
                  <a
                    href="https://twitter.com/pocketfund"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-full border border-white/20 p-4 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:scale-110"
                  >
                    <Twitter className="w-6 h-6 text-gray-400 transition-colors group-hover:text-blue-400" />
                  </a>
                  <a
                    href="https://youtube.com/@pocketfund"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-full border border-white/20 p-4 transition-all duration-300 hover:bg-red-500/20 hover:border-red-500/50 hover:scale-110"
                  >
                    <YouTube className="w-6 h-6 text-gray-400 transition-colors group-hover:text-red-400" />
                  </a>
                </div>
              </motion.div>

              {/* Navigation Links */}
              <div className="mt-20 xl:mt-0 xl:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {/* Services */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                      <span className="mr-3 text-2xl">🛠️</span>
                      Services
                    </h3>
                    <ul className="space-y-5">
                      {navigation.services.map((item) => (
                        <li key={item.title}>
                          <a
                            href={item.href}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base hover:translate-x-1 inline-block"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Company */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                      <span className="mr-3 text-2xl">🏢</span>
                      Company
                    </h3>
                    <ul className="space-y-5">
                      {navigation.company.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base hover:translate-x-1 inline-block"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Resources */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                      <span className="mr-3 text-2xl">📚</span>
                      Resources
                    </h3>
                    <ul className="space-y-5">
                      {navigation.resources.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base hover:translate-x-1 inline-block"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Legal */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                      <span className="mr-3 text-2xl">⚖️</span>
                      Legal
                    </h3>
                    <ul className="space-y-5">
                      {navigation.legal.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-base hover:translate-x-1 inline-block"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base text-gray-400"
              >
                © {new Date().getFullYear()} Pocket Fund. All rights reserved. <a href="https://wa.me/916385751370?text=Hi%20Raghav%2C%20I%27m%20interested%20in%20your%20website%20development%20services.%20Can%20you%20help%20me%20build%20a%20similar%20website%3F" className="text-blue-400 hover:text-blue-300 transition-colors underline" target="_blank" rel="noreferrer">Website by Raghav</a>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
              >
                <span className="flex items-center">
                  <span className="mr-2 text-green-400">🔒</span>
                  SOC 2 Compliant
                </span>
                <span className="flex items-center">
                  <span className="mr-2 text-blue-400">🛡️</span>
                  Data Protected
                </span>
                <span className="flex items-center">
                  <span className="mr-2 text-yellow-400">⚡</span>
                  99.9% Uptime
                </span>
                <span className="flex items-center">
                  <span className="mr-2 text-purple-400">🌍</span>
                  Global Coverage
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.08); }
        }
        
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
      `}</style>
    </footer>
  );
};

// Social Media Icons
function LinkedIn({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      />
    </svg>
  );
}

function Twitter({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function YouTube({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

export default Footer;