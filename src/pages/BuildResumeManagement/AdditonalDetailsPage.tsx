import { useNavigate } from "react-router-dom";

function AdditionalDetailsPage() {
  const navigate = useNavigate();
  const categoryId = localStorage.removeItem("categoryId");
  const templateId = localStorage.removeItem("templateId");
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 py-10">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-8">
          <h1 className="text-4xl font-extrabold text-white">
            Add Additional Details
          </h1>
          <p className="text-gray-200 mt-2">
            Provide any additional information that can help employers better
            understand your profile.
          </p>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Hobbies
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                placeholder="E.g., Reading, Traveling"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Languages Known
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                placeholder="E.g., English, Spanish"
              />
            </div>

            <div className="col-span-2 flex justify-between">
              <button
                onClick={(e) => e.preventDefault()}
                type="submit"
                className="px-6 py-3 rounded-md bg-teal-500 text-white font-bold shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Add Details
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/view/template/${categoryId}/${templateId}`);
                }}
                className="px-6 py-3 rounded-md bg-teal-500 text-white font-bold shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Skip
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdditionalDetailsPage;
