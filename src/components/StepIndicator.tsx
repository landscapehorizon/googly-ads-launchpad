
import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              {index < currentStep ? (
                <div className="googly-step-completed">
                  <Check size={16} />
                </div>
              ) : index === currentStep ? (
                <div className="googly-step-active">
                  {index + 1}
                </div>
              ) : (
                <div className="googly-step-pending">
                  {index + 1}
                </div>
              )}
              
              {/* Connect with line, except for the last item */}
              {index < steps.length - 1 && (
                <div 
                  className={`h-[2px] w-16 md:w-28 lg:w-36 ${
                    index < currentStep ? 'bg-googly-blue' : 'bg-muted'
                  }`}
                ></div>
              )}
            </div>
            <span 
              className={`mt-2 text-xs text-center ${
                index <= currentStep ? 'text-googly-blue font-medium' : 'text-muted-foreground'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
