// import React from "react";
import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Line from "./Line";
import { Element } from "../../../dto/element.dto";

interface RenderShapesProps {
  shap: string;
  zoomLevel: number;
  element: Element;
}

const RenderShapes = ({
  shap,
  element,
  zoomLevel,
}: RenderShapesProps): JSX.Element | null => {
 const shaps = ()=>{
  switch (shap) {
    case "circle":
      return <Circle element={element} zoomLevel={zoomLevel} />;
    case "rectangle":
      return <Rectangle element={element} zoomLevel={zoomLevel} />;
    case "line":
      return <Line element={element} zoomLevel={zoomLevel} />;
    default:
      return null;
  }
 }
  return shaps()
};

export default RenderShapes;
