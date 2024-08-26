import React from "react";
import { Element,Textvarient } from "../../../dto/element.dto";
import TextElement from "./TextElement";
interface TextProps {
  element: Element;
  zoomLevel: number;
  text: string;
  handleContentChange?: (
    e: React.FormEvent<HTMLDivElement>,
    id: number
  ) => void;
}
function Text({ element, zoomLevel, handleContentChange }: TextProps) {
  return (
    <>
      {element.name ? (
        <div
          className="flex flex-wrap"
          style={{
            transform: `scale(${zoomLevel})`,
            color:
              element.textVarient === Textvarient.Link ? "blue" : element.color,
          }}
        >
          <span>{element.name} : </span>
          <div
            contentEditable={
              !element.content.startsWith("data:image/") &&
              !element.content.startsWith("https://images.pexels.com")
            }
            onBlur={(e) =>
              handleContentChange && handleContentChange(e, element.id)
            }
            style={{
              transform: `scale(${zoomLevel})`,
            }}
            dangerouslySetInnerHTML={{
              __html: `${element.value}` || "",
            }}
          />
        </div>
      ) : (
        <TextElement
          element={element}
          zoomLevel={zoomLevel}
          handleContentChange={handleContentChange}
        />
      )}
    </>
  );
}

export default Text;
