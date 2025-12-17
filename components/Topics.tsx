import React from 'react';
import Link from 'next/link';
import { journals } from '@/lib/journals';
import { FaBrain, FaDatabase, FaDna, FaShieldAlt, FaHeart, FaGraduationCap, FaFlask, FaMicroscope } from 'react-icons/fa';
import { GiBrainTentacle, GiMeditation } from 'react-icons/gi';
import { IconType } from 'react-icons';

// Map journal titles to icons and colors
const journalIcons: Record<string, { icon: IconType; color: string }> = {
  'Integrative Health DataScience': { icon: FaDatabase, color: '#06b6d4' },
  'Systems Biology': { icon: FaDna, color: '#10b981' },
  'Integrative Neuroscience': { icon: FaBrain, color: '#8b5cf6' },
  'Integrative Psychiatry': { icon: GiBrainTentacle, color: '#6366f1' },
  'Integrative Medicine': { icon: FaHeart, color: '#f59e0b' },
  'Integrative Autoimmunity': { icon: FaShieldAlt, color: '#f59e0b' },
  'Psychoneuroimmunology': { icon: GiBrainTentacle, color: '#06b6d4' },
  'Integrative Psychology': { icon: FaBrain, color: '#8b5cf6' },
  'Science of Spirituality': { icon: GiMeditation, color: '#ec4899' },
  'Integrative Mental Health': { icon: FaHeart, color: '#ef4444' },
  'Education & Research': { icon: FaGraduationCap, color: '#6366f1' },
  'Applied Emergent Technologies in Integrative Health': { icon: FaMicroscope, color: '#14b8a6' },
};

const Topics: React.FC = () => {
  // Take first 8 journals to display
  const displayJournals = journals.slice(0, 8);

  return (
    <section className="topics" id="topics">
      <div className="container">
        <div className="section-header">
          <h2>Our Journals</h2>
          <p>Explore our collection of peer-reviewed, open-access journals across multiple disciplines</p>
        </div>
        
        <div className="topics-grid">
          {displayJournals.map((journal) => {
            const iconData = journalIcons[journal.title] || { icon: FaFlask, color: '#06b6d4' };
            return (
              <Link 
                key={journal.id} 
                href={`/journal/${journal.id}`}
                className="topic-card-link"
              >
                <div className="topic-card" style={{borderTopColor: iconData.color}}>
                  <div className="topic-icon" style={{backgroundColor: iconData.color + '20'}}>
                    {React.createElement(iconData.icon as React.ComponentType<any>, { size: "1.5rem", color: iconData.color })}
                  </div>
                  <h3>{journal.title}</h3>
                  <p>{journal.mission || journal.subtitle}</p>
                  <span className="topic-btn" style={{color: iconData.color}}>
                    View Journal →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Topics;