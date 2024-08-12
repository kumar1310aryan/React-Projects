// src/pages/Contact.jsx
// import React from 'react';
import "./Contact.css"; // Import CSS for styling

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </header>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions, comments, or feedback, please reach out to
          us:
        </p>
        <p>
          Email: <a href="mailto:support@myapp.com">support@myapp.com</a>
        </p>
        <p>
          Phone: <a href="tel:+11234567890">(123) 456-7890</a>
        </p>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
