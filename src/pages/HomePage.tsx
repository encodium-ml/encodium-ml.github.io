import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Users, Code, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/shared/Hero';
import ContentImage from '../components/shared/ContentImage';
import { CONTENT_IMAGES } from '../constants';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-primary-500" />,
      title: 'Expert-Crafted Curriculum',
      description: 'Courses designed by industry experts to provide relevant, practical machine learning skills.',
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: 'Personalized Learning',
      description: 'Small class sizes ensure individual attention and customized guidance for all students.',
    },
    {
      icon: <Code className="w-6 h-6 text-primary-500" />,
      title: 'Hands-On Projects',
      description: 'Apply your knowledge through real-world projects to build a compelling portfolio.',
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary-500" />,
      title: 'Industry Recognition',
      description: 'Gain skills that are in high demand across industries from tech to finance.',
    },
  ];

  return (
    <>
      <Hero
        title="Machine Learning Education for All"
        subtitle="Empowering students and professionals with the skills to build the AI-powered future"
        image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Welcome to Encodium</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Encodium is a specialized education center focused on machine learning and artificial intelligence. 
              Our mission is to make these powerful technologies accessible to everyone, from middle school students 
              to IT professionals.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-sm font-medium tracking-wider text-primary-600 uppercase">For Students</h3>
                <h2 className="mt-1 text-3xl font-bold">Start Your AI Journey Early</h2>
                <p className="mt-4 text-lg text-gray-700">
                  Designed for students in grades 8-10, our foundational machine learning course introduces 
                  key concepts in an engaging, accessible format. Build a strong foundation in this critical 
                  future skill.
                </p>
                <div className="mt-8">
                  <Link to="/student-classes" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700">
                    Learn more about student classes
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {CONTENT_IMAGES.slice(0, 2).map((image, index) => (
                <ContentImage 
                  key={index}
                  src={image.src}
                  alt={image.title}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <ContentImage 
                src={CONTENT_IMAGES[2].src} 
                alt={CONTENT_IMAGES[2].title}
              />
            </div>
            
            <div className="order-1 space-y-6 md:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-sm font-medium tracking-wider text-primary-600 uppercase">For Professionals</h3>
                <h2 className="mt-1 text-3xl font-bold">Advance Your IT Career</h2>
                <p className="mt-4 text-lg text-gray-700">
                  Our comprehensive 8-class program for IT professionals covers advanced machine learning 
                  techniques and practical applications. Enhance your skillset and open doors to new career 
                  opportunities.
                </p>
                <div className="mt-8">
                  <Link to="/adult-classes" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700">
                    Explore professional courses
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary-50 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold">Why Choose Encodium?</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our unique approach to machine learning education sets us apart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary-100 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/student-classes" className="btn btn-primary">
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;