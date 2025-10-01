import React from 'react';
import { useWip } from './ui/WipContext';

const Footer: React.FC = () => {
  const { openWip } = useWip();
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
              <li><button className="footer-link" onClick={() => openWip('Psychology & Spirituality section is a work in progress.')}>Psychology & Spirituality</button></li>
              <li><button className="footer-link" onClick={() => openWip('Psycho-Neuro-Immunology section is a work in progress.')}>Psycho-Neuro-Immunology</button></li>
              <li><button className="footer-link" onClick={() => openWip('Systems Biology section is a work in progress.')}>Systems Biology</button></li>
              <li><button className="footer-link" onClick={() => openWip('Mental Health section is a work in progress.')}>Mental Health</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>For Authors</h4>
            <ul>
              <li><button className="footer-link" onClick={() => openWip('Submission Guidelines are a work in progress.')}>Submission Guidelines</button></li>
              <li><button className="footer-link" onClick={() => openWip('Peer Review Process is a work in progress.')}>Peer Review Process</button></li>
              <li><button className="footer-link" onClick={() => openWip('Publication Ethics are a work in progress.')}>Publication Ethics</button></li>
              <li><button className="footer-link" onClick={() => openWip('Open Access Policy is a work in progress.')}>Open Access Policy</button></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Integrative Science Journal. All rights reserved.</p>
          <div className="footer-links">
            <button className="footer-link" onClick={() => openWip('Privacy Policy is a work in progress.')}>Privacy Policy</button>
            <button className="footer-link" onClick={() => openWip('Terms of Service is a work in progress.')}>Terms of Service</button>
            <button className="footer-link" onClick={() => openWip('Accessibility information is a work in progress.')}>Accessibility</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;