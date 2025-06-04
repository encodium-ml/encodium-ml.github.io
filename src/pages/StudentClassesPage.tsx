import React from 'react';
import Hero from '../components/shared/Hero';
import CourseInfo from '../components/shared/CourseInfo';
import ContentImage from '../components/shared/ContentImage';
import CodeExample from '../components/shared/CodeExample';
import { STUDENT_COURSE, CONTENT_IMAGES, CODE_EXAMPLES } from '../constants';

const StudentClassesPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Machine Learning for Students"
        subtitle="Grades 8-10 | Perfect for curious minds ready to explore AI"
        image="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <CourseInfo course={STUDENT_COURSE} />
            
            <div className="space-y-8">
              <h3 className="text-2xl font-medium">What to Expect</h3>
              <div className="space-y-4">
                <p>
                  Our student-focused machine learning course is designed to make complex concepts accessible and 
                  engaging. Through a combination of theory and hands-on practice, students will develop a solid 
                  understanding of the foundational principles that power modern AI systems.
                </p>
                <p>
                  Classes are limited to small sizes to ensure each student receives personalized attention. All 
                  materials and resources are provided, and no prior programming experience is required - just 
                  bring your curiosity and enthusiasm!
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {CONTENT_IMAGES.map((image, index) => (
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
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold">Sample Course Materials</h2>
            <p className="mt-4 text-lg text-gray-700">
              Here's a glimpse of what students will be working with during the course.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <CodeExample 
              title={CODE_EXAMPLES[0].title} 
              code={CODE_EXAMPLES[0].code} 
            />
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Learning Approach</h3>
              <p>
                We believe in a practical, hands-on approach to learning. Students will work on real coding 
                examples like the one shown here, starting with the basics and gradually building more 
                complex models.
              </p>
              <p>
                By the end of the course, students will have built several simple machine learning models 
                and understand the mathematics behind them. This provides an excellent foundation for 
                future studies in computer science, data science, or AI.
              </p>
              
              <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                <h4 className="font-medium text-primary-700">Course Details</h4>
                <ul className="mt-2 space-y-2">
                  <li>• Classes held weekly</li>
                  <li>• Duration: 1 hour per class</li>
                  <li>• Cost: $20 per class</li>
                  <li>• Materials provided</li>
                  <li>• Flexible scheduling available</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="max-w-md mx-auto mt-12">
            <a
              href={STUDENT_COURSE.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn btn-primary"
            >
              Register for Student Classes
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentClassesPage;