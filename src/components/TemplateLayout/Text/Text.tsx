import React from "react";
import { Element, Textvarient } from "../../../dto/element.dto";
import TextElement from "./TextElement";
import { updateElmentLayerById } from "../../../store/slices/resumeTemplateSlice/resumeDetailSlice";
import { useAppDispatch } from "../../../store/hooks";
interface TextProps {
  element: Element;
  // zoomLevel: number;
  text: string;
  roleName?: string;
}
function Text({ element, roleName = "admin" }: TextProps) {
  const dispatch = useAppDispatch();

  const handleContentChange = (
    e: React.FormEvent<HTMLDivElement>,
    id: number
  ) => {
    const newContent = (e.target as HTMLDivElement).innerText;
    dispatch(
      updateElmentLayerById({
        id,
        data: { content: "Text", value: newContent },
      })
    );
  };

  return (
    <>
      {element.name ? (
        <div
          className="flex flex-wrap"
          style={{
            // transform: `scale(${zoomLevel})`,
            color:
              element.textVarient === Textvarient.Link ? "blue" : element.color,
          }}
        >
          {roleName === "admin" && <span>{element.name} : </span>}
          <div
            contentEditable={
              !element.content.startsWith("data:image/") &&
              !element.content.startsWith("https://images.pexels.com")
            }
            onBlur={(e) => handleContentChange(e, element.id)}
            // style={{
            //   transform: `scale(${zoomLevel})`,
            // }}
            dangerouslySetInnerHTML={{
              __html: `${element.value}` || "",
            }}
          />
        </div>
      ) : (
        <TextElement
          element={element}
          // zoomLevel={zoomLevel}
          handleContentChange={handleContentChange}
        />
      )}
    </>
  );
}

export default Text;
