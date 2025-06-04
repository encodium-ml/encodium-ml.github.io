import React from 'react';
import Hero from '../components/shared/Hero';
import CourseInfo from '../components/shared/CourseInfo';
import ContentImage from '../components/shared/ContentImage';
import CodeExample from '../components/shared/CodeExample';
import { ADULT_COURSE, CONTENT_IMAGES, CODE_EXAMPLES } from '../constants';

const AdultClassesPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Advanced Machine Learning for Professionals"
        subtitle="Take your IT career to the next level with cutting-edge AI skills"
        image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <CourseInfo course={ADULT_COURSE} />
            
            <div className="space-y-8">
              <h3 className="text-2xl font-medium">Program Overview</h3>
              <div className="space-y-4">
                <p>
                  Our professional machine learning program is designed for IT professionals looking to expand their 
                  skillset with practical AI and machine learning knowledge. The comprehensive curriculum covers 
                  both theoretical foundations and real-world applications.
                </p>
                <p>
                  Throughout the 8-class series, you'll build multiple projects that demonstrate your ability to 
                  solve complex problems using machine learning. These projects can be added directly to your 
                  portfolio to showcase your new skills to employers.
                </p>
                <p>
                  Classes are taught by industry professionals with real-world machine learning experience, 
                  ensuring you learn practical, applicable skills rather than just theory.
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
            <h2 className="text-3xl font-bold">Advanced Techniques You'll Master</h2>
            <p className="mt-4 text-lg text-gray-700">
              Here's an example of the type of code you'll be writing by the end of the program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Professional Applications</h3>
              <p>
                The skills you'll learn have immediate applications across industries, from finance and healthcare 
                to marketing and product development. Machine learning engineers are among the highest-paid 
                IT professionals, with salaries reflecting the specialized nature of the work.
              </p>
              <p>
                By the end of the course, you'll be comfortable implementing and deploying various types of 
                machine learning models, understanding their strengths and limitations, and selecting the right 
                approach for different business problems.
              </p>
              
              <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                <h4 className="font-medium text-primary-700">Program Details</h4>
                <ul className="mt-2 space-y-2">
                  <li>• 8 classes, comprehensive curriculum</li>
                  <li>• 90 minutes per class</li>
                  <li>• Total cost: $300 for the full program</li>
                  <li>• Evening and weekend options available</li>
                  <li>• Certificate of completion provided</li>
                </ul>
              </div>
            </div>
            
            <CodeExample 
              title={CODE_EXAMPLES[1].title} 
              code={CODE_EXAMPLES[1].code} 
            />
          </div>
          
          <div className="max-w-md mx-auto mt-12">
            <a
              href={ADULT_COURSE.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn btn-primary"
            >
              Enroll in Professional Program
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdultClassesPage;