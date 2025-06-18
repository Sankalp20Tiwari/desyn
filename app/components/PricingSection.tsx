'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Check } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { pricingPlans } from '@/data/pricing';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });


  return (
    <section ref={ref} id="pricing" className="relative z-10 section-padding">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 px-4 md:px-0"
        >
          <Badge className="mb-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white border-white/20 h-8">
            <Crown className="w-4 h-4 mr-2" />
            Simple Pricing
          </Badge>
          
          <motion.h2 
            className="text-6xl p-2 md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose your plan
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Start free and upgrade as your team grows. All plans include our core collaboration features.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:gap-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card 
                className={`glass-morphism p-8 relative group ${plan.popular ? 'ring-2 ring-purple-500 scale-110 shadow-2xl shadow-purple-500 ' : ''}`}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 md:left-[150px] left-[110px] z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 2 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      Coming Soon
                    </Badge>
                  </motion.div>
                )}
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="mb-4">
                  <motion.span 
                    className="text-4xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    {plan.price}
                  </motion.span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-8">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + featureIndex * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                      : 'bg-white/10 hover:bg-white/20'
                    } text-white border-0`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;