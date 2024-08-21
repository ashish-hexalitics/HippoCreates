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
function ImageElement({
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
  );
}

export default ImageElement;
