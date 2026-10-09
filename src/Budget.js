import React, { useState } from 'react';

function Budget({ language, onNext, onBack }) {
  const [budget, setBudget] = useState('');

  const content = {
    EN: {
      question: 'What\'s your monthly budget for clean energy swaps?',
      hint: 'This helps us show you options you can actually afford. You can always update this later.',
      placeholder: 'e.g. 50',
      skip: 'Skip — I\'d rather not say',
      next: 'Next',
      back: '← Back',
      prefix: '$',
      suffix: '/mo',
    },
    ES: {
      question: '¿Cuál es tu presupuesto mensual para cambios de energía limpia?',
      hint: 'Esto nos ayuda a mostrarte opciones que realmente puedes pagar. Puedes actualizarlo más tarde.',
      placeholder: 'ej. 50',
      skip: 'Omitir — prefiero no decir',
      next: 'Siguiente',
      back: '← Atrás',
      prefix: '$',
      suffix: '/mes',
    },
    ZH: {
      question: '您每月的清洁能源预算是多少？',
      hint: '这有助于我们为您展示您真正能负担得起的选项。您可以随时更新。',
      placeholder: '例如 50',
      skip: '跳过',
      next: '下一步',
      back: '← 返回',
      prefix: '$',
      suffix: '/月',
    },
    AR: {
      question: 'ما هي ميزانيتك الشهرية لتبديلات الطاقة النظيفة؟',
      hint: 'يساعدنا هذا في إظهار الخيارات التي يمكنك تحملها فعلاً.',
      placeholder: 'مثال: 50',
      skip: 'تخطي',
      next: 'التالي',
      back: 'رجوع →',
      prefix: '$',
      suffix: '/شهر',
    },
    FR: {
      question: 'Quel est votre budget mensuel pour les changements énergétiques?',
      hint: 'Cela nous aide à vous montrer des options que vous pouvez vraiment vous permettre.',
      placeholder: 'ex. 50',
      skip: 'Passer',
      next: 'Suivant',
      back: '← Retour',
      prefix: '$',
      suffix: '/mois',
    },
    PT: {
      question: 'Qual é o seu orçamento mensal para trocas de energia limpa?',
      hint: 'Isso nos ajuda a mostrar opções que você realmente pode pagar.',
      placeholder: 'ex. 50',
      skip: 'Pular',
      next: 'Próximo',
      back: '← Voltar',
      prefix: '$',
      suffix: '/mês',
    },
    KO: {
      question: '청정 에너지 전환을 위한 월 예산은 얼마인가요?',
      hint: '실제로 감당할 수 있는 옵션을 보여드리는 데 도움이 됩니다.',
      placeholder: '예: 50',
      skip: '건너뛰기',
      next: '다음',
      back: '← 뒤로',
      prefix: '$',
      suffix: '/월',
    },
    VI: {
      question: 'Ngân sách hàng tháng của bạn cho các thay đổi năng lượng sạch là bao nhiêu?',
      hint: 'Điều này giúp chúng tôi hiển thị các tùy chọn bạn thực sự có thể chi trả.',
      placeholder: 'vd. 50',
      skip: 'Bỏ qua',
      next: 'Tiếp theo',
      back: '← Quay lại',
      prefix: '$',
      suffix: '/tháng',
    },
    TL: {
      question: 'Ano ang iyong buwanang badyet para sa mga malinis na pagpapalit ng enerhiya?',
      hint: 'Nakakatulong ito sa amin na ipakita ang mga opsyong kayang-kaya mo.',
      placeholder: 'hal. 50',
      skip: 'Laktawan',
      next: 'Susunod',
      back: '← Bumalik',
      prefix: '$',
      suffix: '/buwan',
    },
    RU: {
      question: 'Каков ваш ежемесячный бюджет на экологичные замены?',
      hint: 'Это помогает нам показывать вам варианты, которые вы действительно можете себе позволить.',
      placeholder: 'напр. 50',
      skip: 'Пропустить',
      next: 'Далее',
      back: '← Назад',
      prefix: '$',
      suffix: '/мес',
    },
    HT: {
      question: 'Ki bidjè mansyèl ou pou chanjman enèji pwòp?',
      hint: 'Sa ede nou montre ou opsyon ou ka reyèlman peye.',
      placeholder: 'ex. 50',
      skip: 'Sote',
      next: 'Pwochen',
      back: '← Retounen',
      prefix: '$',
      suffix: '/mwa',
    },
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
      backgroundImage: 'url(/earth2.jpg)',
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
            width: '83%',
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
          fontSize: '13px',
          textAlign: 'center',
          marginBottom: '32px',
          lineHeight: '1.6',
        }}>
          {current.hint}
        </p>

        {/* Budget input */}
        <div style={{
          position: 'relative',
          marginBottom: '8px',
        }}>
          <span style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '20px',
            fontWeight: '500',
          }}>
            {current.prefix}
          </span>
          <input
            type="number"
            placeholder={current.placeholder}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={{
              width: '100%',
              padding: '18px 60px',
              borderRadius: '16px',
              border: `2px solid ${budget ? '#4CAF7D' : 'rgba(255,255,255,0.25)'}`,
              fontSize: '22px',
              textAlign: 'center',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              boxSizing: 'border-box',
              outline: 'none',
              backdropFilter: 'blur(4px)',
              fontFamily: 'Poppins, sans-serif',
            }}
          />
          <span style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '16px',
          }}>
            {current.suffix}
          </span>
        </div>

        <button
          disabled={!budget}
          onClick={() => onNext(budget)}
          style={{
            width: '100%',
            backgroundColor: budget ? '#2D7D52' : 'rgba(255,255,255,0.15)',
            color: budget ? 'white' : 'rgba(255,255,255,0.4)',
            border: 'none',
            padding: '16px',
            borderRadius: '30px',
            fontSize: '18px',
            marginTop: '24px',
            cursor: budget ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {current.next}
        </button>

        <button
          onClick={() => onNext(null)}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            color: 'rgba(255,255,255,0.5)',
            border: 'none',
            padding: '14px',
            fontSize: '14px',
            marginTop: '8px',
            cursor: 'pointer',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {current.skip}
        </button>
      </div>
    </div>
  );
}

export default Budget;