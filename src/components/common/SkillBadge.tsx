"use client";

import { motion } from "framer-motion";
import { SkillBadgeProps } from "@/types";

export function SkillBadge({ name, icon, variant = "default", className = "" }: SkillBadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "filled":
        return "bg-white text-black";
      case "outline":
        return "bg-transparent border border-gray-600 text-gray-300";
      case "default":
      default:
        return "bg-gray-800 text-gray-200";
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-shadow cursor-default ${getVariantStyles()} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{name}</span>
    </motion.div>
  );
}
