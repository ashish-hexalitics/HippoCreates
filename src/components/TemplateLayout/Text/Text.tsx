import React from "react";
import { Element } from "../../../dto/element.dto";

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
          }}
        >
          <span>{element.name} : </span>
          <div
            contentEditable={!element.content.startsWith("data:image/")}
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
        <div
          contentEditable={!element.content.startsWith("data:image/")}
          onBlur={(e) =>
            handleContentChange && handleContentChange(e, element.id)
          }
          style={{
            transform: `scale(${zoomLevel})`,
          }}
          dangerouslySetInnerHTML={{
            __html: element.name
              ? `${element.name} : ${element.value}`
              : `${element.value}` || "",
          }}
        />
      )}
    </>
  );
}

export default Text;
