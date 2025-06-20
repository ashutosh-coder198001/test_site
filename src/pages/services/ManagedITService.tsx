import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Settings, Headphones, Cog, BarChart, CheckCircle, ArrowRight } from 'lucide-react';

const ManagedITService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your systems running smoothly.'
    },
    {
      icon: BarChart,
      title: 'IT Strategy',
      description: 'Strategic IT planning and consulting to align technology with business goals.'
    },
    {
      icon: Cog,
      title: 'System Integration',
      description: 'Seamless integration of various systems and applications.'
    },
    {
      icon: Settings,
      title: 'Cost Optimization',
      description: 'Optimize IT costs while maintaining high performance and reliability.'
    }
  ];

  const services = [
    {
      title: 'Help Desk Support',
      description: 'Comprehensive technical support for your team',
      features: ['24/7 Phone Support', 'Remote Assistance', 'Ticket Management', 'User Training']
    },
    {
      title: 'System Monitoring',
      description: 'Proactive monitoring and maintenance of IT systems',
      features: ['Network Monitoring', 'Server Management', 'Performance Analytics', 'Preventive Maintenance']
    },
    {
      title: 'Strategic Consulting',
      description: 'IT strategy and planning services',
      features: ['Technology Roadmap', 'Budget Planning', 'Vendor Management', 'Digital Transformation']
    }
  ];

  const benefits = [
    'Reduced IT Costs',
    'Improved Productivity',
    'Enhanced Security',
    'Predictable Expenses',
    'Access to Expertise',
    'Scalable Solutions',
    'Proactive Support',
    'Focus on Core Business'
  ];

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600/20 rounded-full mb-6 group animate-bounce-slow">
              <Settings className="w-10 h-10 text-indigo-300 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-200">
              Managed IT Services & <span className="text-indigo-300 text-shimmer">Consultancy</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-400">
              Focus on your business while we handle your IT. Comprehensive managed services and strategic consulting.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl glow animate-fade-in-up delay-600">
              <span>Get IT Support</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Managed IT Services</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Complete IT management and support solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover-lift animate-fade-in-up group" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Comprehensive IT Management</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">End-to-end IT services tailored to your business needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 font-medium group-hover:text-indigo-600 transition-colors duration-300">{feature}</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Managed IT Services?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Outsourcing your IT management allows you to focus on what you do best while ensuring 
                your technology infrastructure is in expert hands.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center space-x-3 group animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium group-hover:text-indigo-600 transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group">
                  <Headphones className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Average Response Time</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-2"><15min</div>
                <p className="text-gray-600 mb-6">
                  Our dedicated support team ensures rapid response to all your IT issues and requests.
                </p>
                <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">98%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Flexible Service Plans</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Choose the right level of support for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essential',
                description: 'Basic IT support for small businesses',
                features: ['Business Hours Support', 'Remote Assistance', 'Basic Monitoring', 'Email Support']
              },
              {
                name: 'Professional',
                description: 'Comprehensive IT management',
                features: ['24/7 Support', 'Proactive Monitoring', 'Strategic Consulting', 'Priority Response'],
                popular: true
              },
              {
                name: 'Enterprise',
                description: 'Full-service IT partnership',
                features: ['Dedicated Account Manager', 'Custom Solutions', 'Advanced Analytics', 'On-site Support']
              }
            ].map((plan, index) => (
              <div key={plan.name} className={`bg-white rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-indigo-600 transform scale-105' : ''} hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up`} style={{ animationDelay: `${300 + index * 100}ms` }}>
                {plan.popular && (
                  <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Simplify Your IT?</h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">
            Let our IT experts handle your technology so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Start Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default ManagedITService;