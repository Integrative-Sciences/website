import React, { useState } from 'react';
import { useWip } from './ui/WipContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openWip } = useWip();

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h1>Integrative Science Journal</h1>
          <p>Advancing Interdisciplinary Research</p>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#topics">Research Areas</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#submit" onClick={(e) => { e.preventDefault(); openWip('Submission flow is a work in progress.'); }}>Submit</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); openWip('Contact page is a work in progress.'); }}>Contact</a></li>
          </ul>
        </nav>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;