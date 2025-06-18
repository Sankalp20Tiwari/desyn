'use client'

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Heart, Check } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const EmojiReactionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    "One-click emoji reactions",
    "Custom reaction combinations", 
    "Real-time interaction feedback"
  ];

  const emojis = [
    { emoji: "❤️", delay: 0, size: "text-4xl" },
    { emoji: "😂", delay: 0.3, size: "text-3xl" },
    { emoji: "👍", delay: 0.6, size: "text-5xl" },
    { emoji: "😍", delay: 0.9, size: "text-3xl" },
    { emoji: "🔥", delay: 1.2, size: "text-4xl" },
    { emoji: "✨", delay: 1.5, size: "text-2xl" },
    { emoji: "💯", delay: 1.8, size: "text-3xl" },
    { emoji: "🎉", delay: 2.1, size: "text-4xl" }
  ];

  const floatingEmojis = ["😊", "🥰", "😎", "🤩", "😘"];

  return (
    <section ref={ref} className="relative z-10 section-padding bg-gradient-to-r from-blue-500/30 to-blue-300/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
            className="rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* <div className="aspect-video bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl" />
 
              <div className="relative z-10 grid grid-cols-4 gap-6 p-8">
                {emojis.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`${item.size} cursor-pointer select-none hover:scale-125 transition-transform`}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      scale: [1, 1.3, 1], 
                      rotate: [0, 10, -10, 0] 
                    } : {}}
                    transition={{ 
                      opacity: { duration: 0.6, delay: item.delay },
                      scale: { duration: 2, repeat: Infinity, delay: item.delay },
                      rotate: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: item.delay }
                    }}
                    whileHover={{ 
                      scale: 1.5, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.emoji}
                  </motion.div>
                ))}
              </div>
              

              {floatingEmojis.map((emoji, index) => (
                <motion.div
                  key={`floating-${index}`}
                  className="absolute text-2xl opacity-30"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`
                  }}
                  initial={{ opacity: 0, y: 50, scale: 0 }}
                  animate={isInView ? {
                    opacity: [0, 0.3, 0],
                    y: [-20, -100],
                    scale: [0, 1, 0],
                    rotate: [0, 360]
                  } : {}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.8,
                    ease: "easeOut"
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
              

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? {
                  scale: [0, 2, 0],
                  opacity: [0, 0.5, 0]
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 2,
                  ease: "easeOut"
                }}
              >
                <div className="w-32 h-32 border-4 border-pink-400/30 rounded-full" />
              </motion.div>
              

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                  style={{
                    top: `${20 + (i * 12)}%`,
                    left: `${15 + (i * 14)}%`
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? {
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3 + 1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div> */}
            <img src="https://www.cambridge.org/elt/blog/wp-content/uploads/2021/07/GettyImages-884378360.jpg" alt="" className='w-full h-full rounded-3xl'/>

            <motion.div 
              className="mt-6 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {["❤️", "😂", "👍"].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  <span className="text-xl">{emoji}</span>
                  <motion.span 
                    className="text-white font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {Math.floor(Math.random() * 50) + 10}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>   
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
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-300 p-2">
                <Heart className="w-4 h-4 mr-2" />
                Express Yourself
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent p-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Instant Emoji Reactions
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Express your feelings instantly with our rich emoji reaction system. 
              Connect with others through universal expressions of emotion.
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
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl flex items-center justify-center"
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
          

        </div>
      </div>
    </section>
  );
};

export default EmojiReactionsSection;