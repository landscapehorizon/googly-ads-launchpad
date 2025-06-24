
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import ChatBot from '@/components/ChatBot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, ArrowRight, X, Image, Youtube } from 'lucide-react';

const steps = [
  "Account Setup",
  "Upload Assets",
  "Business Details",
  "Keyword Targeting",
  "Budget Setup",
  "Checkout"
];

const UploadAssets = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [youtubeLink, setYoutubeLink] = useState<string>('');
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = [...uploadedImages];
      for (let i = 0; i < e.target.files.length; i++) {
        if (newImages.length < 25) {
          newImages.push(URL.createObjectURL(e.target.files[i]));
        }
      }
      setUploadedImages(newImages);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  const handleNext = () => {
    navigate('/create/business');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="googly-container py-8">
          <StepIndicator currentStep={currentStep} steps={steps} />
          
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 border">
            <h1 className="text-2xl font-bold mb-6">Upload Creative Assets</h1>
            
            <div className="space-y-6">
              <div>
                <Label className="text-lg">Images (up to 25)</Label>
                <p className="text-sm text-gray-600 mb-2">
                  Upload images for your ads. Google recommends a variety of sizes and orientations.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                  {uploadedImages.map((img, index) => (
                    <div key={index} className="relative aspect-square bg-gray-100 rounded-md overflow-hidden">
                      <img src={img} alt={`Asset ${index + 1}`} className="w-full h-full object-cover" />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-1 right-1 w-6 h-6"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <X size={12} />
                      </Button>
                    </div>
                  ))}
                  
                  {uploadedImages.length < 25 && (
                    <label className="aspect-square bg-gray-100 rounded-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                      <Image size={24} className="text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500">Upload Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  )}
                </div>
                
                <div className="text-sm text-gray-600">
                  {uploadedImages.length} of 25 images uploaded
                </div>
              </div>
              
              <div>
                <Label className="text-lg">YouTube Video (optional)</Label>
                <p className="text-sm text-gray-600 mb-2">
                  Provide a YouTube link to enhance your ads. Recommended length: 15-30 seconds.
                </p>
                
                <div className="flex items-center space-x-2">
                  <Youtube size={20} className="text-red-500" />
                  <Input
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={youtubeLink}
                    onChange={(e) => setYoutubeLink(e.target.value)}
                  />
                  {youtubeLink && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setYoutubeLink('')}
                    >
                      <X size={16} />
                    </Button>
                  )}
                </div>
              </div>
              
              <div>
                <Label className="text-lg">Brand Logo</Label>
                <p className="text-sm text-gray-600 mb-2">
                  Upload your company logo to display in your ads.
                </p>
                
                {uploadedLogo ? (
                  <div className="relative w-32 h-32 bg-gray-100 rounded-md overflow-hidden mb-2">
                    <img
                      src={uploadedLogo}
                      alt="Brand Logo"
                      className="w-full h-full object-contain"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 w-6 h-6"
                      onClick={() => setUploadedLogo(null)}
                    >
                      <X size={12} />
                    </Button>
                  </div>
                ) : (
                  <label className="block w-32 h-32 bg-gray-100 rounded-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 mb-2">
                    <Upload size={24} className="text-gray-400 mb-2" />
                    <span className="text-xs text-gray-500">Upload Logo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoUpload}
                    />
                  </label>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => navigate('/create')}>
                  Back
                </Button>
                <Button onClick={handleNext}>
                  Next Step <ArrowRight size={16} className="ml-2" />
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

export default UploadAssets;
