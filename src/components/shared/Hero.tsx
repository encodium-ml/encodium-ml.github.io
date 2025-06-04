import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative overflow-hidden bg-primary-900 text-white">
      {image && (
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt="Hero background" 
            className="object-cover w-full h-full opacity-20"
          />
          <div className="absolute inset-0 bg-primary-900/60" />
        </div>
      )}
      
      <div className="container relative pt-32 pb-16 md:pt-40 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-4xl font-bold md:text-6xl text-white">{title}</h1>
          <p className="text-xl leading-relaxed md:text-2xl text-primary-100">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;