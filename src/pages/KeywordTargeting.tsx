
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, X, Lightbulb } from 'lucide-react';

const steps = [
  "Account Setup",
  "Upload Assets",
  "Business Details",
  "Keyword Targeting",
  "Budget Setup",
  "Checkout"
];

const KeywordTargeting = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [keywordsText, setKeywordsText] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleAddKeywords = () => {
    if (keywordsText.trim()) {
      const newKeywords = keywordsText
        .split(',')
        .map(keyword => keyword.trim())
        .filter(keyword => keyword !== '');
      
      setKeywords([...keywords, ...newKeywords]);
      setKeywordsText('');
    }
  };

  const handleRemoveKeyword = (index: number) => {
    const newKeywords = [...keywords];
    newKeywords.splice(index, 1);
    setKeywords(newKeywords);
  };

  const handleGenerateSuggestions = () => {
    setIsGenerating(true);
    // In a real implementation, this would call an API to generate keyword suggestions
    // For now, we'll simulate it with a timeout
    setTimeout(() => {
      const suggestedKeywords = [
        "Affordable services",
        "Best rated local",
        "Near me",
        "Top rated",
        "Professional services",
        "Expert services",
        "Fast service"
      ];
      setKeywords([...keywords, ...suggestedKeywords]);
      setIsGenerating(false);
    }, 1500);
  };

  const handleNext = () => {
    navigate('/create/budget');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="googly-container py-8">
          <StepIndicator currentStep={currentStep} steps={steps} />
          
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 border">
            <h1 className="text-2xl font-bold mb-6">Keyword Targeting</h1>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="keywords">
                  Enter 15-20 relevant keywords for your business
                </Label>
                <p className="text-sm text-gray-600 mb-2">
                  Separate keywords with commas. Example: "personal injury lawyer, dog grooming Dallas"
                </p>
                <div className="flex gap-2">
                  <Textarea
                    id="keywords"
                    placeholder="Type keywords here..."
                    value={keywordsText}
                    onChange={(e) => setKeywordsText(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleAddKeywords} className="self-end">
                    Add
                  </Button>
                </div>
              </div>
              
              {keywords.length > 0 && (
                <div>
                  <Label>Your Keywords</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {keywords.map((keyword, index) => (
                      <div
                        key={index}
                        className="bg-googly-light-blue text-googly-blue px-3 py-1 rounded-full flex items-center text-sm"
                      >
                        {keyword}
                        <button
                          onClick={() => handleRemoveKeyword(index)}
                          className="ml-2 text-googly-blue hover:text-red-500"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex items-start">
                  <Lightbulb className="text-googly-yellow mr-3 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Need keyword ideas?</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Let our AI suggest relevant keywords based on your business type. This helps your ads reach the right audience.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleGenerateSuggestions}
                      disabled={isGenerating}
                    >
                      {isGenerating ? 'Generating...' : 'Get AI Suggestions'}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => navigate('/create/business')}>
                  Back
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={keywords.length < 5}
                >
                  Next Step <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              
              {keywords.length < 5 && (
                <p className="text-amber-600 text-sm">
                  Please add at least 5 keywords to continue.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default KeywordTargeting;
