import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="w-8 h-8 text-blue-600" />
                <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Digitiq Technologies</h1>
                <p className="text-xs text-gray-600">OPC Private Limited</p>
              </div>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Digitiq Technologies</h3>
                <p className="text-blue-300 text-sm">OPC Private Limited</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Delivering integrated, intelligent, and secure digital solutions for modern enterprises.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="mailto:info@digitiqtech.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceLayout;