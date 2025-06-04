import React from 'react';
import { motion } from 'framer-motion';

interface ContentImageProps {
  src: string;
  alt: string;
  delay?: number;
}

const ContentImage: React.FC<ContentImageProps> = ({ src, alt, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="overflow-hidden rounded-lg shadow-md aspect-video"
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full transition-transform hover:scale-105"
      />
    </motion.div>
  );
};

export default ContentImage;