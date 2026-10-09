import React, { useState, useEffect } from 'react';
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
  const [loadingStep, setLoadingStep] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const loadingMessages = {
    EN: [
      'Finding incentives in your area...',
      'Calculating your potential savings...',
      'Matching swaps to your budget...',
      'Building your personalized plan...',
    ],
    ES: [
      'Encontrando incentivos en tu área...',
      'Calculando tus ahorros potenciales...',
      'Combinando cambios con tu presupuesto...',
      'Construyendo tu plan personalizado...',
    ],
    ZH: [
      '正在查找您所在地区的激励措施...',
      '计算您的潜在节省...',
      '根据您的预算匹配方案...',
      '建立您的个性化计划...',
    ],
    AR: [
      'البحث عن الحوافز في منطقتك...',
      'حساب مدخراتك المحتملة...',
      'مطابقة التغييرات مع ميزانيتك...',
      'بناء خطتك الشخصية...',
    ],
    FR: [
      'Recherche des aides dans votre région...',
      'Calcul de vos économies potentielles...',
      'Adaptation des changements à votre budget...',
      'Construction de votre plan personnalisé...',
    ],
    PT: [
      'Encontrando incentivos na sua área...',
      'Calculando suas economias potenciais...',
      'Combinando trocas com seu orçamento...',
      'Construindo seu plano personalizado...',
    ],
    KO: [
      '해당 지역의 인센티브 찾는 중...',
      '잠재적 절감액 계산 중...',
      '예산에 맞는 스왑 매칭 중...',
      '맞춤형 계획 구성 중...',
    ],
    VI: [
      'Tìm kiếm ưu đãi trong khu vực của bạn...',
      'Tính toán khoản tiết kiệm tiềm năng...',
      'Kết hợp các thay đổi với ngân sách...',
      'Xây dựng kế hoạch cá nhân hóa...',
    ],
    TL: [
      'Naghahanap ng mga insentibo sa iyong lugar...',
      'Kinakalkula ang iyong potensyal na ipon...',
      'Itutugma ang mga pagbabago sa iyong badyet...',
      'Binubuo ang iyong personalisadong plano...',
    ],
    RU: [
      'Поиск льгот в вашем регионе...',
      'Расчёт потенциальной экономии...',
      'Подбор изменений под ваш бюджет...',
      'Создание вашего персонального плана...',
    ],
    HT: [
      'Ap chèche ensentif nan zòn ou...',
      'Ap kalkile ekonomi potansyèl ou...',
      'Ap adapte chanjman yo ak bidjè ou...',
      'Ap bati plan pèsonalize ou...',
    ],
  };

  const messages = loadingMessages[language] || loadingMessages.EN;

  useEffect(() => {
    if (screen !== 'loading') return;

    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setLoadingStep(prev => {
          if (prev >= messages.length - 1) return prev;
          return prev + 1;
        });
        setFadeIn(true);
      }, 400);
    }, 1200);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setScreen('dashboard');
    }, messages.length * 1200 + 400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [screen, messages.length]);

  const content = {
    EN: {
      question: 'What\'s your zip code?',
      placeholder: 'Enter zip code',
      next: 'Next',
      back: '← Back',
      privacy: '🔒 We never store or share your location. This is only used to find incentives in your area.',
      skip: 'Skip - I\'d rather not share my location',
    },
    ES: {
      question: '¿Cuál es tu código postal?',
      placeholder: 'Ingresa tu código postal',
      next: 'Siguiente',
      back: '← Atrás',
      privacy: '🔒 Nunca almacenamos ni compartimos tu ubicación. Solo se usa para encontrar incentivos en tu área.',
      skip: 'Omitir - prefiero no compartir mi ubicación',
    },
    ZH: {
      question: '你的邮政编码是什么？',
      placeholder: '输入邮政编码',
      next: '下一步',
      back: '← 返回',
      privacy: '🔒 我们从不存储或分享您的位置。仅用于查找您所在地区的激励措施。',
      skip: '跳过 - 我不想分享我的位置',
    },
    AR: {
      question: 'ما هو الرمز البريدي؟',
      placeholder: 'أدخل الرمز البريدي',
      next: 'التالي',
      back: 'رجوع →',
      privacy: '🔒 نحن لا نخزن موقعك أو نشاركه أبدًا. يُستخدم فقط للعثور على الحوافز في منطقتك.',
      skip: 'تخطي - أفضل عدم مشاركة موقعي',
    },
    FR: {
      question: 'Quel est votre code postal?',
      placeholder: 'Entrez le code postal',
      next: 'Suivant',
      back: '← Retour',
      privacy: '🔒 Nous ne stockons ni ne partageons jamais votre localisation.',
      skip: 'Passer - je préfère ne pas partager ma localisation',
    },
    PT: {
      question: 'Qual é o seu código postal?',
      placeholder: 'Digite o código postal',
      next: 'Próximo',
      back: '← Voltar',
      privacy: '🔒 Nunca armazenamos ou compartilhamos sua localização.',
      skip: 'Pular - prefiro não compartilhar minha localização',
    },
    KO: {
      question: '우편번호가 무엇인가요?',
      placeholder: '우편번호 입력',
      next: '다음',
      back: '← 뒤로',
      privacy: '🔒 귀하의 위치는 저장되거나 공유되지 않습니다.',
      skip: '건너뛰기 - 위치를 공유하고 싶지 않습니다',
    },
    VI: {
      question: 'Mã bưu chính của bạn là gì?',
      placeholder: 'Nhập mã bưu chính',
      next: 'Tiếp theo',
      back: '← Quay lại',
      privacy: '🔒 Chúng tôi không bao giờ lưu trữ hoặc chia sẻ vị trí của bạn.',
      skip: 'Bỏ qua - Tôi không muốn chia sẻ vị trí',
    },
    TL: {
      question: 'Ano ang iyong zip code?',
      placeholder: 'Ilagay ang zip code',
      next: 'Susunod',
      back: '← Bumalik',
      privacy: '🔒 Hindi namin kailanman ini-imbak o ibinabahagi ang iyong lokasyon.',
      skip: 'Laktawan - Ayaw kong ibahagi ang aking lokasyon',
    },
    RU: {
      question: 'Какой у вас почтовый индекс?',
      placeholder: 'Введите почтовый индекс',
      next: 'Далее',
      back: '← Назад',
      privacy: '🔒 Мы никогда не храним и не передаём ваше местоположение.',
      skip: 'Пропустить - я не хочу делиться своим местоположением',
    },
    HT: {
      question: 'Ki kòd postal ou?',
      placeholder: 'Antre kòd postal',
      next: 'Pwochen',
      back: '← Retounen',
      privacy: '🔒 Nou pa janm estoke oswa pataje kote ou ye.',
      skip: 'Sote - Mwen prefere pa pataje kote mwen ye',
    },
  };

  const current = content[language] || content.EN;

  if (screen === 'housing') {
    return <HousingType language={language}
      onBack={() => setScreen('zip')}
      onNext={(type) => { setHousingType(type); setScreen('size'); }} />;
  }

  if (screen === 'size') {
    return <HouseholdSize language={language}
      onBack={() => setScreen('housing')}
      onNext={(size) => { setHouseholdSize(size === '8+' ? 8 : size); setScreen('income'); }} />;
  }

  if (screen === 'income') {
    return <HouseholdIncome language={language}
      onBack={() => setScreen('size')}
      onNext={(income) => { setHouseholdIncome(income); setScreen('budget'); }} />;
  }

  if (screen === 'budget') {
    return <Budget language={language}
      onBack={() => setScreen('income')}
      onNext={(budget) => { setBudget(budget); setScreen('loading'); }} />;
  }

  if (screen === 'loading') {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative',
        backgroundImage: 'url(/earth2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Poppins, sans-serif',
        padding: '24px',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backdropFilter: 'blur(16px)',
          background: 'rgba(0,20,10,0.6)',
          zIndex: 0,
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '40px', animation: 'gentleSpin 3s linear infinite' }}>
            <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.15)" strokeWidth="8" fill="none" />
              <circle cx="50" cy="50" r="42" stroke="#4CAF7D" strokeWidth="8" fill="none" strokeDasharray="80 184" strokeLinecap="round" strokeDashoffset="0" />
            </svg>
          </div>
          <p style={{
            color: 'white',
            fontSize: '24px',
            fontWeight: '500',
            maxWidth: '360px',
            lineHeight: '1.6',
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            fontFamily: 'Poppins, sans-serif',
          }}>
            {messages[loadingStep]}
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '40px', justifyContent: 'center' }}>
            {messages.map((_, index) => (
              <div key={index} style={{
                width: '10px', height: '10px', borderRadius: '50%',
                backgroundColor: index <= loadingStep ? '#4CAF7D' : 'rgba(255,255,255,0.3)',
                transition: 'background-color 0.4s ease',
              }} />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes gentleSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (screen === 'dashboard') {
    try {
      localStorage.setItem('mira_profile', JSON.stringify({
        language, zipCode, housingType, budget, householdSize, householdIncome,
      }));
    } catch {}
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
      minHeight: '100vh',
      direction: language === 'AR' ? 'rtl' : 'ltr',
      padding: '24px 0',
      boxSizing: 'border-box',
      position: 'relative',
      backgroundImage: 'url(/earth2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backdropFilter: 'blur(12px)',
        background: 'rgba(0,20,10,0.55)',
        zIndex: 0,
      }} />
      <div style={{
        width: '100%',
        maxWidth: '520px',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          width: '100%', height: '6px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '10px', marginBottom: '24px',
        }}>
          <div style={{ width: '17%', height: '100%', backgroundColor: '#4CAF7D', borderRadius: '10px' }}/>
        </div>

        <button onClick={onBack} style={{
          backgroundColor: 'transparent',
          color: 'rgba(255,255,255,0.7)',
          border: 'none',
          fontSize: '18px',
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
          fontSize: '28px',
          marginBottom: '12px',
          textAlign: 'center',
          textShadow: '0 1px 8px rgba(0,0,0,0.4)',
        }}>
          {current.question}
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: '16px',
          textAlign: 'center',
          marginBottom: '28px',
          lineHeight: '1.6',
        }}>
          {current.privacy}
        </p>

        <input
          type="tel"
          placeholder={current.placeholder}
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          maxLength={5}
          style={{
            width: '100%',
            padding: '18px',
            borderRadius: '12px',
            border: `2px solid ${zipCode.length === 5 ? '#4CAF7D' : 'rgba(255,255,255,0.25)'}`,
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

        <button
          disabled={zipCode.length !== 5}
          onClick={() => setScreen('housing')}
          style={{
            width: '100%',
            backgroundColor: zipCode.length === 5 ? '#2D7D52' : 'rgba(255,255,255,0.15)',
            color: zipCode.length === 5 ? 'white' : 'rgba(255,255,255,0.4)',
            border: 'none',
            padding: '18px',
            borderRadius: '30px',
            fontSize: '20px',
            marginTop: '32px',
            cursor: zipCode.length === 5 ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {current.next}
        </button>

        <button
          onClick={() => { setZipCode(''); setScreen('housing'); }}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            color: 'rgba(255,255,255,0.6)',
            border: 'none',
            padding: '16px',
            fontSize: '16px',
            textDecoration: 'underline',
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

export default Onboarding;