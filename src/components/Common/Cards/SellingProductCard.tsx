// import React from "react";
import Donutchart from "../Chart/Donutchart";

function SellingProductCard() {
  return (
    <div className="bg-[#3f9997] p-6 rounded-lg shadow-lg text-white">
      <h3 className="mb-1">Selling Product</h3>
      <div className="flex justify-between items-center mb-4">
        <p className="text-4xl font-bold">2,609</p>
        <button className="px-4 py-2 bg-black text-white rounded-md">
          This Month
        </button>
      </div>
      <div className=" bg-gray-100 rounded-lg">
        <Donutchart />
      </div>
      <div className="mt-4">
        <p className="text-lg">Visitor growth</p>
        <p className="text-sm">▼ 12% Compare to 27K last month</p>
        <div className="mt-2">
          <div className="flex justify-between">
            <p>Class A</p>
            <p>13,028 / 15,000</p>
          </div>
          <div className="flex justify-between">
            <p>Class B</p>
            <p>11,912 / 15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellingProductCard;
