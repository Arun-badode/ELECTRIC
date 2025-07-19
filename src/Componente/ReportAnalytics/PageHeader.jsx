import React from 'react';
import { FaSearch } from 'react-icons/fa';

const PageHeader = () => {
  return (
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
  );
};

export default PageHeader;