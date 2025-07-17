import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ReportAnalytics = () => {
  // Chart refs and instances
  const revenueChartRef = useRef(null);
  const ordersChartRef = useRef(null);
  const demographicsChartRef = useRef(null);
  const revenueChartInstance = useRef(null);
  const ordersChartInstance = useRef(null);
  const demographicsChartInstance = useRef(null);

  // Initialize charts
  useEffect(() => {
    // Cleanup function
    return () => {
      if (revenueChartInstance.current) {
        revenueChartInstance.current.destroy();
        revenueChartInstance.current = null;
      }
      if (ordersChartInstance.current) {
        ordersChartInstance.current.destroy();
        ordersChartInstance.current = null;
      }
      if (demographicsChartInstance.current) {
        demographicsChartInstance.current.destroy();
        demographicsChartInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Revenue Trend Line Chart
    if (revenueChartRef.current) {
      // Destroy previous instance if exists
      if (revenueChartInstance.current) {
        revenueChartInstance.current.destroy();
      }

      revenueChartInstance.current = new Chart(revenueChartRef.current, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Revenue',
            data: [12000, 19000, 15000, 20000, 18000, 22000, 24589],
            borderColor: 'rgba(13, 110, 253, 1)',
            backgroundColor: 'rgba(13, 110, 253, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }

    // Orders by Status Donut Chart
    if (ordersChartRef.current) {
      // Destroy previous instance if exists
      if (ordersChartInstance.current) {
        ordersChartInstance.current.destroy();
      }

      ordersChartInstance.current = new Chart(ordersChartRef.current, {
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
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    // Demographics Pie Chart
    if (demographicsChartRef.current) {
      // Destroy previous instance if exists
      if (demographicsChartInstance.current) {
        demographicsChartInstance.current.destroy();
      }

      demographicsChartInstance.current = new Chart(demographicsChartRef.current, {
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
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className="p-3">
      <h2 className="h4 fw-bold mb-3">Report Analytics</h2>
      {/* Top Control Row */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch align-items-md-center gap-3 mb-4">
        {/* Left Group: Filter & Export */}
        <div className="d-flex flex-column flex-sm-row gap-2 w-100 w-md-auto">
          <select className="form-select w-100 w-sm-auto" style={{ minWidth: '150px' }}>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
          <button className="btn btn-outline-secondary ">
            <i className="bi bi-download me-2"></i>Export Report
          </button>
        </div>

        {/* Right: Refresh Button */}
        <button className="btn btn-primary  ms-md-auto">
          Refresh Data
        </button>
      </div>


      {/* Metrics Row */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="text-muted small">Total Revenue</div>
                <h5 className="mb-0 text-success">$24,589.99</h5>
                <small className="text-success">▲ 12.5% vs last period</small>
              </div>
              <i className="bi bi-currency-dollar fs-3 text-primary"></i>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="text-muted small">Total Orders</div>
                <h5 className="mb-0">1,284</h5>
                <small className="text-success">▲ 8.2% vs last period</small>
              </div>
              <i className="bi bi-cart fs-3 text-success"></i>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="text-muted small">Average Order Value</div>
                <h5 className="mb-0 text-danger">$189.50</h5>
                <small className="text-danger">▼ 3.1% vs last period</small>
              </div>
              <i className="bi bi-bar-chart-line fs-3 text-danger"></i>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="text-muted small">Customer Satisfaction</div>
                <h5 className="mb-0">94.8%</h5>
                <small className="text-success">▲ 1.2% vs last period</small>
              </div>
              <i className="bi bi-emoji-smile fs-3 text-warning"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <div className="card shadow-sm p-3 h-100">
            <div className="text-muted mb-2 fw-semibold">Revenue Trend</div>
            <div className="position-relative" style={{ height: '250px' }}>
              <canvas ref={revenueChartRef}></canvas>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-3 h-100">
            <div className="text-muted mb-2 fw-semibold">Orders by Status</div>
            <div className="position-relative" style={{ height: '200px' }}>
              <canvas ref={ordersChartRef}></canvas>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3 small text-muted">
              <span><i className="bi bi-circle-fill text-primary me-1"></i>Completed</span>
              <span><i className="bi bi-circle-fill text-info me-1"></i>Processing</span>
              <span><i className="bi bi-circle-fill text-warning me-1"></i>Pending</span>
              <span><i className="bi bi-circle-fill text-danger me-1"></i>Cancelled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product + Demographics Row */}
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card shadow-sm p-3 h-100">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-semibold text-muted">Top Products</span>
              <a href="#" className="small">View All</a>
            </div>
            <div className="table-responsive">
              <table className="table align-middle table-borderless">
                <thead className="text-muted small">
                  <tr>
                    <th>Product</th>
                    <th>Orders</th>
                    <th>Revenue</th>
                    <th>Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src="https://via.placeholder.com/40" className="me-2 rounded" alt="" />
                        <div>
                          <div className="fw-semibold">Premium Headphones</div>
                          <div className="text-muted small">Electronics</div>
                        </div>
                      </div>
                    </td>
                    <td>458</td>
                    <td>$45,800</td>
                    <td className="text-success">▲ 24%</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src="https://via.placeholder.com/40" className="me-2 rounded" alt="" />
                        <div>
                          <div className="fw-semibold">Smart Watch Pro</div>
                          <div className="text-muted small">Wearables</div>
                        </div>
                      </div>
                    </td>
                    <td>312</td>
                    <td>$31,200</td>
                    <td className="text-success">▲ 18%</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src="https://via.placeholder.com/40" className="me-2 rounded" alt="" />
                        <div>
                          <div className="fw-semibold">Leather Wallet</div>
                          <div className="text-muted small">Accessories</div>
                        </div>
                      </div>
                    </td>
                    <td>287</td>
                    <td>$14,350</td>
                    <td className="text-danger">▼ 5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm p-3 h-100">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-semibold text-muted">Customer Demographics</span>
              <a href="#" className="small">View Details</a>
            </div>
            <div className="position-relative" style={{ height: '300px' }}>
              <canvas ref={demographicsChartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportAnalytics;