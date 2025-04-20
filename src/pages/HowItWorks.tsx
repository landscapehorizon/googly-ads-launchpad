
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CheckCircle2, 
  Upload, 
  Target, 
  CreditCard, 
  ChartLine, 
  AlarmClock 
} from 'lucide-react';

const StepCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <Icon className="w-12 h-12 text-googly-blue mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: CheckCircle2,
      title: "Create Your Account",
      description: "Sign up in seconds and start your ad journey."
    },
    {
      icon: Upload,
      title: "Upload Creative Assets",
      description: "Add images, videos, and your brand logo."
    },
    {
      icon: Target,
      title: "Set Targeting",
      description: "Choose keywords that match your business."
    },
    {
      icon: CreditCard,
      title: "Set Budget",
      description: "Select a budget that works for your business."
    },
    {
      icon: ChartLine,
      title: "Launch & Monitor",
      description: "Your ad goes live and you track performance."
    },
    {
      icon: AlarmClock,
      title: "Continuous Optimization",
      description: "AI helps refine your ad strategy over time."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-50 py-16">
          <div className="googly-container text-center">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-googly-blue to-googly-purple">
              How iamgoogly.ai Works
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Launching Google Ads has never been easier. We simplify the process into 6 easy steps.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="googly-container">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <StepCard 
                  key={index} 
                  icon={step.icon} 
                  title={step.title} 
                  description={step.description} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
