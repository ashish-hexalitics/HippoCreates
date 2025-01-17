import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { pixelsToCm } from "./constant";
import Shaps from "./Shaps/index";
import Texts from "./Text/Text";
import Images from "./Images/Image";
import Icons from "./Icons/Icon";
import Section from "./Section/Section";
import RightClickedHandle from "./ElementHandlers/RightClickedHandle";
import ResizeHandler from "./ElementHandlers/ResizeHandler";
import { IRNDElement, Element } from "../../dto/element.dto";
import GuideLines from "./GuideLines";
import {
  updateElmentLayer,
  updateSelectedElementId,
} from "../../store/slices/resumeTemplateSlice/resumeDetailSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };
const a4Landscape = { width: pixelsToCm(1123), height: pixelsToCm(794) };

function RndElement({
  handleDrag,
  handleDragStop,
  handleResizeStop,
  guideLines,
  roleName,
}: IRNDElement) {
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    elementId: number | null;
  }>({ visible: false, x: 0, y: 0, elementId: null });
  const [selectedElementIds, setSelectedElementIds] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  const {
    configration: { isPortrait, zoomLevel },
    selectedElement,
    elements,
  } = useAppSelector((state) => state.resumeDetailSlice);

  const [height, setHeight] = useState<number>(
    (isPortrait ? a4Portrait.height : a4Landscape.height) * zoomLevel
  );

  const handleContextMenu = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    const clickedElement = elements.find((el: Element) => el.id === id);
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

    dispatch(updateSelectedElementId(id));
  };

  const moveGroup = (dx: number, dy: number) => {
    dispatch(
      updateElmentLayer(
        elements.map((el: { id: number; x: number; y: number }) =>
          selectedElementIds.includes(el.id)
            ? { ...el, x: el.x + dx, y: el.y + dy }
            : el
        )
      )
    );
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setHeight((prevHeight) => Math.max(50, prevHeight + e.movementY));
  };

  return (
    <div
      className="py-10 relative overflow-y-scroll"
      style={{
        backgroundImage: "radial-gradient(#3d3d3d 1px, transparent 0)",
        backgroundSize: "20px 20px",
        backgroundPosition: "-19px -19px",
        height: "calc(100% - 120px)",
        perspective: "3000px",
      }}
    >
      <div
        id="template-container"
        className="border border-gray-300 bg-white relative overflow-x-hidden"
        style={{
          width: `${
            (isPortrait ? a4Portrait.width : a4Landscape.width) * zoomLevel
          }px`,
          height: `${height}px`,
          resize: "vertical",
          margin: "auto",
          transformOrigin: "top left",
          transform: `transalate(-50%,-50%) scale(${zoomLevel})`,
        }}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(updateSelectedElementId(null));
          closeContextMenu();
        }}
        onMouseDown={handleMouseDown}
      >
        {elements.map((el: Element) => {
          const isSelected = selectedElementIds.includes(el.id);
          return (
            <Rnd
              key={el.id}
              size={{ width: el.width, height: el.height }}
              position={{ x: el.x, y: el.y }}
              onDrag={(e, d) => {
                console.log(e);
                handleDrag && handleDrag(d.x, d.y);
                if (isSelected && selectedElementIds.length > 1) {
                  moveGroup(d.deltaX, d.deltaY);
                }
              }}
              onDragStop={(e, d) => {
                console.log(e.target);
                handleDragStop && handleDragStop(el.id, d.x, d.y);
                dispatch(updateSelectedElementId(el.id));
              }}
              onResize={(e, direction, ref, delta, position) => {
                console.log(e, direction, ref, delta, position);
                handleResizeStop &&
                  handleResizeStop(el.id, ref.offsetWidth, ref.offsetHeight);
              }}
              onResizeStop={(e, direction, ref, delta, position) => {
                console.log(e, direction, ref, delta, position);
                handleResizeStop &&
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
                  <Shaps shap={el.content} element={el}  />
                ) : null}

                {el.content == "Text" &&
                  !el.content.startsWith("data:image/") &&
                  !el.content.startsWith("https://images.pexels.com") &&
                  !el.content.startsWith("iconify~") && (
                    <Texts
                      text={el.content}
                      element={el}
                      roleName={roleName ? roleName : ""}
                    />
                  )}
                {el.content.startsWith("data:image/") ||
                el.content.startsWith("https://images.pexels.com") ? (
                  <Images element={el} />
                ) : null}
                {el.content.startsWith("iconify~") ? (
                  <Icons element={el} />
                ) : null}

                {el.content === "Section" && <Section element={el} />}
              </div>
            </Rnd>
          );
        })}

        <RightClickedHandle
          contextMenu={contextMenu}
          setContextMenu={setContextMenu}
        />
        {guideLines && <GuideLines guideLines={guideLines} />}
      </div>
    </div>
  );
}

export default RndElement;
