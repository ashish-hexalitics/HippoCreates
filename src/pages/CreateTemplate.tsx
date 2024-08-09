import { useState } from "react";
import { Rnd, RndResizeCallback, RndDragCallback } from "react-rnd";
import TemplateSideBar from "../components/TemplateLayout/TemplateSideBar";
interface Element {
  id: number;
  x: number;
  y: number;
  width: number | string;
  height: number | string;
  content: string;
  color: string;
  fontSize: number;
}

function CreateTemplate() {
  const [elements, setElements] = useState<Element[]>([]);

  const addElement = () => {
    setElements([
      ...elements,
      {
        id: Date.now(),
        x: 0,
        y: 0,
        width: 100,
        height: 50,
        content: "Text",
        color: "#000000",
        fontSize: 16,
      },
    ]);
  };

  const updateElement = (id: number, data: Partial<Element>) => {
    setElements(elements.map((el) => (el.id === id ? { ...el, ...data } : el)));
  };

  const changeTextColor = (id: number, color: string) => {
    updateElement(id, { color });
  };

  const changeFontSize = (id: number, fontSize: string) => {
    updateElement(id, { fontSize: parseInt(fontSize) });
  };

  const saveTemplate = () => {
    const templateData = JSON.stringify(elements);
    console.log(templateData);
    // Send to the backend
    // fetch('/api/templates', { method: 'POST', body: templateData })
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100  flex">
        
        <TemplateSideBar />
      </div>
    </>
  );
}

export default CreateTemplate;
