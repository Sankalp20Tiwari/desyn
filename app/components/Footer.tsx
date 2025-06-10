import React from 'react'
import { motion } from 'framer-motion';
import { Globe, Palette, Shield } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
<motion.footer 
          className="relative z-10 border-t border-white/10 py-16 px-6 md:px-12 lg:px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image 
                      src="/logo.png" 
                      alt="Desyn Logo" 
                      width={32} 
                      height={32} 
                      className="object-contain" 
                    />
                  </motion.div>
                  <span className="text-2xl font-bold text-white">Desyn</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  The next-generation collaborative design platform for modern creators.
                </p>
                <div className="flex space-x-4">
                  {[Globe, Shield, Palette].map((Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {[
                { title: "Product", links: ["Features", "Pricing", "Demo", "Updates"] },
                { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
                { title: "Support", links: ["Help Center", "Community", "Privacy", "Terms"] }
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    {section.links.map((link, linkIndex) => (
                      <motion.li 
                        key={link}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <a href="#" className="hover:text-white transition-colors">{link}</a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-muted-foreground">© {new Date().getFullYear()} Desyn. All rights reserved.</p>
              <p className="text-muted-foreground mt-4 md:mt-0">Built with ❤️ for designers</p>
            </motion.div>
          </div>
        </motion.footer>
  )
}

export default Footer
