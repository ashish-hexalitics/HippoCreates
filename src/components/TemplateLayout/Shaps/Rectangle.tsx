// import React from "react";
import { Element } from "../../../dto/element.dto";
import { useAppSelector } from "../../../store/hooks";

interface RectangleProps {
  element: Element;
  zoomLevel: number;
}

function Rectangle({ element, zoomLevel }: RectangleProps) {
  const configration = useAppSelector(
    (state) => state.resumeDetailSlice.configration
  );
  return (
    <div
      className="react-resizable-handle-w react-resizable-handle-e react-resizable-handle-n eact-resizable-handle-s react-resizable-handle-nw react-resizable-handle-ne react-resizable-handle-se react-resizable-handle-sw "
      style={{
        width: element.width,
        height: element.height,
        backgroundColor:
          configration.templateColorSwitch === "global"
            ? configration.globalColorStyle
            : element.backgroundColor,
        borderRadius: element.borderRadius,
        border:
          element.borderWidth && element.borderEnabled
            ? `${element.borderWidth}px solid ${element.borderColor}`
            : "none",
        boxShadow: element.boxShadow,
        transform: `scale(${zoomLevel})`,
      }}
    ></div>
  );
}

export default Rectangle;
