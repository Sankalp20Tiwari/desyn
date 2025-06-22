'use client'

import { motion } from 'framer-motion';
import { moogalatorFont } from '@/fonts/fontsExport';

const directions = [
  { x: -10, y: 100 },   // Left
  { x: 10, y: 0 },    // Right
  { x: 0, y: -100 },   // Top
  { x: 0, y: 100 },    // Bottom
  { x: -20, y: -100 } // Diagonal
];

const words = [
  { text: 'Crafting', gradient: 'bg-gradient-to-r from-white via-indigo-200 to-white' },
  { text: 'the', gradient: 'bg-gradient-to-r from-white via-indigo-200 to-white' },
  { text: 'future', gradient: 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400' },
  { text: 'of', gradient: 'bg-gradient-to-r from-white via-purple-200 to-white' },
  { text: 'design', gradient: 'bg-gradient-to-r from-white via-purple-200 to-white' }
];

export default function AnimatedHeading() {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8">
      {words.map((word, i) => (
        <motion.span
          key={word.text}
          initial={{ opacity: 0, ...directions[i % directions.length] }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: true, amount: 0.8 }}
          className={`block md:p-4 ${word.gradient} bg-clip-text text-transparent pb-3 ${moogalatorFont.className}`}
        >
          {word.text}
        </motion.span>
      ))}
    </h1>
  );
}
