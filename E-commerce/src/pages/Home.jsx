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
            <img
              src="https://th.bing.com/th/id/OIP.i9dxoJhkAOTl-A-zn5OC2QAAAA?rs=1&pid=ImgDetMain"
              alt="Electronics"
            />
          </div>
          <div className="category">
            <h3>Fashion</h3>
            <img
              src="https://th.bing.com/th/id/OIP.f5MOa-3aDBPQvvmUX1eTmQHaE8?rs=1&pid=ImgDetMain"
              alt="Fashion"
            />
          </div>
          <div className="category">
            <h3>Home & Kitchen</h3>
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20220313/pngtree-kitchen-appliance-e-commerce-products-image_1055163.jpg"
              alt="Home & Kitchen"
            />
          </div>
          <div className="category">
            <h3>Books</h3>
            <img
              src="https://www.bdtask.com/blog/uploads/best-ecommerce-books.jpg"
              alt="Books"
            />
          </div>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/81L+2ojd0ZL._SL1500_.jpg"
              alt="Product 1"
            />
            <h3>Product 1</h3>
            <p>$19.99</p>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/81Diwy0keYL._SL1500_.jpg"
              alt="Product 2"
            />
            <h3>Product 2</h3>
            <p>$29.99</p>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/71QydHjgTPL._SL1500_.jpg"
              alt="Product 3"
            />
            <h3>Product 3</h3>
            <p>$39.99</p>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/71YQ0BHto9L._SL1500_.jpg"
              alt="Product 4"
            />
            <h3>Product 4</h3>
            <p>$49.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
