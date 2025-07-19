import React from 'react';
import { Line, Pie } from 'react-chartjs-2';

const MainCharts = ({ lineData, pieData, chartOptions }) => {
  return (
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
  );
};

export default MainCharts;