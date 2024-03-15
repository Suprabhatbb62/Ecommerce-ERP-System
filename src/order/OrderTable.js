import React from 'react';
import orderData from './orderData';
import './OrderTable.css'; 

const OrderTable = () => {
  return (
    <div className="orders-container">
      <h2 className="orders-heading">Order List</h2>
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
          {orderData.map(order => (
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
    </div>
  );
};

export default OrderTable;
