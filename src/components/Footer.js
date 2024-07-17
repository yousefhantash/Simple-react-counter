import React from 'react';
import './Footer.css';




function Footer  (){
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>©2023 Yourcompany</p>
        </div>
        <div className="footer-center">
          <h1>Landing</h1>
        </div>
        <div className="footer-right">
          <button className="purchase-button">Purchase now</button>
        </div>
        
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className="social-links">
          <li><a href="#facebook">facebook</a></li>
          <li><a href="#linkedin">instgram</a></li>
          <li><a href="#twitter">twiter</a></li>
          <li><a href="#youtube">youtube</a></li>
          <li><a href="#instagram">in</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;