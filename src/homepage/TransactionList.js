// TransactionList.js

import React from 'react';
import './TransactionList.css';

const TransactionList = ({ transactions }) => {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Product ID</th>
          <th>User ID</th>
          <th>Username</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.orderId}</td>
            <td>{transaction.productId}</td>
            <td>{transaction.userId}</td>
            <td>{transaction.username}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;
