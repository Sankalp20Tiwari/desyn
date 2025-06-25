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
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50  text-5xl"
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
        🪄
      </motion.div>
      


    </>
  );
};


export default CustomCursor
