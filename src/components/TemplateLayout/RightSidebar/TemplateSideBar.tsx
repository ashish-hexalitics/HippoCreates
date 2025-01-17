import React from "react";

import {
  TemplateStyle,
  TemplateSideBarProps,
} from "../../../dto/templateStyle.dto";

import TextElement from "./TextElement";
import ImageElement from "./ImageElement";
import RectangleElement from "./RectangleElement";
import LineElement from "./LineElement";
import CircleElement from "./CircleElement";
import IconElement from "./IconElement";
import SelectSectionElement from "../Section/SectionElements";
import SectionElement from "./SectionElement";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { updateElmentLayerById } from "../../../store/slices/resumeTemplateSlice/resumeDetailSlice";

const TemplateSideBar: React.FC<TemplateSideBarProps> = ({
  openThirdPartyUpload,
  roleName = null,
}) => {
  const dispatch = useAppDispatch();
  const { selectedElement, selectedElementId } = useAppSelector(
    (state) => state.resumeDetailSlice
  );

  const handleInputChange = (
    field: keyof TemplateStyle,
    value:
      | string
      | number
      | boolean
      | { label: string; name: string; showField: boolean }[]
  ) => {
    dispatch(
      updateElmentLayerById({ id: selectedElementId, data: { [field]: value } })
    );
  };

  const renderSections = () => {
    return <SelectSectionElement roleName={roleName} />;
  };

  const sections = !selectedElement && renderSections();

  return (
    <div
      style={{ width: "300px", height: "100%" }}
      className="flex flex-col bg-stone-50 p-4 shadow-lg overflow-y-scroll border-l-2 fixed right-0"
    >
      {!selectedElement ? (
        sections
      ) : (
        <>
          {selectedElement.content.startsWith("data:image/") ||
            (selectedElement.content.startsWith(
              "https://images.pexels.com"
            ) && (
              <ImageElement
                element={selectedElement}
                handleInputChange={handleInputChange}
              />
            ))}
          {selectedElement.content.startsWith("Text") && (
            <TextElement
              element={selectedElement}
              handleInputChange={handleInputChange}
              roleName={roleName}
            />
          )}
          {roleName == "admin" && (
            <>
              {selectedElement.content.startsWith("rectangle") && (
                <RectangleElement
                  element={selectedElement}
                  handleInputChange={handleInputChange}
                />
              )}
              {selectedElement.content.startsWith("circle") && (
                <CircleElement
                  element={selectedElement}
                  handleInputChange={handleInputChange}
                />
              )}
              {selectedElement.content.startsWith("line") && (
                <LineElement
                  element={selectedElement}
                  handleInputChange={handleInputChange}
                />
              )}
              {selectedElement.content.startsWith("iconify~") &&
                openThirdPartyUpload && (
                  <IconElement
                    element={selectedElement}
                    handleInputChange={handleInputChange}
                    openThirdPartyUpload={openThirdPartyUpload}
                  />
                )}
              {selectedElement.content.startsWith("Section") && (
                <SectionElement
                  element={selectedElement}
                  handleInputChange={handleInputChange}
                  roleName={roleName}
                />
              )}
            </>
          )}
          {roleName == "utilizer" && (
            <>
              {selectedElement.content.startsWith("Section") && (
                <SectionElement
                  element={selectedElement}
                  handleInputChange={handleInputChange}
                  roleName={"utilizer"}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TemplateSideBar;
