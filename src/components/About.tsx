import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Integrative Science Journal</h2>
            <p className="lead">
              We are pioneering a new era of scientific publishing that breaks down 
              traditional disciplinary boundaries to foster truly integrative research.
            </p>
            
            <div className="mission-vision">
              <div className="mission">
                <h3>Our Mission</h3>
                <p>
                  To create an umbrella of scientific journals that promote 
                  interdisciplinary collaboration and advance our understanding 
                  of complex biological and psychological systems.
                </p>
              </div>
              
              <div className="vision">
                <h3>Our Vision</h3>
                <p>
                  A future where science transcends traditional boundaries, 
                  integrating spirituality, psychology, immunology, and systems 
                  biology to create holistic solutions for human health and well-being.
                </p>
              </div>
            </div>
            
            <div className="values">
              <h3>Core Values</h3>
              <ul>
                <li><strong>Integration:</strong> Bridging diverse scientific disciplines</li>
                <li><strong>Innovation:</strong> Embracing novel research methodologies</li>
                <li><strong>Integrity:</strong> Maintaining the highest scientific standards</li>
                <li><strong>Impact:</strong> Creating meaningful change in human health</li>
              </ul>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">6</div>
              <div className="stat-label">Research Areas</div>
            </div>
            <div className="stat">
              <div className="stat-number">∞</div>
              <div className="stat-label">Possibilities</div>
            </div>
            <div className="stat">
              <div className="stat-number">1</div>
              <div className="stat-label">Unified Vision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;