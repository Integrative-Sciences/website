import React from 'react';
import { useWip } from './ui/WipContext';
import { FaBrain, FaDatabase, FaDna, FaShieldAlt, FaHeart, FaGraduationCap, FaFlask } from 'react-icons/fa';
import { GiBrainTentacle } from 'react-icons/gi';
import { IconType } from 'react-icons';

interface Topic {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

const Topics: React.FC = () => {
  const { openWip } = useWip();
  const topics: Topic[] = [
    {
      title: "Bioinformatics",
      description: "Utilizing computational methods to analyze and interpret large-scale biological data.",
      icon: FaFlask,
      color: "#06b6d4"
    },
    {
      title: "Integrative Psychology",
      description: "Investigating the complex interactions between psychological processes, the nervous system, and social behavior.",
      icon: FaBrain,
      color: "#8b5cf6"
    },
    {
      title: "Psychoneuroimmunology",
      description: "Investigating the complex interactions between psychological processes, the nervous system, and immune function.",
      icon: GiBrainTentacle,
      color: "#06b6d4"
    },
    {
      title: "Integrative Health Datascience",
      description: "Applying data science techniques to improve health outcomes and inform decision-making in the healthcare industry.",
      icon: FaDatabase,
      color: "#06b6d4"
    },
    {
      title: "Systems Biology",
      description: "Understanding biological systems through computational and mathematical modeling of complex interactions.",
      icon: FaDna,
      color: "#10b981"
    },
    {
      title: "Integrative Autoimmunity",
      description: "Advancing research in systemic immunology and autoimmune disorders through integrative approaches.",
      icon: FaShieldAlt,
      color: "#f59e0b"
    },
    {
      title: "Integrative Mental Health",
      description: "Developing holistic approaches to mental health that integrate biological, psychological, and social factors.",
      icon: FaHeart,
      color: "#ef4444"
    },
    {
      title: "Education & Research",
      description: "Promoting innovative educational methodologies and research practices in integrative science.",
      icon: FaGraduationCap,
      color: "#6366f1"
    }
  ];

  return (
    <section className="topics" id="topics">
      <div className="container">
        <div className="section-header">
          <h2>Research Areas</h2>
          <p>Exploring the frontiers of integrative science across multiple disciplines</p>
        </div>
        
        <div className="topics-grid">
          {topics.map((topic, index) => {
            return (
              <div key={index} className="topic-card" style={{borderTopColor: topic.color}}>
                <div className="topic-icon" style={{backgroundColor: topic.color + '20'}}>
                  {React.createElement(topic.icon as React.ComponentType<any>, { size: "1.5rem", color: topic.color })}
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <button className="topic-btn" style={{color: topic.color}} onClick={() => openWip(`${topic.title} details are a work in progress.`)}>
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Topics;