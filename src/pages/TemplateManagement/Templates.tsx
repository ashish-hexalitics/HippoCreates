import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetTemplatesQuery } from "../../store/slices/userSlice/apiSlice";
import { useGetCategoriesQuery } from "../../store/slices/categorySlice/apiSlice";
import { getTemplates } from "../../store/slices/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { RootState } from "../../store";
import Loading from "../../components/Common/Loader/index";
import AppModal from "../../components/Common/Modal";

function Template() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useGetTemplatesQuery();
  const { data: categories } = useGetCategoriesQuery();

  const { templates } = useAppSelector((state: RootState) => state.userSlice);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = (data: any) => {
    setCategoryData(data);
    toggleModal();
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/admin/create/template/${categoryData.categoryId}`);
    toggleModal();
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
          // navigate("/admin/create/template")
        >
          Create Your Template
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {templates.map((template: any) => {
          // Replace all occurrences of contenteditable="true" with contentEditable="false"
          const sanitizedDocument = template.document.replace(
            /contenteditable\s*=\s*["]?true["]?/gi,
            "contentEditable='false'"
          );

          return (
            <div
              key={template?._id}
              className="bg-white shadow-md rounded-lg overflow-hidden border-[#ddd] border-2"
            >
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedDocument }}
                style={{
                  position: "relative",
                  padding: "10px",
                  height: "300px",
                  overflowY: "auto", 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f9f9f9",
                }}
              />
              <div className="p-0">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {template?.name}
                </h2>
                <button className="w-full py-2 px-4 bg-[#55bab9] text-white hover:bg-white hover:text-[#55bab9] border-t border-b border-[#55bab9] transition">
                  Select Template
                </button>
              </div>
            </div>
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
            {categories.categories.map((item: any, key: any) => (
              <option key={key} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </AppModal>
    </div>
  );
}

export default Template;
