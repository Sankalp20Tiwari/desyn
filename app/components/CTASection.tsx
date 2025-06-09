import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Users } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  const floatingElements = [
    { icon: Sparkles, delay: 0, x: -20, y: -30 },
    { icon: Zap, delay: 0.2, x: 30, y: -20 },
    { icon: Users, delay: 0.4, x: -15, y: 25 },
  ];

  return (
    <motion.section
      className="relative z-10 section-padding overflow-hidden bg-gradient-to-br from-purple-900 to-pink-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Design Elements */}
      {floatingElements.map((element, index) => (
<motion.div
  key={index}
  className="absolute hidden lg:block"
  style={{
    left: `${20 + index * 25}%`,
    top: `${30 + index * 15}%`,
  }}
  initial={{ opacity: 0, scale: 0 }}
  whileInView={{ opacity: 0.6, scale: 1 }}
  viewport={{ once: true }}
  animate={{
    y: [0, -10, 0],
    x: [0, 5, 0],
  }}
  transition={{
    // Initial entrance animation
    duration: 0.8, 
    delay: element.delay,
    type: "spring",
    stiffness: 100,
    // Floating animation for y and x
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    },
    x: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  }}
>
  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
    <element.icon className="w-8 h-8 text-purple-300" />
  </div>
</motion.div>
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative">
        {/* Pre-headline */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">Join 50,000+ designers</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Design
          </span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-4">
            without limits
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The future of collaborative design is here. Create, prototype, and ship faster than ever 
          with <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium">Desyn</span>'s 
          powerful design system.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-16 py-8 text-xl rounded-2xl border-0 shadow-2xl shadow-purple-500/25"
            >
              <Link href='/app'>
              Start designing free
              </Link>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Free 14-day trial</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <span>✦</span>
            <span>No credit card required</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <span>⚡</span>
            <span>Setup in 2 minutes</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </motion.section>
  );
};

export default CTASection;