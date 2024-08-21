import React from "react";

interface TemplateStyle {
  fontWeight?: string;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  x: number;
  y: number;
  content: string;
  padding?: number;
  borderRadius?: number;
  borderColor?: string;
  strockColor?: string;
  borderWidth?: number;
  boxShadow?: string;
  imageUrl?: string;
  width?: number | string;
  height?: number | string;
  strockHeight?: number | string;
  borderEnabled?: boolean;
}
function RectangleElement({
  element,
  handleInputChange,
}: {
  handleInputChange: (
    field: keyof TemplateStyle,
    value: string | number
  ) => void;
  element: TemplateStyle;
}) {
  return (
    <>
      <h3 className="text-black font-bold mb-4">Rectangle Customization</h3>

      <div className="mb-4">
        <label className="block text-black mb-2">Content:</label>
        <input
          type="text"
          value={element.content}
          onChange={(e) => handleInputChange("content", e.target.value)}
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
        <label className="block text-black mb-2">Width:</label>
        <input
          type="number"
          value={element.width}
          onChange={(e) => handleInputChange("width", parseInt(e.target.value))}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Height:</label>
        <input
          type="number"
          value={element.height}
          onChange={(e) =>
            handleInputChange("height", parseInt(e.target.value))
          }
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Background Color:</label>
        <input
          type="color"
          value={element.backgroundColor || "#000000"}
          onChange={(e) => handleInputChange("backgroundColor", e.target.value)}
          className="w-full border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Curve (Border Radius):</label>
        <input
          type="number"
          value={element.borderRadius || 0}
          onChange={(e) =>
            handleInputChange("borderRadius", parseInt(e.target.value))
          }
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Border Enabled:</label>
        <input
          type="checkbox"
          checked={element.borderEnabled || false}
          onChange={(e: React.ChangeEvent) =>
            handleInputChange("borderEnabled", e.target?.checked)
          }
          className="mr-2"
        />
        {element.borderEnabled && (
          <>
            <label className="block text-black mb-2">Border Color:</label>
            <input
              type="color"
              value={element.borderColor || "#000000"}
              onChange={(e) => handleInputChange("borderColor", e.target.value)}
              className="w-full border rounded"
            />

            <label className="block text-black mb-2">Border Width:</label>
            <input
              type="number"
              value={element.borderWidth || 1}
              onChange={(e) =>
                handleInputChange("borderWidth", parseInt(e.target.value))
              }
              className="w-full border rounded px-2 py-1"
            />
          </>
        )}
      </div>
    </>
  );
}

export default RectangleElement;
