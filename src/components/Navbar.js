import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/research_website' className='navbar-logo' onClick={closeMobileMenu}>
            <AiOutlineHome/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/introduction'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Introduction
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/findings'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Findings
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/discussion'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Discussion
              </Link>
            </li>
            
          </ul>
          {button && <Button buttonStyle='btn--outline'>Conclusions</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;