import React from "react";

const StatsCards = () => {
  const statsData = [
    {
      title: "Total Products",
      value: "1,248",
      change: "5.2% from last month",
      icon: "bi-box-seam",
      color: "primary"
    },
    {
      title: "Total Orders",
      value: "3,847",
      change: "12.8% from last month",
      icon: "bi-cart-check",
      color: "danger"
    },
    {
      title: "Total Users",
      value: "892",
      change: "3.5% from last month",
      icon: "bi-people",
      color: "warning"
    },
    {
      title: "Total Revenue",
      value: "$128,492",
      change: "18.6% from last month",
      icon: "bi-currency-dollar",
      color: "success"
    }
  ];

  return (
    <div className="row mb-4">
      {statsData.map((stat, index) => (
        <div key={index} className="col-xl-3 col-md-6 mb-4">
          <div className={`card stat-card border-start-${stat.color} border-start-3`}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="text-muted mb-1">{stat.title}</h6>
                  <h3 className="fw-bold mb-1">{stat.value}</h3>
                  <span className={`badge bg-${stat.color}-subtle text-${stat.color}`}>
                    <i className={`bi bi-arrow-up text-${stat.color}`}></i> {stat.change}
                  </span>
                </div>
                <div className={`bg-${stat.color}-subtle p-3 rounded`}>
                  <i className={`bi ${stat.icon} fs-4 text-${stat.color}`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;