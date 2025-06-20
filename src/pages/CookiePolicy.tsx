import React, { useEffect } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { Cookie, Settings, Eye, Shield } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600/20 rounded-full mb-6 group">
              <Cookie className="w-10 h-10 text-orange-300 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Cookie <span className="text-orange-300">Policy</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-300">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
            </p>
            <div className="text-orange-200 animate-fade-in-up delay-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* What Are Cookies */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit 
                  a website. They are widely used to make websites work more efficiently and provide information 
                  to website owners.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Settings className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Functionality</h4>
                    <p className="text-sm text-gray-600">Remember your preferences and settings</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Eye className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
                    <p className="text-sm text-gray-600">Help us understand how you use our site</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                    <p className="text-sm text-gray-600">Protect against fraud and abuse</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Essential Cookies</h3>
                    <span className="ml-auto px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Required</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These cookies are necessary for the website to function properly. They enable basic functions 
                    like page navigation, access to secure areas, and form submissions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Session management</li>
                        <li>• Security tokens</li>
                        <li>• Load balancing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Duration:</h4>
                      <p className="text-sm text-gray-600">Session or up to 1 year</p>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Analytics Cookies</h3>
                    <span className="ml-auto px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Page views and traffic</li>
                        <li>• User behavior patterns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Duration:</h4>
                      <p className="text-sm text-gray-600">Up to 2 years</p>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Functional Cookies</h3>
                    <span className="ml-auto px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Optional</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your 
                    preferences and providing customized content.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Language preferences</li>
                        <li>• Theme settings</li>
                        <li>• Form data retention</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Duration:</h4>
                      <p className="text-sm text-gray-600">Up to 1 year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <p className="text-gray-700 leading-relaxed mb-6">
                  You have several options for managing cookies on our website:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
                    <p className="text-gray-700 mb-4">
                      Most web browsers allow you to control cookies through their settings preferences.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Block all cookies</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Block third-party cookies</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Delete existing cookies</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Cookie Banner</h3>
                    <p className="text-gray-700 mb-4">
                      When you first visit our site, you'll see a cookie banner where you can:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Accept all cookies</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Customize your preferences</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Reject non-essential cookies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use some third-party services that may set their own cookies. These include:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                  <p className="text-sm text-gray-600">Website traffic analysis and user behavior insights</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                  <p className="text-sm text-gray-600">Social sharing buttons and embedded content</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">CDN Services</h4>
                  <p className="text-sm text-gray-600">Content delivery and performance optimization</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center bg-gray-900 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Questions About Cookies?</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@digitiqtechnologies.com" 
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors duration-300"
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

export default CookiePolicy;