import React, { useState } from "react";
import { icons } from "../../Icons/constant";
const {
  CgFormatText,
  GrGallery,
  RiCheckboxBlankCircleLine,
  IoTabletLandscapeSharp,
  IoTabletPortraitSharp,
  CiZoomIn,
  CiZoomOut,
  MdOutlineZoomInMap,
  BsSave2,
  RiCheckboxBlankLine,
  FaRegWindowMinimize,
  FaArrowsToEye,
} = icons;

interface ITopBar {
  addElement: () => void;
  toggleOrientation: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  zoomLevel: number;
  setIsModalOpen: React.ComponentState;
  isPortrait: React.ComponentState;
  onUpload: (file: File) => void;
  addShape: (shape: string) => void;
}

function TopBar({
  addElement,
  toggleOrientation,
  zoomIn,
  zoomOut,
  resetZoom,
  zoomLevel,
  isPortrait,
  setIsModalOpen,
  onUpload,
  addShape,
}: ITopBar) {
  const [showShapeDropdown, setShowShapeDropdown] = useState(false);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onUpload(event.target.files[0]);
    }
  };

  const handleShapeSelect = (shape: string) => {
    setSelectedShape(shape);
    addShape(shape);
    setShowShapeDropdown(false);
  };

  return (
    <div className="grid grid-cols-3 bg-gray-700 px-4 py-2">
      <div>
        <button
          onClick={addElement}
          className="py-2 bg-primary text-white rounded-md hover:bg-gray-600 transition"
        >
          <CgFormatText style={{ fontSize: "20px", margin: "0 10px" }} />
        </button>
        <button className="py-2 bg-primary text-white rounded-md hover:bg-gray-600 transition">
          <label className="gallery-upload py-2 bg-primary text-white rounded-md hover:bg-gray-600 transition">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <GrGallery style={{ fontSize: "20px", margin: "0 10px" }} />
          </label>
        </button>

        {/* Custom Dropdown for Shapes */}
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
            <div className="absolute bg-white w-50 text-black rounded-md shadow-md mt-2 w-full z-10">
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
      </div>
      <div className="flex items-center">
        <button
          onClick={zoomOut}
          className="py-2 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          <CiZoomOut />
        </button>
        <input className="px-2" value={`${Math.round(zoomLevel * 100)}%`} />
        <button
          onClick={zoomIn}
          className="py-2 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          <CiZoomIn />
        </button>
        <button
          onClick={resetZoom}
          className="ml-2 py-2 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          <MdOutlineZoomInMap />
        </button>
      </div>
      <div className="flex justify-end">
        <button
          // onClick={() => setIsModalOpen(true)}
          className="text-white rounded-md hover:bg-gray-600 transition py-2 px-4"
        >
          <FaArrowsToEye style={{ fontSize: "20px", margin: "0 10px" }} />
        </button>
        <button
          onClick={toggleOrientation}
          className="text-white rounded-md hover:bg-gray-600 transition py-2 px-4"
        >
          {isPortrait ? <IoTabletLandscapeSharp /> : <IoTabletPortraitSharp />}
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-4 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          <BsSave2 style={{ fontSize: "20px", margin: "0 10px" }} />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
