import { Element } from "../../../dto/element.dto";

interface LineProps {
  element: Element;
}

function Line({ element }: LineProps) {
  return (
    <div
      className="react-resizable-handle-nw react-resizable-handle-ne react-resizable-handle-se react-resizable-handle-sw"
      style={{
        width: element.width,
        height: element.strockHeight || "2px",
        backgroundColor: element.strockColor || "#000",
      }}
    ></div>
  );
}

export default Line;
