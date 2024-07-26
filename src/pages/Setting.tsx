// import React from "react";
// import { TESelect } from "tw-elements-react";

function Setting() {
  // const data = [
  //   { text: "Light", value: 1 },
  //   { text: "Dark", value: 2 },
  // ];
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
      {/* Form Container */}
      <form>
        {/* Section: Account */}
        <div className="mb-4">
          <h2 className="text-xl font-medium text-gray-700 mb-2">Account</h2>
          <div className="flex flex-col space-y-4">
            <div className="relative mb-6">
              <input
                type="text"
                className="peer block w-full rounded border-0 bg-gray-500 px-4 py-3 text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none dark:bg-gray-100 dark:text-gray dark:placeholder-gray-400"
                id="exampleInputUsername"
                placeholder="Enter Your Username"
              />
              <label
                htmlFor="exampleInputUsername"
                className="pointer-events-none absolute left-4 top-0 mb-0 pt-3 leading-6 text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-gray-400"
              >
                Enter Your Username
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                className="peer block w-full rounded border-0 bg-gray-500 px-4 py-3 text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none dark:bg-gray-100 dark:text-gray dark:placeholder-gray-400"
                id="exampleInputUsername"
                placeholder="Enter Your Email"
              />
              <label
                htmlFor="exampleInputUsername"
                className="pointer-events-none absolute left-4 top-0 mb-0 pt-3 leading-6 text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-gray-400"
              >
                Enter Your Email
              </label>
            </div>
          </div>
        </div>

        {/* Section: Preferences */}
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-700 mb-2">
            Preferences
          </h2>
          <div className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="theme"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Theme
              </label>
              <select
                id="theme"
                className="peer block w-full rounded border-0 bg-gray-500 px-4 py-3 text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none dark:bg-gray-100 dark:text-gray dark:placeholder-gray-400"
              >
                <option>Light</option>
                <option>Dark</option>
              </select>
              {/* <TESelect data={data} className="border-0 bg-gray-500 px-4 py-3 text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none dark:bg-gray-100 dark:text-gray dark:placeholder-gray-400" /> */}
            </div>
            <div>
              <label
                htmlFor="notifications"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Notifications
              </label>
              <input
                id="notifications"
                type="checkbox"
                className="mt-1 h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Enable notifications</span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Setting;
