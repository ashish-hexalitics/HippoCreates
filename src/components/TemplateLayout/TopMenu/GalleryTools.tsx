import React, { useState } from "react";
import { icons } from "../../../Icons/constant";
const { GrGallery } = icons;

function GalleryTools({
  handleFileChange,
  openThirdPartyUpload,
}: {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  openThirdPartyUpload: () => void;
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="p-2 bg-primary text-white rounded-md hover:bg-gray-600 transition"
      >
        <GrGallery style={{ fontSize: "20px" }} />
      </button>

      {showDropdown && (
        <div className="absolute bg-white text-black rounded-lg shadow-lg mt-2 z-10 w-72">
          <div className="p-4">
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-bold text-lg text-gray-700">Library</span>
            </div>

            <div className="space-y-2">
              <label className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <span className="text-gray-600">Upload from Local</span>
              </label>
              <button
                onClick={openThirdPartyUpload}
                className="block w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
              >
                <span className="text-gray-600">Upload from Unsplash</span>
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 p-4">
            <button className="block w-full text-left py-2 px-4 bg-primary text-white hover:bg-primary-dark rounded-md cursor-pointer">
              <span>Upload media</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryTools;
