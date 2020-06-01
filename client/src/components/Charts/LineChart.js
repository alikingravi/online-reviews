import React from "react";
import { Line } from "react-chartjs-2";

export const LineChart = (props) => {
  const data = {
    labels: props.data.labels,
    datasets: [
      {
        label: props.data.chartLabel,
        data: props.data.chartData,
        backgroundColor: props.data.bgColor,
        pointRadius: 6,
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
  return <Line data={data} options={options} />;
};
