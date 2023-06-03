import React from 'react';
import { Pie } from 'react-chartjs-2';


const PieChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          'rgba(255, 114, 118, 0.8)',
          'rgba(255, 255, 51, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(211, 211, 211, 0.8)',
        ],
      },
    ],
  };

  return (
    <div>
        <div className="pie">
      <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
