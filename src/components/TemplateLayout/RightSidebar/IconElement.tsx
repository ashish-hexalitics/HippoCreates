import { useState } from "react";
import IconifySearch from "../TopMenu/IconifySearch";

import { TemplateStyle } from "../../../dto/templateStyle.dto";

function iconElement({
  element,
  handleInputChange,
  openThirdPartyUpload,
}: {
  handleInputChange: (
    field: keyof TemplateStyle,
    value: string | number
  ) => void;
  element: TemplateStyle;
  openThirdPartyUpload?: (url: string) => void;
}) {
  const [activeTab, setActiveTab] = useState("icon");

  const rendericonCustomization = () => (
    <>
      <div className="mb-4">
        <label className="block text-black mb-2">Value:</label>
        <input
          type="text"
          value={element.content.split("~")[1]}
          onChange={(e) => handleInputChange("value", e.target.value)}
          className="w-full border rounded px-2 py-1"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-black mb-2">X Position:</label>
        <input
          type="number"
          value={element.x}
          onChange={(e) => handleInputChange("x", parseInt(e.target.value))}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Y Position:</label>
        <input
          type="number"
          value={element.y}
          onChange={(e) => handleInputChange("y", parseInt(e.target.value))}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black mb-2">Width:</label>
        <input
          type="number"
          value={element.width}
          onChange={(e) => handleInputChange("width", parseInt(e.target.value))}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black mb-2">Color:</label>
        <input
          type="color"
          value={element.color || "#000000"}
          onChange={(e) => handleInputChange("color", e.target.value)}
          className="w-full border rounded"
        />
      </div>
    </>
  );

  const renderAddIconFields = () => (
    <>
      <div className="mb-4 h-full">
        <IconifySearch onIconSelect={openThirdPartyUpload} />
      </div>
    </>
  );

  return (
    <div>
      <div className="flex mb-4">
        <button
          className={`p-2 border-b-2 font-medium text-sm ${
            activeTab === "icon"
              ? " border-[#3f9997] "
              : "border-gray-400 text-gray-600"
          }`}
          onClick={() => setActiveTab("icon")}
        >
          Icon Customization
        </button>
        <button
          className={`p-2 border-b-2 font-medium text-sm ${
            activeTab === "addIcons"
              ? "border-[#3f9997]"
              : "border-gray-400 text-gray-600"
          }`}
          onClick={() => setActiveTab("addIcons")}
        >
          Add Icons
        </button>
      </div>

      {activeTab === "icon" && rendericonCustomization()}
      {activeTab === "addIcons" && renderAddIconFields()}
    </div>
  );
}

export default iconElement;
