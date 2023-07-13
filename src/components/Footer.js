import React from 'react';
import '../css/footer.css'; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <p>Blog Page.</p>
        </div>
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Technology</li>
            <li>Travel</li>
            <li>Food</li>
            <li>Lifestyle</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Blog Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
