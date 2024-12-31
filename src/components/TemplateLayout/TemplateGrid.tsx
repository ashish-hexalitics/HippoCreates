import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pixelsToCm } from "./constant";
import ViewModal from "../Common/Modal/ViewModal";
import TemplateView from "./TemplateView";
import { icons } from "../../Icons/constant";

const { AiOutlineDelete, BsEye, MdOutlineEdit } = icons;
const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };

function TemplateGrid({ template, handleDelete }: any) {
  const navigate = useNavigate();
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);

  const sanitizedDocument = template.document.replace(
    /contenteditable\s*=\s*["]?true["]?/gi,
    "contentEditable='false'"
  );

  return (
    <>
      <div className="bg-white relative shadow-lg max-h-[400px] rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-200">
        <div
          style={{
            width: `${a4Portrait.width}px`,
            height: `${a4Portrait.height}px`,
            transformOrigin: "top left",
            transform: "scale(0.5)",
            overflow: "hidden",
          }}
          className="border border-gray-300 bg-white relative overflow-hidden flex items-center justify-center mx-auto"
          dangerouslySetInnerHTML={{ __html: sanitizedDocument }}
        />
        <div className="absolute top-0 bg-black opacity-20 w-full h-full"></div>
        <div className="p-4 absolute top-[50%] left-[50%] -translate-x-[50%]">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            {template?.name}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                navigate(
                  `/admin/edit/template/${template.categoryId}/${template._id}`
                );
              }}
              className="flex-1 py-2 px-4 bg-[#55bab9] text-white hover:bg-white hover:text-[#55bab9] border border-[#55bab9] rounded transition"
            >
              <MdOutlineEdit style={{ fontSize: "20px" }} />
            </button>
            <button
              onClick={() => setIsViewModalOpen(true)}
              className="flex-1 py-2 px-4 bg-blue-600 text-white hover:bg-white hover:text-blue-600 border border-blue-600 rounded transition"
            >
              <BsEye style={{ fontSize: "20px" }} />
            </button>
            <button
              onClick={() => handleDelete(template._id)}
              className="flex-1 py-2 px-4 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-red-600 rounded transition"
            >
              <AiOutlineDelete style={{ fontSize: "20px" }} />
            </button>
          </div>
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
