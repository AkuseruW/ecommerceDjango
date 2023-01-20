import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container container">
          <hr />
          <div className="footer-row">
            <div className="footer-col">
              <h4>Information</h4>
              <ul>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Terms of Use</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Customer Service</h4>
              <ul>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="#">Returns and Exchanges</Link></li>
                <li><Link to="#">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <ul className="social">
                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                <li><Link to="#"><i className="fa fa-youtube"></i></Link></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="footer-bot">
            <p className="copyright">Copyright &copy; 2023 - Logo</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer