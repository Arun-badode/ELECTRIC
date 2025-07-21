import { useState } from 'react';

const Orders = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');

  const paymentStatuses = ['Successful', 'Pending', 'Incomplete'];
  const orders = [
    {
      id: 'ORD-7895',
      customer: 'Emma Wilson',
      date: '2025-06-10',
      products: 'Silk Blouse, Summer Hat',
      amount: '$129.99',
      status: 'Delivered',
      payment: paymentStatuses[Math.floor(Math.random() * 3)],
    },
    {
      id: 'ORD-7891',
      customer: 'Olivia Smith',
      date: '2025-06-06',
      products: 'Slim Fit Jeans, Cotton T-shirt',
      amount: '$89.99',
      status: 'Delivered',
      payment: paymentStatuses[Math.floor(Math.random() * 3)],
    },
    {
      id: 'ORD-7889',
      customer: 'Ava Martinez',
      date: '2025-06-04',
      products: 'Floral Dress, Straw Hat',
      amount: '$109.99',
      status: 'Delivered',
      payment: paymentStatuses[Math.floor(Math.random() * 3)],
    },
  ];

  const filteredOrders = orders.filter((order) =>
    [order.id, order.customer, order.products]
      .some((field) =>
        field.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortField === 'date') {
      return sortDirection === 'asc'
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    }
    if (sortField === 'amount') {
      const numA = parseFloat(a.amount.replace('$', ''));
      const numB = parseFloat(b.amount.replace('$', ''));
      return sortDirection === 'asc' ? numA - numB : numB - numA;
    }
    return sortDirection === 'asc'
      ? a[sortField].localeCompare(b[sortField])
      : b[sortField].localeCompare(a[sortField]);
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(sortedOrders.map((order) => order.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectOrder = (id) => {
    const isSelected = selectedOrders.includes(id);
    const updated = isSelected
      ? selectedOrders.filter((item) => item !== id)
      : [...selectedOrders, id];

    setSelectedOrders(updated);
    setSelectAll(updated.length === sortedOrders.length);
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-success text-white';
      case 'Cancelled':
        return 'bg-danger text-white';
      case 'Returned':
        return 'bg-warning text-dark';
      default:
        return 'bg-secondary text-white';
    }
  };

  const getPaymentBadgeColor = (payment) => {
    switch (payment) {
      case 'Successful':
        return 'bg-success text-white';
      case 'Pending':
        return 'bg-warning text-dark';
      case 'Incomplete':
        return 'bg-danger text-white';
      default:
        return 'bg-secondary text-white';
    }
  };

  return (
    <div className="card  p-4">
      {/* Header */}
      <div className="d-flex justify-content-between mb-4">
        <h4 className="fw-bold">Orders</h4>
        <input
          type="text"
          placeholder="Search orders..."
          className="form-control w-auto"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Orders Table */}
      <div className="table-responsive shadow-sm">
        <table className="table table-hover table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              {['id', 'customer', 'date', 'products', 'amount', 'status'].map((field) => (
                <th
                  key={field}
                  onClick={() => handleSort(field)}
                  style={{ cursor: 'pointer' }}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}{' '}
                  {sortField === field && (
                    <i className={`fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                  )}
                </th>
              ))}
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleSelectOrder(order.id)}
                  />
                </td>
                <td>{order.id}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div
                      className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-2"
                      style={{ width: 30, height: 30 }}
                    >
                      {order.customer.charAt(0)}
                    </div>
                    {order.customer}
                  </div>
                </td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>{order.products}</td>
                <td>{order.amount}</td>
                <td>
                  <span className={`badge ${getStatusBadgeColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <span className={`badge ${getPaymentBadgeColor(order.payment)}`}>
                    {order.payment}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
