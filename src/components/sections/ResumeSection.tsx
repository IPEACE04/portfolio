"use client";

import { motion } from "framer-motion";
import { FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export function ResumeSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="CV" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to dive deeper?
          </h2>
          <p className="text-gray-300 text-lg font-light max-w-2xl leading-relaxed">
            Explore my comprehensive professional journey, academic background, and detailed technical experience in my full CV.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 z-10">
          <Link
            href="/resume"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors shadow-lg"
            aria-label="Open CV"
          >
            <FaExternalLinkAlt />
            <span>Open CV</span>
          </Link>
          
          <motion.a
            href="/resume.pdf"
            download="Peerapat_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors shadow-lg border border-gray-700"
            aria-label="Download CV"
          >
            <FaFileDownload />
            <span>Download CV</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
