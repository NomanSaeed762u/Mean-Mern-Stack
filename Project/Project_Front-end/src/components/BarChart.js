import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const BarChart = ({ labels, data }) => {
  const backgroundColors = [
    'rgba(92, 92, 92,1)',
    'rgba(80, 255, 80,1)',
    'rgba(0, 0, 255,1)',
    'rgba(210, 180, 140,1)',
    'rgba(153, 102, 255,1)',
    'rgba(255, 155, 0,1)',
  ];

  const generateChartData = () => {
    const sortedData = data.slice().sort((a, b) => b - a);
    const sortedLabels = sortLabelsByData(labels, data);

    const chartData = {
      labels: sortedLabels,
      datasets: [
        {
          label: 'Data',
          data: sortedData,
          backgroundColor: backgroundColors,
        //   borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    };

    return chartData;
  };

  const sortLabelsByData = (labels, data) => {
    const labelData = labels.map((label, index) => ({ label, data: data[index] }));
    labelData.sort((a, b) => b.data - a.data);
    return labelData.map(item => item.label);
  };

  return (
    <div className="bar">
      {/* <h2>Chart</h2> */}
      <Bar data={generateChartData()} />
    </div>
  );
};

export default BarChart;
