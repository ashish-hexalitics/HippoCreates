import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetTemplatesQuery,
  useDeleteTemplateMutation,
} from "../../store/slices/userSlice/apiSlice";
import { useGetCategoriesQuery } from "../../store/slices/categorySlice/apiSlice";
import {
  getTemplates,
  deleteTemplateSlice,
} from "../../store/slices/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { RootState } from "../../store";
import Loading from "../../components/Common/Loader/index";
import AppModal from "../../components/Common/Modal";
import DeleteModal from "../../components/Common/Modal/DeleteModal";
import TemplateGrid from "../../components/TemplateLayout/TemplateGrid";
function TemplateList() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [deleteTemplate] = useDeleteTemplateMutation();

  const { data, isLoading, isError } = useGetTemplatesQuery();
  const { data: categories } = useGetCategoriesQuery();

  const { templates } = useAppSelector((state: RootState) => state.userSlice);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<any>({
    categoryId: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (data && data?.templates) {
      dispatch(getTemplates(data.templates));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (templates) {
      dispatch(getTemplates(templates));
    }
  }, [templates]);

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setCategoryData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/admin/create/template/${categoryData.categoryId}`);
    toggleModal();
  };

  const handleDelete = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedTemplateId) {
      try {
        await deleteTemplate(selectedTemplateId);
        dispatch(deleteTemplateSlice(selectedTemplateId));
        setIsDeleteModalOpen(false);
      } catch (error) {
        console.error("Failed to delete the template: ", error);
      }
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading user data</div>;

  return (
    <div className="min-h-screen bg-gray-100 px-4">
      <div className="flex justify-between items-center mb-2">
        <input
          type="text"
          className="peer block rounded border-0 p-2 text-gray-700 placeholder-gray-500 bg-white"
          id="exampleInputUsername"
          placeholder="Search by category"
        />
        <button
          className="bg-[#3f9997] text-white font-medium rounded-md p-2 mb-6"
          onClick={() => toggleModal()}
        >
          Create Your Template
        </button>
      </div>
      <div className="flex flex-wrap">
        {Array.isArray(templates) &&
          templates.map((template: any) => {
            return (
              <TemplateGrid
                key={template?._id}
                template={template}
                handleDelete={handleDelete}
              />
            );
          })}
      </div>
      <AppModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        handlSave={handleSubmit}
        title="Add Category"
      >
        <div>
          <label
            htmlFor="theme"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Theme
          </label>
          <select
            id="theme"
            onChange={handleInputChange}
            name="categoryId"
            className="peer block w-full rounded border-0 bg-gray-500 px-4 py-3 text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none dark:bg-gray-100 dark:text-gray dark:placeholder-gray-400"
          >
            {categories &&
              Array.isArray(categories.categories) &&
              categories.categories.map((item: any, key: any) => (
                <option key={key} value={item._id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </AppModal>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}

export default TemplateList;
