import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Integrative Science Journal</h1>
          <h2>Bridging Disciplines, Advancing Knowledge</h2>
          <p>
            A pioneering platform for interdisciplinary research that connects 
            spirituality, psychology, immunology, and systems biology to create 
            a holistic understanding of human health and consciousness.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Submit Research</button>
            <button className="btn btn-secondary">Browse Articles</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="science-icon">
            <svg viewBox="0 0 200 200" className="brain-network">
              {/* Neural network connections */}
              <path d="M30 50 L80 30 L120 70 L170 40" stroke="#4f46e5" strokeWidth="2" fill="none" opacity="0.6"/>
              <path d="M40 90 L90 110 L140 80 L180 120" stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.6"/>
              <path d="M20 130 L70 150 L110 120 L160 160" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.6"/>
              <path d="M50 170 L100 140 L150 180 L190 150" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.6"/>
              
              {/* Cross connections */}
              <path d="M30 50 L40 90" stroke="#4f46e5" strokeWidth="1.5" fill="none" opacity="0.4"/>
              <path d="M80 30 L90 110" stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.4"/>
              <path d="M120 70 L110 120" stroke="#8b5cf6" strokeWidth="1.5" fill="none" opacity="0.4"/>
              <path d="M170 40 L160 160" stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.4"/>
              <path d="M70 150 L100 140" stroke="#f59e0b" strokeWidth="1.5" fill="none" opacity="0.4"/>
              
              {/* Neurons */}
              <circle cx="30" cy="50" r="6" fill="#4f46e5" className="neuron"/>
              <circle cx="80" cy="30" r="5" fill="#06b6d4" className="neuron"/>
              <circle cx="120" cy="70" r="7" fill="#8b5cf6" className="neuron"/>
              <circle cx="170" cy="40" r="5" fill="#10b981" className="neuron"/>
              <circle cx="40" cy="90" r="6" fill="#f59e0b" className="neuron"/>
              <circle cx="90" cy="110" r="5" fill="#ef4444" className="neuron"/>
              <circle cx="140" cy="80" r="6" fill="#06b6d4" className="neuron"/>
              <circle cx="180" cy="120" r="5" fill="#8b5cf6" className="neuron"/>
              <circle cx="20" cy="130" r="5" fill="#10b981" className="neuron"/>
              <circle cx="70" cy="150" r="6" fill="#4f46e5" className="neuron"/>
              <circle cx="110" cy="120" r="5" fill="#f59e0b" className="neuron"/>
              <circle cx="160" cy="160" r="7" fill="#ef4444" className="neuron"/>
              <circle cx="50" cy="170" r="5" fill="#06b6d4" className="neuron"/>
              <circle cx="100" cy="140" r="6" fill="#8b5cf6" className="neuron"/>
              <circle cx="150" cy="180" r="5" fill="#10b981" className="neuron"/>
              <circle cx="190" cy="150" r="5" fill="#4f46e5" className="neuron"/>
              
              {/* Synapses */}
              <circle cx="55" cy="40" r="2" fill="#ffffff" className="synapse" opacity="0.8"/>
              <circle cx="100" cy="50" r="2" fill="#ffffff" className="synapse" opacity="0.8"/>
              <circle cx="145" cy="55" r="2" fill="#ffffff" className="synapse" opacity="0.8"/>
              <circle cx="65" cy="100" r="2" fill="#ffffff" className="synapse" opacity="0.8"/>
              <circle cx="115" cy="95" r="2" fill="#ffffff" className="synapse" opacity="0.8"/>
              <circle cx="160" cy="100" r="2" fill="#ffffff" className="synapse" opacity="0.8"/>
              <circle cx="45" cy="140" r="2" fill="#ffffff" className="synapse" opacity="0.8"/>
              <circle cx="90" cy="135" r="2" fill="#ffffff" className="synapse" opacity="0.8"/>
              <circle cx="135" cy="170" r="2" fill="#ffffff" className="synapse" opacity="0.8"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;