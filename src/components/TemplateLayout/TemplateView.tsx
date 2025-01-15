import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pixelsToCm } from "./constant";
const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };

function TemplateView({ template, showTemplateHover = true }: any) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const sanitizedDocument = template.document.replace(
    /contenteditable\s*=\s*["]?true["]?/gi,
    "contentEditable='false'"
  );

  return (
    <div
      // style={{ transform: "scale(1)", transformOrigin: "top left" }}
      // className="bg-blue-200 shadow-md overflow-hidden flex items-center justify-center relative"
      className="relative bg-white max-h-[400px] shadow-md rounded-lg overflow-hidden border-[#ddd] border-2 hover:border-blue-500 transition duration-300 ease-in-out"

      id="preview-container"
      // className="h-screen w-screen overflow-y-scroll absolute"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        // style={{ transform: "scale(1)", transformOrigin: "top center" }}
        className="bg-blue-200 shadow-md overflow-hidden flex items-center justify-center relative"
      >
        <div
          dangerouslySetInnerHTML={{ __html: sanitizedDocument }}
          className="border border-gray-300 bg-white relative overflow-hidden flex items-center justify-center mx-auto"
          style={{
            width: `${a4Portrait.width}px`,
            height: `${a4Portrait.height}px`,
            transform: "scale(.4)",
            transformOrigin: "top left",
            marginLeft: "8px",
            display:"flex",
            overflow: "hidden"
          }}
        />

      {isHovered && showTemplateHover && (
        <div className="w-full h-full bg-gray-100 bg-opacity-70 absolute">
          <button
            onClick={() => {
              navigate(`/build-resume/profile-status`);
            }}
            className="bg-blue-900 h-[50px] text-white px-4 py-2 rounded-md w-[80%] absolute top-[15%] left-[50%] -translate-x-[50%]"
          >
            Use This Template
          </button>
        </div>
      )}
      </div>
    </div>
  );
}

export default TemplateView;
