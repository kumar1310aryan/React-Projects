// src/pages/Services.jsx
// import React from 'react';
import "./Services.css"; // Import CSS for styling

const Services = () => {
  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          Discover the range of services we offer to enhance your shopping
          experience.
        </p>
      </header>

      <section className="service-list">
        <div className="service">
          <h2>Fast Shipping</h2>
          <p>
            We provide fast and reliable shipping options to ensure your orders
            arrive on time.
          </p>
        </div>
        <div className="service">
          <h2>24/7 Customer Support</h2>
          <p>
            Our dedicated support team is available around the clock to assist
            you with any inquiries.
          </p>
        </div>
        <div className="service">
          <h2>Easy Returns</h2>
          <p>
            If you are not satisfied with your purchase, our hassle-free return
            policy allows you to return items easily.
          </p>
        </div>
        <div className="service">
          <h2>Secure Payments</h2>
          <p>
            We prioritize your security with encrypted transactions and multiple
            payment options.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
