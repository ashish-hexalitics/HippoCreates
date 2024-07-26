// import React from "react";

function StatCard({
  title,
  value,
  change,
  changeType,
}: {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down";
}) {
  const changeColor = changeType === "up" ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-gray-500 mb-1">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
      <p className={changeColor}>{change}</p>
    </div>
  );
}

export default StatCard;
