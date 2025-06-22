import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {  Check } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { superChargeFont } from '@/fonts/fontsExport';
import Image from 'next/image';

const CommentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    "Contextual commenting on any element",
    "Threaded conversations and replies",
    "Resolve and archive feedback"
  ];

  const comments = [
    { text: "💬 Love this design!", color: "bg-cyan-500/90", delay: 0 },
    { text: "🎨 Try a different color", color: "bg-blue-500/90", delay: 1 },
    { text: "✨ This looks amazing!", color: "bg-purple-500/90", delay: 2 }
  ];

  return (
    <section ref={ref} className="relative z-10 section-padding bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1   rounded-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="border-2 border-cyan-500 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl shadow-cyan-500">
              <Image
                width={800}
                height={450}
                src="/comment.png" 
                alt="Comment system"
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Animated comment bubbles */}
              {comments.map((comment, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${comment.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
                  style={{
                    top: `${20 + index * 25}%`,
                    left: index % 2 === 0 ? '10%' : '60%'
                  }}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1, 
                    y: [0, -10, 0] 
                  } : {}}
                  transition={{ 
                    opacity: { duration: 0.6, delay: comment.delay },
                    scale: { duration: 0.6, delay: comment.delay },
                    y: { duration: 2, repeat: Infinity, delay: comment.delay }
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {comment.text}
                  <motion.div
                    className="absolute -bottom-1 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-current"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: comment.delay }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 text-xl bg-cyan-500/20 text-cyan-300 border-2  border-cyan-500 px-4 py-2 hover:bg-cyan-500/30 transition-colors">
                📝
                Contextual Feedback
              </Badge>
            </motion.div>
            
            <motion.h2 
              className={`text-6xl md:text-7xl font-bold mb-8 text-cyan-500 p-2 ${superChargeFont.className}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Smart Comment System
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Pin comments directly to design elements. Get precise feedback with 
              threaded conversations and emoji reactions.
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
                    className="w-12 h-12 bg-cyan-500/80 rounded-xl flex items-center justify-center"
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

export default CommentSection;