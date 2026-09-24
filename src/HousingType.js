import React, { useState } from 'react';

function HousingType({ language, onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  const content = {
    EN: { question: 'What best describes your living situation?', rent: '🏠 I Rent', own: '🏡 I Own', guest: '👨‍👩‍👧 I live with family or others', next: 'Next', back: '← Back' },
    ES: { question: '¿Qué describe mejor tu situación de vivienda?', rent: '🏠 Alquilo', own: '🏡 Soy Dueño', guest: '👨‍👩‍👧 Vivo con familia u otros', next: 'Siguiente', back: '← Atrás' },
    ZH: { question: '您的居住情况是什么？', rent: '🏠 我租房', own: '🏡 我自有', guest: '👨‍👩‍👧 我与家人或他人同住', next: '下一步', back: '← 返回' },
    AR: { question: 'ما الذي يصف وضع سكنك بشكل أفضل؟', rent: '🏠 أستأجر', own: '🏡 أمتلك', guest: '👨‍👩‍👧 أسكن مع العائلة أو آخرين', next: 'التالي', back: 'رجوع →' },
    FR: { question: 'Quelle est votre situation de logement?', rent: '🏠 Locataire', own: '🏡 Propriétaire', guest: '👨‍👩‍👧 Je vis avec ma famille ou d\'autres', next: 'Suivant', back: '← Retour' },
    PT: { question: 'O que melhor descreve sua situação de moradia?', rent: '🏠 Alugo', own: '🏡 Sou Dono', guest: '👨‍👩‍👧 Moro com família ou outros', next: 'Próximo', back: '← Voltar' },
    KO: { question: '거주 상황을 가장 잘 설명하는 것은?', rent: '🏠 임대', own: '🏡 소유', guest: '👨‍👩‍👧 가족 또는 다른 사람과 함께 거주', next: '다음', back: '← 뒤로' },
    VI: { question: 'Điều gì mô tả tốt nhất tình trạng nhà ở của bạn?', rent: '🏠 Thuê', own: '🏡 Sở Hữu', guest: '👨‍👩‍👧 Tôi sống với gia đình hoặc người khác', next: 'Tiếp theo', back: '← Quay lại' },
    TL: { question: 'Ano ang pinakamailarawan sa iyong sitwasyon sa pamumuhay?', rent: '🏠 Nangungupahan', own: '🏡 May-ari', guest: '👨‍👩‍👧 Nakatira ako sa pamilya o iba pa', next: 'Susunod', back: '← Bumalik' },
    RU: { question: 'Что лучше всего описывает вашу жилищную ситуацию?', rent: '🏠 Снимаю', own: '🏡 Владею', guest: '👨‍👩‍👧 Живу с семьёй или другими', next: 'Далее', back: '← Назад' },
    HT: { question: 'Ki sa ki pi byen dekri sitiyasyon lojman ou?', rent: '🏠 Mwen louwe', own: '🏡 Mwen posede', guest: '👨‍👩‍👧 Mwen rete ak fanmi oswa lòt moun', next: 'Pwochen', back: '← Retounen' },
  };

  const current = content[language] || content.EN;

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
            width: '33%',
            height: '100%',
            backgroundColor: '#4F8C6F',
            borderRadius: '10px',
          }}/>
        </div>

        <button onClick={onBack} style={{
          backgroundColor: 'transparent',
          color: '#4F8C6F',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          padding: '8px 0',
          marginBottom: '24px',
          alignSelf: 'flex-start',
        }}>
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

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {['rent', 'own', 'guest'].map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              style={{
                width: '100%',
                padding: '20px',
                borderRadius: '16px',
                border: `2px solid ${selected === option ? '#4F8C6F' : '#E8E0D5'}`,
                backgroundColor: selected === option ? '#EBF3EE' : '#FAF7F2',
                color: '#2C2C2C',
                fontSize: '17px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'center',
              }}
            >
              {current[option]}
            </button>
          ))}
        </div>

        <button
          disabled={!selected}
          onClick={() => onNext(selected)}
          style={{
            width: '100%',
            backgroundColor: selected ? '#D4956A' : '#E8E0D5',
            color: selected ? 'white' : '#A0A0A0',
            border: 'none',
            padding: '16px',
            borderRadius: '30px',
            fontSize: '18px',
            marginTop: '32px',
            cursor: selected ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
          }}
        >
          {current.next}
        </button>
      </div>
    </div>
  );
}

export default HousingType;