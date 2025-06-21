'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {  Check,  MousePointer2 } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { superChargeFont } from '@/fonts/fontsExport';
import Image from 'next/image';


const MultiCursorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    "Live cursor tracking with user avatars",
    "Instant reactions and emoji feedback", 
    "Built-in voice and video chat"
  ];

  return (
    <section ref={ref} className="relative z-10 section-padding bg-gradient-to-r from-purple-500/10 to-pink-500/5">
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
              <Badge className="mb-6 text-xl  bg-purple-500/20 text-purple-300 border-2 border-purple-500 px-4 py-2 hover:bg-purple-500/30 transition-colors">
                🖱️
                Real-time Collaboration
              </Badge>
            </motion.div>
            
            <motion.h2 
              className={`text-6xl md:text-7xl font-bold mb-8 text-pink-500 ${superChargeFont.className}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Multi Cursors & Live Chat
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              See everyone&apos;s cursor in real-time, chat instantly, and react with emojis. 
              Collaborate like never before with our advanced multiplayer features.
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
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
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
            className="glass-morphism  rounded-3xl w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <Image
                width={800}
                height={450}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop" 
                alt="Multi-cursor collaboration"
                className="w-full h-full object-cover rounded-2xl"
              />
             
              {/* Animated cursors */}
              <motion.div
                className="absolute top-8 left-8 w-4 h-4  rounded-full"
                animate={{ 
                  x: [0, 100, 50, 150, 0],
                  y: [0, 50, 100, 20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <MousePointer2 
                  className="w-6 h-6 text-red-500 fill-red-500"
                />
              </motion.div>
              <motion.div
                className="absolute top-12 right-12 w-4 h-4 rounded-full"
                animate={{ 
                  x: [0, -80, -40, -120, 0],
                  y: [0, 60, 120, 30, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <MousePointer2 
                  className="w-6 h-6 text-blue-500 fill-blue-500"
                />

              </motion.div>
              <motion.div
                className="absolute bottom-8 left-1/2 w-4 h-40 rounded-full"
                animate={{ 
                  x: [0, -60, 60, -30, 0],
                  y: [0, -40, -80, -20, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <MousePointer2 
                  className="w-6 h-6 text-green-500 fill-green-500"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiCursorSection;