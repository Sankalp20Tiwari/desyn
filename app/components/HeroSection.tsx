
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform,  useInView, MotionValue } from 'framer-motion';
import { 
  ArrowRight, Play, Sparkles, PenTool, 
  Layers, Zap,  Star, Circle, Square, Triangle, Hexagon,
   Palette, Type,
  LineChart,
  Shapes,
  Images,
} from 'lucide-react';
import ModernNavbar from './ModernNavbar';
import GridBackground from './GridBackground';
import ParticlesField from './ParticlesField';
import InteractiveElement from './InteractiveElement';
import FloatingShape from './FloatingShape';
import CustomCursor from './CustomCursor';
import {  superChargeFont } from '@/fonts/fontsExport';



interface MousePosition {
  x: number;
  y: number;
  relativeX?: number;
  relativeY?: number;
}

const HeroSection: React.FC = () => {

  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const y1: MotionValue<number> = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity: MotionValue<number> = useTransform(scrollY, [0, 300], [1, 0.8]);


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const relativeX = (e.clientX - rect.left - rect.width / 2) / 20;
        const relativeY = (e.clientY - rect.top - rect.height / 2) / 20;
        setMousePosition(prev => ({ ...prev, relativeX, relativeY }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const dragConstraints = { left: -50, right: 50, top: -50, bottom: 50 };

  return (
    <div className='relative'>
      <CustomCursor mousePosition={mousePosition} isHovering={isHovering} />
      
      <ModernNavbar />
      <motion.section 
        ref={containerRef}
        className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 overflow-hidden cursor-none"
        style={{ opacity }}
      >

      <GridBackground />
      <ParticlesField />
      
      <FloatingShape className="top-20 left-[10%] hidden sm:block" delay={0} duration={6}>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
            <Square className="w-8 h-8 text-purple-300" />
          </div>
        </FloatingShape>

      <FloatingShape className="top-96 left-[10%] hidden sm:block" delay={0} duration={6}>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
            <LineChart className="w-8 h-8 text-purple-300" />
          </div>
        </FloatingShape>
      <FloatingShape className="top-96 right-[10%] hidden sm:block" delay={0} duration={6}>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
            <Images className="w-8 h-8 text-red-300" />
          </div>
        </FloatingShape>
      <FloatingShape className="top-[30%] right-[25%] hidden sm:block" delay={0} duration={6}>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
            <Shapes className="w-8 h-8 text-red-300" />
          </div>
        </FloatingShape>

        <FloatingShape className="top-32 right-[15%] hidden sm:block" delay={1} duration={8}>
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center">
            <Circle className="w-6 h-6 text-cyan-300" />
          </div>
        </FloatingShape>

        <FloatingShape className="bottom-40 left-[8%] hidden sm:block" delay={2} duration={7}>
          <div className="w-14 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 backdrop-blur-sm border border-white/10 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <Triangle className="w-7 h-7 text-orange-300" />
          </div>
        </FloatingShape>

        <FloatingShape className="top-1/2 right-[8%] hidden sm:block" delay={3} duration={9}>
          <div className="w-12 h-14 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 backdrop-blur-sm border border-white/10 flex items-center justify-center" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
            <Hexagon className="w-6 h-6 text-emerald-300" />
          </div>
        </FloatingShape>

        <InteractiveElement icon={PenTool} className="top-24 left-[20%]" dragConstraints={dragConstraints} />
        <InteractiveElement icon={Type} className="top-48 right-[25%]" dragConstraints={dragConstraints} />
        <InteractiveElement icon={Palette} className="bottom-64 left-[15%]" dragConstraints={dragConstraints} />
        <InteractiveElement icon={Layers} className="bottom-48 right-[20%]" dragConstraints={dragConstraints} />


      <div className="relative z-10 px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: y1 }}
        >

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="inline-flex items-center mb-8 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md border-2 border-purple-500 rounded-full">
                  <Sparkles className="w-5 h-5 mr-3 text-purple-400 fill-purple-600 animate-pulse" />
                <span className="text-white font-medium">The future of collaborative design</span>
                  <Zap className="w-5 h-5 ml-3 text-pink-400 fill-pink-500" />
              </div>
            </motion.div>


          <motion.div className="mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl font-black leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="block "
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={`text-5xl sm:text-9xl px-8 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent ${superChargeFont.className}`}>
                  Design
                </span>
              </motion.div>
              
              <motion.div
                className="block  relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className={`bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent uppercase text-6xl md:text-8xl lg:text-9xl px-8 ${superChargeFont.className}` }
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  better
                </motion.span>
                
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${-20 + i * 10}%`
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 360],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  >
                    <Star className="w-4 h-4 text-pink-400" fill="currentColor" />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                className="block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={`text-white relative ${superChargeFont.className} text-5xl sm:text-9xl `}>
                  together
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </span>
              </motion.div>
            </motion.h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 sm:mb-1 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ y: y1 }}
          >
            The collaborative design platform that brings your team together in real-time. 
            Create, iterate, and ship faster with multiplayer editing, advanced tools, 
            and seamless workflow integration.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="group relative px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl text-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center">
                Start designing for free
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              className="group px-4 py-2 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-2xl text-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Watch the demo
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </motion.section>
    </div>
  );
};

export default HeroSection;