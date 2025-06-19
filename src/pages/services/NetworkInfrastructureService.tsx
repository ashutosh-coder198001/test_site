import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Network, Server, Wifi, Database, CheckCircle, ArrowRight } from 'lucide-react';

const NetworkInfrastructureService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Network,
      title: 'Network Design',
      description: 'Custom network architecture designed for optimal performance and scalability.'
    },
    {
      icon: Server,
      title: 'Data Centers',
      description: 'State-of-the-art data center solutions for reliable and secure data storage.'
    },
    {
      icon: Wifi,
      title: 'Unified Communications',
      description: 'Integrated communication systems for seamless collaboration.'
    },
    {
      icon: Database,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance.'
    }
  ];

  const solutions = [
    {
      title: 'LAN/WAN Solutions',
      description: 'Local and Wide Area Network design and implementation',
      features: ['Network Planning', 'Hardware Installation', 'Performance Optimization', 'Security Integration']
    },
    {
      title: 'Data Center Services',
      description: 'Complete data center design and management',
      features: ['Server Virtualization', 'Storage Solutions', 'Backup Systems', 'Disaster Recovery']
    },
    {
      title: 'Communication Systems',
      description: 'Unified communication and collaboration platforms',
      features: ['VoIP Systems', 'Video Conferencing', 'Messaging Platforms', 'Mobile Integration']
    }
  ];

  const benefits = [
    'Improved Network Performance',
    'Enhanced Security',
    'Reduced Downtime',
    'Scalable Infrastructure',
    'Cost Optimization',
    'Better Collaboration',
    'Centralized Management',
    'Future-Ready Solutions'
  ];

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 text-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600/20 rounded-full mb-6 group animate-bounce-slow">
              <Network className="w-10 h-10 text-green-300 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-200">
              Enterprise Network & <span className="text-green-300 text-shimmer">ICT Infrastructure</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-400">
              Build robust, scalable, and secure network infrastructure that powers your business operations.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl glow animate-fade-in-up delay-600">
              <span>Build Your Network</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Infrastructure Services</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Complete network and infrastructure solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover-lift animate-fade-in-up group" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Infrastructure Solutions</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Comprehensive infrastructure services for modern enterprises</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={solution.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Invest in Modern Infrastructure?</h2>
              <p className="text-lg text-gray-600 mb-8">
                A robust network infrastructure is the foundation of any successful business. 
                Our solutions ensure your technology supports your growth, not hinders it.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center space-x-3 group animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-8 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group">
                  <Network className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">99.99% Network Uptime</h3>
                <p className="text-gray-600 mb-6">
                  Our enterprise-grade infrastructure ensures maximum reliability and minimal downtime for your business operations.
                </p>
                <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-gray-600">Network Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Implementation Process</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Structured approach to infrastructure deployment</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Evaluate current infrastructure and requirements' },
              { step: '02', title: 'Design', description: 'Create detailed network architecture and plans' },
              { step: '03', title: 'Implementation', description: 'Deploy and configure infrastructure components' },
              { step: '04', title: 'Support', description: 'Ongoing monitoring and maintenance services' }
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">
            Let our infrastructure experts design and implement a network solution that grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <button className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Infrastructure Assessment
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default NetworkInfrastructureService;