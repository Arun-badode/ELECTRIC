import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const RevenueChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Revenue',
          data: [12000, 19000, 15000, 20000, 18000, 22000, 24589],
          borderColor: '#0d6efd',
          backgroundColor: 'rgba(13, 110, 253, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: false } }
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <div style={{ height: '250px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RevenueChart;