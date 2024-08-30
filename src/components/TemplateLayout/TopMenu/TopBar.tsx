import React, { useState } from "react";
import { icons } from "../../../Icons/constant";
const {
  IoTabletLandscapeSharp,
  IoTabletPortraitSharp,
  BsSave2,
  FaArrowsToEye,
} = icons;
import TextTools from "./TextTools";
import ShapeTools from "./ShapeTools";
import GalleryTools from "./GalleryTools";

import { ITopBar } from "../../../dto/templateStyle.dto";
import ZoomTools from "./ZoomTools";

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
  setIsViewModalOpen,
  openThirdPartyUpload,
  roleName,
}: ITopBar) {
  const [showShapeDropdown, setShowShapeDropdown] = useState(false);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onUpload && onUpload(event.target.files[0]);
    }
  };

  const handleShapeSelect = (shape: string) => {
    setSelectedShape(shape);
    addShape(shape);
    setShowShapeDropdown(false);
  };

  return (
    <div className="grid grid-cols-3 bg-gray-700 px-4 py-2 h-full">
      <div>
        {addElement && <TextTools addElement={addElement} />}
        {openThirdPartyUpload && onUpload && (
          <GalleryTools
            handleFileChange={handleFileChange}
            openThirdPartyUpload={openThirdPartyUpload}
          />
        )}
        {addShape && (
          <ShapeTools
            selectedShape={selectedShape}
            setShowShapeDropdown={setShowShapeDropdown}
            showShapeDropdown={showShapeDropdown}
            handleShapeSelect={handleShapeSelect}
          />
        )}
      </div>
      <ZoomTools
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        resetZoom={resetZoom}
        zoomLevel={zoomLevel}
      />
      <div className="flex justify-end">
        <button
          onClick={() => setIsViewModalOpen(true)}
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
