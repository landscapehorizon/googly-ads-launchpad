import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { ArrowRight, Check, Info } from 'lucide-react';

const steps = [
  "Account Setup",
  "Upload Assets",
  "Business Details", 
  "Keyword Targeting",
  "Budget Setup",
  "Checkout"
];

const subscriptionPackages = [
  {
    id: 'basic',
    name: 'Ad Basic',
    adBudget: 500,
    platformFee: 99.99,
    total: 599.99,
    features: [
      '$500 monthly ad spend',
      'Basic campaign optimization',
      'Monthly performance reports',
      'Email support'
    ]
  },
  {
    id: 'plus',
    name: 'Ad Plus',
    adBudget: 1500,
    platformFee: 199.99,
    total: 1699.99,
    popular: true,
    features: [
      '$1,500 monthly ad spend',
      'Advanced campaign optimization',
      'Weekly performance reports',
      'Priority email support',
      'A/B testing included'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    adBudget: 3000,
    platformFee: 399.99,
    total: 3399.99,
    features: [
      '$3,000 monthly ad spend',
      'Premium campaign optimization',
      'Daily performance reports',
      'Dedicated account manager',
      'Advanced A/B testing',
      'Custom integrations'
    ]
  }
];

const BudgetSetup = () => {
  const [currentStep, setCurrentStep] = useState(4);
  const [selectedPackage, setSelectedPackage] = useState<string>('plus');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/create/checkout');
  };

  const selectedPkg = subscriptionPackages.find(pkg => pkg.id === selectedPackage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="googly-container py-8">
          <StepIndicator currentStep={currentStep} steps={steps} />
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Choose Your Subscription Package</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select the plan that fits your advertising needs. All plans include your ad spend budget plus our platform management fee. No long-term commitments - cancel anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {subscriptionPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative bg-white rounded-lg border-2 p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedPackage === pkg.id
                      ? 'border-googly-blue shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-googly-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold">${pkg.platformFee}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>+ ${pkg.adBudget} ad spend budget</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`text-center ${selectedPackage === pkg.id ? 'text-googly-blue font-medium' : 'text-gray-500'}`}>
                    {selectedPackage === pkg.id ? 'Selected' : 'Select Plan'}
                  </div>
                </div>
              ))}
            </div>

            {selectedPkg && (
              <div className="bg-white rounded-lg shadow-sm p-6 border mb-6">
                <h3 className="font-medium mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Package</span>
                    <span>{selectedPkg.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-gray-600">Monthly Ad Budget</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info size={16} className="text-gray-400 ml-1 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>This is the amount you'll spend monthly on advertising across the Google network.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span>${selectedPkg.adBudget.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Management Fee</span>
                    <span>${selectedPkg.platformFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-medium text-lg">
                    <span>Total Monthly Cost</span>
                    <span>${selectedPkg.total.toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  No long-term commitments. You can cancel anytime from your dashboard. Your subscription will begin today and you'll be charged monthly.
                </p>
              </div>
            )}

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => navigate('/create/keywords')}>
                Back
              </Button>
              <Button onClick={handleNext}>
                Proceed to Checkout <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default BudgetSetup;
