import React from "react";

interface IModalProps {
  isOpen: boolean;
  onClose?: () => void;
  handlSave?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  handlSave,
  children,
  title = "",
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed z-10 inset-y-0 right-0 max-w-full w-full sm:w-1/3 bg-gray-100 shadow-xl transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full flex flex-col">
          <div className="w-full flex justify-between items-center px-6 py-4 bg-[#3f9997] border-b">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-white-600 font-medium hover:text-white focus:outline-none"
            >
              Close
            </button>
          </div>
          <div className="flex-grow mt-6 px-6">{children}</div>
          <div className="w-full flex items-center justify-end px-6 py-2 bg-white border-t">
            <button
              type="submit"
              onClick={handlSave}
              className="bg-[#3f9997] text-white py-2 px-4 rounded-md hover:bg-[#36908c] focus:outline-none focus:bg-[#36908c]"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
