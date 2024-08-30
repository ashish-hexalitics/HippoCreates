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

const TemplateSideBar: React.FC<TemplateSideBarProps> = ({
  element,
  onChange,
  addElement,
  openThirdPartyUpload,
  roleName = null,
}) => {
  if (!element)
    return <div className="p-4">Select an element to customize.</div>;

  const handleInputChange = (
    field: keyof TemplateStyle,
    value: string | number
  ) => {
    onChange({ [field]: value });
  };

  return (
    <div
      style={{ width: "300px", height: "100%" }}
      className="flex flex-col bg-white p-4 shadow-lg overflow-y-scroll"
    >
      {element.content.startsWith("data:image/") ||
        (element.content.startsWith("https://images.pexels.com") && (
          <ImageElement
            element={element}
            handleInputChange={handleInputChange}
          />
        ))}
      {element.content.startsWith("Text") && (
        <TextElement
          element={element}
          handleInputChange={handleInputChange}
          addElement={addElement}
          roleName={roleName}
        />
      )}
      {roleName === "admin" && (
        <>
          {element.content.startsWith("rectangle") && (
            <RectangleElement
              element={element}
              handleInputChange={handleInputChange}
            />
          )}
          {element.content.startsWith("circle") && (
            <CircleElement
              element={element}
              handleInputChange={handleInputChange}
            />
          )}
          {element.content.startsWith("line") && (
            <LineElement
              element={element}
              handleInputChange={handleInputChange}
            />
          )}
          {element.content.startsWith("iconify~") && openThirdPartyUpload && (
            <IconElement
              element={element}
              handleInputChange={handleInputChange}
              openThirdPartyUpload={openThirdPartyUpload}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TemplateSideBar;
