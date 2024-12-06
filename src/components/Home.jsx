import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      title: 'Modern React',
      description: 'Built with the latest React 18 and functional components',
      icon: '⚛️'
    },
    {
      title: 'Fast Development',
      description: 'Lightning-fast HMR with Vite',
      icon: '⚡'
    },
    {
      title: 'Responsive Design',
      description: 'Beautiful on all devices',
      icon: '📱'
    }
  ];

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Bolt</h1>
        <p>A modern React application for the future</p>
      </div>
      
      <div className="features">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${activeFeature === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to get started?</h2>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
