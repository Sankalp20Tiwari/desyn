import {  Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/data/navbar';
import { moogalatorFont } from '@/fonts/fontsExport';

const ModernNavbar:React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-transparent backdrop-blur-3xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="w-10 h-10  rounded-xl flex items-center justify-center"
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Image
               src={"/logo.png"}
                alt="Logo"
                width={32}
                height={32}
              />
            </motion.div>
            <span className={`text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent ${moogalatorFont.className}`}>
              Desyn
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="group relative text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            > 
            <Link href="/app">
              Get Started
            </Link>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-white/80 hover:text-white py-3 border-b border-white/10 last:border-b-0"
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            <motion.button
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/app">
              Get Started
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default ModernNavbar
