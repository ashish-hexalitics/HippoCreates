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
          className="p-2 text-sm font-medium text-gray-400"
        >
          Previous
        </button>
        <span className="text-sm font-medium text-white p-2 px-4 rounded-md  bg-[#3f9997]">
           {currentPage}
        </span>
        <button
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
          className="p-2 text-sm font-medium text-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
