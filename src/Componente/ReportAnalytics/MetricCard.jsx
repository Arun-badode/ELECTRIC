import React from 'react';

const MetricCard = ({ title, value, change, icon, color }) => {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6 className="text-muted mb-2 small">{title}</h6>
            <h3 className="mb-1">{value}</h3>
            <small className={`text-${change.color}`}>{change.text}</small>
          </div>
          <div className={`bg-${color}-light rounded-circle p-2`}>
            <i className={`bi bi-${icon} text-${color} fs-5`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;