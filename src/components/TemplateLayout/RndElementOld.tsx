import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { pixelsToCm } from "./constant";
import Shaps from "./Shaps/index";
import Texts from "./Text/Text";
import Images from "./Images/Image";
import Icons from "./Icons/Icon";
import Section from "./Section/Section";
import RightClickedHandle from "./ElementHandlers/RightClickedHandle";
import ResizeHandler from "./ElementHandlers/ResizeHandler";
import { IRNDElement } from "../../dto/element.dto";

const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };
const a4Landscape = { width: pixelsToCm(1123), height: pixelsToCm(794) };

function RndElement({
  isPortrait,
  zoomLevel,
  elements,
  setElements,
  handleDrag,
  handleDragStop,
  setSelectedElementId,
  handleResizeStop,
  handleContentChange,
  guideLines,
  selectedElement,
  roleName,
}: IRNDElement) {
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    elementId: number | null;
  }>({ visible: false, x: 0, y: 0, elementId: null });
  const [selectedElementIds, setSelectedElementIds] = useState<number[]>([]);
  // const [positions, setPositions] = useState<{ [key: number]: number }>({});

  // useEffect(() => {
  //   const updatedPositions: { [key: number]: number } = {};
  //   let cumulativeHeight = 0;

  //   elements.forEach((el) => {
  //     const elementHeight:any = document.getElementById(`element-${el.id}`)
  //       ?.offsetHeight || el.height;
  //     updatedPositions[el.id] = cumulativeHeight;
  //     cumulativeHeight += elementHeight + 20;
  //   });

  //   setPositions(updatedPositions);
  // }, [elements]);


  const handleContextMenu = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    const clickedElement = elements.find((el) => el.id === id);
    const elementX = clickedElement?.x || 0;
    const elementY = clickedElement?.y || 0;

    setContextMenu({
      visible: true,
      x: elementX + e.nativeEvent.offsetX,
      y: elementY + e.nativeEvent.offsetY,
      elementId: id,
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };

  const handleElementClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();

    if (e.shiftKey) {
      setSelectedElementIds((prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((elId) => elId !== id)
          : [...prevSelected, id]
      );
    } else {
      setSelectedElementIds([id]);
    }

    setSelectedElementId(id);
  };

  const moveGroup = (dx: number, dy: number) => {
    setElements((prevElements: { id: number; x: number; y: number }[]) =>
      prevElements.map((el: { id: number; x: number; y: number }) =>
        selectedElementIds.includes(el.id)
          ? { ...el, x: el.x + dx, y: el.y + dy }
          : el
      )
    );
  };

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
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElementId(null);
        closeContextMenu();
      }}
    >
      {elements.map((el) => {
        const isSelected = selectedElementIds.includes(el.id);
        return (
          <Rnd
            key={el.id}
            size={{ width: el.width, height: el.height }}
            // position={{ x: 0, y: positions[el.id] || el.y }}
            position={{ x: el.x, y: el.y }}
            onDrag={(e, d) => {
              console.log(e);
              handleDrag(d.x, d.y);
              if (isSelected && selectedElementIds.length > 1) {
                moveGroup(d.deltaX, d.deltaY);
              }
            }}
            onDragStop={(e, d) => {
              console.log(e.target);
              handleDragStop(el.id, d.x, d.y);
              setSelectedElementId(el.id);
            }}
            onResize={(e, direction, ref, delta, position) => {
              console.log(e, direction, ref, delta, position);
              handleResizeStop(el.id, ref.offsetWidth, ref.offsetHeight);
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              console.log(e, direction, ref, delta, position);
              handleResizeStop(el.id, ref.offsetWidth, ref.offsetHeight);
            }}
            onContextMenu={(e: any) => handleContextMenu(e, el.id)}
            onClick={(e: any) => handleElementClick(e, el.id)}
            bounds="parent"
            disableDragging={roleName === "utilizer"}
          >
            <div
              className={`cursor-pointer relative resizeable-element ${
                isSelected ? "selected" : ""
              }`}
              style={{
                fontSize: `${el.fontSize}px`,
                fontWeight: el.fontWeight,
                padding: `${el.padding}px`,
                transform: `scale(${zoomLevel})`,
                position: "relative",
              }}
            >
              {selectedElement &&
                el.content === selectedElement.content &&
                el.id === selectedElement.id && (
                  <ResizeHandler content={el.content} />
                )}

              {el.content === "rectangle" ||
              el.content === "circle" ||
              el.content === "line" ? (
                <Shaps shap={el.content} element={el} zoomLevel={zoomLevel} />
              ) : null}

              {el.content == "Text" &&
                !el.content.startsWith("data:image/") &&
                !el.content.startsWith("https://images.pexels.com") &&
                !el.content.startsWith("iconify~") && (
                  <Texts
                    text={el.content}
                    element={el}
                    zoomLevel={zoomLevel}
                    handleContentChange={handleContentChange}
                  />
                )}
              {el.content.startsWith("data:image/") ||
              el.content.startsWith("https://images.pexels.com") ? (
                <Images element={el} />
              ) : null}
              {el.content.startsWith("iconify~") ? (
                <Icons element={el} />
              ) : null}

              {el.content === "Section" && (
                <Section
                  handleContentChange={handleContentChange}
                  element={el}
                  elements={elements}
                />
              )}
            </div>
          </Rnd>
        );
      })}

      <RightClickedHandle
        contextMenu={contextMenu}
        setContextMenu={setContextMenu}
        elements={elements}
        setElements={setElements}
      />
      <GuideLines guideLines={guideLines} />
    </div>
  );
}

export default RndElement;

const GuideLines = ({ guideLines }: { guideLines: React.ComponentState }) => {
  return (
    <>
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
    </>
  );
};
