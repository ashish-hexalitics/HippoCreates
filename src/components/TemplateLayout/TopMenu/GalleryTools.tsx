import React, { useState } from "react";
import { icons } from "../../../Icons/constant";
const { GrGallery, FaUnsplash, SiPexels, PiUploadFill, SiIconify } = icons;
import UnsplashSearch from "./UnsplashSearch";
import PexelsSearch from "./PexelsSearch";
import IconifySearch from "./IconifySearch";

function GalleryTools({
  handleFileChange,
  openThirdPartyUpload,
}: {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  openThirdPartyUpload: (imageSrc: string) => void;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [tabId, setTabId] = useState<string>("upload");

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
        <div className="absolute bg-white text-black rounded-lg shadow-lg mt-2 z-10 w-[600px]">
          <div className="p-4 flex items-center">
            <span className="font-bold text-lg text-gray-700">Library</span>
          </div>
          <div className="p-4 flex space-x-4">
            <div className="space-y-2 w-[30%]">
              <label className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <span
                  className="text-gray-600 flex items-center"
                  onClick={() => setTabId("upload")}
                >
                  <PiUploadFill className="me-2" />
                  Upload
                </span>
              </label>
              <button
                onClick={() => setTabId("unsplash")}
                className="block w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
              >
                <span className="text-gray-600 flex items-center">
                  <FaUnsplash className="me-2" /> Unsplash
                </span>
              </button>
              <button
                onClick={() => setTabId("pexels")}
                className="block w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
              >
                <span className="text-gray-600 flex items-center">
                  <SiPexels className="me-2" /> Pexels
                </span>
              </button>
              <button
                onClick={() => setTabId("icons")}
                className="block w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
              >
                <span className="text-gray-600 flex items-center">
                  <SiIconify className="me-2" /> Icons
                </span>
              </button>
            </div>
            <div className="border-l border-gray-200 p-4 w-[70%]">
              {tabId === "upload" && (
                <button className="block w-full text-left py-2 px-4 bg-primary text-white hover:bg-primary-dark rounded-md cursor-pointer">
                  <span>Upload media</span>
                </button>
              )}
              {tabId === "unsplash" && <UnsplashSearch />}
              {tabId === "pexels" && (
                <PexelsSearch onImageSelect={openThirdPartyUpload} />
              )}
              {tabId === "icons" && (
                <IconifySearch onIconSelect={openThirdPartyUpload} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryTools;
