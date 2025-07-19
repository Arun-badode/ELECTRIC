import React from 'react';

const ProductTable = () => {
  const products = [
    {
      name: "Premium Headphones",
      category: "Electronics",
      orders: 458,
      revenue: "$45,800",
      growth: "24%",
      trend: "up"
    },
    {
      name: "Smart Watch Pro",
      category: "Wearables",
      orders: 312,
      revenue: "$31,200",
      growth: "18%",
      trend: "up"
    },
    {
      name: "Leather Wallet",
      category: "Accessories",
      orders: 287,
      revenue: "$14,350",
      growth: "5%",
      trend: "down"
    }
  ];

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Orders</th>
            <th>Revenue</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/40" className="me-2 rounded" alt="" />
                  <div>
                    <div className="fw-semibold">{product.name}</div>
                    <div className="text-muted small">{product.category}</div>
                  </div>
                </div>
              </td>
              <td>{product.orders}</td>
              <td>{product.revenue}</td>
              <td className={`text-${product.trend === 'up' ? 'success' : 'danger'}`}>
                {product.trend === 'up' ? '▲' : '▼'} {product.growth}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;