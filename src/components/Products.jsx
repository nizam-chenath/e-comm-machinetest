
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../Slice/CartSlice";
import { Link } from 'react-router-dom';
import "../styles/products.css"

const Products = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 },
    { id: 6, name: 'Product 6', price: 50 },
  ];

  return (
    <div className="products-container">
      <h1 className="products-title">Product List</h1>
      <div className='product-card-container'>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">Price: ${product.price}</p>
          <button
            onClick={() => {dispatch(addToCart(product))
            alert("item added to cart")}}
            className="add-to-cart-button"
          >
            Add to Cart
          </button>
          {/* <Link to={`/product/${product.id}`} className="view-details-link">
            View Details
          </Link> */}
        </div>
      ))}
      </div>
     
      <div className="go-to-cart-button">
        <Link to="/cart">
          <button>Go to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
