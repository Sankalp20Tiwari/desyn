import React from 'react'
import { motion } from 'framer-motion';

interface FloatingShapeProps {
  children: React.ReactNode;
  className: string;
  delay?: number;
  duration?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ children, className, delay = 0, duration = 8 }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  >
    {children}
  </motion.div>
)
export default FloatingShape
