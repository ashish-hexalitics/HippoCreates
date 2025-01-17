import React from "react";
import { Element, Textvarient } from "../../../dto/element.dto";

interface TextProps {
  element: Element;
  handleContentChange?: (
    e: React.FormEvent<HTMLDivElement>,
    id: number
  ) => void;
}

const TextElement = ({
  element,
  handleContentChange,
}: TextProps) => {
  const Tag = (element.textVarient && element.textVarient.toLowerCase()) as keyof JSX.IntrinsicElements;


  return (
    <Tag
      contentEditable={
        !element.content.startsWith("data:image/") &&
        !element.content.startsWith("https://images.pexels.com")
      }
      onBlur={(e:any) => handleContentChange && handleContentChange(e, element.id)}
      style={{
        textDecoration:
          element.textVarient === Textvarient.Link ? "underline" : "none",
        color: element.color,
      }}
      dangerouslySetInnerHTML={{
        __html: element.name
          ? `${element.name} : ${element.value}`
          : `${element.value}` || "",
      }}
      href={
        element.textVarient === Textvarient.Link
          ? element.value || "#"
          : undefined
      }
    />
  );
};

export default TextElement;
