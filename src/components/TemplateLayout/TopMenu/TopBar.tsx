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
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  addNewElementLayer,
  updateIsPortraitValue,
} from "../../../store/slices/resumeTemplateSlice/resumeDetailSlice";

function TopBar({
  setIsModalOpen,
  setIsViewModalOpen,
  openThirdPartyUpload,
  roleName,
}: ITopBar) {
  const [showShapeDropdown, setShowShapeDropdown] = useState(false);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);

  const {
    configration: { isPortrait },
  } = useAppSelector((state) => state.resumeDetailSlice);

  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target?.result, "e.target?.result");
        dispatch(
          addNewElementLayer({
            elem: {},
            content: e.target?.result as string,
          })
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShapeSelect = (shape: string) => {
    setSelectedShape(shape);
    dispatch(
      addNewElementLayer({
        elem: {},
        content: shape,
      })
    );
    setShowShapeDropdown(false);
  };

  const toggleOrientation = () => {
    dispatch(updateIsPortraitValue(!isPortrait));
  };

  return (
    <div style={{ height: "60px" }}>
      <div className="grid grid-cols-3 bg-gray-700 px-4 py-2 h-full">
        <div>
          {roleName === "admin" && (
            <>
              <TextTools />
              {openThirdPartyUpload && (
                <GalleryTools
                  handleFileChange={handleFileChange}
                  openThirdPartyUpload={openThirdPartyUpload}
                />
              )}
              <ShapeTools
                selectedShape={selectedShape}
                setShowShapeDropdown={setShowShapeDropdown}
                showShapeDropdown={showShapeDropdown}
                handleShapeSelect={handleShapeSelect}
              />
            </>
          )}
        </div>
        <ZoomTools />
        <div className="flex justify-end">
          <button
            onClick={() => {
              setIsViewModalOpen(true);
            }}
            className="text-white rounded-md hover:bg-gray-600 transition py-2 px-4"
          >
            <FaArrowsToEye style={{ fontSize: "20px", margin: "0 10px" }} />
          </button>
          <button
            onClick={toggleOrientation}
            className="text-white rounded-md hover:bg-gray-600 transition py-2 px-4"
          >
            {isPortrait ? (
              <IoTabletLandscapeSharp />
            ) : (
              <IoTabletPortraitSharp />
            )}
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-4 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
          >
            <BsSave2 style={{ fontSize: "20px", margin: "0 10px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
