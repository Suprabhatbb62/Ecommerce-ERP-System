import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import orderData from './orderData';

const localizer = momentLocalizer(moment);

const CustomToolbar = ({ label, onNavigate }) => {
  const goToToday = () => onNavigate('TODAY');
  const goToPrevious = () => onNavigate('PREV');
  const goToNext = () => onNavigate('NEXT');

  const handleDateChange = event => {
    const selectedDate = new Date(event.target.value);
    onNavigate('DATE', selectedDate);
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={goToPrevious}>Previous</button>
        <button type="button" onClick={goToToday}>Today</button>
        <button type="button" onClick={goToNext}>Next</button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
      <span className="rbc-toolbar-select">
        <input type="date" onChange={handleDateChange} />
      </span>
    </div>
  );
};

const Calendar = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    alert("Click on Order ID to view order details.");
  }, []);

  const events = orderData.map(order => ({
    title: `Order ID: ${order.orderId}`,
    start: new Date(order.orderDate),
    end: new Date(order.orderDate),
    orderDetails: order,
  }));

  const handleEventClick = event => setSelectedOrder(event.orderDetails);

  const views = { month: true };

  return (
    <div>
      <div style={{ height: 500 }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={new Date()}
          views={views}
          components={{ toolbar: CustomToolbar }}
          onSelectEvent={handleEventClick}
        />
      </div>
      {selectedOrder && (
        <div>
          <h3 style={{ color: 'white' }}>Order Details</h3>
          <table style={{ color: 'white', borderCollapse: 'collapse', border: '1px solid white' }}>
            <tbody>
              <tr>
                {Object.entries(selectedOrder).map(([key, value]) => (
                  <td key={key} style={{ borderRight: '1px solid white', padding: '5px' }}>
                    <strong>{key}:</strong> {value}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Calendar;
