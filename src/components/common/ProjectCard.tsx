"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" as const },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      whileTap="tap"
      className="h-full"
    >
      <Link href={`/projects/${project.id}`} className="group flex flex-col bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(255,255,255,0.05)]">
        {/* Project Image */}
        <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-white/10 to-transparent p-4 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-700"></div>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-6 drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Project Details */}
        <div className="p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
          <p className="text-gray-300 text-sm md:text-base mb-8 flex-grow font-light leading-relaxed">{project.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-white/5 text-gray-200 text-xs font-medium rounded-full border border-white/10 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
