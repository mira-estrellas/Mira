import React, { useState } from 'react';
import Onboarding from './Onboarding';

const languages = {
  EN: { label: '🌐 English', tagline: 'See what\'s possible.', button: 'Get Started' },
  ES: { label: '🌐 Español', tagline: 'Ve lo que es posible.', button: 'Comenzar' },
  ZH: { label: '🌐 中文', tagline: '看见可能。', button: '开始' },
  AR: { label: '🌐 العربية', tagline: 'انظر ما هو ممكن.', button: 'ابدأ الآن' },
  FR: { label: '🌐 Français', tagline: 'Voyez ce qui est possible.', button: 'Commencer' },
  PT: { label: '🌐 Português', tagline: 'Veja o que é possível.', button: 'Começar' },
  KO: { label: '🌐 한국어', tagline: '가능성을 보세요.', button: '시작하기' },
  VI: { label: '🌐 Tiếng Việt', tagline: 'Xem những gì có thể.', button: 'Bắt đầu' },
  TL: { label: '🌐 Tagalog', tagline: 'Tingnan ang posible.', button: 'Magsimula' },
  RU: { label: '🌐 Русский', tagline: 'Увидьте возможное.', button: 'Начать' },
  HT: { label: '🌐 Kreyòl', tagline: 'Wè sa ki posib.', button: 'Kòmanse' },
};

function App() {
  const [language, setLanguage] = useState('EN');
  const [screen, setScreen] = useState('landing');
  const current = languages[language];

  if (screen === 'onboarding') {
    return <Onboarding 
      language={language} 
      onBack={() => setScreen('landing')} 
    />;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#FAF7F2',
      direction: language === 'AR' ? 'rtl' : 'ltr',
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        right: language === 'AR' ? 'auto' : '20px',
        left: language === 'AR' ? '20px' : 'auto',
      }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '20px',
            border: '1px solid #7A9E87',
            backgroundColor: '#FAF7F2',
            color: '#2C2C2C',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          {Object.entries(languages).map(([code, lang]) => (
            <option key={code} value={code}>{lang.label}</option>
          ))}
        </select>
      </div>

      <h1 style={{ color: '#7A9E87', fontSize: '48px' }}>Mira</h1>
      <p style={{ color: '#2C2C2C', fontSize: '18px' }}>{current.tagline}</p>
      <button
        onClick={() => setScreen('onboarding')}
        style={{
          backgroundColor: '#D4956A',
          color: 'white',
          border: 'none',
          padding: '16px 40px',
          borderRadius: '30px',
          fontSize: '18px',
          marginTop: '40px',
          cursor: 'pointer',
        }}
      >
        {current.button}
      </button>
    </div>
  );
}

export default App;