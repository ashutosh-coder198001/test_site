import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { BarChart, Users, Cog, Database, CheckCircle, ArrowRight } from 'lucide-react';

const ERPCRMService: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Custom ERP Systems',
      description: 'Tailored enterprise resource planning solutions to streamline your business operations.'
    },
    {
      icon: Users,
      title: 'CRM Implementation',
      description: 'Customer relationship management systems to enhance customer interactions and sales.'
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and reduce errors.'
    },
    {
      icon: Database,
      title: 'Integration Services',
      description: 'Seamless integration with existing systems and third-party applications.'
    }
  ];

  const solutions = [
    {
      title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions for business management',
      features: ['Financial Management', 'Inventory Control', 'Human Resources', 'Supply Chain Management']
    },
    {
      title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for customer success',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Support', 'Marketing Automation']
    },
    {
      title: 'Business Process Management',
      description: 'Workflow optimization and automation',
      features: ['Process Mapping', 'Workflow Automation', 'Performance Analytics', 'Compliance Management']
    }
  ];

  const benefits = [
    'Improved Efficiency',
    'Better Data Visibility',
    'Enhanced Collaboration',
    'Cost Reduction',
    'Scalable Solutions',
    'Regulatory Compliance',
    'Real-time Reporting',
    'Customer Satisfaction'
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
      <section className="bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BarChart className="w-20 h-20 mx-auto mb-6 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ERP & CRM <span className="text-orange-300">Solutions</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Streamline your business processes and enhance customer relationships with our custom ERP and CRM solutions.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-600 text-white rounded-full font-semibold text-lg hover:bg-orange-500 transition-all duration-300 hover:scale-105">
              <span>Transform Your Business</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our ERP & CRM Services</h2>
            <p className="text-xl text-gray-600">Comprehensive business management solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Solutions</h2>
            <p className="text-xl text-gray-600">Tailored systems for modern business needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={solution.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-3">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose ERP & CRM?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Modern businesses need integrated systems to manage operations efficiently and maintain 
                strong customer relationships in today's competitive market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Productivity Increase</h3>
                <div className="text-4xl font-bold text-orange-600 mb-2">40%</div>
                <p className="text-gray-600 mb-6">
                  Organizations typically see a 40% increase in productivity after implementing our ERP/CRM solutions.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600 mb-2">99%</div>
                  <div className="text-gray-600">System Uptime</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Specialized solutions for various industry sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-lg text-center font-semibold text-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105 border-l-4 border-orange-500">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-600">Structured approach to successful system deployment</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analysis', description: 'Assess current processes and requirements' },
              { step: '02', title: 'Design', description: 'Create system architecture and workflows' },
              { step: '03', title: 'Development', description: 'Build and customize the solution' },
              { step: '04', title: 'Deployment', description: 'Launch system with training and support' }
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Business?</h2>
          <p className="text-xl mb-8">
            Let our experts design and implement the perfect ERP or CRM solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Business Analysis
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default ERPCRMService;