import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com/interiorskairu" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> @interiorskairu
        </a>
        <a href="https://www.tiktok.com/@interiorskairu" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i> interiorskairu
        </a>
        <a href="https://www.facebook.com/interiorskairu.ke" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> interiorskairu.ke
        </a>
      </div>
      <div className="contact-info">
        <a href="tel:0790791780">
          <i className="fas fa-phone"></i> Call: 0790791780
        </a>
        <a href="https://wa.me/254790791780" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i> WhatsApp: 0790791780
        </a>
      </div>
      <p>&copy; 2025 INTERIORSKAIRU. All rights reserved.</p>
    </footer>
  );
};

export default Footer;