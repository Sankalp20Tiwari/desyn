'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

interface InteractiveElementProps {
  icon: React.ComponentType<{ className?: string }>;
  className: string;
  dragConstraints: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
}


const InteractiveElement: React.FC<InteractiveElementProps> = ({ icon: Icon, className, dragConstraints }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  return (
    <motion.div
      className={`absolute cursor-grab active:cursor-grabbing ${className}`}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      whileDrag={{ scale: 1.2, rotate: 15 }}
      whileHover={{ scale: 1.1 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      animate={!isDragging ? {
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      } : {}}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
        <Icon className="w-6 h-6 text-white" />
      </div>
    </motion.div>
  );
};
export default InteractiveElement
