import React from 'react';

interface TempAccessModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function TempAccessModal({ onClose, onConfirm }: TempAccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-pink-100 rounded-lg shadow-xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-center text-pink-700 mb-4">
          Temporary Access
        </h3>
        
        <div className="text-center mb-4">
          <p className="text-pink-800 mb-2">
            Temporary access will be granted for 30 minutes.
          </p>
          <p className="text-red-500 font-semibold">
            Warning: Access will automatically expire
          </p>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-pink-300 text-pink-800 rounded hover:bg-pink-400"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}