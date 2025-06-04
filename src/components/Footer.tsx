import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <Cpu size={28} />
              <span className="text-xl font-display font-semibold">Encodium</span>
            </Link>
            <p className="max-w-xs text-gray-400">
              Empowering the next generation of AI experts through quality machine learning education.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-medium text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/student-classes" className="transition-colors hover:text-white">
                  Student Classes
                </Link>
              </li>
              <li>
                <Link to="/adult-classes" className="transition-colors hover:text-white">
                  Adult Classes
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="transition-colors hover:text-white">
                  Faculty
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-medium text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>contact@encodium.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>123 Tech Lane, Innovation City, 12345</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-medium text-white">Stay Updated</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 font-medium text-white transition-colors bg-primary-600 rounded-md hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Encodium. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;