import React, { useEffect, useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import axiosInstance from "../../Utilities/axiosInstance";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register ChartJS modules
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const DashboardCharts = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/dashboardOverview/getDashboardOverview");
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  if (!dashboardData) return <div>Loading charts...</div>;

  // Line Chart for Revenue Trends
  const stockTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Revenue ($)",
      data: [5000, 6200, 7000, 8000, 7500, 8200, dashboardData.totalRevenue?.count || 0],
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      tension: 0.4,
    }]
  };

  // Doughnut Chart for Users vs Products
  const userProductData = {
    labels: ["Users", "Products"],
    datasets: [{
      data: [
        dashboardData.totalUsers?.count || 0,
        dashboardData.totalProducts?.count || 0
      ],
      backgroundColor: ["#36A2EB", "#FF6384"],
      borderWidth: 1
    }]
  };

  return (
    <div className="row mb-4">
      {/* Revenue Line Chart */}
      <div className="col-lg-6 mb-4">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Revenue Trends</h5>
            <div className="btn-group btn-group-sm">
              <button className="btn btn-primary">7 Months</button>
              <button className="btn btn-outline-secondary">Year</button>
            </div>
          </div>
          <div className="card-body">
            <div style={{ height: "250px" }}>
              <Line
                data={stockTrendsData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                }}
              />
            </div>
          </div>
        </div>
      </div>

   

      {/* Users vs Products Doughnut */}
      <div className="col-lg-6 mb-4">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Top Product</h5>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-bar-chart"></i>
            </button>
          </div>
          <div className="card-body">
            <div style={{ height: "250px" }}>
              <Doughnut
                data={userProductData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  cutout: "70%",
                  plugins: { legend: { position: "bottom" } },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
