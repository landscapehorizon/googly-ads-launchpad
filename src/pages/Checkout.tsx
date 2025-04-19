
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, CreditCard, Lock } from 'lucide-react';

const steps = [
  "Account Setup",
  "Upload Assets",
  "Business Details",
  "Keyword Targeting",
  "Budget Setup",
  "Checkout"
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(5);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsProcessing(true);
    // In a real implementation, this would integrate with Stripe or another payment provider
    // For now, we'll simulate it with a timeout
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="googly-container py-8">
          <StepIndicator currentStep={currentStep} steps={steps} />
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Payment form */}
              <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-6 border">
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name on Card</Label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      <CreditCard size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">Security Code</Label>
                      <Input id="cvc" placeholder="CVC" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="billingAddress">Billing Address</Label>
                    <Input id="billingAddress" placeholder="Street Address" className="mb-2" />
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <Input placeholder="City" />
                      <Input placeholder="State/Province" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="ZIP/Postal Code" />
                      <Input placeholder="Country" />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <Label
                      htmlFor="terms"
                      className="text-sm leading-tight cursor-pointer"
                    >
                      I agree to the Terms and Conditions and Privacy Policy
                    </Label>
                  </div>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6 border h-fit">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Ad Budget</span>
                    <span>$1,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Fee</span>
                    <span>$74.99</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>$1,074.99</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center text-xs text-gray-500 mb-6">
                  <Lock size={14} className="mr-1" />
                  <span>Secure Checkout</span>
                </div>
                
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Complete Payment'}
                  {!isProcessing && <ArrowRight size={16} className="ml-2" />}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Your subscription will begin today and you'll be charged monthly.
                  You can cancel anytime from your dashboard.
                </p>
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

export default Checkout;
