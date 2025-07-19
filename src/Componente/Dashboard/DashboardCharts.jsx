import React from "react";
import { Line, Doughnut } from "react-chartjs-2";

const DashboardCharts = () => {
  // Stock Trends Chart
  const stockTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Stock Levels",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      tension: 0.4
    }]
  };

  // Order Volume Chart
  const orderVolumeData = {
    labels: ["Internal", "Customer", "Vendor", "Return"],
    datasets: [{
      data: [300, 500, 200, 100],
      backgroundColor: [
        "rgba(54, 162, 235, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(255, 99, 132, 0.7)"
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className="row mb-4">
      <div className="col-lg-6 mb-4">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Stock Level Trends</h5>
            <div className="btn-group btn-group-sm">
              <button className="btn btn-primary">7 Days</button>
              <button className="btn btn-outline-secondary">30 Days</button>
            </div>
          </div>
          <div className="card-body">
            <div style={{ height: "250px" }}>
              <Line data={stockTrendsData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }
              }} />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Order Volume by Type</h5>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-three-dots"></i>
            </button>
          </div>
          <div className="card-body">
            <div style={{ height: "250px" }}>
              <Doughnut data={orderVolumeData} options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: "70%"
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;