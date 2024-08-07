import React from "react";
import './Footer.css'; // Import custom CSS for additional styling

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>Fan Girls</h2>
          </div>
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>
              Fan Girls is a leading platform that provides Charities and Donors resources for hosting charities and making their Donations.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +1233567890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-inline footer-links">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>© 2024 Fan Girls. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-end">
            <ul className="list-inline footer-links">
              <li className="list-inline-item">
                <a href="#" className="text-white">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">Terms of Service</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
