"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaFacebook, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "CV", href: "/#CV" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only perform scroll spy logic if we are on the homepage
      if (pathname === "/") {
        const sections = navLinks.map(link => link.href.split('#')[1]).filter(Boolean);
        let current = "";
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && window.scrollY >= (element.offsetTop - 200)) {
            current = section;
          }
        }
        
        // Check if user has scrolled to the bottom of the page
        if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 100) {
          current = sections[sections.length - 1];
        }
        
        if (current) {
          setActiveSection(current);
        }
      } else if (pathname.startsWith("/projects")) {
        // If we are on a project page, hardcode the active section to "projects"
        setActiveSection("projects");
      } else if (pathname === "/resume") {
        // If we are on the resume page, hardcode the active section to "CV"
        setActiveSection("CV");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call it once on mount or route change to set the initial state correctly
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 rounded-full border ${
        isScrolled 
          ? "bg-[#0a0a0a]/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-4 px-8" 
          : "bg-transparent border-transparent py-5 px-8"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <Link href="/#home" className="text-2xl font-extrabold text-white tracking-tight hover:text-gray-300 transition-colors flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-base">PP</span>
          <span className="hidden sm:block">Peace Peerapat</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-white relative py-1 ${
                activeSection === link.href.split('#')[1] ? "text-white" : "text-gray-400"
              }`}
            >
              {link.name}
              {activeSection === link.href.split('#')[1] && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center space-x-4 text-gray-400">
          <a href="https://github.com/IPEACE04" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.facebook.com/po.roro.792" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaFacebook size={20} />
          </a>
          <a href="mailto:peerapat.cd@gmail.com" className="hover:text-white transition-colors">
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
        >
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === link.href.split('#')[1] ? "text-white" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-6 pt-4 border-t border-gray-800 text-gray-400">
              <a href="https://github.com/IPEACE04" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://www.facebook.com/po.roro.792" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="mailto:peerapat.cd@gmail.com" className="hover:text-white">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
