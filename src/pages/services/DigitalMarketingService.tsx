import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Smartphone, Search, BarChart, Users, CheckCircle, ArrowRight } from 'lucide-react';

const DigitalMarketingService: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.'
    },
    {
      icon: Smartphone,
      title: 'Social Media Marketing',
      description: 'Engage your audience across all major social media platforms with targeted campaigns.'
    },
    {
      icon: BarChart,
      title: 'Content Strategy',
      description: 'Create compelling content that resonates with your audience and drives conversions.'
    },
    {
      icon: Users,
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize campaigns with detailed analytics and insights.'
    }
  ];

  const services = [
    {
      title: 'Search Engine Optimization',
      description: 'Comprehensive SEO strategies to improve visibility',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building']
    },
    {
      title: 'Pay-Per-Click Advertising',
      description: 'Targeted PPC campaigns for immediate results',
      features: ['Google Ads', 'Social Media Ads', 'Display Advertising', 'Remarketing']
    },
    {
      title: 'Social Media Management',
      description: 'Complete social media presence management',
      features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Social Analytics']
    }
  ];

  const benefits = [
    'Increased Brand Visibility',
    'Higher Website Traffic',
    'Better Lead Generation',
    'Improved ROI',
    'Enhanced Customer Engagement',
    'Competitive Advantage',
    'Measurable Results',
    'Cost-Effective Marketing'
  ];

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Smartphone className="w-20 h-20 mx-auto mb-6 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Marketing & <span className="text-pink-300">SEO</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
              Boost your online presence and drive business growth with our comprehensive digital marketing strategies.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-pink-600 text-white rounded-full font-semibold text-lg hover:bg-pink-500 transition-all duration-300 hover:scale-105">
              <span>Grow Your Business</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Marketing Services</h2>
            <p className="text-xl text-gray-600">Comprehensive digital marketing solutions for modern businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketing Solutions</h2>
            <p className="text-xl text-gray-600">Tailored strategies to reach your target audience</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
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
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Digital Marketing Matters?</h2>
              <p className="text-lg text-gray-600 mb-8">
                In today's digital world, having a strong online presence is crucial for business success. 
                Our digital marketing strategies help you reach your target audience effectively.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Average ROI Increase</h3>
                <div className="text-4xl font-bold text-pink-600 mb-2">300%</div>
                <p className="text-gray-600 mb-6">
                  Our clients typically see a 300% increase in ROI within the first 6 months of our campaigns.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-600 mb-2">24/7</div>
                  <div className="text-gray-600">Campaign Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Online Presence?</h2>
          <p className="text-xl mb-8">
            Let our digital marketing experts create a customized strategy to grow your business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Marketing Audit
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300">
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default DigitalMarketingService;