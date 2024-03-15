import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faShoppingCart, faCalendar } from '@fortawesome/free-solid-svg-icons';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <Link to="/">
        <button>
          <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
          Home Page
        </button>
      </Link>
      <Link to="/products">
        <button>
          <FontAwesomeIcon icon={faBox} style={{ marginRight: '5px' }} />
          Products
        </button>
      </Link>
      <Link to="/orders">
        <button>
          <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
          Orders
        </button>
      </Link>
      <Link to="/calendar">
        <button>
          <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '5px' }} />
          Calendar
        </button>
      </Link>
    </div>
  );
};

export default MenuBar;
