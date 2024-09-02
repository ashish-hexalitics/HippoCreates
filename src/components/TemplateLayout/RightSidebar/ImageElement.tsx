import { TemplateStyle } from "../../../dto/templateStyle.dto";
import { filterStyles, shadowStyles } from "../constant";

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
  const selectedFilter: string =
    (typeof element.filter === "string" && filterStyles[element.filter]) ||
    "none";

  return (
    <>
      <h3 className="text-gray-800 font-bold mb-4 font-sans">
        Image Customization
      </h3>

      <div className="mb-4">
        <label className="block text-black mb-2">Image Preview:</label>
        <div className="border rounded p-2 mb-2 flex items-center justify-center">
          <img
            src={element.content}
            alt="Preview"
            style={{
              width: "auto",
              height: 100,
              objectFit: "cover",
              borderRadius: `${element.borderRadius}px`,
              border: `${element.borderWidth}px solid ${element.borderColor}`,
              boxShadow: element.boxShadow,
              opacity: Number(element.opacity) / 100 || 1,
              filter: selectedFilter,
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

      <div className="mb-4">
        <label className="block text-black mb-2">Opacity:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={element.opacity || 100}
          onChange={(e) =>
            handleInputChange("opacity", parseInt(e.target.value))
          }
          className="w-full rounded-md"
          style={{
            accentColor: "#3f9997",
            WebkitAppearance: "none",
            background: "#ddd",
          }}
        />
        <span>{element.opacity || 100} %</span>
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Shadow:</label>
        <div className="flex justify-between">
          {Object.keys(shadowStyles).length > 0 &&
            Object.keys(shadowStyles).map((key: string) => {
              return (
                <button
                  key={key}
                  className={`p-2 border rounded ${
                    element.boxShadow === shadowStyles[key]
                      ? "bg-[#3f9997] text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleInputChange("boxShadow", shadowStyles[key])
                  }
                >
                  {key}
                </button>
              );
            })}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Filter:</label>
        <div className="flex flex-wrap">
          {Object.keys(filterStyles).map((filter) => (
            <button
              key={filter}
              className={`p-2 m-1 border rounded ${
                element.filter === filter ? "bg-[#3f9997] text-white" : ""
              }`}
              onClick={() => handleInputChange("filter", filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Blur:</label>
        <input
          type="number"
          value={element.blur || 0}
          onChange={(e) => handleInputChange("blur", parseInt(e.target.value))}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">Overlay:</label>
        <input
          type="checkbox"
          checked={element.overlay || false}
          onChange={(e) =>
            handleInputChange("overlay", e.target.checked ? 1 : 0)
          }
          className="border rounded"
        />
      </div>
    </>
  );
}

export default ImageElement;
