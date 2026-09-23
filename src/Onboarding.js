import React, { useState } from 'react';
import HousingType from './HousingType';

function Onboarding({ language }) {
  const [zipCode, setZipCode] = useState('');
  const [screen, setScreen] = useState('zip');

  const content = {
    EN: { question: 'What\'s your zip code?', placeholder: 'Enter zip code', next: 'Next' },
    ES: { question: '¿Cuál es tu código postal?', placeholder: 'Ingresa tu código postal', next: 'Siguiente' },
    ZH: { question: '你的邮政编码是什么？', placeholder: '输入邮政编码', next: '下一步' },
    AR: { question: 'ما هو الرمز البريدي؟', placeholder: 'أدخل الرمز البريدي', next: 'التالي' },
    FR: { question: 'Quel est votre code postal?', placeholder: 'Entrez le code postal', next: 'Suivant' },
    PT: { question: 'Qual é o seu código postal?', placeholder: 'Digite o código postal', next: 'Próximo' },
    KO: { question: '우편번호가 무엇인가요?', placeholder: '우편번호 입력', next: '다음' },
    VI: { question: 'Mã bưu chính của bạn là gì?', placeholder: 'Nhập mã bưu chính', next: 'Tiếp theo' },
    TL: { question: 'Ano ang iyong zip code?', placeholder: 'Ilagay ang zip code', next: 'Susunod' },
    RU: { question: 'Какой у вас почтовый индекс?', placeholder: 'Введите почтовый индекс', next: 'Далее' },
    HT: { question: 'Ki kòd postal ou?', placeholder: 'Antre kòd postal', next: 'Pwochen' },
  };

  const current = content[language] || content.EN;

  if (screen === 'housing') {
    return <HousingType language={language} onNext={(type) => console.log(zipCode, type)} />;
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
      }}>
        <div style={{
          width: '100%',
          height: '6px',
          backgroundColor: '#E8E0D5',
          borderRadius: '10px',
          marginBottom: '48px',
        }}>
          <div style={{
            width: '25%',
            height: '100%',
            backgroundColor: '#7A9E87',
            borderRadius: '10px',
          }}/>
        </div>

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