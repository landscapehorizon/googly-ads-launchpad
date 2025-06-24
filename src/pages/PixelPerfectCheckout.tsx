
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CreditCard, Lock, CheckCircle } from 'lucide-react';

const PixelPerfectCheckout = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsProcessing(true);
    // In a real implementation, this would integrate with Stripe or another payment provider
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Complete Your Pixel Perfect Subscription</h1>
              <p className="text-gray-600">
                Start tracking your Google Ads performance with precision
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Smith" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
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
                      <Label htmlFor="terms" className="text-sm leading-tight cursor-pointer">
                        I agree to the Terms and Conditions and Privacy Policy
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-2">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Pixel Perfect</span>
                        <span className="text-purple-600 font-bold">$14.99/month</span>
                      </div>
                      
                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-3">What's included:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Real-time conversion tracking</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Comprehensive analytics dashboard</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Easy one-time setup</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Performance optimization insights</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mb-6">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total</span>
                        <span>$14.99/month</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center text-xs text-gray-500 mb-6">
                      <Lock size={14} className="mr-1" />
                      <span>Secure Checkout</span>
                    </div>
                    
                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      size="lg"
                      onClick={handlePayment}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Start Subscription'}
                      {!isProcessing && <ArrowRight size={16} className="ml-2" />}
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Cancel anytime. Your subscription will begin today and you'll be charged monthly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PixelPerfectCheckout;
