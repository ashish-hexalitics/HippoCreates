import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { pixelsToCm } from "./constant";

const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };

function TemplatePreView({ template }: any) {

  const sanitizedDocument = template.document.replace(
    /contenteditable\s*=\s*["]?true["]?/gi,
    "contentEditable='false'"
  );

  useEffect(() => {
    enterFullscreen();
  }, []);

  const enterFullscreen = () => {
    const element = document.getElementById("preview-container");
    if (element?.requestFullscreen) {
      element.requestFullscreen();
    } else if ((element as any)?.webkitRequestFullscreen) {
      // For Safari
      (element as any).webkitRequestFullscreen();
    } else if ((element as any)?.msRequestFullscreen) {
      // For IE11
      (element as any).msRequestFullscreen();
    }
  };

  return (
    <div
      id="preview-container"
      className="h-screen w-screen overflow-y-scroll absolute"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div
        style={{ transform: "scale(1)", transformOrigin: "top left" }}
        className="bg-blue-200 shadow-md overflow-hidden flex items-center justify-center relative"
      >
        <div
          dangerouslySetInnerHTML={{ __html: sanitizedDocument }}
          className="border-2 border-gray-300 bg-white relative overflow-hidden box-border hover:border-blue-500"
          style={{
            width: `${a4Portrait.width}px`,
            height: `${a4Portrait.height}px`,
            position: "relative",
            overflowY: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "top left",
          }}
        />
      </div>
    </div>
  );
}

export default TemplatePreView;
