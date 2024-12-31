import { useState } from "react";
import { pixelsToCm } from "./constant";
import ViewModal from "../Common/Modal/ViewModal";
import TemplateView from "./TemplateView";

const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };

function TemplateGrid({ template, handleChooseTemplate }: any) {
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);

  const sanitizedDocument = template.document.replace(
    /contenteditable\s*=\s*["]?true["]?/gi,
    "contentEditable='false'"
  );

  return (
    <>
      <div
        key={template.id}
        className="relative bg-white max-h-[400px] shadow-md rounded-lg overflow-hidden border-[#ddd] border-2 hover:border-blue-500 transition duration-300 ease-in-out"
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

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <button
            onClick={() => handleChooseTemplate(template)}
            // className="bg-blue-500 text-white px-4 py-2 rounded-md"
            className="bg-blue-900 h-[50px] text-white text-md font-medium px-4 py-2 rounded-md w-[80%] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
          >
            Choose Template
          </button>
        </div>
      </div>
      <ViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="View Template"
      >
        <TemplateView template={template} />
      </ViewModal>
    </>
  );
}

export default TemplateGrid;
