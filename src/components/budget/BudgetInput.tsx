
import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface BudgetInputProps {
  budget: number;
  handleBudgetChange: (value: number[]) => void;
}

const BudgetInput: React.FC<BudgetInputProps> = ({
  budget,
  handleBudgetChange
}) => {
  // Define budget steps for the slider
  const minBudget = 500;
  const maxBudget = 50000;
  
  return (
    <div>
      <Label htmlFor="budget">Monthly Ad Budget</Label>
      <div className="flex items-center">
        <p className="text-sm text-gray-600 mb-2 flex-1">
          Choose how much you want to spend on your Google Ads each month.
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle size={16} className="text-gray-400 ml-1 mb-2 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">This is the amount you want to spend on Google Ads each month. Minimum $500, maximum $50,000.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="pt-2 pb-6">
        <Slider 
          id="budget"
          min={minBudget}
          max={maxBudget}
          step={50}
          value={[budget]}
          onValueChange={handleBudgetChange}
          className="mt-6"
        />
      </div>
      <div className="flex justify-between text-sm">
        <div className="bg-white px-3 py-2 rounded-md shadow-sm border">
          <span className="text-gray-500">Budget:</span> <span className="font-semibold">${budget.toLocaleString()}</span>
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Min: $500</span>
        <span>Max: $50,000</span>
      </div>
    </div>
  );
};

export default BudgetInput;
