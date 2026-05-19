"use client";

import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaEnvelope, FaArrowUp } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-black border-t border-gray-900 py-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex space-x-6 mb-8 text-gray-400">
          <a href="https://github.com/IPEACE04" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://facebook.com/po.roro.792?locale=th_TH" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="mailto:peerapat.cd@gmail.com" className="hover:text-white transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm mb-6 text-center">
          © {new Date().getFullYear()} Peerapat Chandaeng. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors focus:outline-none"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </motion.footer>
  );
}
