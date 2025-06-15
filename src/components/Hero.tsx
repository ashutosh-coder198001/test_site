import React from 'react';
import { ArrowDown, Zap, Globe, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Globe className="absolute top-20 right-20 w-8 h-8 text-blue-300/30 animate-bounce delay-300" />
        <Shield className="absolute bottom-32 left-16 w-6 h-6 text-purple-300/30 animate-bounce delay-700" />
        <Zap className="absolute top-1/3 left-20 w-10 h-10 text-pink-300/30 animate-bounce delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 transform animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Digitiq Technologies
            </span>
          </h1>
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-6">
            <p className="text-blue-200 text-lg font-medium">OPC Private Limited</p>
          </div>
        </div>

        <div className="mb-12 transform animate-fade-in-up delay-300">
          <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed max-w-4xl mx-auto">
            Delivering integrated, intelligent, and secure digital solutions for modern enterprises. 
            Bridging the gap between technology and business in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Innovative', 'Secure', 'Scalable', 'Reliable'].map((tag, index) => (
              <span
                key={tag}
                className={`px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-blue-200 border border-white/20 animate-fade-in-up`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-2xl transform animate-fade-in-up delay-600"
        >
          <span>Discover Our Story</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;