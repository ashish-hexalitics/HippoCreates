import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetTemplatesQuery } from "../store/slices/userSlice/apiSlice";
import { getTemplates } from "../store/slices/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { RootState } from "../store";
import Loading from "../components/Common/Loader/index";

function Template() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useGetTemplatesQuery();

  const { templates } = useAppSelector((state: RootState) => state.userSlice);

  useEffect(() => {
    if (data && data?.templates) {
      dispatch(getTemplates(data.templates));
    }
  }, [data, dispatch]);

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
          onClick={() => navigate("/admin/create/template")}
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
              className="bg-white shadow-md rounded-lg overflow-hidden border-[#55bab9] border-4"
            >
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedDocument }}
                style={{
                  position: "relative",
                  padding: "10px",
                  height: "300px",
                  overflowY: "auto", // Allow vertical scroll if content overflows
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f9f9f9",
                }}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {template?.name}
                </h2>
                <button className="w-full py-2 px-4 bg-[#55bab9] text-white rounded-md hover:bg-primary-dark transition">
                  Select Template
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Template;
