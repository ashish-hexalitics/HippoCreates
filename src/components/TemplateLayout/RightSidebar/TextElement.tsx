import { useState } from "react";
import { icons } from "../../../Icons/constant";
const { IoAddCircleOutline } = icons;
const defaultSamples: { name: string; value: string }[] = [
  {
    name: "name",
    value: "your Name",
  },
  {
    name: "otherEmail",
    value: "example@example.com",
  },
  {
    name: "phone",
    value: "333322221111",
  },
  {
    name: "Gender",
    value: "male",
  },
  {
    name: "Address",
    value: "xyx.",
  },
];

import { TemplateStyle } from "../../../dto/templateStyle.dto";
import { useAppDispatch } from "../../../store/hooks";
import { addNewElementLayer } from "../../../store/slices/resumeTemplateSlice/resumeDetailSlice";

function TextElement({
  element,
  handleInputChange,
  roleName,
}: {
  handleInputChange: (
    field: keyof TemplateStyle,
    value: string | number
  ) => void;
  element: TemplateStyle;
  roleName: string | null;
}) {
  const [activeTab, setActiveTab] = useState(
    roleName === "utilizer" ? "editText" : "text"
  );

  const dispatch = useAppDispatch();

  const handleSelect = (data: { name: string; value: string }) => {
    dispatch(
      addNewElementLayer({
        elem: data,
        content: "Text",
      })
    );
  };

  const renderTextCustomization = () => (
    <>
      <div className="mb-4">
        <label className="block text-black mb-2">Value:</label>
        <input
          type="text"
          value={element.value}
          onChange={(e) => handleInputChange("value", e.target.value)}
          className="w-full border rounded px-2 py-1"
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
        <label className="block text-black mb-2">Padding:</label>
        <input
          type="number"
          value={element.padding || 0}
          onChange={(e) =>
            handleInputChange("padding", parseInt(e.target.value))
          }
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Font Size:</label>
        <input
          type="number"
          value={element.fontSize || 16}
          onChange={(e) =>
            handleInputChange("fontSize", parseInt(e.target.value))
          }
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Font Weight:</label>
        <select
          value={element.fontWeight || "normal"}
          onChange={(e) => handleInputChange("fontWeight", e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="lighter">Lighter</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Text Color:</label>
        <input
          type="color"
          value={element.color || "#000000"}
          onChange={(e) => handleInputChange("color", e.target.value)}
          className="w-full border rounded"
        />
      </div>
    </>
  );

  const renderAddTextFields = () => (
    <>
      <div className="mb-4">
        <select name="" id="">
          {defaultSamples.map((defaultSample, key) => {
            return (
              <option value={defaultSample.name} key={key}>
                {defaultSample.name}
              </option>
            );
          })}
        </select>
        {defaultSamples.map(
          (defaultSample: { name: string; value: string }, key) => {
            return (
              <div
                className="mb-4 shadow-sm flex items-center border rounded p-2 relative"
                key={key}
              >
                <label className="block text-black">
                  {defaultSample.name} : {defaultSample.value}
                </label>
                <IoAddCircleOutline
                  className="absolute -right-2 text-[#3f9997] text-md"
                  onClick={() => handleSelect(defaultSample)}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );

  const renderEditText = () => (
    <>
      <div className="mb-4">
        <label className="block text-black mb-2">Value:</label>
        <input
          type="text"
          value={element.value}
          onChange={(e) => handleInputChange("value", e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
        <button className="py-2  mt-3 px-4 rounded font-medium text-md bg-[#3f9997] text-white">
          save
        </button>
      </div>
    </>
  );

  return (
    <div>
      {roleName === "admin" && (
        <div>
          <div className="flex mb-4">
            <button
              className={`p-2 border-b-2 font-medium text-sm ${
                activeTab === "text"
                  ? " border-[#3f9997] "
                  : "border-gray-400 text-gray-600"
              }`}
              onClick={() => setActiveTab("text")}
            >
              Text Customization
            </button>
            <button
              className={`p-2 border-b-2 font-medium text-sm ${
                activeTab === "addText"
                  ? "border-[#3f9997]"
                  : "border-gray-400 text-gray-600"
              }`}
              onClick={() => setActiveTab("addText")}
            >
              Add Text Fields
            </button>
          </div>
          {activeTab === "text" && renderTextCustomization()}
          {activeTab === "addText" && renderAddTextFields()}
        </div>
      )}
      {roleName === "utilizer" && (
        <div>
          <div className="flex mb-4">
            <button
              className={`p-2 border-b-2 font-medium text-sm ${
                activeTab === "editText"
                  ? " border-[#3f9997] "
                  : "border-gray-400 text-gray-600"
              }`}
              onClick={() => setActiveTab("editText")}
            >
              Edit Text Value
            </button>
          </div>
          {activeTab === "editText" && renderEditText()}
        </div>
      )}
    </div>
  );
}

export default TextElement;
