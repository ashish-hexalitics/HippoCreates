import React from "react";

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleAction?: () => void;
  children: React.ReactNode;
  title?: string;
}

const ViewModal: React.FC<ViewModalProps> = ({
  isOpen,
  onClose,
  handleAction,
  children,
  title = "",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 overflow-hidden transform transition-all duration-300 scale-100 animate-slideUp">
        <div className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 border-b">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &#x2715;
          </button>
        </div>
        <div className="px-6 py-2 overflow-scroll">{children}</div>
        <div className="flex items-center justify-end px-6 py-2 bg-gray-100 border-t space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          {handleAction && (
            <button
              onClick={handleAction}
              className="bg-[#3f9997] text-white py-2 px-4 rounded-md hover:bg-[#36908c] focus:outline-none focus:bg-[#36908c]"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
