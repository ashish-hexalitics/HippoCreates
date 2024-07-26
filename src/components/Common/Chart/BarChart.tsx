// import React from "react";
import { TEChart } from "tw-elements-react";

const ChartBarDarkModeProps = () => {
  return (
    <TEChart
      type="bar"
      darkTicksColor="#ff0000"
      darkGridLinesColor="#ffff00"
      darkLabelColor="#ff00ff"
      data={{
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Traffic",
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
          },
        ],
      }}
    />
  );
};
export default ChartBarDarkModeProps;
