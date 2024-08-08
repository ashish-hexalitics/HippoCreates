import { useState } from "react";
import { Rnd, RndResizeCallback, RndDragCallback } from "react-rnd";

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
      { id: Date.now(), x: 0, y: 0, width: 100, height: 50, content: "Text", color: "#000000", fontSize: 16 },
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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">Design Your Resume Template</h1>
      <div className="flex justify-center mb-4">
        <button onClick={addElement} className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition">
          Add Text Element
        </button>
        <button onClick={saveTemplate} className="ml-4 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Save Template
        </button>
      </div>
      <div className="border border-gray-300 bg-white p-4 relative overflow-hidden" style={{ width: "800px", height: "1000px", margin: "auto" }}>
        {elements.map((el) => (
          <Rnd
            key={el.id}
            size={{ width: el.width, height: el.height }}
            position={{ x: el.x, y: el.y }}
            onDragStop={(e, d) => updateElement(el.id, { x: d.x, y: d.y })}
            onResizeStop={(e, direction, ref, delta, position) =>
              updateElement(el.id, { width: ref.style.width, height: ref.style.height, ...position })
            }
          >
            <div className="bg-gray-200 p-2 text-center cursor-pointer" style={{ color: el.color, fontSize: `${el.fontSize}px` }}>
              {el.content}
            </div>
            <div className="text-center mt-2">
              <label htmlFor={`color-picker-${el.id}`} className="mr-2">Text Color:</label>
              <input
                id={`color-picker-${el.id}`}
                type="color"
                value={el.color}
                onChange={(e) => changeTextColor(el.id, e.target.value)}
              />
            </div>
            <div className="text-center mt-2">
              <label htmlFor={`font-size-${el.id}`} className="mr-2">Font Size:</label>
              <input
                id={`font-size-${el.id}`}
                type="number"
                value={el.fontSize}
                onChange={(e) => changeFontSize(el.id, e.target.value)}
                className="border rounded px-2 py-1"
                style={{ width: '60px' }}
              />
            </div>
          </Rnd>
        ))}
      </div>
    </div>
  );
}

export default CreateTemplate;
