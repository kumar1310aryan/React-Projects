// src/pages/Home.jsx
// import React from 'react';
import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to MyApp</h1>
        <p>Your one-stop shop for everything!</p>
        <button className="shop-now">Shop Now</button>
      </header>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          <div className="category">
            <h3>Electronics</h3>
            <img src="https://via.placeholder.com/150" alt="Electronics" />
          </div>
          <div className="category">
            <h3>Fashion</h3>
            <img src="https://via.placeholder.com/150" alt="Fashion" />
          </div>
          <div className="category">
            <h3>Home & Kitchen</h3>
            <img src="https://via.placeholder.com/150" alt="Home & Kitchen" />
          </div>
          <div className="category">
            <h3>Books</h3>
            <img src="https://via.placeholder.com/150" alt="Books" />
          </div>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$29.99</p>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 4" />
            <h3>Product 4</h3>
            <p>$49.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
