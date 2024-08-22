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
      <div
        key={template?._id}
        style={{ transform: "scale(.7)", transformOrigin: "top left" }}
        className="bg-white shadow-md rounded-lg overflow-hidden flex items-center flex-col  border-[#ddd] border-2 relative p-2 hover:border-blue-500"
      >
        <div
          dangerouslySetInnerHTML={{ __html: sanitizedDocument }}
          className="border border-gray-300 bg-white relative overflow-hidden"
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
        <div className="p-0">
          <h2 className="text-xl font-semibold text-primary mb-2">
            {template?.name}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                navigate(
                  `/admin/edit/template/${template.categoryId}/${template._id}`
                );
              }}
              className="w-1/3 py-2 px-2 bg-[#55bab9] text-white hover:bg-white hover:text-[#55bab9] border border-[#55bab9] transition"
            >
              <MdOutlineEdit style={{ fontSize: "20px" }} />
            </button>
            <button
              onClick={() => setIsViewModalOpen(true)}
              className="w-1/3 py-2 px-2 bg-blue-600 text-white hover:bg-white hover:text-blue-600 border border-blue-600 transition"
            >
              <BsEye style={{ fontSize: "20px" }} />
            </button>
            <button
              onClick={() => handleDelete(template._id)}
              className="w-1/3 py-2 px-2 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-red-600 transition"
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
