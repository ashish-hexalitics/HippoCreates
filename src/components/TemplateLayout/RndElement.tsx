import { Rnd } from "react-rnd";
const a4Portrait = { width: 794, height: 1123 };
const a4Landscape = { width: 1123, height: 794 };

interface Element {
  id: number;
  x: number;
  y: number;
  width: number | string;
  height: number | string;
  content: string;
  color: string;
  fontSize: number;
  fontWeight: string;
  padding: number;
  borderRadius?: number;
  borderStroke?: string;
  boxShadow?: string;
  imagePreview?: string;
}

interface IRNDElement {
  isPortrait: React.ComponentState;
  elements: Element[];
  zoomLevel: number;
  handleDrag: (x: number, y: number) => void;
  handleDragStop: (id: number, x: number, y: number) => void;
  setSelectedElementId: React.ComponentState;
  handleResizeStop: (id: number, x: number, y: number) => void;
  handleContentChange: (e: React.FormEvent<HTMLDivElement>, id: number) => void;
  guideLines: React.ComponentState;
}

function RndElement({
  isPortrait,
  zoomLevel,
  elements,
  handleDrag,
  handleDragStop,
  setSelectedElementId,
  handleResizeStop,
  handleContentChange,
  guideLines,
}: IRNDElement) {
  return (
    <div
      id="template-container"
      className="border border-gray-300 bg-white relative overflow-hidden"
      style={{
        width: `${
          (isPortrait ? a4Portrait.width : a4Landscape.width) * zoomLevel
        }px`,
        height: `${
          (isPortrait ? a4Portrait.height : a4Landscape.height) * zoomLevel
        }px`,
        margin: "auto",
        transformOrigin: "top left",
        transform: `scale(${zoomLevel})`,
      }}
    >
      {elements.map((el) => (
        <Rnd
          key={el.id}
          size={{ width: el.width, height: el.height }}
          position={{ x: el.x, y: el.y }}
          onDrag={(e, d) => handleDrag(d.x, d.y)}
          onDragStop={(e, d) => {
            handleDragStop(el.id, d.x, d.y);
            setSelectedElementId(el.id);
          }}
          onResizeStop={(e, direction, ref, delta, position) =>
            handleResizeStop(el.id, ref.offsetWidth, ref.offsetHeight)
          }
          onClick={() => setSelectedElementId(el.id)}
          bounds="parent"
        >
          <div
            className="cursor-pointer hover:outline-dotted hover:outline-blue-400"
            style={{
              color: el.color,
              fontSize: `${el.fontSize}px`,
              fontWeight: el.fontWeight,
              padding: `${el.padding}px`,
            }}
          >
            {el.content === "rectangle" && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: el.color,
                }}
                className="border"
              ></div>
            )}
            {el.content === "circle" && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: el.color,
                }}
                className="border"
              ></div>
            )}
            {el.content === "line" && (
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: el.color,
                }}
              ></div>
            )}
            {el.content !== "rectangle" &&
              el.content !== "circle" &&
              el.content !== "line" &&
              !el.content.startsWith("data:image/") && (
                <div
                  contentEditable={!el.content.startsWith("data:image/")}
                  dangerouslySetInnerHTML={{ __html: el.content }}
                />
              )}
            {el.content.startsWith("data:image/") && (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundImage: `url(${el.content})`,
                  backgroundSize: "cover",
                  borderRadius: el.borderRadius || 0,
                  border: el.borderStroke || "none",
                  boxShadow: el.boxShadow || "none",
                }}
              ></div>
            )}
          </div>
        </Rnd>
      ))}
      {/* Guide lines */}
      {guideLines.x !== null && (
        <div
          className="absolute bg-blue-500"
          style={{
            left: `${guideLines.x}px`,
            top: 0,
            width: "2px",
            height: "100%",
            zIndex: 10,
          }}
        />
      )}
      {guideLines.y !== null && (
        <div
          className="absolute bg-blue-500"
          style={{
            top: `${guideLines.y}px`,
            left: 0,
            width: "100%",
            height: "2px",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
}

export default RndElement;
