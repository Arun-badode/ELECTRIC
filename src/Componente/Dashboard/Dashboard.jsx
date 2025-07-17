import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data for Stock Level Trends chart
  const stockTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Stock Levels",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
      },
    ],
  };

  const stockTrendsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        titleFont: {
          size: 14,
          weight: "bold"
        },
        bodyFont: {
          size: 12
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          padding: 10
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10
        }
      },
    },
  };

  // Data for Order Volume by Type chart
  const orderVolumeData = {
    labels: ["Internal", "Customer", "Vendor", "Return"],
    datasets: [
      {
        data: [300, 500, 200, 100],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(255, 99, 132, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const orderVolumeOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        titleFont: {
          size: 14,
          weight: "bold"
        },
        bodyFont: {
          size: 12
        },
        padding: 12,
        cornerRadius: 8
      }
    },
    cutout: "70%",
  };

  return (
    <div className="p-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Dashboard Overview</h2>
          <p className="text-muted mb-0">Key metrics and statistics</p>
        </div>
        <div>
          <button className="btn btn-primary me-2 mt-2">
            <i className="bi bi-download me-2 "></i>Export Report
          </button>
          <button className="btn btn-outline-secondary mt-2">
            <i className="bi bi-gear me-2 "></i>Settings
          </button>
        </div>
      </div>

      {/* Top Stat Cards - Updated to match image content */}
      <div className="row g-4 mb-4">
        {/* Card 1: Total Products */}
        <div className="col-xl-3 col-md-6">
          <div className="card stat-card card-1 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="text-muted small">Total Products</span>
                  <h3 className="fw-bold mt-2 mb-1">1,248</h3>
                  <span className="badge bg-success bg-opacity-10 text-success">
                    <i className="bi bi-arrow-up me-1"></i>5.2% from last month
                  </span>
                </div>
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3">
                  <i className="bi bi-box-seam fs-4"></i>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Total Orders */}
        <div className="col-xl-3 col-md-6">
          <div className="card stat-card card-2 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="text-muted small">Total Orders</span>
                  <h3 className="fw-bold mt-2 mb-1">3,847</h3>
                  <span className="badge bg-success bg-opacity-10 text-success">
                    <i className="bi bi-arrow-up me-1"></i>12.8% from last month
                  </span>
                </div>
                <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3">
                  <i className="bi bi-cart-check fs-4"></i>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Total Users */}
        <div className="col-xl-3 col-md-6">
          <div className="card stat-card card-3 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="text-muted small">Total Users</span>
                  <h3 className="fw-bold mt-2 mb-1">892</h3>
                  <span className="badge bg-success bg-opacity-10 text-success">
                    <i className="bi bi-arrow-up me-1"></i>3.5% from last month
                  </span>
                </div>
                <div className="bg-warning bg-opacity-10 text-warning rounded-circle p-3">
                  <i className="bi bi-people fs-4"></i>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Total Revenue */}
        <div className="col-xl-3 col-md-6">
          <div className="card stat-card card-4 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="text-muted small">Total Revenue</span>
                  <h3 className="fw-bold mt-2 mb-1">$128,492</h3>
                  <span className="badge bg-success bg-opacity-10 text-success">
                    <i className="bi bi-arrow-up me-1"></i>18.6% from last month
                  </span>
                </div>
                <div className="bg-success bg-opacity-10 text-success rounded-circle p-3">
                  <i className="bi bi-currency-dollar fs-4"></i>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the dashboard components remain the same */}
      {/* Graphs */}
      <div className="row g-4 mb-4">
        {/* Stock Level Trends */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-white border-0 pb-0">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">Stock Level Trends</h5>
                <div className="btn-group btn-group-sm" role="group">
                  <button className="btn btn-primary text-white px-3">7 Days</button>
                  <button className="btn btn-light text-secondary px-3">30 Days</button>
                  <button className="btn btn-light text-secondary px-3">90 Days</button>
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              <div style={{ height: "250px" }}>
                <Line data={stockTrendsData} options={stockTrendsOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Order Volume by Type */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header bg-white border-0 pb-0">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">Order Volume by Type</h5>
                <div className="dropdown">
                  <button
                    className="btn btn-link text-muted p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        View Report
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Export Data
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              <div style={{ height: "250px" }}>
                <Doughnut data={orderVolumeData} options={orderVolumeOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders & Items */}
      <div className="row g-4 mb-4">
        {/* Recent Internal Orders */}
        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-header bg-white border-0">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">Recent Orders</h5>
                <a href="#" className="btn btn-sm btn-outline-primary">
                  View All
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead>
                    <tr className="text-muted">
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>#ORD-2024-0892</strong>
                      </td>
                      <td>John Smith</td>
                      <td>3 Products</td>
                      <td>
                        <span className="badge rounded-pill bg-warning-subtle text-warning">
                          Processing
                        </span>
                      </td>
                      <td>Dec 15, 2024</td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>#ORD-2024-0891</strong>
                      </td>
                      <td>Acme Corp</td>
                      <td>5 Products</td>
                      <td>
                        <span className="badge rounded-pill bg-success-subtle text-success">
                          Completed
                        </span>
                      </td>
                      <td>Dec 15, 2024</td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>#ORD-2024-0890</strong>
                      </td>
                      <td>Jane Doe</td>
                      <td>2 Products</td>
                      <td>
                        <span className="badge rounded-pill bg-primary-subtle text-primary">
                          Shipped
                        </span>
                      </td>
                      <td>Dec 14, 2024</td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>#ORD-2024-0889</strong>
                      </td>
                      <td>XYZ Company</td>
                      <td>8 Products</td>
                      <td>
                        <span className="badge rounded-pill bg-success-subtle text-success">
                          Completed
                        </span>
                      </td>
                      <td>Dec 14, 2024</td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-header bg-white border-0">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">Top Selling Products</h5>
                <div className="dropdown">
                  <button
                    className="btn btn-link text-muted p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        View All
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Export List
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="list-group-item border-0 px-0 py-3">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="bg-primary bg-opacity-10 text-primary rounded p-2">
                        <i className="bi bi-laptop fs-4"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0">Premium Laptop</h6>
                        <span className="badge bg-primary rounded-pill">128</span>
                      </div>
                      <small className="text-muted">$1,299.99</small>
                    </div>
                  </div>
                </div>
                <div className="list-group-item border-0 px-0 py-3">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="bg-success bg-opacity-10 text-success rounded p-2">
                        <i className="bi bi-phone fs-4"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0">Smartphone Pro</h6>
                        <span className="badge bg-success rounded-pill">98</span>
                      </div>
                      <small className="text-muted">$899.99</small>
                    </div>
                  </div>
                </div>
                <div className="list-group-item border-0 px-0 py-3">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="bg-warning bg-opacity-10 text-warning rounded p-2">
                        <i className="bi bi-headphones fs-4"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0">Wireless Headphones</h6>
                        <span className="badge bg-warning rounded-pill">76</span>
                      </div>
                      <small className="text-muted">$199.99</small>
                    </div>
                  </div>
                </div>
                <div className="list-group-item border-0 px-0 py-3">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="bg-info bg-opacity-10 text-info rounded p-2">
                        <i className="bi bi-smartwatch fs-4"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0">Smart Watch</h6>
                        <span className="badge bg-info rounded-pill">65</span>
                      </div>
                      <small className="text-muted">$249.99</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;