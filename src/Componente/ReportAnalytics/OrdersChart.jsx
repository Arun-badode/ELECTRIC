import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const OrdersChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Processing', 'Pending', 'Cancelled'],
        datasets: [{
          data: [850, 250, 150, 34],
          backgroundColor: [
            'rgba(13, 110, 253, 0.8)',
            'rgba(13, 202, 240, 0.8)',
            'rgba(255, 193, 7, 0.8)',
            'rgba(220, 53, 69, 0.8)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: { legend: { display: false } }
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="text-center">
      <div style={{ height: '200px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3 small">
        <span><i className="bi bi-circle-fill text-primary me-1"></i>Completed</span>
        <span><i className="bi bi-circle-fill text-info me-1"></i>Processing</span>
        <span><i className="bi bi-circle-fill text-warning me-1"></i>Pending</span>
        <span><i className="bi bi-circle-fill text-danger me-1"></i>Cancelled</span>
      </div>
    </div>
  );
};

export default OrdersChart;