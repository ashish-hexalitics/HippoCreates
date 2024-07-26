import React from "react";
import { TEChart } from "tw-elements-react";

const ChartHalfDoughnut = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <TEChart
        type="doughnut"
        data={{
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          datasets: [
            {
              label: "Traffic",
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
              backgroundColor: [
                "rgba(63, 81, 181, 0.5)",
                "rgba(77, 182, 172, 0.5)",
                "rgba(66, 133, 244, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)"
              ],
              borderColor: [
                "rgba(63, 81, 181, 1)",
                "rgba(77, 182, 172, 1)",
                "rgba(66, 133, 244, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 0,
            },
          ],
        }}
        options={{
          responsive: true,
          circumference: 180,
          rotation: -90,
          plugins: {
            legend: {
              position: 'bottom',
              display:false
            },
            title: {
              display: true,
              text: 'Traffic Distribution Over the Week',
            },
          },
        }}
      />
    </div>
  );
};

export default ChartHalfDoughnut;
