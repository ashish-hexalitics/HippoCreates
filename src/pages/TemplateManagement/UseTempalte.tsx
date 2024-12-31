import { useState, useEffect } from "react";
import {
  useGetTemplateQuery,
  // useUpdateTemplateMutation,
} from "../../store/slices/userSlice/apiSlice";
// import { getUserResumeData } from "../../store/slices/resumeDetailsSlice/resumeDetailSlice";
import { getTemplateSlice } from "../../store/slices/userSlice/userSlice";
import TemplateSideBar from "../../components/TemplateLayout/RightSidebar/TemplateSideBar";
import PDFSizeModal from "../../components/TemplateLayout/PDFSizeModal";
import TopBar from "../../components/TemplateLayout/TopMenu/TopBar";
import RndElement from "../../components/TemplateLayout/RndElement";
// import { useCreateTemplatesMutation } from "../../store/slices/userSlice/apiSlice";
// import {
//   createTemplatesSlice,
//   updateTemplateSlice,
// } from "../../store/slices/userSlice/userSlice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useGetUserResumeInfoQuery } from "../../store/slices/resumeDetailsSlice/apiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { useNavigate, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Element } from "../../dto/element.dto";
import type { RootState } from "../../store";
import TemplatePreView from "../../components/TemplateLayout/TemplatePreView";

function UseTemplate() {
  const params = useParams();
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const { data: userResume } = useGetUserResumeInfoQuery();
  const roleName: string | null = localStorage.getItem("role");

  const { template } = useAppSelector((state: RootState) => state.userSlice);
  const [elements, setElements] = useState<Element[]>([]);

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
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { data } = useGetTemplateQuery(params?.templateId, {
    skip: !params?.templateId,
  });
  // const [createTemplates] = useCreateTemplatesMutation();
  // const [updateTemplate] = useUpdateTemplateMutation();

  useEffect(() => {
    if (params?.templateId) {
      setIsEdit(true);
      console.log(isEdit);
    }
  }, [params?.templateId]);

  useEffect(() => {
    if (params?.templateId && data && data?.template && userResume) {
      dispatch(getTemplateSlice(data?.template));
      const userJson = { ...userResume.data.user, ...userResume.data.userInfo };
      if (data?.template?.layer && Array.isArray(data?.template?.layer)) {
        const modifiedTemplateData = data?.template?.layer.map(
          (layer: Element) => {
            return {
              ...layer,
              value: layer?.name ? userJson[layer?.name] : userJson.value,
              data: layer.key ? getNestedProperty(userResume, layer.key) : null,
            };
          }
        );
        setElements(modifiedTemplateData);
      }
    }
  }, [data?.template, userResume]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsViewModalOpen(false);
      }
    };

    // Add fullscreenchange event listener
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const getNestedProperty = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  // console.log(data?.template,userJson.value)
  // console.log(data?.template?.layer, userJson);

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
    // console.log(data)
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
      console.log(payload);
      await generatePdf(htmlString);
    }
  };

  const generatePdf = async (doc: any) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = doc;
    tempDiv.style.position = "relative";
    tempDiv.style.width = "1000px";
    tempDiv.style.height = "1000px";
    document.body.appendChild(tempDiv);
    try {
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
      });

      console.log("Canvas:", canvas);
      const imgData = canvas.toDataURL("image/png");

      if (!imgData || imgData === "data:,") {
        throw new Error(
          "Canvas rendering failed or resulted in empty image data."
        );
      }

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("document.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      document.body.removeChild(tempDiv);
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
    updateElement(id, { content: "Text", value: newContent });
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

  const openThirdPartyUpload = (imageSrc: string) => {
    const newElement = {
      id: Date.now(),
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      content: imageSrc as string,
      color: "#000000",
      fontSize: 16,
      fontWeight: "normal",
      padding: 0,
    };
    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
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

  const selectedElement: Element | undefined =
    elements && Array.isArray(elements)
      ? elements.find((el) => el.id === selectedElementId)
      : undefined;

  return (
    <>
      <div className="h-full w-full bg-gray-100 flex relative">
        <div
          style={{ width: "calc(100% - 300px)", height: "100%" }}
          className="relative"
        >
          <div style={{ height: "60px" }}>
            <TopBar
              isPortrait={isPortrait}
              toggleOrientation={toggleOrientation}
              zoomLevel={zoomLevel}
              resetZoom={resetZoom}
              zoomIn={zoomIn}
              zoomOut={zoomOut}
              {...(roleName === "admin" && {
                addElement: addElement,
                openThirdPartyUpload: openThirdPartyUpload,
                onUpload: handleUpload,
                addShape: addShape,
              })}
              setIsModalOpen={setIsModalOpen}
              setIsViewModalOpen={setIsViewModalOpen}
              roleName={roleName}
            />
          </div>
          <div
            className="py-10 relative overflow-y-scroll"
            style={{
              backgroundImage: "radial-gradient(#3d3d3d 1px, transparent 0)",
              backgroundSize: "20px 20px",
              backgroundPosition: "-19px -19px",
              height: "calc(100% - 120px)",
              perspective: "3000px",
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
              selectedElement={selectedElement}
              roleName={roleName}
            />
          </div>
          {/* Zoom Slider */}
          <div
            style={{ height: "60px" }}
            className="absolute bottom-0 left-0 w-full p-4 bg-gray-200 flex justify-center"
          >
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
        <TemplateSideBar
          element={selectedElement}
          addElement={addElement}
          onChange={(data) =>
            selectedElementId && updateElement(selectedElementId, data)
          }
          roleName={roleName}
        />
        <PDFSizeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveTemplate}
        />
      </div>
      {isViewModalOpen && <TemplatePreView template={template} />}
    </>
  );
}

export default UseTemplate;
