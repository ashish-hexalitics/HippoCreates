import React from "react";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-end items-center py-2">
      <div className="flex justify-between items-center space-x-2">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className="p-2 text-sm font-medium text-gray-400 bg-[#3f9997] rounded-md hover:bg-teal-600 disabled:bg-gray-200"
        >
          Previous
        </button>
        <span className="text-sm font-medium text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
          className="p-2 text-sm font-medium text-gary-400 bg-[#3f9997] rounded-md hover:bg-teal-600 disabled:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
