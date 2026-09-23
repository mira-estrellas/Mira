import React from 'react';

function Placeholder({ icon, title, description }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      backgroundColor: '#FAF7F2',
      padding: '24px',
      textAlign: 'center',
    }}>
      <span style={{ fontSize: '64px', marginBottom: '24px' }}>{icon}</span>
      <h2 style={{ color: '#4F8C6F', fontSize: '24px', marginBottom: '12px' }}>{title}</h2>
      <p style={{ color: '#A0A0A0', fontSize: '16px', maxWidth: '300px' }}>{description}</p>
    </div>
  );
}

export default Placeholder;