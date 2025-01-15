import { useState, useEffect } from "react";
import {
  useGetTemplateQuery,
  useUpdateTemplateMutation,
} from "../../store/slices/userSlice/apiSlice";
import { getTemplateSlice } from "../../store/slices/userSlice/userSlice";
import TemplateSideBar from "../../components/TemplateLayout/RightSidebar/TemplateSideBar";
import PDFSizeModal from "../../components/TemplateLayout/PDFSizeModal";
import TopBar from "../../components/TemplateLayout/TopMenu/TopBar";
import RndElement from "../../components/TemplateLayout/RndElement";
import { useCreateTemplatesMutation } from "../../store/slices/userSlice/apiSlice";
import {
  createTemplatesSlice,
  updateTemplateSlice,
} from "../../store/slices/userSlice/userSlice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { updateLayout } from "../../store/slices/adminLayoutSlice/adminLayoutSlice";
import {
  updateIsPortraitValue,
  zoomInAndOut,
} from "../../store/slices/resumeTemplateSlice/resumeDetailSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Element } from "../../dto/element.dto";
import type { RootState } from "../../store";
import TemplatePreView from "../../components/TemplateLayout/TemplatePreView";
import { TemplateStyle } from "../../dto/templateStyle.dto";

function ConfigureTemplate() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const roleName: string | null = localStorage.getItem("role");
  const layout = useAppSelector((state) => state.adminLayoutSlice.layout);
  const configration = useAppSelector(
    (state) => state.resumeDetailSlice.configration
  );
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

  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { data } = useGetTemplateQuery(params?.templateId, {
    skip: !params?.templateId,
  });
  const [createTemplates] = useCreateTemplatesMutation();
  const [updateTemplate] = useUpdateTemplateMutation();

  useEffect(() => {
    dispatch(updateLayout({ showLeftSidebar: false, showHeader: false }));
    if (params?.templateId) {
      setIsEdit(true);
    }
    return () => {
      dispatch(updateLayout({ showLeftSidebar: true, showHeader: true }));
    };
  }, [params?.templateId]);

  useEffect(() => {
    if (params?.templateId && data && data?.template) {
      dispatch(getTemplateSlice(data?.template));
      setElements(data?.template?.layer);
    }
  }, [data?.template]);

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

  const addElement = (el: {
    name: string;
    value: string;
    textVarient?: string;
  }) => {
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

  const addSection = (el: any) => {
    const newElement = {
      id: Date.now(),
      x: 0,
      y: 0,
      width: "100%",
      height: 50,
      content: "Section",
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
        orientation: configration.isPortrait ? "portrait" : "landscape",
        size: size,
        layer: elements,
        categoryId: params.categoryId,
      };

      if (roleName === "admin") {
        try {
          if (isEdit) {
            const response = await updateTemplate({
              ...payload,
              templateId: template._id,
            }).unwrap();
            dispatch(updateTemplateSlice(response.template));
          } else {
            const response = await createTemplates(payload).unwrap();
            dispatch(createTemplatesSlice(response.template));
          }
        } catch (error) {
          console.error("Error saving template:", error);
        } finally {
          navigate(-1);
        }
      } else {
        await generatePdf(payload.document);
      }
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
    dispatch(updateIsPortraitValue(!configration.isPortrait));
  };

  const zoomIn = () => {
    dispatch(zoomInAndOut(configration.zoomLevel + 0.1));
  };

  const zoomOut = () => {
    dispatch(zoomInAndOut(configration.zoomLevel - 0.1));
  };

  const resetZoom = () => {
    dispatch(zoomInAndOut(1));
  };

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(zoomInAndOut(parseFloat(e.target.value)));
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

  // const handleAction = () => {};
  const selectedElement: TemplateStyle | undefined | any =
    elements && Array.isArray(elements)
      ? elements.find((el) => el.id === selectedElementId)
      : undefined;

  const handleCopyStyle = (applyOn: string) => {
    setElements(
      elements.map((el: Element) =>
        el.id === selectedElementId
          ? { ...el }
          : {
              ...el,
              ...(selectedElement &&
                applyOn === "label" && {
                  labelsColor: selectedElement.labelsColor,
                  labelsFontSize: selectedElement.labelsFontSize,
                  labelsFontWeight: selectedElement.labelsFontWeight,
                  SectionLabelUnderline: selectedElement.SectionLabelUnderline,
                  showDot: selectedElement.showDot,
                }),
              ...(selectedElement &&
                applyOn === "SectionBackground" && {
                  SectionBgColor: selectedElement.SectionBgColor,
                  paddingPosition: selectedElement.paddingPosition,
                  paddingPx: selectedElement.paddingPx,
                  textAlign: selectedElement.textAlign,
                }),
              ...(selectedElement &&
                applyOn === "SectionBorder" && {
                  SectionBorder: selectedElement.SectionBorder,
                  SectionBorderColor: selectedElement.SectionBorderColor,
                  SectionBorderWidth: selectedElement.SectionBorderWidth,
                }),
              ...(selectedElement &&
                applyOn === "SectionList" && {
                  listItemsColor: selectedElement.listItemsColor,
                  listItemsFontSize: selectedElement.listItemsFontSize,
                  listItemsFontWeight: selectedElement.listItemsFontWeight,
                  listItemType: selectedElement.listItemType,
                  listItemTextDecoration:
                    selectedElement.listItemTextDecoration,
                }),
            }
      )
    );
  };

  return (
    <div className="h-full w-full bg-gray-100 flex relative">
      <div
        style={{
          width: layout.showTemplateRightSidebar
            ? "calc(100% - 300px)"
            : "100%",
          height: "100%",
        }}
        className="relative"
      >
        <div style={{ height: "60px" }}>
          <TopBar
            isPortrait={configration.isPortrait}
            toggleOrientation={toggleOrientation}
            zoomLevel={configration.zoomLevel}
            resetZoom={resetZoom}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            addElement={addElement}
            setIsModalOpen={setIsModalOpen}
            onUpload={handleUpload}
            addShape={addShape}
            setIsViewModalOpen={setIsViewModalOpen}
            openThirdPartyUpload={openThirdPartyUpload}
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
            isPortrait={configration.isPortrait}
            zoomLevel={configration.zoomLevel}
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
            configration={configration}
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
            max="2"
            step="0.1"
            value={configration.zoomLevel}
            onChange={handleZoomChange}
            className="w-3/4"
          />
        </div>
      </div>
      {layout.showTemplateRightSidebar && (
        <TemplateSideBar
          element={selectedElement}
          addElement={addElement}
          onChange={(data) =>
            selectedElementId && updateElement(selectedElementId, data)
          }
          openThirdPartyUpload={openThirdPartyUpload}
          roleName={roleName}
          addSection={addSection}
          handleCopyStyle={handleCopyStyle}
        />
      )}
      <PDFSizeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTemplate}
      />
      {isViewModalOpen && <TemplatePreView template={template} />}
    </div>
  );
}

export default ConfigureTemplate;
