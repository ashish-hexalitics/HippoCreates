// import React from "react";
import BarChart from "../Chart/BarChart";

const data = {
  labels: ["Dec 22", "Jan 23", "Feb 23", "Mar 23", "Apr 23"],
  datasets: [
    {
      label: "Income",
      backgroundColor: "#4CAF50",
      data: [65000, 76500, 30000, 50000, 90000],
    },
    {
      label: "Spend",
      backgroundColor: "#FFC107",
      data: [35000, 20000, 40000, 30000, 50000],
    },
  ],
};

function RevenueCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
      <h3 className="text-gray-500 mb-1">Monthly Recurring Revenue</h3>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-3xl font-bold">$156,098.1</p>
          <p className="text-green-500">▲ 4.1% vs $303.3K last year</p>
        </div>
        <div>
          <p className="text-3xl font-bold">$80,112.02</p>
          <p className="text-green-500">▲ 2% vs $77,000.02 last year</p>
        </div>
      </div>
      <BarChart/>
    </div>
  );
}

export default RevenueCard;
