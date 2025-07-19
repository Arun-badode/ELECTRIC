import React from "react";
import StatsCards from "./StatsCards";
import DashboardCharts from "./DashboardCharts";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  return (
    <div className="container-fluid p-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="h4 fw-bold mb-1">Dashboard Overview</h2>
          <p className="text-muted mb-0">Welcome back! Here's what's happening with your store.</p>
        </div>
        <div>
          <button className="btn btn-primary me-2">
            <i className="bi bi-download me-2"></i>Export Report
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-gear me-2"></i>Settings
          </button>
        </div>
      </div>

      {/* Components */}
      <StatsCards />
      <DashboardCharts />
      <RecentOrders />
    </div>
  );
};

export default Dashboard;