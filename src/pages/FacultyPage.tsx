import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/shared/Hero';
import { TEACHERS } from '../constants';
import { Award, BookOpen, Briefcase, PenTool } from 'lucide-react';

const FacultyPage: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(TEACHERS[0]);

  const teacherCategories = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Education',
      items: ['M.S. in Computer Science with focus on Machine Learning'],
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Certifications',
      items: ['Certified TensorFlow Developer'],
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Experience',
      items: [
        '5+ years experience in data science and ML engineering',
        'Former instructor at leading technology bootcamp',
        'Industry experience with major tech companies',
      ],
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: 'Publications',
      items: ['Published research in neural network optimization'],
    },
  ];

  return (
    <>
      <Hero 
        title="Meet Our Faculty"
        subtitle="Learn from experienced industry professionals"
        image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold">Our Expert Instructors</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our instructors bring real-world experience and academic expertise to create 
              an engaging, practical learning environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src={selectedTeacher.image} 
                alt={selectedTeacher.name}
                className="object-cover w-full h-full" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold">{selectedTeacher.name}</h3>
                <p className="mt-2 text-xl text-primary-600">Machine Learning Instructor</p>
              </div>
              
              <div className="space-y-8">
                {teacherCategories.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-full">
                        {category.icon}
                      </div>
                      <h4 className="text-lg font-medium">{category.title}</h4>
                    </div>
                    <ul className="pl-10 space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="list-disc text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Teaching Philosophy</h2>
            <div className="mt-8 space-y-6 text-left md:text-center">
              <p className="text-lg">
                At Encodium, we believe that the best learning happens through a combination of 
                solid theoretical foundations and hands-on practical application. Our instructors 
                are committed to creating an inclusive, supportive environment where students can 
                explore complex concepts at their own pace.
              </p>
              <p className="text-lg">
                We focus on developing not just technical skills, but also the problem-solving 
                mindset that allows our students to apply machine learning principles to new 
                and unfamiliar challenges. This approach prepares them for real-world success, 
                whether they're pursuing academic interests or professional advancement.
              </p>
              <p className="text-lg">
                Our faculty regularly updates the curriculum to reflect the latest developments 
                in this rapidly evolving field, ensuring students learn relevant, current techniques 
                and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyPage;