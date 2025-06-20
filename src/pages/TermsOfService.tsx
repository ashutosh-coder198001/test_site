import React, { useEffect } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { FileText, Scale, CheckCircle, AlertTriangle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600/20 rounded-full mb-6 group">
              <Scale className="w-10 h-10 text-indigo-300 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Terms of <span className="text-indigo-300">Service</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-300">
              Please read these terms carefully before using our services. By using our services, you agree to these terms.
            </p>
            <div className="text-indigo-200 animate-fade-in-up delay-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using the services provided by Digitiq Technologies (OPC), 
                  you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you do not agree to abide by the above, please do not use this service. We reserve the 
                  right to change these terms at any time by posting changes online.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Digitiq Technologies provides comprehensive digital solutions including but not limited to:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Development Services</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Web & Mobile App Development</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Custom Software Solutions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Progressive Web Applications</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure Services</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cloud Solutions & Hosting</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cybersecurity Services</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Managed IT Services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Acceptable Use</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You agree to use our services only for lawful purposes and in accordance with these Terms. 
                      You are prohibited from:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Using our services for any unlawful or fraudulent purpose</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Attempting to gain unauthorized access to our systems</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Interfering with or disrupting our services</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Violating any applicable laws or regulations</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You are responsible for maintaining the confidentiality of your account credentials and 
                      for all activities that occur under your account. Please notify us immediately of any 
                      unauthorized use of your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Payment Terms</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Billing</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Invoices are issued upon project milestones</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Payment terms are typically 30 days from invoice date</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Late payments may incur additional charges</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Refunds</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Refund policies vary by service type</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Custom development work is generally non-refundable</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Subscription services may be cancelled with notice</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, Digitiq Technologies shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, or any loss of 
                profits or revenues, whether incurred directly or indirectly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability to you for any damages arising from or related to these terms or our 
                services shall not exceed the amount paid by you to us in the twelve (12) months preceding 
                the event giving rise to the liability.
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center bg-gray-900 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Questions About These Terms?</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@digitiqtechnologies.com" 
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-300"
                >
                  Email: info@digitiqtechnologies.com
                </a>
                <a 
                  href="tel:+919899213865" 
                  className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Phone: +91 98992 13865
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default TermsOfService;