function AdditionalDetailsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-teal-400 p-6">
          <h1 className="text-3xl font-bold text-white">Add Additional Details</h1>
          <p className="text-gray-200 mt-2">
            Provide any additional information that can help employers better understand your profile.
          </p>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Hobbies</label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                placeholder="E.g., Reading, Traveling"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Languages Known</label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                placeholder="E.g., English, Spanish"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Certifications</label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                placeholder="E.g., PMP Certification"
              />
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full mt-4">
              Add Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdditionalDetailsPage;
