
import React from 'react';
import { ArrowUpRight, Upload, LineChart, Clock, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <Upload className="h-6 w-6 text-googly-blue" />,
    title: 'Simple Asset Upload',
    description: 'Upload your images, logos, and videos. We handle the rest.'
  },
  {
    icon: <LineChart className="h-6 w-6 text-googly-red" />,
    title: 'Smart Analytics',
    description: 'Monitor performance with easy-to-understand metrics.'
  },
  {
    icon: <Clock className="h-6 w-6 text-googly-yellow" />,
    title: 'Save Time',
    description: 'Launch campaigns in minutes instead of days.'
  },
  {
    icon: <Zap className="h-6 w-6 text-googly-green" />,
    title: 'AI-Powered',
    description: 'Our platform optimizes your ads for maximum performance.'
  },
  {
    icon: <Shield className="h-6 w-6 text-googly-purple" />,
    title: 'No Learning Curve',
    description: 'No complex interfaces or technical jargon to learn.'
  },
  {
    icon: <ArrowUpRight className="h-6 w-6 text-googly-dark-blue" />,
    title: 'Scale With Ease',
    description: 'Easily increase your budget as your business grows.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="googly-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Small Businesses <span className="googly-gradient-text">Love Us</span>
          </h2>
          <p className="text-gray-600">
            Designed specifically for entrepreneurs who need results without the complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4 bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
