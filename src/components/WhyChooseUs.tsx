import React from 'react';
import { CheckCircle, Zap, Shield, Users, Cog, Trophy } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Full-Spectrum Digital Services',
      description: 'End-to-end solutions covering all aspects of your digital transformation journey.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Security, Scalability & Speed',
      description: 'Triple-S approach ensuring your solutions are secure, scalable, and lightning-fast.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cog,
      title: 'Industry-Ready Solutions',
      description: 'Customized solutions tailored to your specific industry requirements and challenges.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Lean & Agile Execution',
      description: 'Fast, efficient delivery using proven agile methodologies and lean principles.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Client Success Commitment',
      description: 'Your success is our mission. We\'re committed to delivering results that matter.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Trophy,
      title: 'Proven Track Record',
      description: 'Demonstrated excellence with a portfolio of successful projects and satisfied clients.',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digitiq?</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-blue-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center text-blue-300 group-hover:text-white transition-colors duration-300">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Guaranteed Excellence</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-200 text-lg mb-8">
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-2xl">
              <span>Get Started Today</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;