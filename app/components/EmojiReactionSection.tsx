'use client'

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {  Check } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { superChargeFont } from '@/fonts/fontsExport';



const EmojiReactionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    "One-click emoji reactions",
    "Custom reaction combinations", 
    "Real-time interaction feedback"
  ];


  return (
    <section ref={ref} className="relative z-10 section-padding bg-gradient-to-r from-blue-500/30 to-blue-300/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
            className="rounded-3xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className=" border-2 border-blue-500 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl shadow-blue-500">
            <img src="https://www.cambridge.org/elt/blog/wp-content/uploads/2021/07/GettyImages-884378360.jpg" alt="" className='w-full h-full rounded-3xl' loading='lazy'/>
            </div>

            <motion.div 
              className="mt-6 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {["❤️", "😍", "👍","😍","👀"].map((emoji, index) => (
                  <span className="text-xl" key={index}>{emoji}</span>
              ))}
            </motion.div>
          </motion.div>   


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='order-1 lg:order-2 flex flex-col justify-center'
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 text-xl bg-blue-500/20 text-blue-300 border-2 border-blue-300 py-2 px-4 hover:bg-blue-500/30 transition-colors ">
                ❤️
                Express Yourself
              </Badge>
            </motion.div>
            
            <motion.h2 
              className={`text-6xl md:text-7xl font-bold mb-8 text-blue-600 ${superChargeFont.className}`}
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