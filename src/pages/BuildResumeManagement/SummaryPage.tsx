
function SummaryPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6">
          <h1 className="text-3xl font-bold text-white">Let's start with your header</h1>
          <p className="text-gray-200 mt-2">
            Include your full name and at least one way for employers to reach you.
          </p>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center bg-gray-100">
                <span className="text-gray-400 text-xl">+</span>
              </div>
              <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
                Add a photo
              </button>
            </div>
            <div className="w-full md:w-2/3 mt-6 md:mt-0">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="Diya"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Surname</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="Agarwal"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">City</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="New Delhi"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Country</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="India"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Pin Code</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="110034"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="+91 11 1234 5677"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-200 p-3 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="d.agarwal@sample.in"
                  />
                  <p className="text-red-500 mt-1">Please enter your email address</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage
