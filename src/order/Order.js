
import React from 'react';
import OrderStatusPieChart from './OrderStatusPieChart';
import orderData from './orderData'; 

const Orders = () => {
  const orderStatusCount = orderData.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.keys(orderStatusCount).map((status) => ({
    name: status,
    value: orderStatusCount[status],
  }));

  return (
    <div className="orders-container">
      <h2 className="orders-heading">Order Details</h2>
      
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.productName}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pie-chart-container">
        <OrderStatusPieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default Orders;
