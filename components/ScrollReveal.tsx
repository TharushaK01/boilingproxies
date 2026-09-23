"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  yOffset = 50,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth custom easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
