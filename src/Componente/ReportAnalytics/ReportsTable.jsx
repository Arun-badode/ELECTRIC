import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ReportsTable = () => {
  const reportsData = [
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
  ];

  return (
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
              {reportsData.map((report, index) => (
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
  );
};

export default ReportsTable;