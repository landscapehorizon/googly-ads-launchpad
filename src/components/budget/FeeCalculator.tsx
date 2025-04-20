
import React from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface FeeCalculatorProps {
  budget: number;
  platformFee: number;
  total: number;
}

const FeeCalculator: React.FC<FeeCalculatorProps> = ({ budget, platformFee, total }) => {
  return (
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
  );
};

export default FeeCalculator;
