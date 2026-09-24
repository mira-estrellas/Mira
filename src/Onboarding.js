import React, { useState } from 'react';
import Dashboard from './Dashboard';
import HousingType from './HousingType';
import Budget from './Budget';
import HouseholdSize from './HouseholdSize';
import HouseholdIncome from './HouseholdIncome';

function Onboarding({ language, onBack }) {
  const [zipCode, setZipCode] = useState('');
  const [screen, setScreen] = useState('zip');
  const [housingType, setHousingType] = useState(null);
  const [budget, setBudget] = useState(null);
  const [householdSize, setHouseholdSize] = useState(null);
  const [householdIncome, setHouseholdIncome] = useState(null);

  const content = {
    EN: {
      question: 'What\'s your zip code?',
      placeholder: 'Enter zip code',
      next: 'Next',
      back: '← Back',
      privacy: '🔒 We never store or share your location. This is only used to find incentives in your area.',
      skip: 'Skip — I\'d rather not share my location',
    },
    ES: {
      question: '¿Cuál es tu código postal?',
      placeholder: 'Ingresa tu código postal',
      next: 'Siguiente',
      back: '← Atrás',
      privacy: '🔒 Nunca almacenamos ni compartimos tu ubicación. Solo se usa para encontrar incentivos en tu área.',
      skip: 'Omitir — prefiero no compartir mi ubicación',
    },
    ZH: {
      question: '你的邮政编码是什么？',
      placeholder: '输入邮政编码',
      next: '下一步',
      back: '← 返回',
      privacy: '🔒 我们从不存储或分享您的位置。仅用于查找您所在地区的激励措施。',
      skip: '跳过 — 我不想分享我的位置',
    },
    AR: {
      question: 'ما هو الرمز البريدي؟',
      placeholder: 'أدخل الرمز البريدي',
      next: 'التالي',
      back: 'رجوع →',
      privacy: '🔒 نحن لا نخزن موقعك أو نشاركه أبدًا. يُستخدم فقط للعثور على الحوافز في منطقتك.',
      skip: 'تخطي — أفضل عدم مشاركة موقعي',
    },
    FR: {
      question: 'Quel est votre code postal?',
      placeholder: 'Entrez le code postal',
      next: 'Suivant',
      back: '← Retour',
      privacy: '🔒 Nous ne stockons ni ne partageons jamais votre localisation. Elle est uniquement utilisée pour trouver des aides dans votre région.',
      skip: 'Passer — je préfère ne pas partager ma localisation',
    },
    PT: {
      question: 'Qual é o seu código postal?',
      placeholder: 'Digite o código postal',
      next: 'Próximo',
      back: '← Voltar',
      privacy: '🔒 Nunca armazenamos ou compartilhamos sua localização. É usada apenas para encontrar incentivos na sua área.',
      skip: 'Pular — prefiro não compartilhar minha localização',
    },
    KO: {
      question: '우편번호가 무엇인가요?',
      placeholder: '우편번호 입력',
      next: '다음',
      back: '← 뒤로',
      privacy: '🔒 귀하의 위치는 저장되거나 공유되지 않습니다. 해당 지역의 혜택을 찾는 데만 사용됩니다.',
      skip: '건너뛰기 — 위치를 공유하고 싶지 않습니다',
    },
    VI: {
      question: 'Mã bưu chính của bạn là gì?',
      placeholder: 'Nhập mã bưu chính',
      next: 'Tiếp theo',
      back: '← Quay lại',
      privacy: '🔒 Chúng tôi không bao giờ lưu trữ hoặc chia sẻ vị trí của bạn. Chỉ dùng để tìm ưu đãi trong khu vực của bạn.',
      skip: 'Bỏ qua — Tôi không muốn chia sẻ vị trí',
    },
    TL: {
      question: 'Ano ang iyong zip code?',
      placeholder: 'Ilagay ang zip code',
      next: 'Susunod',
      back: '← Bumalik',
      privacy: '🔒 Hindi namin kailanman ini-imbak o ibinabahagi ang iyong lokasyon. Ginagamit lamang ito para mahanap ang mga insentibo sa iyong lugar.',
      skip: 'Laktawan — Ayaw kong ibahagi ang aking lokasyon',
    },
    RU: {
      question: 'Какой у вас почтовый индекс?',
      placeholder: 'Введите почтовый индекс',
      next: 'Далее',
      back: '← Назад',
      privacy: '🔒 Мы никогда не храним и не передаём ваше местоположение. Оно используется только для поиска льгот в вашем регионе.',
      skip: 'Пропустить — я не хочу делиться своим местоположением',
    },
    HT: {
      question: 'Ki kòd postal ou?',
      placeholder: 'Antre kòd postal',
      next: 'Pwochen',
      back: '← Retounen',
      privacy: '🔒 Nou pa janm estoke oswa pataje kote ou ye. Sa a sèlman itilize pou jwenn ensentif nan zòn ou an.',
      skip: 'Sote — Mwen prefere pa pataje kote mwen ye',
    },
  };

  const current = content[language] || content.EN;

  const backButtonStyle = {
    backgroundColor: 'transparent',
    color: '#4F8C6F',
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
        setScreen('size');
      }} />;
  }

  if (screen === 'size') {
    return <HouseholdSize language={language}
      onBack={() => setScreen('housing')}
      onNext={(size) => {
        setHouseholdSize(size);
        setScreen('income');
      }} />;
  }

  if (screen === 'income') {
    return <HouseholdIncome language={language}
      onBack={() => setScreen('size')}
      onNext={(income) => {
        setHouseholdIncome(income);
        setScreen('budget');
      }} />;
  }

  if (screen === 'budget') {
    return <Budget language={language}
      onBack={() => setScreen('income')}
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
        <h2 style={{ color: '#4F8C6F', fontSize: '24px' }}>Finding your options...</h2>
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
      householdSize={householdSize}
      householdIncome={householdIncome}
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
            width: '17%',
            height: '100%',
            backgroundColor: '#4F8C6F',
            borderRadius: '10px',
          }}/>
        </div>

        <button onClick={onBack} style={backButtonStyle}>
          {current.back}
        </button>

        <h2 style={{
          color: '#2C2C2C',
          fontSize: '24px',
          marginBottom: '12px',
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
          {current.privacy}
        </p>

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
            border: '2px solid #4F8C6F',
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

        <button
          onClick={() => {
            setZipCode('');
            setScreen('housing');
          }}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            color: '#A0A0A0',
            border: 'none',
            padding: '16px',
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

export default Onboarding;