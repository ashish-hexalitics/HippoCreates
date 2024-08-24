import  { useState } from "react";
import { icons } from "../../../Icons/constant";

const { CgFormatText } = icons;

const textOptions = [
  { label: "Heading 1", tag: "h1" },
  { label: "Heading 2", tag: "h2" },
  { label: "Heading 3", tag: "h3" },
  { label: "Heading 4", tag: "h4" },
  { label: "Heading 5", tag: "h5" },
  { label: "Heading 6", tag: "h6" },
  { label: "Paragraph", tag: "p" },
  { label: "Link", tag: "a" },
];

function TextTools({
  addElement,
}: {
  addElement: (el: { name: string; value: string }) => void;
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (tag: string) => {
    addElement({ name: "", value: tag });
    setShowDropdown(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="p-2 bg-primary text-white rounded-md hover:bg-gray-600 transition flex flex-col justify-center items-center"
      >
        <CgFormatText style={{ fontSize: "20px"}} />
        <span  style={{fontSize:'10px'}}>Add Text</span>
      </button>

      {showDropdown && (
        <div className="absolute bg-white w-72 text-black rounded-lg shadow-lg mt-2 px-4 py-2 space-y-2 z-10">
          {textOptions.map((option) => (
            <div
              key={option.tag}
              onClick={() => handleSelect(option.tag)}
              className="py-2 px-4 text-gray-600 bg-gray-100 cursor-pointer rounded-md"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TextTools;
