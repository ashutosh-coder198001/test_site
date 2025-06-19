import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Globe, Code, Smartphone, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const WebDevelopmentService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Globe,
      title: 'Responsive Web Design',
      description: 'Mobile-first, cross-browser compatible websites that look stunning on all devices.'
    },
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Tailored web solutions built with modern frameworks and best practices.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: Zap,
      title: 'Progressive Web Apps',
      description: 'Fast, reliable, and engaging web applications with native app-like experience.'
    }
  ];

  const technologies = [
    'React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'PHP',
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'MongoDB', 'PostgreSQL'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your business requirements, target audience, and project goals.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for your approval.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your application with rigorous testing at every stage.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launching your application and providing ongoing maintenance and support.'
    }
  ];

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-6 group animate-bounce-slow">
              <Globe className="w-10 h-10 text-blue-300 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-200">
              Web & Mobile App <span className="text-blue-300 text-shimmer">Development</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-400">
              Transform your ideas into powerful digital experiences with our comprehensive web and mobile development services.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl glow animate-fade-in-up delay-600">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Development Services</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Comprehensive solutions for all your digital needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover-lift animate-fade-in-up group" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Technologies We Use</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Cutting-edge tools and frameworks for modern development</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={tech} className="bg-white p-4 rounded-lg text-center font-semibold text-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105 hover:text-blue-600 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Development Process</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">A proven methodology that delivers results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Build Your Next Project?</h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">
            Let's discuss how we can bring your vision to life with our expert development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default WebDevelopmentService;