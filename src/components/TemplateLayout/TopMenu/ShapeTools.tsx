// import React from 'react'
import { icons } from "../../../Icons/constant";
const {
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankLine,
  FaRegWindowMinimize,
} = icons;

interface ShapeToolsProps {
  selectedShape: string | null;
  setShowShapeDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  showShapeDropdown: boolean;
  handleShapeSelect: (shape: "rectangle" | "circle" | "line") => void;
}

function ShapeTools({
  selectedShape,
  setShowShapeDropdown,
  showShapeDropdown,
  handleShapeSelect,
}: ShapeToolsProps) {
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowShapeDropdown(!showShapeDropdown)}
        className="text-white rounded-md py-2 px-4 ml-2 flex items-center"
      >
        {selectedShape === "rectangle" && (
          <div className="flex items-center cursor-pointer">
            <RiCheckboxBlankLine className="mr-2" /> Rectangle
          </div>
        )}
        {selectedShape === "circle" && (
          <div className="flex items-center cursor-pointer">
            <RiCheckboxBlankCircleLine className="mr-2" /> Circle
          </div>
        )}
        {selectedShape === "line" && (
          <div className="flex items-center cursor-pointer">
            <FaRegWindowMinimize className="mr-2" /> Line
          </div>
        )}
        {selectedShape === null && "Select Shape"}
      </button>

      {showShapeDropdown && (
        <div className="absolute bg-white text-black rounded-md shadow-md mt-2 w-full z-10">
          <div
            onClick={() => handleShapeSelect("circle")}
            className="py-2 px-4 hover:bg-gray-200 flex items-center cursor-pointer"
          >
            <RiCheckboxBlankCircleLine className="mr-2" /> Circle
          </div>
          <div
            onClick={() => handleShapeSelect("rectangle")}
            className="py-2 px-4 hover:bg-gray-200 flex items-center cursor-pointer"
          >
            <RiCheckboxBlankLine className="mr-2" /> Rectangle
          </div>
          <div
            onClick={() => handleShapeSelect("line")}
            className="py-2 px-4 hover:bg-gray-200 flex items-center cursor-pointer"
          >
            <FaRegWindowMinimize className="mr-2" /> Line
          </div>
        </div>
      )}
    </div>
  );
}

export default ShapeTools;
