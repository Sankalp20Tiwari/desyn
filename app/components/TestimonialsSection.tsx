import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Star, Quote, Sparkles, Award, Users, TrendingUp, ExternalLink } from 'lucide-react';

// TypeScript interfaces
interface Avatar {
  initials: string;
  bgColor: string;
  textColor: string;
}

interface Stats {
  projects: string;
  rating: number;
  team: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: Avatar;
  gradient: string;
  accentColor: string;
  stats: Stats;
  companyLogo?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

interface CompanyLogo {
  name: string;
}

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

// Optimized Avatar Component with better visual design
const Avatar = React.memo<{ avatar: Avatar; name: string; gradient: string; size?: 'sm' | 'md' | 'lg' }>(({ 
  avatar, 
  name, 
  gradient, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-base',
    lg: 'w-16 h-16 text-lg'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-lg opacity-40`} />
      <div className={`relative ${sizeClasses[size]} rounded-full border-2 border-white/30 bg-gradient-to-br ${avatar.bgColor} flex items-center justify-center font-bold ${avatar.textColor} shadow-2xl backdrop-blur-sm`}>
        {avatar.initials}
      </div>
      <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
});

Avatar.displayName = 'Avatar';


// Company Logos with better animations
const CompanyLogos = React.memo<{ isInView: boolean }>(({ isInView }) => {
  const companyLogos = useMemo<CompanyLogo[]>(() => [
    { name: "Stripe" },
    { name: "Airbnb" },
    { name: "Notion" },
    { name: "Figma" },
    { name: "Linear" },
    { name: "Vercel" }
  ], []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-16 sm:mb-20"
    >
      {companyLogos.map((company, index) => (
        <motion.div
          key={company.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
          whileHover={{ scale: 1.05, opacity: 0.9 }}
          className="px-4 py-2 text-white/50 font-medium text-sm sm:text-base hover:text-white/70 transition-colors duration-200"
        >
          {company.name}
        </motion.div>
      ))}
    </motion.div>
  );
});

CompanyLogos.displayName = 'CompanyLogos';

// Enhanced Stats Section
const StatsSection = React.memo<{ isInView: boolean }>(({ isInView }) => {
  const stats = useMemo<StatItem[]>(() => [
    { icon: Users, label: "Active Users", value: "100k+", color: "purple" },
    { icon: Award, label: "5-Star Reviews", value: "50k+", color: "pink" },
    { icon: TrendingUp, label: "Projects Created", value: "2M+", color: "cyan" }
  ], []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="text-center p-6 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-2xl border border-white/10 rounded-2xl group hover:border-white/20 transition-all duration-300 shadow-2xl"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.15 }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 flex items-center justify-center shadow-lg group-hover:shadow-${stat.color}-500/25`}
          >
            <stat.icon className="w-7 h-7 text-white" />
          </motion.div>
          <motion.h3
            className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"
          >
            {stat.value}
          </motion.h3>
          <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
});

StatsSection.displayName = 'StatsSection';

// Premium Star Rating Component
const StarRating = React.memo<{ rating: number; showRating?: boolean }>(({ rating, showRating = false }) => (
  <div className="flex items-center justify-center gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: i * 0.05 }}
        whileHover={{ scale: 1.2, rotate: 180 }}
      >
        <Star className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
      </motion.div>
    ))}
    {showRating && (
      <span className="ml-2 text-sm text-slate-300 font-medium">{rating}</span>
    )}
  </div>
));

StarRating.displayName = 'StarRating';

