import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const SecondaryCharts = ({ barData, lineAvgTime, chartOptions }) => {
  return (
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
  );
};

export default SecondaryCharts;