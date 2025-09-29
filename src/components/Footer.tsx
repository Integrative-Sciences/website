import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Integrative Science Journal</h3>
            <p>
              Advancing interdisciplinary research for a better understanding 
              of human health and consciousness.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Research Areas</h4>
            <ul>
              <li><button className="footer-link">Psychology & Spirituality</button></li>
              <li><button className="footer-link">Psycho-Neuro-Immunology</button></li>
              <li><button className="footer-link">Systems Biology</button></li>
              <li><button className="footer-link">Mental Health</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>For Authors</h4>
            <ul>
              <li><button className="footer-link">Submission Guidelines</button></li>
              <li><button className="footer-link">Peer Review Process</button></li>
              <li><button className="footer-link">Publication Ethics</button></li>
              <li><button className="footer-link">Open Access Policy</button></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Integrative Science Journal. All rights reserved.</p>
          <div className="footer-links">
            <button className="footer-link">Privacy Policy</button>
            <button className="footer-link">Terms of Service</button>
            <button className="footer-link">Accessibility</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;