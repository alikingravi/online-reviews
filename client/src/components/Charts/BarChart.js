import React from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = (props) => {
  const data = {
    labels: props.data.labels,
    datasets: [
      {
        label: props.data.chartLabel,
        data: props.data.chartData,
        backgroundColor: props.data.bgColor,
      },
    ],
  };

  let options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} />;
};
