import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faShoppingCart, faCalendar } from '@fortawesome/free-solid-svg-icons';
import OrderPieChart from './OrderPieChart';
import TransactionList from './TransactionList';
import { totalClients, totalProducts, totalSaleAmount, profitPercentage, transactionData } from './mockData';
import '../homepage/home.css';

const HomePage = () => {
  return (
    <div className="App">
      <div className="section">
        <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '50px'}}>Your Dashboard</h1>
        <div className="box-container">
          <div className="box">
            <FontAwesomeIcon icon={faHome} size="2x" style={{ marginBottom: '10px' }} />
            <h3>Total Clients</h3>
            <p>{totalClients}</p>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faBox} size="2x" style={{ marginBottom: '10px' }} />
            <h3>Total Products</h3>
            <p>{totalProducts}</p>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ marginBottom: '10px' }} />
            <h3>Total Sales Amount</h3>
            <p>{totalSaleAmount}</p>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faCalendar} size="2x" style={{ marginBottom: '10px' }} />
            <h3>Profit %</h3>
            <p>{profitPercentage}%</p>
          </div>
        </div>
      </div>
      <div className="section">
        <h1 style={{ color: '#fff', textAlign: 'center'}}>Sales Overview</h1>
        <OrderPieChart />
      </div>
      <div className="section">
        <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '40px'}}>Recent Transactions</h1>
        <TransactionList transactions={transactionData} />
      </div>
    </div>
  );
}

export default HomePage;
