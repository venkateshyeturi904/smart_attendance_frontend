import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
 } from 'chart.js';
ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const BarGraph = ({ data }) => {
  const dates = data.map(entry => entry.date);
  const studentCounts = data.map(entry => entry.studentCount);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Number of Students',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: studentCounts,
      },
    ],
  };

  const options={

  }

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarGraph;
