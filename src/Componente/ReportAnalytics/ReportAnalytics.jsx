import React from 'react';
import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaSearch } from 'react-icons/fa';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const ReportAnalytics = () => {
  // Chart data
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Reports Generated',
      data: [10, 20, 15, 30, 25, 40],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      tension: 0.4,
    }],
  };

  const pieData = {
    labels: ['Approved', 'Rejected', 'Pending'],
    datasets: [{
      data: [60, 15, 25],
      backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
      borderWidth: 1,
    }],
  };

  const barData = {
    labels: ['Sales', 'HR', 'IT', 'Finance', 'Operations'],
    datasets: [{
      label: 'Reports by Department',
      data: [12, 9, 7, 5, 4],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const lineAvgTime = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Avg Processing Time (Days)',
      data: [2, 3, 1.5, 2.5],
      fill: false,
      borderColor: '#17a2b8',
      backgroundColor: '#17a2b8',
      tension: 0.4,
    }],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="container-fluid py-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Report Analytics Dashboard</h2>
        <div className="d-flex">
          <div className="input-group" style={{ width: '250px' }}>
            <input type="text" className="form-control" placeholder="Search reports..." />
            <button className="btn btn-primary" type="button">
              <FaSearch />
            </button>
          </div>
          <button className="btn btn-outline-primary ms-3">
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        {[
          { 
            title: "Total Reports", 
            value: 123, 
            change: "+12% from last month",
            icon: <FaClipboardList className="fs-3" />,
            color: "primary"
          },
          { 
            title: "Approved", 
            value: 78, 
            change: "+8% from last month",
            icon: <FaCheckCircle className="fs-3" />,
            color: "success"
          },
          { 
            title: "Rejected", 
            value: 15, 
            change: "-3% from last month",
            icon: <FaTimesCircle className="fs-3" />,
            color: "danger"
          },
          { 
            title: "Pending", 
            value: 30, 
            change: "+5% from last month",
            icon: <FaHourglassHalf className="fs-3" />,
            color: "warning"
          },
        ].map((card, idx) => (
          <div className="col-12 col-sm-6 col-lg-3" key={idx}>
            <div className={`card border-${card.color} border-top-3 shadow-sm h-100`}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-muted mb-2">{card.title}</h6>
                    <h2 className={`text-${card.color}`}>{card.value}</h2>
                    <small className="text-muted">{card.change}</small>
                  </div>
                  <div className={`bg-${card.color}-light rounded-circle p-3`}>
                    {React.cloneElement(card.icon, { className: `text-${card.color} fs-3` })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Section */}
      <div className="row g-4 mb-4">
        {/* Reports Over Time */}
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-bottom-0">
              <h5 className="mb-0">Reports Over Time</h5>
            </div>
            <div className="card-body">
              <div style={{ height: '300px' }}>
                <Line data={lineData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-bottom-0">
              <h5 className="mb-0">Status Distribution</h5>
            </div>
            <div className="card-body">
              <div style={{ height: '300px' }}>
                <Pie data={pieData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Charts Section */}
      <div className="row g-4 mb-4">
        {/* Reports by Department */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-bottom-0">
              <h5 className="mb-0">Reports by Department</h5>
            </div>
            <div className="card-body">
              <div style={{ height: '250px' }}>
                <Bar data={barData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Average Processing Time */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-bottom-0">
              <h5 className="mb-0">Average Processing Time</h5>
            </div>
            <div className="card-body">
              <div style={{ height: '250px' }}>
                <Line data={lineAvgTime} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="card shadow-sm">
        <div className="card-header bg-white border-bottom-0 d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Detailed Reports</h5>
          <div>
            <select className="form-select form-select-sm me-2" style={{ width: '150px' }}>
              <option>All Status</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
            <button className="btn btn-sm btn-outline-secondary">
              Filter
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Report ID</th>
                  <th>Title</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Created By</th>
                  <th>Created Date</th>
                  <th>Processing Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 'RPT001',
                    title: 'Monthly Sales Report',
                    department: 'Sales',
                    status: 'Approved',
                    createdBy: 'John Doe',
                    date: '2025-07-18',
                    time: '2 days'
                  },
                  {
                    id: 'RPT002',
                    title: 'HR Attendance',
                    department: 'HR',
                    status: 'Pending',
                    createdBy: 'Jane Smith',
                    date: '2025-07-17',
                    time: '--'
                  },
                  {
                    id: 'RPT003',
                    title: 'IT Infrastructure',
                    department: 'IT',
                    status: 'Approved',
                    createdBy: 'Mike Johnson',
                    date: '2025-07-16',
                    time: '1 day'
                  },
                  {
                    id: 'RPT004',
                    title: 'Financial Q2 Report',
                    department: 'Finance',
                    status: 'Rejected',
                    createdBy: 'Sarah Williams',
                    date: '2025-07-15',
                    time: '3 days'
                  },
                ].map((report, index) => (
                  <tr key={index}>
                    <td>{report.id}</td>
                    <td>{report.title}</td>
                    <td>{report.department}</td>
                    <td>
                      <span className={`badge bg-${
                        report.status === 'Approved' ? 'success' : 
                        report.status === 'Rejected' ? 'danger' : 'warning'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td>{report.createdBy}</td>
                    <td>{report.date}</td>
                    <td>{report.time}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">View</button>
                      <button className="btn btn-sm btn-outline-secondary">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav aria-label="Table pagination" className="mt-3">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ReportAnalytics;