import React from 'react';
import { Target, Eye, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: Target },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Eye },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-shimmer">Digitiq Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 animate-fade-in-up delay-300">
            <p className="text-lg text-gray-700 leading-relaxed">
              Digitiq Technologies (OPC) Private Limited is a dynamic technology company committed to 
              delivering integrated, intelligent, and secure digital solutions for modern enterprises.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with the vision of bridging the gap between technology and business, we offer 
              end-to-end services that transform how businesses connect, operate, and grow in the digital age.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of experts combines cutting-edge technology with deep industry knowledge to 
              deliver solutions that are not just functional, but truly transformative.
            </p>
          </div>

          <div className="relative animate-fade-in-up delay-500">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover-lift group">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation First</h3>
                  <p className="text-gray-600 text-sm">Cutting-edge solutions for tomorrow's challenges</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover-lift mt-8 group">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Client-Centric</h3>
                  <p className="text-gray-600 text-sm">Your success is our primary focus</p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover-lift group">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Driven</h3>
                  <p className="text-gray-600 text-sm">Excellence in every project we deliver</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover-lift group">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Agile Approach</h3>
                  <p className="text-gray-600 text-sm">Fast, flexible delivery with continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover-lift animate-fade-in-up group"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 group-hover:rotate-12 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
              <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;