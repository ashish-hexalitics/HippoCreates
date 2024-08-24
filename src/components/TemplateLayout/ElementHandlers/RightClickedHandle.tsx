import React, { useState } from "react";
import { Element } from "../../../dto/element.dto";
import { icons } from "../../../Icons/constant";

const {
  LuBringToFront,
  LuSendToBack,
  GrCut,
  GoPaste,
  IoDuplicateOutline,
  MdOutlineDeleteOutline,
} = icons;

interface RightClickedHandleProps {
  contextMenu: {
    visible: boolean;
    x: number;
    y: number;
    elementId: number | null;
  };
  setContextMenu: React.Dispatch<React.SetStateAction<{ visible: boolean; x: number; y: number; elementId: number | null }>>;
  elements: Element[];
  setElements: React.Dispatch<React.SetStateAction<Element[]>>;
}

function RightClickedHandle({
  contextMenu,
  setContextMenu,
  elements,
  setElements,
}: RightClickedHandleProps) {
  const [cutElement, setCutElement] = useState<Element | null>(null);

  const bringToFront = () => {
    if (contextMenu.elementId !== null) {
      const index = elements.findIndex((el) => el.id === contextMenu.elementId);
      const newElements = [...elements];
      const [element] = newElements.splice(index, 1);
      newElements.push(element);
      setElements(newElements);
    }
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };

  const sendToBack = () => {
    if (contextMenu.elementId !== null) {
      const index = elements.findIndex((el) => el.id === contextMenu.elementId);
      const newElements = [...elements];
      const [element] = newElements.splice(index, 1);
      newElements.unshift(element);
      setElements(newElements);
    }
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };

  const cutElementHandler = () => {
    if (contextMenu.elementId !== null) {
      const index = elements.findIndex((el) => el.id === contextMenu.elementId);
      if (index !== -1) {
        const [element] = elements.splice(index, 1);
        setCutElement(element);
        setElements([...elements]);
      }
    }
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };

  const pasteElementHandler = () => {
    if (cutElement) {
      // For demonstration, adding the cut element back to the end of the list
      setElements([...elements, cutElement]);
      setCutElement(null);
    }
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };

  const duplicateElementHandler = () => {
    if (contextMenu.elementId !== null) {
      const index = elements.findIndex((el) => el.id === contextMenu.elementId);
      if (index !== -1) {
        const element = elements[index];
        const newElement = { ...element, id: Date.now() }; // Generate a new unique ID
        setElements([...elements, newElement]);
      }
    }
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };

  const deleteElementHandler = () => {
    if (contextMenu.elementId !== null) {
      const newElements = elements.filter((el) => el.id !== contextMenu.elementId);
      setElements(newElements);
    }
    setContextMenu({ visible: false, x: 0, y: 0, elementId: null });
  };

  return (
    <>
      {contextMenu.visible && (
        <div
          style={{
            top: contextMenu.y,
            left: contextMenu.x,
            zIndex: 999,
            width: "200px",
          }}
          className="absolute bg-white border border-gray-300 rounded-md overflow-hidden shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            onClick={bringToFront}
            className="p-2 cursor-pointer hover:bg-gray-200 flex items-center"
          >
            <LuBringToFront className="me-2 font-medium" /> Bring to Front
          </div>
          <div
            onClick={sendToBack}
            className="p-2 cursor-pointer hover:bg-gray-200 flex items-center"
          >
            <LuSendToBack className="me-2 font-medium" /> Send to Back
          </div>
          <div
            onClick={cutElementHandler}
            className="p-2 cursor-pointer hover:bg-gray-200 flex items-center"
          >
            <GrCut className="me-2 font-medium" /> Cut
          </div>
          <div
            onClick={pasteElementHandler}
            className="p-2 cursor-pointer hover:bg-gray-200 flex items-center"
          >
            <GoPaste className="me-2 font-medium" /> Paste
          </div>
          <div
            onClick={duplicateElementHandler}
            className="p-2 cursor-pointer hover:bg-gray-200 flex items-center"
          >
            <IoDuplicateOutline className="me-2 font-medium" /> Duplicate
          </div>
          <div
            onClick={deleteElementHandler}
            className="p-2 cursor-pointer hover:bg-gray-200 flex items-center"
          >
            <MdOutlineDeleteOutline className="me-2 font-medium" /> Delete
          </div>
        </div>
      )}
    </>
  );
}

export default RightClickedHandle;
