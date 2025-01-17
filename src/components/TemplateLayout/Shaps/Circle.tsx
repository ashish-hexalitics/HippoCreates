// import React from 'react';
import { Element } from "../../../dto/element.dto";
import { useAppSelector } from "../../../store/hooks";

interface CircleProps {
  element: Element;
}

function Circle({ element }: CircleProps) {
  const configration = useAppSelector(
    (state) => state.resumeDetailSlice.configration
  );
  return (
    <div
      className="react-resizable-handle-w react-resizable-handle-e react-resizable-handle-n eact-resizable-handle-s react-resizable-handle-nw react-resizable-handle-ne react-resizable-handle-se react-resizable-handle-sw "
      style={{
        width: element.width,
        height: element.height,
        borderRadius: element.borderRadius || "50%",
        backgroundColor: configration.templateColorSwitch === "global"
        ? configration.globalColorStyle
        : element.backgroundColor || "#f2f2f2",
        borderWidth: `${element.borderWidth}px` || "2px",
        borderColor: element.borderColor || "transparent",
        borderStyle: "solid",
        boxShadow: element.boxShadow,
      }}
    ></div>
  );
}

export default Circle;
