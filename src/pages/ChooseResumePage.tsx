import { Key, useEffect, useState } from "react";
import Header from "../components/Landing/Header";
import { useGetTemplatesQuery } from "../store/slices/userSlice/apiSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { RootState } from "../store";
import { getTemplates } from "../store/slices/userSlice/userSlice";
import { pixelsToCm } from "../components/TemplateLayout/constant";
import ViewModal from "../components/Common/Modal/ViewModal";
import TemplateView from "../components/TemplateLayout/TemplateView";
const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };

function ChooseResumePage() {
  const dispatch = useAppDispatch();
  const [selectedColor, setSelectedColor] = useState("");
  const { templates } = useAppSelector((state: RootState) => state.userSlice);
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [templateData, setTemplateData] = useState<any>(null);
  const [showLoginButton, setShowLoginButton] = useState<boolean>(false);

  const { data } = useGetTemplatesQuery();

  useEffect(() => {
    if (data && data?.templates) {
      dispatch(getTemplates(data.templates));

      setShowLoginButton(false);
    }
  }, [data, dispatch]);

  const handleChooseTemplate = (data: any) => {
    setTemplateData(data);
    setIsViewModalOpen(true);
    updateQuery(data);
  };

  const updateQuery = (data: any) => {
    localStorage.setItem("categoryId", data.categoryId);
    localStorage.setItem("templateId", data._id);
  };

  const removeQuery = () => {
    localStorage.removeItem("categoryId");
    localStorage.removeItem("templateId");
  };

  const handleclose = () => {
    removeQuery();
    setIsViewModalOpen(false);
  };

  return (
    <div className="dark:bg-[#fbf8f1] font-sans relative min-h-screen">
      <Header showLoginButton={showLoginButton} />

      <div className="p-6">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for templates..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter by Color */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-bold text-gray-700">Filter by Color:</p>
          <div className="flex space-x-3">
            {["blue", "green", "red", "yellow"].map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-black"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() =>
                  setSelectedColor(selectedColor === color ? "" : color)
                }
              />
            ))}
          </div>
        </div>

        {/* Template List */}
        <div className="flex flex-wrap">
          {templates.map(
            (template: { document: string; id: Key | null | undefined }) => {
              const sanitizedDocument = template.document.replace(
                /contenteditable\s*=\s*["]?true["]?/gi,
                "contentEditable='false'"
              );
              return (
                <div
                  key={template.id}
                  style={{
                    transform: "scale(.5)",
                    transformOrigin: "top left",
                  }}
                  className="relative bg-white shadow-md rounded-lg overflow-hidden border-[#ddd] border-2 hover:border-blue-500 transition duration-300 ease-in-out"
                >
                  {/* Template Preview */}
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitizedDocument }}
                    className="border border-gray-300 bg-white relative overflow-hidden"
                    style={{
                      width: `${a4Portrait.width}px`,
                      height: `${a4Portrait.height}px`,
                      transform: "scale(1)",
                      transformOrigin: "top left",
                      margin: "auto",
                    }}
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <button
                      onClick={() => handleChooseTemplate(template)}
                      // className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      className="bg-blue-900 h-[80px] text-white text-2xl font-medium px-4 py-2 rounded-md w-[80%] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
                    >
                      Choose Template
                    </button>
                  </div>
                </div>
              );
            }
          )}
          <ViewModal
            isOpen={isViewModalOpen}
            onClose={handleclose}
            title="View Template"
          >
            <div className="max-h-96 overflow-hidden">
              <TemplateView template={templateData} />
            </div>
          </ViewModal>
        </div>
      </div>
    </div>
  );
}

export default ChooseResumePage;
