// import React from 'react';
import { Element } from "../../../dto/element.dto";

interface LineProps {
  element: Element;
  zoomLevel: number;
}

function Line({ element, zoomLevel }: LineProps) {
  return (
    <div
      className="react-resizable-handle-nw react-resizable-handle-ne react-resizable-handle-se react-resizable-handle-sw"
      style={{
        width: element.width,
        height: element.strockHeight || "2px",
        backgroundColor: element.strockColor || "#000",
        transform: `scale(${zoomLevel})`,
      }}
    ></div>
  );
}

export default Line;
