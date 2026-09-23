import React, { useState } from 'react';

function Budget({ language, onNext, onBack }) {
  const [budget, setBudget] = useState('');

  const content = {
    EN: { question: 'What is your monthly budget for home expenses?', placeholder: 'Enter amount in dollars', next: 'Next', skip: 'I prefer not to say', back: '← Back' },
    ES: { question: '¿Cuál es tu presupuesto mensual para gastos del hogar?', placeholder: 'Ingresa el monto en dólares', next: 'Siguiente', skip: 'Prefiero no decir', back: '← Atrás' },
    ZH: { question: '您的家庭月度预算是多少？', placeholder: '输入金额（美元）', next: '下一步', skip: '我不想透露', back: '← 返回' },
    AR: { question: 'ما هي ميزانيتك الشهرية لمصاريف المنزل؟', placeholder: 'أدخل المبلغ بالدولار', next: 'التالي', skip: 'أفضل عدم الإفصاح', back: 'رجوع →' },
    FR: { question: 'Quel est votre budget mensuel pour les dépenses du foyer?', placeholder: 'Entrez le montant en dollars', next: 'Suivant', skip: 'Je préfère ne pas dire', back: '← Retour' },
    PT: { question: 'Qual é o seu orçamento mensal para despesas domésticas?', placeholder: 'Digite o valor em dólares', next: 'Próximo', skip: 'Prefiro não dizer', back: '← Voltar' },
    KO: { question: '가정 지출을 위한 월 예산은 얼마인가요?', placeholder: '금액 입력 (달러)', next: '다음', skip: '말하고 싶지 않아요', back: '← 뒤로' },
    VI: { question: 'Ngân sách hàng tháng cho chi phí gia đình của bạn là bao nhiêu?', placeholder: 'Nhập số tiền bằng đô la', next: 'Tiếp theo', skip: 'Tôi không muốn nói', back: '← Quay lại' },
    TL: { question: 'Magkano ang iyong buwanang badyet para sa mga gastusin sa bahay?', placeholder: 'Ilagay ang halaga sa dolyar', next: 'Susunod', skip: 'Mas gusto kong huwag sabihin', back: '← Bumalik' },
    RU: { question: 'Каков ваш ежемесячный бюджет на домашние расходы?', placeholder: 'Введите сумму в долларах', next: 'Далее', skip: 'Предпочитаю не говорить', back: '← Назад' },
    HT: { question: 'Ki bùdjè mansyèl ou pou depans kay ou?', placeholder: 'Antre montan an dola', next: 'Pwochen', skip: 'Mwen pito pa di', back: '← Retounen' },
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
            width: '75%',
            height: '100%',
            backgroundColor: '#7A9E87',
            borderRadius: '10px',
          }}/>
        </div>

        <button onClick={onBack} style={{
          backgroundColor: 'transparent',
          color: '#7A9E87',
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
          color: '#7A9E87',
          fontSize: '14px',
          textAlign: 'center',
          marginBottom: '32px',
        }}>
          This helps us find options you can actually afford.
        </p>

        <div style={{
          position: 'relative',
          width: '100%',
        }}>
          <span style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#7A9E87',
            fontSize: '20px',
          }}>$</span>
          <input
            type="number"
            placeholder={current.placeholder}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 16px 16px 36px',
              borderRadius: '12px',
              border: '2px solid #7A9E87',
              fontSize: '20px',
              backgroundColor: '#FAF7F2',
              color: '#2C2C2C',
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />
        </div>

        <button
          disabled={!budget}
          onClick={() => onNext(budget)}
          style={{
            width: '100%',
            backgroundColor: budget ? '#D4956A' : '#E8E0D5',
            color: budget ? 'white' : '#A0A0A0',
            border: 'none',
            padding: '16px',
            borderRadius: '30px',
            fontSize: '18px',
            marginTop: '32px',
            cursor: budget ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
          }}
        >
          {current.next}
        </button>

        <button
          onClick={() => onNext(null)}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            color: '#A0A0A0',
            border: 'none',
            padding: '16px',
            fontSize: '14px',
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

export default Budget;