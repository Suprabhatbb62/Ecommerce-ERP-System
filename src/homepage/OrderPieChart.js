import React, { useState } from 'react';
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from 'recharts';
import { orderData } from './mockData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

const OrderPieChart = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart onLoad={handleLoad}>
        <Pie
          data={orderData}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {orderData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={[{ value: 1 }]}
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={0}
          fill="transparent"
        />
        {loaded && <Label value="Total" position="center" />}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default OrderPieChart;
