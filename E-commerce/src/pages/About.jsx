// src/pages/About.jsx
// import React from 'react';
import "./About.css"; // Import CSS for styling

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your trusted online shopping destination.</p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At MyApp, our mission is to provide customers with a seamless shopping
          experience by offering a wide range of products at competitive prices.
          We strive to deliver exceptional service and value to our customers.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction</li>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Diversity and Inclusion</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Chief Technology Officer</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h3>Emily Johnson</h3>
          <p>Head of Marketing</p>
        </div>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, feel free to reach out to us
          at:
        </p>
        <p>Email: support@myapp.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default About;
