import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './OrderTable.css';

const OrderStatusPieChart = ({ data }) => {
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088aa'];

  return (
      <div className="pie-chart-container">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          cx={200}
          cy={200}
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default OrderStatusPieChart;
