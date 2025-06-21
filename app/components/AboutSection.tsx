import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight,
  Star,
  ChevronDown,
  WandIcon,
} from 'lucide-react';
import Image from 'next/image';
import { features, stats, values } from '@/data/about';
import { FloatingOrbStyle, MousePosition, VisibilityState } from '@/types/type';
import AnimatedHeading from './AnimatedHeading';



const AboutSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const section = sectionRef.current;
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll reveals
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        setIsVisible(prev => ({
          ...prev,
          [target.dataset.reveal!]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '-50px'
    });

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `
      }}
      id='about'

    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(12)].map((_, i) => {
          const orbStyle: FloatingOrbStyle = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, ${
              ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'][i % 5]
            }, transparent)`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          };
          
          return (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={orbStyle}
            />
          );
        })}
        
        {/* Gradient Meshes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              left: `${mousePosition.x * 0.02}%`,
              top: `${mousePosition.y * 0.02}%`,
              transform: 'translate(-50%, -50%)',
              animationDuration: '4s'
            } as React.CSSProperties}
          />
          <div 
            className="absolute w-64 h-64 rounded-full blur-3xl animate-pulse"
            style={{
              background: 'linear-gradient(225deg, #ec4899, #10b981)',
              right: `${(100 - mousePosition.x) * 0.02}%`,
              bottom: `${(100 - mousePosition.y) * 0.02}%`,
              transform: 'translate(50%, 50%)',
              animationDelay: '2s',
              animationDuration: '6s'
            } as React.CSSProperties}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div 
          className={`text-center mb-32 transition-all duration-1000 transform ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          data-reveal="hero"
        >

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border-2 border-purple-500 backdrop-blur-sm mb-8 group hover:scale-105 transition-all duration-300">
            <WandIcon className="w-5 h-5 text-yellow-400" />
            <span className=" font-bold text-white">
              About Desyn 
            </span>
          </div>
          
          {/* Main Heading */}
          {/* <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 ">
            <span className={`block md:p-4 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent pb-3 ${moogalatorFont.className}` }>
              Crafting 
            </span>
            <span className={`block md:p-4 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent pb-3 ${moogalatorFont.className}` }>
             the
            </span>
            <span className={`block md: p-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent pb-3 ${moogalatorFont.className}`}>
                future
            </span>
            <span className={`block md:p-4  bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent  pb-3 ${moogalatorFont.className}`}>
              of
            </span>
            <span className={`block md:p-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-3 ${moogalatorFont.className}`}>
              design
            </span>
          </h1>
           */}

           <AnimatedHeading />
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed mb-12">
            We&apos;re building more than just a design tool. We&apos;re creating a platform that{' '}
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-semibold">
              empowers creativity
            </span>{' '}
            and transforms how teams collaborate on digital experiences.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-slate-300 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16">
            <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
          </div>
        </div>

        {/* Stats Section */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 transition-all duration-1000 transform ${
            isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          data-reveal="stats"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveCard(`stat-${index}`)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ 
                animationDelay: `${stat.delay}s`,
                transform: activeCard === `stat-${index}` ? 'scale(1.05) translateY(-10px)' : 'scale(1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              } as React.CSSProperties}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              {/* Card */}
              <div className="relative  backdrop-blur-xl  md:p-8 p-0 text-center group-hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform rotate-45 scale-150" />
                </div>
                
                {/* Icon */}
                <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
                  <stat.icon className="w-10 h-10 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                </div>
                
                {/* Number */}
                <div className={`text-5xl lg:text-6xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500`}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <p className="text-slate-300 text-lg font-semibold">{stat.label}</p>
                
                {/* Floating Stars */}
                {activeCard === `stat-${index}` && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        className="absolute w-4 h-4 text-yellow-300 animate-ping"
                        style={{
                          top: `${20 + i * 15}%`,
                          right: `${10 + i * 10}%`,
                          animationDelay: `${i * 0.2}s`
                        } as React.CSSProperties}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div 
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 transform ${
            isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          data-reveal="values"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveCard(`value-${index}`)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ 
                animationDelay: `${value.delay}s`,
                transform: activeCard === `value-${index}` ? 'scale(1.02) translateY(-8px)' : 'scale(1)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              } as React.CSSProperties}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.borderColor} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700`} />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-10 group-hover:border-white/20 transition-all duration-500 overflow-hidden h-full">
                {/* Background Mesh */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-20 h-20 mb-8 rounded-2xl  flex items-center justify-center group-hover:scale-110  transition-all duration-500 relative`}>
                    {value.image &&
                      <Image
                        width={80}
                        height={80}
                        src={value.image} 
                        alt={value.title} 
                        className="w-20 h-20 object-contain"
                      />           
}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.borderColor} blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-500">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                    {value.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${value.borderColor} transform origin-left transition-transform duration-1000 ${
                        activeCard === `value-${index}` ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-32 transition-all duration-1000 transform ${
            isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          data-reveal="cta"
        >
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-75 animate-pulse" />
            <button className="relative px-12 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl text-white text-xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
              Start Creating Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;