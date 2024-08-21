import { useEffect, useState } from "react";
import Table from "../../components/Common/Table";
import { icons } from "../../Icons/constant";
const { RiApps2AddLine } = icons;
import {
  useGetCategoriesQuery,
  useCreateCategoriesMutation,
  useUpdateCategoryApiMutation,
  useDeleteCategoryApiMutation,
  useCloneCategoryApiMutation,
} from "../../store/slices/categorySlice/apiSlice";
import {
  addCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  cloneCategory,
} from "../../store/slices/categorySlice/categorySlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import AppModal from "../../components/Common/Modal";

const columns = [
  {
    name: "name",
    Header: "Category Name",
    colName: "Default",
  },
  {
    Header: "Actions",
    Actions: ["UPDATE", "DELETE"],
    colName: "Actions",
  },
];

interface ICategory {
  name: string;
}

function CategoriesApp() {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.categorySlice);
  const { data, isLoading, isError } = useGetCategoriesQuery();
  const [createCategories] = useCreateCategoriesMutation();
  const [updateCategoryApi] = useUpdateCategoryApiMutation();
  const [deleteCategoryApi] = useDeleteCategoryApiMutation();
  const [cloneCategoryApi] = useCloneCategoryApiMutation();

  const [categoryData, setCategoryData] = useState<ICategory>({
    name: "",
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    if (data && data.categories) {
      dispatch(getCategories(data.categories));
    }
  }, [data, dispatch]);

  if (isError) return <div>Error loading user data</div>;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isEdit) {
      const newCategory = await createCategories(categoryData).unwrap();
      dispatch(addCategory(newCategory.category));
      setIsEdit(false)
      setCategoryData({name:""})
    } else {
      const updatedCategory = await updateCategoryApi({categoryData}).unwrap();
      dispatch(updateCategory(updatedCategory.category));
    }
    toggleModal();
  };
  const handleDelete = async (data: any) => {
    await deleteCategoryApi(data._id).unwrap();
    dispatch(deleteCategory(data._id));
  };

  const handleUpdate = (data: any) => {
    setCategoryData(data);
    toggleModal();
    setIsEdit(true);
  };

  const handleClone = async (data: any) => {
    const clonedCategory = await cloneCategoryApi(data._id).unwrap();
    dispatch(cloneCategory(clonedCategory.category));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Template Category
          </h1>
          <button
            onClick={toggleModal}
            className="px-4 py-2 flex items-center bg-[#3f9997] text-white font-medium rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            <RiApps2AddLine className="me-2" /> Add Category
          </button>
        </div>
        <Table
          data={categories}
          columns={columns}
          loading={isLoading}
          handleUpdate={handleUpdate}
          handleClone={handleClone}
          handleDelete={handleDelete}
        />
      </div>
      <AppModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        handlSave={handleSubmit}
        title="Add Category"
      >
        <div>
          {[{ name: "name", label: "Name", value: categoryData.name }].map(
            ({ name, label, value }) => (
              <div key={name} className="relative mb-6">
                <input
                  type="text"
                  name={name}
                  value={value}
                  onChange={handleInputChange}
                  className="peer block w-full rounded border-0 bg-white  px-4 py-3 text-gray-700 placeholder-transparent  focus:outline-none  dark:text-gray dark:placeholder-gray-400"
                  placeholder={label}
                />
                <label
                  htmlFor={`exampleInput${label}`}
                  className={`pointer-events-none absolute left-2 top-0 mb-0 pt-3 leading-6 text-transparent transition-all duration-200 ease-out transform ${
                    value
                      ? "-translate-y-6 scale-75 text-gray-500"
                      : "peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                  } peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-transparent dark:text-gray-400`}
                >
                  {label}
                </label>
              </div>
            )
          )}
        </div>
      </AppModal>
    </div>
  );
}

export default CategoriesApp;
