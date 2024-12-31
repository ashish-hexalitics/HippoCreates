import {  useEffect, useState } from "react";
import Header from "../components/Landing/Header";
import { useGetTemplatesQuery } from "../store/slices/userSlice/apiSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { RootState } from "../store";
import { getTemplates } from "../store/slices/userSlice/userSlice";
// import { pixelsToCm } from "../components/TemplateLayout/constant";
import ViewModal from "../components/Common/Modal/ViewModal";
import TemplateView from "../components/TemplateLayout/TemplateView";
// const a4Portrait = { width: pixelsToCm(794), height: pixelsToCm(1123) };
import ChooseTemplate from "../components/TemplateLayout/ChooseTemplate";

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
        <div className="grid grid-cols-4 gap-6">
        {templates.map(
            (template: any) => {
              return (
                <ChooseTemplate
                  key={template.id}
                  template={template}
                  handleChooseTemplate={handleChooseTemplate}
                />
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
