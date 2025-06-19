import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const CloudSolutionsService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Software-as-a-Service platforms that scale with your business needs.'
    },
    {
      icon: Server,
      title: 'IaaS Management',
      description: 'Infrastructure-as-a-Service solutions for flexible and scalable computing resources.'
    },
    {
      icon: Shield,
      title: 'PaaS Platforms',
      description: 'Platform-as-a-Service environments for rapid application development and deployment.'
    },
    {
      icon: Zap,
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing systems to cloud infrastructure.'
    }
  ];

  const benefits = [
    'Reduced IT Costs',
    'Enhanced Scalability',
    'Improved Security',
    'Better Collaboration',
    'Automatic Updates',
    'Disaster Recovery',
    'Global Accessibility',
    '24/7 Monitoring'
  ];

  const cloudProviders = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform',
    'IBM Cloud',
    'Oracle Cloud',
    'DigitalOcean'
  ];

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 text-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/20 rounded-full mb-6 group animate-bounce-slow">
              <Cloud className="w-10 h-10 text-purple-300 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-200">
              Cloud Solutions & <span className="text-purple-300 text-shimmer">Hosting</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-400">
              Leverage the power of cloud computing with our comprehensive cloud solutions and managed hosting services.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg hover:bg-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl glow animate-fade-in-up delay-600">
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Cloud Service Models</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Comprehensive cloud solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover-lift animate-fade-in-up group" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Cloud Solutions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Cloud computing offers numerous advantages that can transform your business operations, 
                reduce costs, and improve efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center space-x-3 group animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group">
                  <Cloud className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">99.9% Uptime Guarantee</h3>
                <p className="text-gray-600 mb-6">
                  Our cloud infrastructure ensures maximum availability and reliability for your business-critical applications.
                </p>
                <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Monitoring & Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Trusted Cloud Partners</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">We work with leading cloud providers to deliver the best solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudProviders.map((provider, index) => (
              <div key={provider} className="bg-gray-50 p-6 rounded-lg text-center font-semibold text-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105 hover:text-purple-600 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                {provider}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Move to the Cloud?</h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">
            Let our cloud experts help you design and implement the perfect cloud strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Cloud Assessment
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default CloudSolutionsService;