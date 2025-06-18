import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-6 group">
              <Shield className="w-10 h-10 text-blue-300 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Privacy <span className="text-blue-300">Policy</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="text-blue-200 animate-fade-in-up delay-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Information We Collect */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contact information (name, email address, phone number)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Business information (company name, job title, industry)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Communication preferences and service interests</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Technical Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>IP address, browser type, and device information</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Website usage data and analytics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cookies and similar tracking technologies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Delivery</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Provide and maintain our services</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Process transactions and payments</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Respond to inquiries and support requests</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Communication</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Send service updates and notifications</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Share relevant industry insights</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Marketing communications (with consent)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Data Protection & Security</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                    <p className="text-sm text-gray-600">Data encrypted in transit and at rest</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Lock className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Access Control</h4>
                    <p className="text-sm text-gray-600">Restricted access to authorized personnel</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Eye className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
                    <p className="text-sm text-gray-600">Continuous security monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Access & Control</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Access your personal information</li>
                    <li>• Request corrections or updates</li>
                    <li>• Delete your data (right to be forgotten)</li>
                    <li>• Data portability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Communication Preferences</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Opt-out of marketing communications</li>
                    <li>• Manage cookie preferences</li>
                    <li>• Restrict data processing</li>
                    <li>• Object to automated decision-making</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center bg-gray-900 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Questions About Privacy?</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@digitiqtech.com" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
                >
                  Email: privacy@digitiqtech.com
                </a>
                <a 
                  href="tel:+911234567890" 
                  className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Phone: +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default PrivacyPolicy;