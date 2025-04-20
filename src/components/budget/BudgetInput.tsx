
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface BudgetInputProps {
  inputValue: string;
  handleBudgetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBudgetBlur: () => void;
  clearBudget: () => void;
}

const BudgetInput: React.FC<BudgetInputProps> = ({
  inputValue,
  handleBudgetChange,
  handleBudgetBlur,
  clearBudget
}) => {
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
  );
};

export default BudgetInput;
