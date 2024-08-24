// import React from 'react';
import { Element } from "../../../dto/element.dto";

interface CircleProps {
  element: Element;
  zoomLevel: number;
}

function Circle({ element, zoomLevel }: CircleProps) {
  return (
    <div
    className="react-resizable-handle-w react-resizable-handle-e react-resizable-handle-n eact-resizable-handle-s react-resizable-handle-nw react-resizable-handle-ne react-resizable-handle-se react-resizable-handle-sw "
      style={{
        width: element.width,
        height: element.height,
        borderRadius: element.borderRadius || "50%",
        backgroundColor: element.backgroundColor || "#f2f2f2",
        borderWidth: `${element.borderWidth}px` || "2px",
        borderColor: element.borderColor || "transparent",
        borderStyle: "solid",
        boxShadow: element.boxShadow,
        transform: `scale(${zoomLevel})`,
      }}
    ></div>
  );
}

export default Circle;
