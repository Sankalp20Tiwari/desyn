'use client'

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {  Check } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { superChargeFont } from '@/fonts/fontsExport';
import Image from 'next/image';

const ShapeCreationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    "Vector shapes with smart snapping",
    "Pressure-sensitive drawing", 
    "Advanced bezier curve tools"
  ];

  // const shapes = [
  //   { className: "w-12 h-12 bg-orange-500/80 rounded-full", delay: 0 },
  //   { className: "w-8 h-12 bg-red-500/80 rounded", delay: 0.5 },
  //   { className: "w-10 h-10 bg-yellow-500/80 rounded-xl", delay: 1 },
  //   { className: "w-6 h-16 bg-green-500/80 rounded-full", delay: 1.5 },
  //   { className: "w-14 h-8 bg-blue-500/80 rounded-lg", delay: 2 }
  // ];

  return (
    <section ref={ref} className="relative z-10 section-padding bg-gradient-to-r from-orange-500/5 to-red-500/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 text-xl bg-orange-500/20 text-orange-300 border-2 border-orange-500/30 px-4 py-2 hover:bg-orange-500/30 transition-colors">
                🛠️
                Creative Tools
              </Badge>
            </motion.div>
            
            <motion.h2 
              className={`text-6xl md:text-7xl font-bold mb-8 text-orange-500 p-2 ${superChargeFont.className}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Infinite Shapes & Drawing
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Create any shape you can imagine. From basic geometries to complex illustrations 
              with our advanced drawing and shape tools.
            </motion.p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Check className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-white text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-morphism  rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="aspect-video   rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl shadow-orange-500 border-2 border-orange-500">
              <Image
                width={800}
                height={450}
                src="/shappes.png" 
                alt="Shape creation tools"
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Animated shapes */}
              {/* {shapes.map((shape, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${shape.className}`}
                  style={{
                    top: `${15 + (index * 15)}%`,
                    left: `${10 + (index * 15)}%`
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: [1, 1.2, 1], 
                    rotate: [0, 360, 0] 
                  } : {}}
                  transition={{ 
                    opacity: { duration: 0.6, delay: shape.delay },
                    scale: { duration: 2, repeat: Infinity, delay: shape.delay },
                    rotate: { duration: 4, repeat: Infinity, ease: "linear", delay: shape.delay }
                  }}
                  whileHover={{ scale: 1.3 }}
                />
              ))} */}
              
              {/* Drawing path animation */}
                {/* <motion.svg
                  className="absolute inset-0 w-full h-full"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 3, delay: 1 }}
                >
                  <motion.path
                    d="M 100 200 Q 200 100 300 200 T 500 200"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="3"
                    fill="transparent"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 3, delay: 1 }}
                  />
                </motion.svg> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShapeCreationSection;