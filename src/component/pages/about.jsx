import React from 'react';

const AboutSection = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Section: About Text */}
        <div style={{ width: '50%' }}>
          <h2 style={{ fontSize: '48px', color: '#68a6f3' }}>About</h2>
          <p style={{ fontSize: '16px', color: '#333' }}>
            Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing.
          </p>
          <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>
            He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.
          </p>
        </div>

        {/* Right Section: Features */}
        <div style={{ width: '45%' }}>
          <FeatureCard
            title="Research"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            icon="📱"
          />
          <FeatureCard
            title="Strategy"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            icon="⚙️"
          />
          <FeatureCard
            title="Design"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            icon="🔔"
          />
        </div>
      </div>
    </div>
  );
};

// FeatureCard component for individual features (Research, Strategy, Design)
const FeatureCard = ({ title, description, icon }) => (
  <div style={{ display: 'flex', marginBottom: '40px', alignItems: 'center' }}>
    <div style={{ fontSize: '48px', color: '#68a6f3', marginRight: '20px' }}>
      {icon}
    </div>
    <div>
      <h3 style={{ fontSize: '20px', color: '#68a6f3', marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#666' }}>{description}</p>
    </div>
  </div>
);

export default AboutSection;
