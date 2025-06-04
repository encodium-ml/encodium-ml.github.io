import React from 'react';
import { Check, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { Course } from '../../types';
import { motion } from 'framer-motion';

interface CourseInfoProps {
  course: Course;
}

const CourseInfo: React.FC<CourseInfoProps> = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary-600">{course.title}</h2>
        <p className="text-lg text-gray-700">{course.description}</p>
      </div>

      {course.prerequisites && course.prerequisites.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Prerequisites</h3>
          <ul className="space-y-1">
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Check size={18} className="text-green-500" />
                <span>{prerequisite}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-2">
        <h3 className="text-xl font-medium">What You'll Learn</h3>
        <ul className="grid gap-2 md:grid-cols-2">
          {course.topics.map((topic, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Check size={18} className="flex-shrink-0 mt-1 text-primary-500" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-center p-4 space-x-3 bg-gray-100 rounded-lg">
          <Clock size={24} className="text-primary-600" />
          <div>
            <p className="font-medium">Duration</p>
            <p className="text-gray-700">{course.duration}</p>
          </div>
        </div>
        <div className="flex items-center p-4 space-x-3 bg-gray-100 rounded-lg">
          <DollarSign size={24} className="text-green-600" />
          <div>
            <p className="font-medium">Price</p>
            <p className="text-gray-700">{course.price}</p>
          </div>
        </div>
      </div>

      <div>
        <a
          href={course.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full btn btn-primary"
        >
          <span>Enroll Now</span>
          <ExternalLink size={18} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default CourseInfo;