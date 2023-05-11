import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import Data from "./Data";
import ChartB from "./ChartCountry";
function ChartA() {
  let numMales = 0;
  let numFemales = 0;

  for (const user of Data) {
    if (user.gender === "Male" && ageCalculator(user.dob) > 30) {
      numMales++;
    } else if (user.gender === "Female" && ageCalculator(user.dob) > 30) {
      numFemales++;
    }
  }
  const [us] = useState({
    labels: ["Male age > 30", "Female age > 30"],
    datasets: [
      {
        label: "Total Number out of " + Data.length,
        data: [numMales, numFemales],
        backgroundColor: ["#BA55D3", "#90EE90"],
        borderColor: ["black", "black"],
        borderWidth: 1,
        color:"black"
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
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

  function ageCalculator(date) {
    // var check ="17/01/1999";
    const newdate =
      date.substring(3, 5) +
      "/" +
      date.substring(0, 2) +
      "/" +
      date.substring(6, 10);
    const dob = new Date(newdate);
    //calculate month difference from current date in time
    const month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    const age_dt = new Date(month_diff);

    //extract year from date
    const year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    const age = Math.abs(year - 1970);
    //display the calculated age
    return age;
  }

  return (
    <div className="charcontainer">
      <div>
        <Pie data={us} />
        <div className="charttext">Age greater then 30</div>
      </div>
      <div>
        <ChartB />
        <div className="charttext" style={{ height: "20rem" }}>
          Country name with number of people
        </div>
      </div>
    </div>
  );
}

export default ChartA;
