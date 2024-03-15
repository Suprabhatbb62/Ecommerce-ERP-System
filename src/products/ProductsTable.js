import React, { useState } from 'react';
import './ProductsTable.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ProductsTable = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'T-shirt', category: 'Apparel', price: 15.99, quantity: 50 },
    { id: 2, name: 'Running Shoes', category: 'Footwear', price: 39.99, quantity: 30 },
    { id: 3, name: 'Smartphone', category: 'Electronics', price: 299.99, quantity: 20 },
    { id: 4, name: 'Headphones', category: 'Electronics', price: 49.99, quantity: 40 },
    { id: 5, name: 'Backpack', category: 'Accessories', price: 29.99, quantity: 25 },
  ]);
  

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: 0,
    quantity: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    const id = products.length + 1;
    setProducts([...products, { id, ...newProduct }]);
    setNewProduct({ name: '', category: '', price: 0, quantity: 0 });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="products-container">
      <div className="add-product">
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>Products List</h2>

        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="products-table">
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>Products List</h2>

        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => handleDelete(product.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;