// Enhanced Testimonial Card with premium UI
const TestimonialCard = React.memo<{
  testimonial: Testimonial;
  index: number;
  isInView: boolean;
}>(({ testimonial, index, isInView }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        transition: { duration: 0.3, type: "spring", stiffness: 400 }
      }}
      className="group h-full"
    >
      <div className="relative h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/10 rounded-3xl p-8 overflow-hidden group-hover:border-white/20 transition-all duration-500 shadow-2xl group-hover:shadow-purple-500/10">
        
        {/* Dynamic Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${testimonial.gradient} blur-xl opacity-20`} />
        </div>

        {/* Quote Icon with better positioning */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        >
          <Quote className="w-16 h-16 text-white" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Company Badge */}
          <div className="flex items-center justify-between mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${testimonial.gradient} bg-opacity-10 backdrop-blur-xl border border-white/10 rounded-full`}
            >
              <div className="w-2 h-2 bg-white rounded-full opacity-60" />
              <span className="text-sm font-medium text-white/80">{testimonial.company}</span>
            </motion.div>
            <StarRating rating={testimonial.stats.rating} showRating />
          </div>

          {/* Testimonial Content */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="text-lg text-white/90 leading-relaxed mb-8 flex-grow font-light italic group-hover:text-white transition-colors duration-300"
          >
            "{testimonial.content}"
          </motion.p>

          {/* Author Section with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="flex items-center gap-4 pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300"
          >
            <Avatar 
              avatar={testimonial.avatar}
              name={testimonial.name}
              gradient={testimonial.gradient}
              size="md"
            />
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {testimonial.name}
                </h4>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-white/60" />
                </motion.div>
              </div>
              
              <p className="text-slate-300 text-sm mb-3 group-hover:text-slate-200 transition-colors duration-300">
                {testimonial.role}
              </p>
              
              {/* Enhanced Stats */}
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                  <TrendingUp className="w-3 h-3" />
                  {testimonial.stats.projects}
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                  <Users className="w-3 h-3" />
                  {testimonial.stats.team}
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

// Main Component
const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Optimized scroll transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Memoized testimonials data with enhanced content
  const testimonials = useMemo<Testimonial[]>(() => [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Lead Designer",
      company: "Stripe",
      content: "Desyn has revolutionized our design workflow. The real-time collaboration features are absolutely game-changing for our team. We've increased our productivity by 300% and our design quality has never been better.",
      avatar: {
        initials: "SC",
        bgColor: "from-violet-500 to-purple-600",
        textColor: "text-white"
      },
      gradient: "from-violet-600 via-purple-600 to-pink-600",
      accentColor: "violet",
      stats: { projects: "2.3k+", rating: 4.9, team: "Design Team" }
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Creative Director",
      company: "Airbnb",
      content: "The intuitive interface and powerful features make Desyn our go-to tool for all design projects. It's like Figma, but elevated to the next level with AI-powered suggestions that actually understand our brand.",
      avatar: {
        initials: "MJ",
        bgColor: "from-cyan-500 to-blue-600",
        textColor: "text-white"
      },
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      accentColor: "cyan",
      stats: { projects: "1.8k+", rating: 5.0, team: "Creative Team" }
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Product Designer",
      company: "Notion",
      content: "Finally, a design tool that truly understands collaborative workflow. The real-time features and AI assistance have transformed how we approach design challenges. Our team velocity has doubled since switching.",
      avatar: {
        initials: "ER",
        bgColor: "from-orange-500 to-red-500",
        textColor: "text-white"
      },
      gradient: "from-orange-500 via-red-500 to-pink-500",
      accentColor: "orange",
      stats: { projects: "3.1k+", rating: 4.8, team: "Product Team" }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Design Systems Lead",
      company: "Linear",
      content: "Desyn's component system and design tokens integration is phenomenal. We've built our entire design system here and the developer handoff process is seamless. It's everything we wished Figma could be.",
      avatar: {
        initials: "DK",
        bgColor: "from-emerald-500 to-teal-600",
        textColor: "text-white"
      },
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      accentColor: "emerald",
      stats: { projects: "1.5k+", rating: 4.9, team: "Systems Team" }
    },
    {
      id: 5,
      name: "Aria Patel",
      role: "UX Director",
      company: "Vercel",
      content: "The prototyping capabilities are incredibly advanced. We can create complex interactions and micro-animations that actually match our final product. The learning curve was minimal, but the impact was massive.",
      avatar: {
        initials: "AP",
        bgColor: "from-rose-500 to-pink-600",
        textColor: "text-white"
      },
      gradient: "from-rose-600 via-pink-600 to-purple-600",
      accentColor: "rose",
      stats: { projects: "2.7k+", rating: 5.0, team: "UX Team" }
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Senior Product Designer",
      company: "Figma",
      content: "Even as someone who helped build Figma, I'm impressed by what Desyn has achieved. The AI features are thoughtfully implemented and actually enhance creativity rather than replace it. This is the future of design tools.",
      avatar: {
        initials: "JW",
        bgColor: "from-indigo-500 to-purple-600",
        textColor: "text-white"
      },
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      accentColor: "indigo",
      stats: { projects: "4.2k+", rating: 4.8, team: "Product Team" }
    }
  ], []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden py-16 sm:py-24"
    >
      {/* Enhanced Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-40"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </motion.div>



      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced Header Section */}
        <motion.div
          style={{ y: headerY }}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/15 to-pink-500/15 backdrop-blur-2xl border border-white/20 rounded-full px-6 py-3 mb-8 shadow-2xl"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              Loved by 100k+ creators
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
              Trusted by the
            </span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              best creators
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            Join thousands of designers and teams at top companies who rely on Desyn 
            for their most important design work. Experience the future of collaborative design.
          </motion.p>
        </motion.div>

        {/* Company Logos */}
        <CompanyLogos isInView={isInView} />

        {/* Grid Layout for Testimonial Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <StatsSection isInView={isInView} />
      </div>
    </section>
  );
};

export default TestimonialsSection;