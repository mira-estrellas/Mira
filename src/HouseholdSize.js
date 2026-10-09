import React, { useState } from 'react';

function HouseholdSize({ language, onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  const content = {
    EN: { question: 'How many people live in your home?', hint: 'Include yourself and anyone you support financially.', next: 'Next', back: '← Back', person: 'person', people: 'people' },
    ES: { question: '¿Cuántas personas viven en tu hogar?', hint: 'Inclúyete a ti mismo y a cualquier persona que apoyes económicamente.', next: 'Siguiente', back: '← Atrás', person: 'persona', people: 'personas' },
    ZH: { question: '您家有多少人？', hint: '包括您自己和您在经济上支持的任何人。', next: '下一步', back: '← 返回', person: '人', people: '人' },
    AR: { question: 'كم عدد الأشخاص الذين يعيشون في منزلك؟', hint: 'اشمل نفسك وأي شخص تدعمه ماليًا.', next: 'التالي', back: 'رجوع →', person: 'شخص', people: 'أشخاص' },
    FR: { question: 'Combien de personnes vivent dans votre foyer?', hint: 'Incluez-vous et toute personne que vous soutenez financièrement.', next: 'Suivant', back: '← Retour', person: 'personne', people: 'personnes' },
    PT: { question: 'Quantas pessoas moram na sua casa?', hint: 'Inclua você mesmo e qualquer pessoa que você apoia financeiramente.', next: 'Próximo', back: '← Voltar', person: 'pessoa', people: 'pessoas' },
    KO: { question: '집에 몇 명이 살고 있나요?', hint: '본인과 재정적으로 부양하는 사람을 포함하세요.', next: '다음', back: '← 뒤로', person: '명', people: '명' },
    VI: { question: 'Có bao nhiêu người sống trong nhà bạn?', hint: 'Bao gồm bản thân bạn và bất kỳ ai bạn hỗ trợ tài chính.', next: 'Tiếp theo', back: '← Quay lại', person: 'người', people: 'người' },
    TL: { question: 'Ilang tao ang nakatira sa iyong tahanan?', hint: 'Isama ang iyong sarili at sinumang iyong sinusuportahan sa pananalapi.', next: 'Susunod', back: '← Bumalik', person: 'tao', people: 'tao' },
    RU: { question: 'Сколько человек живёт в вашем доме?', hint: 'Включите себя и всех, кого вы финансово поддерживаете.', next: 'Далее', back: '← Назад', person: 'человек', people: 'человека' },
    HT: { question: 'Konbyen moun ki rete nan kay ou?', hint: 'Enkli tèt ou ak nenpòt moun ou sipòte finansyèlman.', next: 'Pwochen', back: '← Retounen', person: 'moun', people: 'moun' },
  };

  const current = content[language] || content.EN;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      direction: language === 'AR' ? 'rtl' : 'ltr',
      padding: '24px 0',
      boxSizing: 'border-box',
      position: 'relative',
      backgroundImage: 'url(/earth.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>

      {/* Blurred overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backdropFilter: 'blur(12px)',
        background: 'rgba(0,20,10,0.55)',
        zIndex: 0,
      }} />

      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Progress bar */}
        <div style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '10px',
          marginBottom: '24px',
        }}>
          <div style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#4CAF7D',
            borderRadius: '10px',
          }}/>
        </div>

        <button onClick={onBack} style={{
          backgroundColor: 'transparent',
          color: 'rgba(255,255,255,0.7)',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          padding: '8px 0',
          marginBottom: '24px',
          alignSelf: 'flex-start',
          fontFamily: 'Poppins, sans-serif',
        }}>
          {current.back}
        </button>

        <h2 style={{
          color: 'white',
          fontSize: '24px',
          marginBottom: '8px',
          textAlign: 'center',
          textShadow: '0 1px 8px rgba(0,0,0,0.4)',
        }}>
          {current.question}
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.75)',
          fontSize: '14px',
          textAlign: 'center',
          marginBottom: '32px',
        }}>
          {current.hint}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          marginBottom: '12px',
        }}>
          {[1, 2, 3, 4, 5, 6, 7, '8+'].map((num) => (
            <button
              key={num}
              onClick={() => setSelected(num)}
              style={{
                padding: '20px 8px',
                borderRadius: '16px',
                border: `2px solid ${selected === num ? '#4CAF7D' : 'rgba(255,255,255,0.25)'}`,
                backgroundColor: selected === num ? 'rgba(76,175,125,0.25)' : 'rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'center',
                backdropFilter: 'blur(4px)',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {num}
            </button>
          ))}
        </div>

        {selected && (
          <p style={{
            color: '#4CAF7D',
            fontSize: '14px',
            textAlign: 'center',
            marginBottom: '8px',
          }}>
            {selected === '8+' ? `8+ ${current.people}` : selected === 1 ? `1 ${current.person}` : `${selected} ${current.people}`}
          </p>
        )}

        <button
          disabled={!selected}
          onClick={() => onNext(selected)}
          style={{
            width: '100%',
            backgroundColor: selected ? '#2D7D52' : 'rgba(255,255,255,0.15)',
            color: selected ? 'white' : 'rgba(255,255,255,0.4)',
            border: 'none',
            padding: '16px',
            borderRadius: '30px',
            fontSize: '18px',
            marginTop: '16px',
            cursor: selected ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {current.next}
        </button>
      </div>
    </div>
  );
}

export default HouseholdSize;