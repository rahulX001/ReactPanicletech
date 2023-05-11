import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Data from "./Data";

function ChartB() {
  const counts = {};
  Data.forEach((person) => {
    const country = person.country;
    if (counts[country]) {
      counts[country]++;
    } else {
      counts[country] = 1;
    }
  });

  const [us] = useState({
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Country with number of people",
        data: Object.keys(counts).map((key) => counts[key]),
        backgroundColor: ["#BA55D3", "#90EE90",	"#F4A460","#808000","#008B8B"],
        borderColor: ["black"],
        borderWidth: 1,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false, // set to false to control the size of the chart
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  return <Bar data={us} />;
}

export default ChartB;
