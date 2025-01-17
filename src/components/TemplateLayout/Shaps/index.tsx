import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Line from "./Line";
import { Element } from "../../../dto/element.dto";

interface RenderShapesProps {
  shap: string;
  element: Element;
}

const RenderShapes = ({
  shap,
  element,
}: RenderShapesProps): JSX.Element | null => {
 const shaps = ()=>{
  switch (shap) {
    case "circle":
      return <Circle element={element}  />;
    case "rectangle":
      return <Rectangle element={element}  />;
    case "line":
      return <Line element={element}  />;
    default:
      return null;
  }
 }
  return shaps()
};

export default RenderShapes;
