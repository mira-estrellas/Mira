import React, { useState } from 'react';

function HouseholdIncome({ language, onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  const brackets = [
    { label: 'Under $30,000', value: 20000 },
    { label: '$30,000 – $60,000', value: 45000 },
    { label: '$60,000 – $100,000', value: 80000 },
    { label: '$100,000 – $150,000', value: 125000 },
    { label: 'Over $150,000', value: 175000 },
  ];

  const bracketsByLang = {
    ES: [
      { label: 'Menos de $30,000', value: 20000 },
      { label: '$30,000 – $60,000', value: 45000 },
      { label: '$60,000 – $100,000', value: 80000 },
      { label: '$100,000 – $150,000', value: 125000 },
      { label: 'Más de $150,000', value: 175000 },
    ],
  };

  const content = {
    EN: { question: 'What is your annual household income?', hint: 'This helps us find income-based incentives you qualify for. We never store this information.', skip: 'Prefer not to say', next: 'Next', back: '← Back' },
    ES: { question: '¿Cuál es el ingreso anual de tu hogar?', hint: 'Esto nos ayuda a encontrar incentivos basados en ingresos para los que calificas. Nunca almacenamos esta información.', skip: 'Prefiero no decir', next: 'Siguiente', back: '← Atrás' },
    ZH: { question: '您的家庭年收入是多少？', hint: '这有助于我们找到您有资格获得的基于收入的激励措施。我们从不存储此信息。', skip: '不想透露', next: '下一步', back: '← 返回' },
    AR: { question: 'ما هو دخل أسرتك السنوي؟', hint: 'يساعدنا هذا في العثور على الحوافز المبنية على الدخل التي تستحقها. نحن لا نخزن هذه المعلومات أبدًا.', skip: 'أفضل عدم القول', next: 'التالي', back: 'رجوع →' },
    FR: { question: 'Quel est le revenu annuel de votre foyer?', hint: 'Cela nous aide à trouver des aides basées sur le revenu auxquelles vous êtes éligible. Nous ne stockons jamais ces informations.', skip: 'Je préfère ne pas dire', next: 'Suivant', back: '← Retour' },
    PT: { question: 'Qual é a renda anual do seu domicílio?', hint: 'Isso nos ajuda a encontrar incentivos baseados em renda para os quais você se qualifica. Nunca armazenamos essas informações.', skip: 'Prefiro não dizer', next: 'Próximo', back: '← Voltar' },
    KO: { question: '가구 연간 소득은 얼마인가요?', hint: '자격이 되는 소득 기반 혜택을 찾는 데 도움이 됩니다. 이 정보는 저장되지 않습니다.', skip: '말하고 싶지 않아요', next: '다음', back: '← 뒤로' },
    VI: { question: 'Thu nhập hàng năm của hộ gia đình bạn là bao nhiêu?', hint: 'Điều này giúp chúng tôi tìm các ưu đãi dựa trên thu nhập mà bạn đủ điều kiện. Chúng tôi không bao giờ lưu trữ thông tin này.', skip: 'Không muốn nói', next: 'Tiếp theo', back: '← Quay lại' },
    TL: { question: 'Ano ang taunang kita ng inyong sambahayan?', hint: 'Nakakatulong ito sa amin na mahanap ang mga insentibong batay sa kita na karapat-dapat ka. Hindi namin iniimbak ang impormasyong ito.', skip: 'Mas gusto kong huwag sabihin', next: 'Susunod', back: '← Bumalik' },
    RU: { question: 'Каков годовой доход вашей семьи?', hint: 'Это помогает нам найти льготы, зависящие от дохода, на которые вы имеете право. Мы никогда не храним эту информацию.', skip: 'Предпочитаю не говорить', next: 'Далее', back: '← Назад' },
    HT: { question: 'Ki revni anyèl kay ou?', hint: 'Sa ede nou jwenn ensentif ki baze sou revni ou kalifye. Nou pa janm estoke enfòmasyon sa a.', skip: 'Mwen pito pa di', next: 'Pwochen', back: '← Retounen' },
  };

  const current = content[language] || content.EN;
  const currentBrackets = bracketsByLang[language] || brackets;

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
            width: '66%',
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
          marginBottom: '8px',
          textAlign: 'center',
        }}>
          {current.question}
        </h2>

        <p style={{
          color: '#4F8C6F',
          fontSize: '12px',
          textAlign: 'center',
          marginBottom: '24px',
          lineHeight: '1.5',
        }}>
          🔒 {current.hint}
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {currentBrackets.map((bracket, index) => (
            <button
              key={index}
              onClick={() => setSelected(bracket)}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: `2px solid ${selected?.value === bracket.value ? '#4F8C6F' : '#E8E0D5'}`,
                backgroundColor: selected?.value === bracket.value ? '#EBF3EE' : '#FAF7F2',
                color: '#2C2C2C',
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'center',
              }}
            >
              {bracket.label}
            </button>
          ))}
        </div>

        <button
          disabled={!selected}
          onClick={() => onNext(selected.value)}
          style={{
            width: '100%',
            backgroundColor: selected ? '#D4956A' : '#E8E0D5',
            color: selected ? 'white' : '#A0A0A0',
            border: 'none',
            padding: '16px',
            borderRadius: '30px',
            fontSize: '18px',
            marginTop: '20px',
            cursor: selected ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
          }}
        >
          {current.next}
        </button>

        <button
          onClick={() => onNext(80000)}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            color: '#A0A0A0',
            border: 'none',
            padding: '12px',
            fontSize: '13px',
            marginTop: '8px',
            cursor: 'pointer',
          }}
        >
          {current.skip}
        </button>

      </div>
    </div>
  );
}

export default HouseholdIncome;