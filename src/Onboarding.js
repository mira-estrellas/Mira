import React, { useState } from 'react';
import Dashboard from './Dashboard';
import HousingType from './HousingType';
import Budget from './Budget';

function Onboarding({ language, onBack }) {
  const [zipCode, setZipCode] = useState('');
  const [screen, setScreen] = useState('zip');
  const [housingType, setHousingType] = useState(null);
  const [budget, setBudget] = useState(null);

  const content = {
    EN: { question: 'What\'s your zip code?', placeholder: 'Enter zip code', next: 'Next', back: '← Back' },
    ES: { question: '¿Cuál es tu código postal?', placeholder: 'Ingresa tu código postal', next: 'Siguiente', back: '← Atrás' },
    ZH: { question: '你的邮政编码是什么？', placeholder: '输入邮政编码', next: '下一步', back: '← 返回' },
    AR: { question: 'ما هو الرمز البريدي؟', placeholder: 'أدخل الرمز البريدي', next: 'التالي', back: 'رجوع →' },
    FR: { question: 'Quel est votre code postal?', placeholder: 'Entrez le code postal', next: 'Suivant', back: '← Retour' },
    PT: { question: 'Qual é o seu código postal?', placeholder: 'Digite o código postal', next: 'Próximo', back: '← Voltar' },
    KO: { question: '우편번호가 무엇인가요?', placeholder: '우편번호 입력', next: '다음', back: '← 뒤로' },
    VI: { question: 'Mã bưu chính của bạn là gì?', placeholder: 'Nhập mã bưu chính', next: 'Tiếp theo', back: '← Quay lại' },
    TL: { question: 'Ano ang iyong zip code?', placeholder: 'Ilagay ang zip code', next: 'Susunod', back: '← Bumalik' },
    RU: { question: 'Какой у вас почтовый индекс?', placeholder: 'Введите почтовый индекс', next: 'Далее', back: '← Назад' },
    HT: { question: 'Ki kòd postal ou?', placeholder: 'Antre kòd postal', next: 'Pwochen', back: '← Retounen' },
  };

  const current = content[language] || content.EN;

  const backButtonStyle = {
    backgroundColor: 'transparent',
    color: '#7A9E87',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '8px 0',
    marginBottom: '24px',
    alignSelf: 'flex-start',
  };

  if (screen === 'housing') {
    return <HousingType language={language}
      onBack={() => setScreen('zip')}
      onNext={(type) => {
        setHousingType(type);
        setScreen('budget');
      }} />;
  }

  if (screen === 'budget') {
    return <Budget language={language}
      onBack={() => setScreen('housing')}
      onNext={(budget) => {
        setBudget(budget);
        setScreen('loading');
      }} />;
  }

  if (screen === 'loading') {
    setTimeout(() => setScreen('dashboard'), 2000);
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#FAF7F2',
      }}>
        <h2 style={{ color: '#7A9E87', fontSize: '24px' }}>Finding your options...</h2>
        <p style={{ color: '#2C2C2C', fontSize: '16px', marginTop: '16px' }}>🌱 Building your personalized plan</p>
      </div>
    );
  }

  if (screen === 'dashboard') {
    return <Dashboard
      language={language}
      zipCode={zipCode}
      housingType={housingType}
      budget={budget}
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
        width: '100%',
        maxWidth: '400px',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          width: '100%',
          height: '6px',
          backgroundColor: '#E8E0D5',
          borderRadius: '10px',
          marginBottom: '24px',
        }}>
          <div style={{
            width: '25%',
            height: '100%',
            backgroundColor: '#7A9E87',
            borderRadius: '10px',
          }}/>
        </div>

        <button onClick={onBack} style={backButtonStyle}>
          {current.back}
        </button>

        <h2 style={{
          color: '#2C2C2C',
          fontSize: '24px',
          marginBottom: '32px',
          textAlign: 'center',
        }}>
          {current.question}
        </h2>

        <input
          type="number"
          placeholder={current.placeholder}
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          maxLength={5}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            border: '2px solid #7A9E87',
            fontSize: '20px',
            textAlign: 'center',
            backgroundColor: '#FAF7F2',
            color: '#2C2C2C',
            boxSizing: 'border-box',
            outline: 'none',
          }}
        />

        <button
          disabled={zipCode.length !== 5}
          onClick={() => setScreen('housing')}
          style={{
            width: '100%',
            backgroundColor: zipCode.length === 5 ? '#D4956A' : '#E8E0D5',
            color: zipCode.length === 5 ? 'white' : '#A0A0A0',
            border: 'none',
            padding: '16px',
            borderRadius: '30px',
            fontSize: '18px',
            marginTop: '32px',
            cursor: zipCode.length === 5 ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
          }}
        >
          {current.next}
        </button>
      </div>
    </div>
  );
}

export default Onboarding;