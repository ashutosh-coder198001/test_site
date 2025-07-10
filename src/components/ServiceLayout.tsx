import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ children }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Shield className="w-8 h-8 text-blue-600 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-pulse group-hover:animate-spin"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">Digitiq Technologies</h1>
                <p className="text-xs text-gray-600">(OPC)</p>
              </div>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4 group">
              <div className="relative">
                <Shield className="w-8 h-8 text-blue-400 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors duration-300">Digitiq Technologies</h3>
                <p className="text-blue-300 text-sm">(OPC)</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Delivering integrated, intelligent, and secure digital solutions for modern enterprises.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                Cookie Policy
              </Link>
              <a href="mailto:info@digitiqtechnologies.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                Contact Us
              </a>
            </div>
            <div className="mt-6 text-gray-400 text-sm">
              <p>Plot No: 2, Laxaman Vihar, Industrial Area, Gurgaon – 122001</p>
              <p>Phone: +91 98992 13865 | Email: info@digitiqtechnologies.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceLayout;