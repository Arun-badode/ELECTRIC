import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const DemographicsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
        datasets: [{
          data: [15, 35, 25, 15, 10],
          backgroundColor: [
            'rgba(13, 110, 253, 0.8)',
            'rgba(111, 66, 193, 0.8)',
            'rgba(214, 51, 132, 0.8)',
            'rgba(253, 126, 20, 0.8)',
            'rgba(25, 135, 84, 0.8)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'right' } }
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <div style={{ height: '300px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DemographicsChart;