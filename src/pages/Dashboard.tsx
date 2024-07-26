// import React from "react";
import RevenueCard from "../components/Common/Cards/RevenueCard";
import SellingProductCard from "../components/Common/Cards/SellingProductCard";
import StatCard from "../components/Common/Cards/StatCard";

const statCardsdata: {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down";
}[] = [
  {
    title: "Net Profit",
    value: "$302.1K",
    change: "▼ 2.9% vs $303.3K last year",
    changeType: "down",
  },
  {
    title: "Store",
    value: "12,900",
    change: "▲ 12.9% vs 10,300 last year",
    changeType: "up",
  },
  {
    title: "Product",
    value: "390,040",
    change: "▲ 4.1% vs 320,583 last year",
    changeType: "up",
  },
  {
    title: "Visitor",
    value: "3.1M",
    change: "▼ 17% vs 3.3M last year",
    changeType: "down",
  },
];

function Dashboard() {
  return (
    <div className="">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome back, Maxie</h1>
          <p className="text-gray-600">
            Maximize product sales and store management in order to get the best
            results
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <button className="px-4 py-2 bg-gray-100 rounded-md">
              This Month
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Download Report
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {statCardsdata.map((card, index) => {
          return (
            <StatCard
              key={index}
              title={card.title}
              value={card.value}
              change={card.change}
              changeType={card.changeType}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <RevenueCard />
        <SellingProductCard />
      </div>
    </div>
  );
}

export default Dashboard;
