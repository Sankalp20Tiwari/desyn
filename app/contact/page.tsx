'use client';
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contact";
import { motion } from "framer-motion";
import { Mail, Send, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CustomCursor from "../components/CustomCursor";

interface MousePosition {
  x: number;
  y: number;
  relativeX?: number;
  relativeY?: number;
}


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

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



  return (
    <>
    <CustomCursor mousePosition={mousePosition} isHovering={isHovering} />
    <motion.section
      className="relative section-padding overflow-hidden custom-cursor"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects */}
      <div 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-20 w-72 h-72 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-20 w-56 h-56 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">

        <div className="top-0 left-8 w-16 h-16  absolute flex items-center justify-center shadow-lg z-20 ">
        <Link href="/" className="z-10 text-white hover:text-white transition-colors">
             <Home className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-2 shadow-lg" />
             <span className="text-sm text-white">Back to home</span>
          </Link>
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-300">Get in Touch</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
            Let&apos;s build something amazing
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Have a question, feedback, or want to explore a partnership? 
            We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl group-hover:from-white/10 transition-all duration-500" />
                <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={info.image}
                        alt={info.title}
                        width={32}
                        height={32}
                        className="w-10 h-10 object-contain"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
                      <p className="text-green-400 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl" />
            <div
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="text"
                  placeholder="Company (optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 resize-none"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <Button
                    type="submit"
                  className="relative w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-6 text-lg rounded-xl border-0 shadow-2xl shadow-green-500/25"
                >
                  <Send className="w-6 h-6 mr-2 inline-block" />
                  Send Message
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Contact;