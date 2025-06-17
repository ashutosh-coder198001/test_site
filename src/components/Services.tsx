import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Cloud, Shield, Network, Settings, ArrowRight, Database } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web & Mobile App Development',
      description: 'Full-cycle development of responsive websites, custom portals, and mobile applications tailored to business goals.',
      features: ['Responsive Design', 'Custom Portals', 'Mobile Apps', 'Progressive Web Apps'],
      color: 'blue',
      link: '/services/web-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions & Hosting',
      description: 'Deployment and management of scalable cloud environments—SaaS, IaaS, and PaaS models with security-first architecture.',
      features: ['SaaS Solutions', 'IaaS Management', 'PaaS Platforms', 'Cloud Migration'],
      color: 'purple',
      link: '/services/cloud-solutions'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Penetration testing, vulnerability audits, firewall implementation, and managed security operations to protect digital assets.',
      features: ['Penetration Testing', 'Vulnerability Audits', 'Security Operations', 'Compliance'],
      color: 'red',
      link: '/services/cybersecurity'
    },
    {
      icon: Network,
      title: 'Enterprise Network & ICT Infrastructure',
      description: 'Design and implementation of LAN/WAN, unified communication, data centers, and IT infrastructure for seamless operations.',
      features: ['Network Design', 'Data Centers', 'Unified Communications', 'Infrastructure'],
      color: 'green',
      link: '/services/network-infrastructure'
    },
    {
      icon: Settings,
      title: 'Managed IT Services & Consultancy',
      description: 'On-demand tech support, IT strategy consulting, and system integration services to optimize operations and reduce IT costs.',
      features: ['24/7 Support', 'IT Strategy', 'System Integration', 'Cost Optimization'],
      color: 'indigo',
      link: '/services/managed-it'
    },
    {
      icon: Database,
      title: 'Data Analytics & ERP/CRM Solutions',
      description: 'Transform data into insights with advanced analytics and streamline business processes with custom ERP and CRM systems.',
      features: ['Business Intelligence', 'Data Visualization', 'ERP Systems', 'CRM Implementation'],
      color: 'teal',
      link: '/services/data-analytics-erp-crm'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">We Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in a broad spectrum of ICT and digital transformation services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-8 bg-gradient-to-r ${getColorClasses(service.color)} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <service.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(service.color)}`}></div>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={service.link}
                  className={`group/btn inline-flex items-center space-x-2 text-white px-6 py-3 rounded-lg bg-gradient-to-r ${getColorClasses(service.color)} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;