import React from 'react'
import { motion } from 'framer-motion';


interface MousePosition {
  x: number;
  y: number;
}

interface CustomCursorProps {
  mousePosition: MousePosition;
  isHovering: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ mousePosition, isHovering }) => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-40"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          delay: 0.1
        }}
      >
        <div className="w-full h-full border-2 border-white/50 rounded-full" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-30"
        style={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        animate={{
          scale: isHovering ? 0.8 : 1,
          opacity: isHovering ? 0.3 : 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm" />
      </motion.div>
    </>
  );
};


export default CustomCursor
