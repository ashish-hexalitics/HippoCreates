import React, { useState } from "react";

interface PDFSizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (size: string) => void;
}

const PDFSizeModal: React.FC<PDFSizeModalProps> = ({ isOpen, onClose, onSave }) => {
  const [selectedSize, setSelectedSize] = useState<string>("A4");

  const handleSave = () => {
    onSave(selectedSize);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">Select PDF Size</h2>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mb-4 p-2 border rounded-md w-full"
        >
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="A3">A3</option>
          <option value="A5">A5</option>
        </select>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFSizeModal;
