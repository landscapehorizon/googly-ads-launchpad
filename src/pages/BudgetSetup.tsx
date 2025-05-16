
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BudgetInput from '@/components/budget/BudgetInput';
import FeeCalculator from '@/components/budget/FeeCalculator';
import WhyChooseUs from '@/components/budget/WhyChooseUs';

const steps = [
  "Account Setup",
  "Upload Assets",
  "Business Details", 
  "Keyword Targeting",
  "Budget Setup",
  "Checkout"
];

const BudgetSetup = () => {
  const [currentStep, setCurrentStep] = useState(4);
  const [budget, setBudget] = useState<number>(1000);
  const [platformFee, setPlatformFee] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();

  // Calculate platform fee based on budget
  useEffect(() => {
    let fee = 24.99; // Base fee for $500 budget
    
    // For every $100 increase after the minimum $500, add $5
    if (budget > 500) {
      const additionalBudget = budget - 500;
      const additionalFee = Math.floor(additionalBudget / 100) * 5;
      fee += additionalFee;
    }
    
    setPlatformFee(fee);
    setTotal(budget + fee);
  }, [budget]);

  const handleBudgetChange = (values: number[]) => {
    const newBudget = values[0];
    setBudget(newBudget);
  };

  const handleNext = () => {
    navigate('/create/checkout');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="googly-container py-8">
          <StepIndicator currentStep={currentStep} steps={steps} />
          
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 border">
            <h1 className="text-2xl font-bold mb-6">Budget Setup</h1>
            
            <div className="space-y-6">
              <BudgetInput 
                budget={budget}
                handleBudgetChange={handleBudgetChange}
              />
              
              <FeeCalculator 
                budget={budget}
                platformFee={platformFee}
                total={total}
              />
              
              <WhyChooseUs />

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => navigate('/create/keywords')}>
                  Back
                </Button>
                <Button onClick={handleNext}>
                  Proceed to Checkout <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
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
