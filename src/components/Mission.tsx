import React from 'react';
import { Target, Eye, Rocket, Globe } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Purpose</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Mission */}
          <div className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver future-proof, customized digital solutions that drive business efficiency, 
                innovation, and security in an ever-evolving tech landscape.
              </p>
              <div className="mt-8 space-y-4">
                {['Future-Proof Solutions', 'Business Efficiency', 'Innovation Focus', 'Security First'].map((item, index) => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="group">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a leading force in building India's digital backbone and expanding globally 
                by offering trustworthy, scalable, and smart ICT solutions.
              </p>
              <div className="mt-8 space-y-4">
                {['India\'s Digital Backbone', 'Global Expansion', 'Trustworthy Solutions', 'Smart ICT'].map((item, index) => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Innovation</h4>
            </div>
            <p className="text-gray-700">
              Constantly pushing boundaries with cutting-edge technology and creative solutions 
              that solve real-world business challenges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Global Impact</h4>
            </div>
            <p className="text-gray-700">
              Building solutions that not only serve local markets but have the potential 
              to make a global impact in the digital transformation journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;