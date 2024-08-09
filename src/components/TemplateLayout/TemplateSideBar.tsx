import React from "react";

interface TemplateStyle {
  fontWeight?: string;
  fontSize?: number;
  color?: string;
  x: number;
  y: number;
  content: string;
  padding?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  boxShadow?: string;
  imageUrl?: string;
}

interface TemplateSideBarProps {
  element: TemplateStyle | undefined;
  onChange: (data: Partial<TemplateStyle>) => void;
}

const TemplateSideBar: React.FC<TemplateSideBarProps> = ({
  element,
  onChange,
}) => {
  if (!element) return <div className="p-4">Select an element to customize.</div>;

  const handleInputChange = (
    field: keyof TemplateStyle,
    value: string | number
  ) => {
    onChange({ [field]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onChange({ imageUrl: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{ width: "300px", height: "100%" }}
      className="flex flex-col bg-white p-4 shadow-lg"
    >
      {element.content.startsWith("data:image/") && (
        <>
          <h3 className="text-black font-bold mb-4">Image Customization</h3>

          <div className="mb-4">
            <label className="block text-black mb-2">Image Preview:</label>
            <div className="border rounded p-2 mb-2">
              <img
                src={element.imageUrl}
                alt="Preview"
                style={{
                  width: "100%",
                  borderRadius: `${element.borderRadius}px`,
                  border: `${element.borderWidth}px solid ${element.borderColor}`,
                  boxShadow: element.boxShadow,
                }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Border Radius:</label>
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
            <label className="block text-black mb-2">Border Color:</label>
            <input
              type="color"
              value={element.borderColor || "#000000"}
              onChange={(e) => handleInputChange("borderColor", e.target.value)}
              className="w-full border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Border Width:</label>
            <input
              type="number"
              value={element.borderWidth || 0}
              onChange={(e) =>
                handleInputChange("borderWidth", parseInt(e.target.value))
              }
              className="w-full border rounded px-2 py-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Box Shadow:</label>
            <input
              type="text"
              placeholder="e.g., 5px 5px 10px #888888"
              value={element.boxShadow || ""}
              onChange={(e) => handleInputChange("boxShadow", e.target.value)}
              className="w-full border rounded px-2 py-1"
            />
          </div>
        </>
      )}

      {element.content.startsWith("data:image/") || (
        <>
          <h3 className="text-black font-bold mb-4">Text Customization</h3>

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
              onChange={(e) =>
                handleInputChange("x", parseInt(e.target.value))
              }
              className="w-full border rounded px-2 py-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Y Position:</label>
            <input
              type="number"
              value={element.y}
              onChange={(e) =>
                handleInputChange("y", parseInt(e.target.value))
              }
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
      )}
    </div>
  );
};

export default TemplateSideBar;
