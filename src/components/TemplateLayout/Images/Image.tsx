import { Element } from "../../../dto/element.dto";
import { filterStyles } from "../constant";

interface RectangleProps {
  element: Element;
}

function Image({ element }: RectangleProps) {

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${element.content} 1x, ${element.content} 2x, ${element.content} 3x`}
      />
      <source
        type="image/webp"
        srcSet={`${element.content} 1x, ${element.content} 2x, ${element.content} 3x`}
      />
      <img
        src={element.content}
        alt="resizable content"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: element.borderRadius,
          border: element.borderWidth 
            ? `${element.borderWidth}px solid ${element.borderColor}`
            : "none",
          boxShadow: element.boxShadow,
          opacity: (Number(element.opacity) /  100) || 1,
          filter: filterStyles[element.filter] || "none", 
        }}
        className="react-resizable-handle-w react-resizable-handle-e react-resizable-handle-n eact-resizable-handle-s react-resizable-handle-nw react-resizable-handle-ne react-resizable-handle-se react-resizable-handle-sw "
      />
    </picture>
  );
}

export default Image;
