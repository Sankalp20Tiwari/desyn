'use client'
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import MultiCursorSection from './components/MultiCursorSection';
import CommentSection from './components/CommentSection';
import ShapeCreationSection from './components/ShapeCreationSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import CTASection from './components/CTASection';
import AboutSection from './components/AboutSection';
import EmojiReactionsSection from './components/EmojiReactionSection';

const Index = () => {

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-background text-foreground overflow-hidden custom-cursor"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
      
        
        {/* Animated background mesh */}
        <div className="fixed inset-0 bg-mesh-gradient" />
        

        {/* All Sections */}
        <HeroSection />
        <MultiCursorSection />
        <CommentSection />
        <ShapeCreationSection />
        <EmojiReactionsSection />
        <AboutSection />
        <PricingSection />
        <TestimonialsSection />

        {/* Enhanced CTA Section */}
        <CTASection />

        {/* Enhanced Footer */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;