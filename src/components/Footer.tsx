import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Enterprise Network & ICT Infrastructure', path: '/services/network-infrastructure' },
    { name: 'Cloud Solutions & Hosting', path: '/services/cloud-solutions' },
    { name: 'Cybersecurity & Ethical Hacking', path: '/services/cybersecurity' },
    { name: 'Web & Mobile App Development', path: '/services/web-development' },
    { name: 'Data Analytics & ERP/CRM Solutions', path: '/services/data-analytics-erp-crm' },
    { name: 'Managed IT Services & Consultancy', path: '/services/managed-it' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <Shield className="w-10 h-10 text-blue-400 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">Digitiq Technologies</h3>
                  <p className="text-blue-300 text-sm">(OPC)</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Delivering integrated, intelligent, and secure digital solutions for modern enterprises. 
                Bridging the gap between technology and business in the digital age.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Globe, href: '#', label: 'Website' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.path} 
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="group-hover:font-medium transition-all duration-300">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Plot No: 2, Laxam Vihar<br />
                    Industrial Area<br />
                    Gurgaon – 122001
                  </p>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                  <a href="tel:+919899213865" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    +91 98992 13865
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:info@digitiqtechnologies.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    info@digitiqtechnologies.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Digitiq Technologies (OPC). All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                  Terms of Service
                </Link>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;