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
  updateSelectedElementId,
  updateConfigration,
  updateElmentLayer,
  updateElmentLayerById,
} from "../../store/slices/resumeTemplateSlice/resumeDetailSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Element } from "../../dto/element.dto";
import type { RootState } from "../../store";
import TemplatePreView from "../../components/TemplateLayout/TemplatePreView";
import ZoomSlider from "../../components/TemplateLayout/ZoomSlider";
function ConfigureTemplate() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const roleName: string | null = localStorage.getItem("role");
  
  const layout = useAppSelector((state) => state.adminLayoutSlice.layout);
  const { configration, elements } = useAppSelector(
    (state) => state.resumeDetailSlice
  );
  const { template } = useAppSelector((state: RootState) => state.userSlice);

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
      dispatch(updateConfigration(data?.template.configration));
      dispatch(updateElmentLayer(data?.template?.layer));
    }
    return () => {
      dispatch(
        updateConfigration({
          templateColorSwitch: "previous",
          globalColorStyle: "",
        })
      );
    };
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

  const handleDrag = (x: number, y: number) => {
    const threshold = 5;
    const newGuideLines: { x: number | null; y: number | null } = {
      x: null,
      y: null,
    };

    elements.forEach((el: Element) => {
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
    dispatch(updateElmentLayerById({ id, data: { x, y } }));
    setGuideLines({ x: null, y: null });
  };

  const handleResizeStop = (id: number, width: number, height: number) => {
    dispatch(updateElmentLayerById({ id, data: { width, height } }));
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
        configration: configration,
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
    dispatch(updateElmentLayer([...elements, newElement]));
    dispatch(updateSelectedElementId(newElement.id));
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
        {/* Top Section */}
        <TopBar
          setIsModalOpen={setIsModalOpen}
          setIsViewModalOpen={setIsViewModalOpen}
          openThirdPartyUpload={openThirdPartyUpload}
          roleName={roleName}
        />
        {/* RND Element Layer */}
        <RndElement
          handleDrag={handleDrag}
          handleDragStop={handleDragStop}
          handleResizeStop={handleResizeStop}
          guideLines={guideLines}
          roleName={roleName}
        />
        {/* Zoom Slider */}
        <ZoomSlider />
      </div>
      {layout.showTemplateRightSidebar && (
        <TemplateSideBar
          openThirdPartyUpload={openThirdPartyUpload}
          roleName={roleName}
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
