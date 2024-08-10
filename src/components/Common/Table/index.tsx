// import React from "react";
// import Loader from "../Loader/index";
function index({ data }: { data: any[] }) {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full text-center text-sm font-light">
            <thead className="bg-[#3f9997] text-white uppercase text-xs font-semibold tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  First
                </th>
                <th scope="col" className="px-6 py-4">
                  Last
                </th>
                <th scope="col" className="px-6 py-4">
                  Handle
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-200">
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
              </tr>
              <tr className="bg-gray-50 border-b transition duration-300 ease-in-out hover:bg-gray-200">
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                <td className="whitespace-nowrap px-6 py-4">@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default index;
