import { useEffect } from "react";
import Table from "../components/Common/Table";
import Loading  from "../components/Common/Loader/index";
import { icons } from "../Icons/constant";
const { RiApps2AddLine } = icons;
import { useGetCategoriesQuery } from "../store/slices/categorySlice/apiSlice";
import { getCategories } from "../store/slices/categorySlice/categorySlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function CategoriesApp() {
  const dispatch = useAppDispatch();
  const categoryState = useAppSelector((state) => state.categorySlice);
  const { data, isLoading, isError } = useGetCategoriesQuery();

  useEffect(() => {
    if (data && data.categories) {
      dispatch(getCategories(data.categories));
    }
  }, [data, dispatch]);
  
  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading user data</div>;
  
  return (
    <div className="p-4">
      <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Template Category
          </h1>
          <button className="px-4 py-2 flex items-center bg-[#3f9997] text-white font-medium rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
            <RiApps2AddLine className="me-2" /> Add Category
          </button>
        </div>
        <Table data={categoryState} />
      </div>
    </div>
  );
}

export default CategoriesApp;
