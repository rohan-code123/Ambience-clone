import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Footer-logo.webp'

const Footer = () => {
  return (
    
    <footer>
    <div className="footer">
      <div className="footer-container">
      <div className="footer-menu">
        <h4>Top Products</h4>
      <ul>
        <li>MERN Stack Development</li>
        <li>Digital Marketing</li>
        <li>Advance Excel</li>
        <li>ADCA</li>
      </ul></div>


      <div className="footer-menu">
        <h4>Quick Links</h4>
      <ul>
        <li>Certification</li>
        <li>Offers</li>
        <li>Reviews</li>
      </ul></div>


      <div className="footer-menu">
        <h4>Features</h4>
      <ul>
        <li>Jobs</li>
        <li>Our Accreditations</li>
        <li>Registration</li>
        <li>Get In Touch</li>
      </ul></div>

      <div className="footer-menu">
        <h4>Resources</h4>
      <ul>
        <li>Get Notes</li>
        <li>Research</li>
        <li>Experts</li>
        <li>Agencies</li>
      </ul></div>

      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>

      </div>
    </div>
    </footer>
  )
}

export default Footer