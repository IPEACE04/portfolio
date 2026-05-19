"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/common/ProjectCard";
import { projectsData } from "@/data/projects";
import { useInView } from "react-intersection-observer";

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col items-center md:items-start"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          My Project
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl text-center md:text-left">
          A selection of my recent full-stack, data analytics, and AI projects, crafted with precision and modern technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
