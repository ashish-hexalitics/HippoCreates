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
import { useAppSelector } from "../../../store/hooks";

const TemplateSideBar: React.FC<TemplateSideBarProps> = ({
  onChange,
  addElement,
  openThirdPartyUpload,
  roleName = null,
  addSection,
}) => {
  const { selectedElement } = useAppSelector(
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
    onChange({ [field]: value });
  };

  const renderSections = () => {
    return <SelectSectionElement addSection={addSection} roleName={roleName} />;
  };

  const sections = !selectedElement && renderSections();

  return (
    <div
      style={{ width: "300px", height: "100%" }}
      className="flex flex-col bg-stone-50 p-4 shadow-lg overflow-y-scroll border-l-2"
    >
      {!selectedElement ? (
        sections
      ) : (
        <>
          {selectedElement.content.startsWith("data:image/") ||
            (selectedElement.content.startsWith("https://images.pexels.com") && (
              <ImageElement
                element={selectedElement}
                handleInputChange={handleInputChange}
              />
            ))}
          {selectedElement.content.startsWith("Text") && (
            <TextElement
              element={selectedElement}
              handleInputChange={handleInputChange}
              addElement={addElement}
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
