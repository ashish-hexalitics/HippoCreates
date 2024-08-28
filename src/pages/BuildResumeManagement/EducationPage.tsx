
function EducationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6">
          <h1 className="text-3xl font-bold text-white">Let’s talk about your education</h1>
          <p className="text-gray-200 mt-2">
            Tell us about any colleges, vocational programs, or training courses you took. Even if you didn’t finish, it’s important to list them.
          </p>
        </div>
        <div className="p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">School Name</label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                placeholder="Oxford Software Institute & Oxford School of English"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">School Location</label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                placeholder="New Delhi, India"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Degree</label>
              <select className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400">
                <option>Select</option>
                <option>Diploma</option>
                <option>Bachelor's</option>
                <option>Master's</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Field of Study</label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                placeholder="Financial Accounting"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Graduation Date - Month</label>
              <select className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400">
                <option>Select</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Graduation Date - Year</label>
              <select className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400">
                <option>Select</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                {/* Add more years as needed */}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
