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
              <li><a href="#">Psychology & Spirituality</a></li>
              <li><a href="#">Psycho-Neuro-Immunology</a></li>
              <li><a href="#">Systems Biology</a></li>
              <li><a href="#">Mental Health</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>For Authors</h4>
            <ul>
              <li><a href="#">Submission Guidelines</a></li>
              <li><a href="#">Peer Review Process</a></li>
              <li><a href="#">Publication Ethics</a></li>
              <li><a href="#">Open Access Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Integrative Science Journal. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;