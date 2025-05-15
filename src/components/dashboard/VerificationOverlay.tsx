
import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Document {
  id: string;
  type: string;
  status: string;
}

interface VerificationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerificationOverlay: React.FC<VerificationOverlayProps> = ({ isOpen, onClose }) => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleDocumentUpload = () => {
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setSelectedDocument({
        id: 'doc-' + Date.now(),
        type: 'W-9',
        status: 'pending'
      });
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full m-4 animate-fade-in">
        <h2 className="text-xl font-bold mb-4">Verification Required</h2>
        <p className="text-gray-600 mb-4">
          Please upload the following documents:
        </p>
        <ul className="mb-4 ml-5 list-disc text-gray-600">
          <li>W-9 form</li>
          <li>IRS-issued document with business name, address, and EIN</li>
          <li>Driver's License (front and back JPG images)</li>
        </ul>
        
        {selectedDocument ? (
          <div className="bg-gray-50 p-3 rounded-md border mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                  <Upload size={16} />
                </div>
                <div>
                  <p className="font-medium text-sm">{selectedDocument.type}</p>
                  <p className="text-xs text-gray-500">
                    Status: {selectedDocument.status === 'pending' ? 'Ready to submit' : selectedDocument.status}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDocument(null)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <Button
              onClick={handleDocumentUpload}
              variant="outline"
              className="w-full justify-center"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Upload Documents'}
            </Button>
          </div>
        )}
        
        <Button 
          className="w-full" 
          disabled={!selectedDocument} 
          onClick={onClose}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default VerificationOverlay;
