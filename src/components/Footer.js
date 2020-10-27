import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaDownload, FaFighterJet } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <img
       src="../images/upLogo.png" className="footer-logo"
      />
    </div>
  );
}

export default Footer;
