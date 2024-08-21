import { useState } from "react";
import { Rnd } from "react-rnd";
import { pixelsToCm } from "./constant";
const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };
const a4Landscape = { width: pixelsToCm(1123), height: pixelsToCm(794) };

import { IRNDElement } from "../../dto/element.dto";

function RndElement({
  isPortrait,
  zoomLevel,
  elements,
  setElements,
  handleDrag,
  handleDragStop,
  setSelectedElementId,
  handleResizeStop,
  // handleContentChange,
  guideLines,
}: IRNDElement) {
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    elementId: number | null;
  }>({ visible: false, x: 0, y: 0, elementId: null });

  const handleContextMenu = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      elementId: id,
    });
  };

  const bringToFront = () => {
    if (contextMenu.elementId !== null) {
      const index = elements.findIndex((el) => el.id === contextMenu.elementId);
      const newElements = [...elements];
      const [element] = newElements.splice(index, 1);
      newElements.push(element);
      setElements(newElements);
    }
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };

  const sendToBack = () => {
    if (contextMenu.elementId !== null) {
      const index = elements.findIndex((el) => el.id === contextMenu.elementId);
      const newElements = [...elements];
      const [element] = newElements.splice(index, 1);
      newElements.unshift(element);
      setElements(newElements);
    }
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };

  const closeContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };
  // console.log(elements)
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
        transform: `transalate(-50%,-50%) scale(${zoomLevel})`,
      }}
      onClick={closeContextMenu}
    >
      {elements.map((el) => (
        <Rnd
          key={el.id}
          size={{ width: el.width, height: el.height }}
          position={{ x: el.x, y: el.y }}
          onDrag={(e, d) => {
            console.log(e);
            handleDrag(d.x, d.y);
          }}
          onDragStop={(e, d) => {
            console.log(e);
            handleDragStop(el.id, d.x, d.y);
            setSelectedElementId(el.id);
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            console.log(e, direction, ref, delta, position);
            handleResizeStop(el.id, ref.offsetWidth, ref.offsetHeight);
          }}
          onContextMenu={(e: any) => handleContextMenu(e, el.id)}
          onClick={() => setSelectedElementId(el.id)}
          bounds="parent"
        >
          <div
            className="cursor-pointer hover:outline-dotted hover:outline-blue-400 relative"
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
                  width: el.width,
                  height: el.height,
                  backgroundColor: el.backgroundColor,
                  borderRadius: el.borderRadius,
                  border: el.borderWidth
                    ? `${el.borderWidth}px solid ${el.borderColor}`
                    : "",
                  boxShadow: el.boxShadow,
                }}
                className="border"
              ></div>
            )}
            {el.content === "circle" && (
              <div
                style={{
                  width: el.width,
                  height: el.height,
                  borderRadius: el.borderRadius || "50%",
                  backgroundColor: el.backgroundColor || "#f2f2f2",
                  borderWidth: `${el.borderWidth}px` || "2px",
                  borderColor: el.borderColor || "blue",
                  borderStyle: "solid",
                  boxShadow: el.boxShadow,
                }}
              ></div>
            )}
            {el.content === "line" && (
              <div
                style={{
                  width: el.width,
                  height: el.strockHeight || "2px",
                  backgroundColor: el.strockColor || "#000",
                }}
              ></div>
            )}
            {el.content !== "rectangle" &&
              el.content !== "circle" &&
              el.content !== "line" &&
              !el.content.startsWith("data:image/") && (
                <div
                  contentEditable={!el.content.startsWith("data:image/")}
                  dangerouslySetInnerHTML={{
                    __html: el.name
                      ? `${el.name} : ${el.value}`
                      : `${el.value}` || "",
                  }}
                />
              )}
            {el.content.startsWith("data:image/") && (
              <div
                style={{
                  width: el.width,
                  height: el.height,
                  backgroundImage: `url(${el.content})`,
                  backgroundSize: "cover",
                  borderRadius: el.borderRadius,
                  border: el.borderWidth
                    ? `${el.borderWidth}px solid ${el.borderColor}`
                    : "",
                  boxShadow: el.boxShadow,
                }}
              ></div>
            )}
          </div>
        </Rnd>
      ))}
      {contextMenu.visible && (
        <div
          style={{
            position: "absolute",
            top: contextMenu.y,
            left: contextMenu.x,
            transform: `translate(-50%,-50%)`,
            backgroundColor: "white",
            border: "1px solid #ccc",
            zIndex: 999,
          }}
        >
          <div
            onClick={bringToFront}
            className="p-2 cursor-pointer hover:bg-gray-200"
          >
            Bring to Front
          </div>
          <div
            onClick={sendToBack}
            className="p-2 cursor-pointer hover:bg-gray-200"
          >
            Send to Back
          </div>
        </div>
      )}
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
