import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Database, BarChart, TrendingUp, Users, Cog, PieChart, CheckCircle, ArrowRight } from 'lucide-react';

const DataAnalyticsERPCRMService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: BarChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable visual insights and interactive dashboards.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Use advanced algorithms to forecast trends and make data-driven predictions.'
    },
    {
      icon: Users,
      title: 'CRM Implementation',
      description: 'Customer relationship management systems to enhance customer interactions and sales.'
    },
    {
      icon: Cog,
      title: 'Custom ERP Systems',
      description: 'Tailored enterprise resource planning solutions to streamline business operations.'
    }
  ];

  const solutions = [
    {
      title: 'Business Intelligence & Analytics',
      description: 'Comprehensive data analytics and business intelligence solutions',
      features: ['Data Warehousing', 'Real-time Analytics', 'Custom Dashboards', 'Predictive Modeling']
    },
    {
      title: 'Enterprise Resource Planning',
      description: 'Complete ERP solutions for business management',
      features: ['Financial Management', 'Inventory Control', 'Human Resources', 'Supply Chain Management']
    },
    {
      title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for customer success',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Support', 'Marketing Automation']
    }
  ];

  const benefits = [
    'Data-Driven Decisions',
    'Improved Efficiency',
    'Better Customer Relationships',
    'Cost Reduction',
    'Revenue Growth',
    'Process Automation',
    'Real-time Insights',
    'Scalable Solutions'
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Retail & E-commerce',
    'Financial Services',
    'Education',
    'Real Estate',
    'Professional Services',
    'Non-profit Organizations'
  ];

  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-blue-800 to-purple-900 text-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-600/20 rounded-full mb-6 group animate-bounce-slow">
              <Database className="w-10 h-10 text-teal-300 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-200">
              Data Analytics & <span className="text-teal-300 text-shimmer">ERP/CRM Solutions</span>
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-400">
              Transform your data into actionable insights and streamline business processes with our integrated analytics, ERP, and CRM solutions.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-600 text-white rounded-full font-semibold text-lg hover:bg-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl glow animate-fade-in-up delay-600">
              <span>Transform Your Business</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Integrated Solutions</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Comprehensive data and business management solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover-lift animate-fade-in-up group" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">{feature.title}</h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Comprehensive Business Solutions</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">End-to-end solutions for modern business needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={solution.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors duration-300">{feature}</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Solutions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                In today's data-driven world, organizations need integrated solutions that combine analytics, 
                enterprise management, and customer relationship tools to stay competitive.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center space-x-3 group animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group">
                  <PieChart className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Performance Improvement</h3>
                <div className="text-4xl font-bold text-teal-600 mb-2">45%</div>
                <p className="text-gray-600 mb-6">
                  Average improvement in business performance with our integrated solutions.
                </p>
                <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl font-bold text-teal-600 mb-2">Real-time</div>
                  <div className="text-gray-600">Data Processing & Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Industries We Serve</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Specialized solutions for various industry sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={industry} className="bg-white p-6 rounded-lg text-center font-semibold text-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105 border-l-4 border-teal-500 hover:text-teal-600 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Technologies & Platforms</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Cutting-edge tools for data analytics and business management</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Apache Spark',
              'Salesforce', 'SAP', 'Oracle', 'Microsoft Dynamics', 'MongoDB', 'PostgreSQL'
            ].map((tech, index) => (
              <div key={tech} className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105 hover:text-teal-600 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Implementation Process</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Structured approach to successful system deployment</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analysis', description: 'Assess current processes, data, and requirements' },
              { step: '02', title: 'Design', description: 'Create system architecture and data models' },
              { step: '03', title: 'Development', description: 'Build and customize integrated solutions' },
              { step: '04', title: 'Deployment', description: 'Launch systems with training and support' }
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Transform Your Business Data?</h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">
            Let our experts design and implement integrated analytics, ERP, and CRM solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <button className="px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Business Analysis
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default DataAnalyticsERPCRMService;