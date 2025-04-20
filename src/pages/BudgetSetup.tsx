import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowRight, HelpCircle, X } from 'lucide-react';

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
  const [inputValue, setInputValue] = useState<string>("1000");
  const [platformFee, setPlatformFee] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();

  // Calculate platform fee based on budget
  useEffect(() => {
    let fee = 24.99; // Base fee for $500 budget
    
    // For every $50 increase after the minimum $500, add $5
    if (budget > 500) {
      const additionalBudget = budget - 500;
      const additionalFee = Math.floor(additionalBudget / 50) * 5;
      fee += additionalFee;
    }
    
    setPlatformFee(fee);
    setTotal(budget + fee);
  }, [budget]);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, '');
    setInputValue(rawValue);
    
    if (rawValue === '') {
      // Allow empty input
      return;
    }
    
    const value = parseFloat(rawValue);
    if (!isNaN(value)) {
      // Only apply min/max constraints when confirming or when user is done typing
      if (value < 500) {
        setBudget(500);
      } else if (value > 50000) {
        setBudget(50000);
      } else {
        setBudget(value);
      }
    }
  };

  const handleBudgetBlur = () => {
    // Apply constraints when focus leaves the input
    if (inputValue === '' || parseFloat(inputValue) < 500) {
      setBudget(500);
      setInputValue("500");
    } else if (parseFloat(inputValue) > 50000) {
      setBudget(50000);
      setInputValue("50000");
    } else {
      setBudget(parseFloat(inputValue));
      setInputValue(parseFloat(inputValue).toString());
    }
  };

  const clearBudget = () => {
    setInputValue("");
    // Don't update budget yet, wait for blur or new input
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
              <div>
                <Label htmlFor="budget">Monthly Ad Budget</Label>
                <p className="text-sm text-gray-600 mb-2">
                  Choose how much you want to spend on your Google Ads each month.
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="budget"
                    type="text"
                    value={inputValue}
                    onChange={handleBudgetChange}
                    onBlur={handleBudgetBlur}
                    className="pl-8 pr-10"
                  />
                  <button 
                    onClick={clearBudget}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear budget"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Min: $500</span>
                  <span>Max: $50,000</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Fee Calculator</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span>Monthly Ad Budget</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle size={16} className="text-gray-400 ml-1 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>This is the amount you want to spend on Google Ads each month. Minimum $500, maximum $50,000.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span>${budget.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span>Platform Fee</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle size={16} className="text-gray-400 ml-1 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Our service fee is $24.99 for budgets up to $500, with an additional $5 for every $50 increment beyond that.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span>${platformFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                    <span>Total Monthly Cost</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-medium text-blue-800 mb-2">Why Choose Us?</h3>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• Transparent pricing with no hidden costs</li>
                  <li>• Expert campaign setup and optimization</li>
                  <li>• No long-term contracts - cancel anytime</li>
                </ul>
              </div>

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
