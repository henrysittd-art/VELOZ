"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 1] },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Contenedor de scroll-reveal. Anima sus <RevealItem> hijos en cascada
 * cuando la sección entra en viewport (una sola vez).
 */
export function Reveal({ children, className = "" }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item hijo de <Reveal>. Fade + subida sutil, respeta el stagger del padre.
 */
export function RevealItem({ children, className = "" }: RevealProps) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
