import React, { useState } from 'react';

function HousingType({ language, onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  const content = {
    EN: { question: 'Do you rent or own your home?', rent: '🏠 I Rent', own: '🏡 I Own', next: 'Next', back: '← Back' },
    ES: { question: '¿Alquilas o eres dueño de tu hogar?', rent: '🏠 Alquilo', own: '🏡 Soy Dueño', next: 'Siguiente', back: '← Atrás' },
    ZH: { question: '您是租房还是自有住房？', rent: '🏠 我租房', own: '🏡 我自有', next: '下一步', back: '← 返回' },
    AR: { question: 'هل تستأجر أم تمتلك منزلك؟', rent: '🏠 أستأجر', own: '🏡 أمتلك', next: 'التالي', back: 'رجوع →' },
    FR: { question: 'Êtes-vous locataire ou propriétaire?', rent: '🏠 Locataire', own: '🏡 Propriétaire', next: 'Suivant', back: '← Retour' },
    PT: { question: 'Você aluga ou é dono da sua casa?', rent: '🏠 Alugo', own: '🏡 Sou Dono', next: 'Próximo', back: '← Voltar' },
    KO: { question: '집을 임대하시나요 아니면 소유하시나요?', rent: '🏠 임대', own: '🏡 소유', next: '다음', back: '← 뒤로' },
    VI: { question: 'Bạn thuê hay sở hữu nhà?', rent: '🏠 Thuê', own: '🏡 Sở Hữu', next: 'Tiếp theo', back: '← Quay lại' },
    TL: { question: 'Nangungupahan ka ba o may-ari?', rent: '🏠 Nangungupahan', own: '🏡 May-ari', next: 'Susunod', back: '← Bumalik' },
    RU: { question: 'Вы снимаете или владеете жильём?', rent: '🏠 Снимаю', own: '🏡 Владею', next: 'Далее', back: '← Назад' },
    HT: { question: 'Èske ou louwe oswa posede kay ou?', rent: '🏠 Mwen louwe', own: '🏡 Mwen posede', next: 'Pwochen', back: '← Retounen' },
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
            width: '50%',
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
          {['rent', 'own'].map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              style={{
                width: '100%',
                padding: '24px',
                borderRadius: '16px',
                border: `2px solid ${selected === option ? '#4F8C6F' : '#E8E0D5'}`,
                backgroundColor: selected === option ? '#EBF3EE' : '#FAF7F2',
                color: '#2C2C2C',
                fontSize: '18px',
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