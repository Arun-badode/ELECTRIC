    
import React from 'react';
import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';

const StatsCards = () => {
  const cardsData = [
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
  ];

  return (
    <div className="row g-4 mb-4">
      {cardsData.map((card, idx) => (
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
  );
};

export default StatsCards;