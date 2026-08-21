import React, { useState } from 'react';
import SkillsOffered from '../components/SkillsOffered';
import SkillsWanted from '../components/SkillsWanted';
import SkillMetadataUI from '../components/SkillMetadataUI';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('offered');

  const baseButtonStyle = {
    padding: '10px 22px',
    borderRadius: '10px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
  };

  const activeStyle = {
    ...baseButtonStyle,
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: '2px solid #2563eb',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
  };

  const inactiveStyle = {
    ...baseButtonStyle,
    backgroundColor: '#ffffff',
    color: '#475569',
    border: '2px solid #e2e8f0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
  };

  return (
    <div style={{ 
      padding: '20px', 
      width: '100%',
      maxWidth: '1200px', 
      margin: '0 auto', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      
      {/* Target internal classes directly & expand them */}
      <style>{`
        .so-card-container,
        .sw-card-container,
        .so-page-wrapper,
        .sw-page-wrapper,
        .skills-card-container {
          max-width: 800px !important;
          width: 100% !important;
          margin: 0 auto !important;
        }
      `}</style>

      {/* Title */}
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: '700', 
        color: '#0f172a', 
        marginBottom: '16px', 
        marginTop: '0px',
        textAlign: 'center' 
      }}>
        My Skills Dashboard
      </h1>

      {/* Buttons Row */}
      <div style={{ 
        display: 'flex', 
        gap: '16px', 
        justifyContent: 'center', 
        marginBottom: '20px', 
        flexWrap: 'wrap' 
      }}>
        <button 
          type="button"
          style={activeTab === 'offered' ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab('offered')}
        >
          Skills Offered
        </button>

        <button 
          type="button"
          style={activeTab === 'wanted' ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab('wanted')}
        >
          Skills Wanted
        </button>

        <button 
          type="button"
          style={activeTab === 'metadata' ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab('metadata')}
        >
          Skill Metadata
        </button>
      </div>

      {/* Card Content Area */}
      <div style={{ width: '100%', maxWidth: '800px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%' }}>
          {activeTab === 'offered' && <SkillsOffered />}
          {activeTab === 'wanted' && <SkillsWanted />}
          {activeTab === 'metadata' && <SkillMetadataUI />}
        </div>
      </div>

    </div>
  );
};

export default Skills;