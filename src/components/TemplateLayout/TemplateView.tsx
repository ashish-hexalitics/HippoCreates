import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pixelsToCm } from "./constant";
const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };

function TemplateView({ template }: any) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const sanitizedDocument = template.document.replace(
    /contenteditable\s*=\s*["]?true["]?/gi,
    "contentEditable='false'"
  );

  return (
    <div
      style={{ transform: "scale(1)", transformOrigin: "top left" }}
      className="bg-blue-200 shadow-md overflow-hidden flex items-center justify-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      {isHovered && (
        <div className="w-full h-full bg-gray-100 bg-opacity-70 absolute flex items-center justify-center">
          <button
            onClick={() => {
              navigate(`/build-resume/profile-status`);
            }}
            className="bg-blue-900 text-white px-4 py-2 rounded-md"
          >
            Use This Template
          </button>
        </div>
      )}
    </div>
  );
}

export default TemplateView;
