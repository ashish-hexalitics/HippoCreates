import { useState, useEffect } from "react";
import { useGetTemplateQuery } from "../../store/slices/userSlice/apiSlice";
import { getTemplate } from "../../store/slices/userSlice/userSlice";
import TemplateSideBar from "../../components/TemplateLayout/TemplateSideBar";
import PDFSizeModal from "../../components/TemplateLayout/PDFSizeModal";
import TopBar from "../../components/TemplateLayout/TopBar";
import RndElement from "../../components/TemplateLayout/RndElement";
import { useCreateTemplatesMutation } from "../../store/slices/userSlice/apiSlice";
import { createTemplatesSlice } from "../../store/slices/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { Element } from "../../dto/element.dto";
import type { RootState } from "../../store";

function ConfigureTemplate() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { template } = useAppSelector((state: RootState) => state.userSlice);
  const [elements, setElements] = useState<Element[]>([
    {
      id: 1724230975259,
      x: 20,
      y: 42,
      width: 155,
      height: 50,
      content: "Text",
      name: "name",
      value: "your Name",
      color: "#000000",
      fontSize: 12,
      fontWeight: "bold",
      padding: 0,
    },
    {
      id: 1724231098012,
      x: 19,
      y: 60,
      width: 162,
      height: 50,
      content: "Text",
      name: "email",
      value: "example@example.com",
      color: "#000000",
      fontSize: 16,
      fontWeight: "bold",
      padding: 0,
    },
    {
      id: 1724231166117,
      x: 19,
      y: 84,
      width: 118,
      height: 50,
      content: "Text",
      name: "phone",
      value: "333322221111",
      color: "#000000",
      fontSize: 16,
      fontWeight: "bold",
      padding: 0,
    },
    {
      id: 1724231284685,
      x: 18,
      y: 107,
      width: 100,
      height: 50,
      content: "Text",
      name: "Gender",
      value: "male",
      color: "#000000",
      fontSize: 16,
      fontWeight: "bold",
      padding: 0,
    },
    {
      id: 1724231360724,
      x: 19,
      y: 131,
      width: 100,
      height: 50,
      content: "Text",
      name: "Address",
      value: "xyx.",
      color: "#000000",
      fontSize: 16,
      fontWeight: "bold",
      padding: 0,
    },
  ]);

  const [selectedElementId, setSelectedElementId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guideLines, setGuideLines] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });
  const [isPortrait, setIsPortrait] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1); // Zoom state

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { data} = useGetTemplateQuery(params?.templateId)

  useEffect(() => {
    if (params?.templateId) {
      setIsEdit(true);
    }
  }, [params?.templateId]);

  useEffect(() => {
    if(data && data?.template){
      dispatch(getTemplate(data?.template))
      setElements(data?.template?.layer)
    }
  }, [data?.template])



  const [createTemplates] = useCreateTemplatesMutation();

  const addElement = (el: { name: string; value: string }) => {
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
      ...el,
    };
    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
  };

  const updateElement = (id: number, data: Partial<Element>) => {
    setElements(elements.map((el) => (el.id === id ? { ...el, ...data } : el)));
  };

  const handleDrag = (x: number, y: number) => {
    const threshold = 5;
    const newGuideLines: { x: number | null; y: number | null } = {
      x: null,
      y: null,
    };

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
    setGuideLines({ x: null, y: null });
  };

  const handleResizeStop = (id: number, width: number, height: number) => {
    updateElement(id, { width, height });
  };

  const handleSaveTemplate = async (size: string) => {
    const templateElement = document.querySelector("#template-container");
    if (templateElement) {
      const htmlString = templateElement.innerHTML;
      const payload = {
        document: htmlString,
        orientation: isPortrait ? "portrait" : "landscape",
        size: size,
        layer: elements,
        categoryId: params.categoryId,
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

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZoomLevel(parseFloat(e.target.value));
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
        content: e.target?.result as string,
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
      width: shape === "circle" ? 100 : 200,
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

  const selectedElement = elements && Array.isArray(elements) && elements.find((el) => el.id === selectedElementId);
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
        <div
          className="py-10 relative h-full"
          style={{
            backgroundImage: "radial-gradient(#3d3d3d 1px, transparent 0)",
            backgroundSize: "20px 20px",
            backgroundPosition: "-19px -19px",
          }}
        >
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
            setElements={setElements}
          />
          {/* Zoom Slider */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-200 flex justify-center">
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={zoomLevel}
              onChange={handleZoomChange}
              className="w-3/4"
            />
          </div>
        </div>
      </div>
      <TemplateSideBar
        element={selectedElement}
        addElement={addElement}
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

export default ConfigureTemplate;
