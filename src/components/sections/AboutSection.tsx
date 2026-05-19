"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/data/about";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="w-full md:w-5/12 flex justify-center relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-500 rounded-full blur-[100px] opacity-20 transform scale-90"></div>
          
          <div className="relative w-full max-w-xs md:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={aboutData.image}
                alt="Peerapat Chandaeng"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full md:w-7/12 text-center md:text-left relative z-10"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-white"
          >
            {aboutData.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 font-light"
          >
            {aboutData.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
