import { useState } from "react";
import TemplateSideBar from "../../components/TemplateLayout/TemplateSideBar";
import PDFSizeModal from "../../components/TemplateLayout/PDFSizeModal"; // Import the modal
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import TopBar from "../../components/TemplateLayout/TopBar";
import RndElement from "../../components/TemplateLayout/RndElement";
import { useCreateTemplatesMutation } from "../../store/slices/userSlice/apiSlice";
import { createTemplatesSlice } from "../../store/slices/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";

interface Element {
  id: number;
  x: number;
  y: number;
  width: number | string;
  height: number | string;
  content: string;
  color: string;
  fontSize: number;
  fontWeight: string;
  padding: number;
}

function CreateTemplate() {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElementId, setSelectedElementId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [guideLines, setGuideLines] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null }); // Guide lines state
  const [isPortrait, setIsPortrait] = useState(true); // Orientation state
  const [zoomLevel, setZoomLevel] = useState(1); // Zoom state

  const dispatch = useAppDispatch();

  const [createTemplates] =
    useCreateTemplatesMutation();

  const addElement = () => {
    const newElement = {
      id: Date.now(),
      x: 0,
      y: 0,
      width: 100,
      height: 50,
      content: "Text",
      color: "#000000",
      fontSize: 16,
      fontWeight: "normal",
      padding: 0,
    };
    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
  };

  const updateElement = (id: number, data: Partial<Element>) => {
    setElements(elements.map((el) => (el.id === id ? { ...el, ...data } : el)));
  };

  interface INewGuideLines {
    x: number | null;
    y: number | null;
  }
  const handleDrag = (x: number, y: number) => {
    const threshold = 5;
    const newGuideLines: INewGuideLines = { x: null, y: null };

    // Check alignment with other elements
    elements.forEach((el) => {
      if (Math.abs(el.x - x) < threshold) {
        newGuideLines.x = el.x;
      }
      if (Math.abs(el.y - y) < threshold) {
        newGuideLines.y = el.y;
      }
    });

    setGuideLines(newGuideLines);
  };

  const handleDragStop = (id: number, x: number, y: number) => {
    updateElement(id, { x, y });
    setGuideLines({ x: null, y: null }); // Hide guide lines
  };

  const handleResizeStop = (id: number, width: number, height: number) => {
    updateElement(id, { width, height });
  };

  const handleSaveTemplate = async (size: string) => {
    const templateElement = document.querySelector("#template-container");
    if(templateElement){
      const htmlString = templateElement.innerHTML;
      const payload = {
        document: htmlString, 
        orientation: isPortrait ? "portrait" : "landscape",
        size: size,
        layer:elements
      };
      try {
        const response = await createTemplates(payload).unwrap();
        dispatch(createTemplatesSlice(response.resume));
      } catch (error) {
        console.error("Error saving template:", error);
      }
    }
  };

  const toggleOrientation = () => {
    setIsPortrait(!isPortrait);
  };

  const zoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const zoomOut = () => {
    setZoomLevel(Math.max(0.1, zoomLevel - 0.1));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  const handleContentChange = (
    e: React.FormEvent<HTMLDivElement>,
    id: number
  ) => {
    const newContent = (e.target as HTMLDivElement).innerText;
    updateElement(id, { content: newContent });
  };

  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newElement = {
        id: Date.now(),
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        content: e.target?.result as string, // The image data
        color: "#000000",
        fontSize: 16,
        fontWeight: "normal",
        padding: 0,
      };
      setElements([...elements, newElement]);
      setSelectedElementId(newElement.id);
    };
    reader.readAsDataURL(file);
  };

  const addShape = (shape: string) => {
    const newElement = {
      id: Date.now(),
      x: 0,
      y: 0,
      width: shape === "circle" ? 100 : 200, // Example dimensions
      height: shape === "circle" ? 100 : 50,
      content: shape,
      color: "#000000",
      fontSize: 16,
      fontWeight: "normal",
      padding: 0,
    };
    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
  };

  const selectedElement = elements.find((el) => el.id === selectedElementId);

  return (
    <div className="h-full w-full bg-gray-100 flex relative">
      <div style={{ width: "calc(100% - 300px)" }} className="overflow-scroll">
        <TopBar
          isPortrait={isPortrait}
          toggleOrientation={toggleOrientation}
          zoomLevel={zoomLevel}
          resetZoom={resetZoom}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          addElement={addElement}
          setIsModalOpen={setIsModalOpen}
          onUpload={handleUpload}
          addShape={addShape}
        />
        <RndElement
          isPortrait={isPortrait}
          zoomLevel={zoomLevel}
          elements={elements}
          handleDrag={handleDrag}
          handleDragStop={handleDragStop}
          setSelectedElementId={setSelectedElementId}
          handleResizeStop={handleResizeStop}
          handleContentChange={handleContentChange}
          guideLines={guideLines}
        />
      </div>
      <TemplateSideBar
        element={selectedElement}
        onChange={(data) =>
          selectedElementId && updateElement(selectedElementId, data)
        }
      />
      <PDFSizeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTemplate}
      />
    </div>
  );
}

export default CreateTemplate;
