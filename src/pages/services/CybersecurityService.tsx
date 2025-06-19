import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const CybersecurityService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities before attackers do.'
    },
    {
      icon: Eye,
      title: 'Vulnerability Audits',
      description: 'Detailed security audits to assess and strengthen your digital infrastructure.'
    },
    {
      icon: Lock,
      title: 'Security Operations',
      description: '24/7 security monitoring and incident response to protect your assets.'
    },
    {
      icon: AlertTriangle,
      title: 'Compliance Management',
      description: 'Ensure your organization meets industry standards and regulatory requirements.'
    }
  ];

  const threats = [
    'Malware & Ransomware',
    'Phishing Attacks',
    'Data Breaches',
    'Insider Threats',
    'DDoS Attacks',
    'Social Engineering',
    'Zero-day Exploits',
    'Advanced Persistent Threats'
  ];

  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture',
      features: ['Risk Assessment', 'Vulnerability Scanning', 'Security Gap Analysis', 'Compliance Review']
    },
    {
      title: 'Managed Security',
      description: 'Ongoing security monitoring and management services',
      features: ['24/7 SOC Monitoring', 'Incident Response', 'Threat Intelligence', 'Security Analytics']
    },
    {
      title: 'Security Implementation',
      description: 'Deploy and configure security solutions',
      features: ['Firewall Configuration', 'Endpoint Protection', 'Access Controls', 'Encryption Solutions']
    }
  ];

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 rounded-full mb-6 group animate-bounce-slow">
              <Shield className="w-10 h-10 text-red-300 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-200">
              Cybersecurity & <span className="text-red-300 text-shimmer">Ethical Hacking</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-400">
              Protect your digital assets with our comprehensive cybersecurity solutions and ethical hacking services.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold text-lg hover:bg-red-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl glow animate-fade-in-up delay-600">
              <span>Secure Your Business</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Security Services</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Comprehensive protection against modern cyber threats</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover-lift animate-fade-in-up group" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Threats We Protect Against</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Stay ahead of evolving cyber threats</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <div key={threat} className="bg-white p-4 rounded-lg text-center font-semibold text-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105 border-l-4 border-red-500 hover:text-red-600 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                {threat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Comprehensive Security Solutions</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">End-to-end security services for complete protection</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 font-medium group-hover:text-red-600 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-red-100">Threat Detection Rate</div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="text-4xl font-bold mb-2">&lt;5min</div>
              <div className="text-red-100">Average Response Time</div>
            </div>
            <div className="animate-fade-in-up delay-400">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-red-100">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Don't Wait for a Breach</h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">
            Protect your business now with our comprehensive cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <button className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Security Assessment
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Contact Security Expert
            </button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default CybersecurityService;