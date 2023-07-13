import React from 'react'
import '../../css/contact.css'

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>

      <div className="contact-info">
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>

        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
