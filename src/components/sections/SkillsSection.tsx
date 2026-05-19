"use client";

import { motion } from "framer-motion";
import { SkillBadge } from "@/components/common/SkillBadge";
import { skillsData } from "@/data/skills";
import { useInView } from "react-intersection-observer";

export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { title: "Frontend & UI", skills: skillsData.frontend },
    { title: "Backend & Language", skills: skillsData.backend },
    { title: "Database", skills: skillsData.database },
    { title: "Data Analytics", skills: skillsData.dataAnalytics },
    { title: "AI & ML", skills: skillsData.ai },
    { title: "Tools & Software", skills: skillsData.tools },
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl">
          My toolbox for building robust, scalable, and premium digital solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: (idx * 0.1) + (skillIdx * 0.05) }}
                >
                  <SkillBadge name={skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
