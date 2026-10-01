import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from './Onboarding';
import ComingSoon from './ComingSoon';
import Dashboard from './Dashboard';
import ZeroWasteGuide from './ZeroWasteGuide';

const languages = {
  EN: {
    label: '🌐 English',
    button: 'See what\'s possible.',
    urgency: 'Our planet is warming faster than at any point in human history. But for the first time, everyday people have the tools to do something about it.',
    mission: 'The technology to fix our planet already exists.',
    missing: 'The missing piece is you.',
    stat: '140,000,000',
    statDesc: 'cars worth of emissions eliminated if every U.S. household made just one clean swap.',
    cta: 'Mira shows you exactly where to start.',
  },
  ES: {
    label: '🌐 Español',
    button: 'Ve lo que es posible.',
    urgency: 'Nuestro planeta se calienta más rápido que en cualquier otro momento de la historia. Pero por primera vez, las personas comunes tienen las herramientas para hacer algo al respecto.',
    mission: 'La tecnología para salvar nuestro planeta ya existe.',
    missing: 'La pieza que falta eres tú.',
    stat: '140,000,000',
    statDesc: 'autos equivalentes en emisiones eliminadas si cada hogar en EE.UU. hiciera solo un cambio limpio.',
    cta: 'Mira te muestra exactamente por dónde empezar.',
  },
  ZH: {
    label: '🌐 中文',
    button: '看见可能。',
    urgency: '我们的星球正在以人类历史上最快的速度变暖。但有史以来第一次，普通人拥有了改变这一切的工具。',
    mission: '拯救地球的技术已经存在。',
    missing: '缺少的那块拼图，就是你。',
    stat: '140,000,000',
    statDesc: '如果美国每个家庭只做一次清洁替换，可减少相当于这么多辆汽车的排放量。',
    cta: 'Mira 告诉你从哪里开始。',
  },
  AR: {
    label: '🌐 العربية',
    button: 'انظر ما هو ممكن.',
    urgency: 'يتسخن كوكبنا بشكل أسرع من أي وقت مضى في التاريخ. لكن لأول مرة، يمتلك الأفراد العاديون الأدوات للقيام بشيء حيال ذلك.',
    mission: 'التكنولوجيا اللازمة لإنقاذ كوكبنا موجودة بالفعل.',
    missing: 'القطعة المفقودة هي أنت.',
    stat: '140,000,000',
    statDesc: 'ما يعادل انبعاثات هذا العدد من السيارات يمكن إزالته إذا أجرى كل منزل أمريكي تغييراً نظيفاً واحداً.',
    cta: 'Mira تريك بالضبط من أين تبدأ.',
  },
  FR: {
    label: '🌐 Français',
    button: 'Voyez ce qui est possible.',
    urgency: 'Notre planète se réchauffe plus vite qu\'à aucun autre moment de l\'histoire. Mais pour la première fois, les gens ordinaires ont les outils pour agir.',
    mission: 'La technologie pour sauver notre planète existe déjà.',
    missing: 'La pièce manquante, c\'est vous.',
    stat: '140,000,000',
    statDesc: 'voitures en émissions éliminées si chaque foyer américain faisait un seul changement écologique.',
    cta: 'Mira vous montre exactement par où commencer.',
  },
  PT: {
    label: '🌐 Português',
    button: 'Veja o que é possível.',
    urgency: 'Nosso planeta está aquecendo mais rápido do que em qualquer ponto da história. Mas pela primeira vez, pessoas comuns têm as ferramentas para fazer algo a respeito.',
    mission: 'A tecnologia para salvar nosso planeta já existe.',
    missing: 'A peça que falta é você.',
    stat: '140,000,000',
    statDesc: 'carros em emissões eliminadas se cada residência americana fizesse apenas uma troca limpa.',
    cta: 'Mira mostra exatamente por onde começar.',
  },
  KO: {
    label: '🌐 한국어',
    button: '가능성을 보세요.',
    urgency: '우리 지구는 역사상 그 어느 때보다 빠르게 온난화되고 있습니다. 하지만 처음으로, 일반인들도 변화를 만들 수 있는 도구를 갖게 되었습니다.',
    mission: '지구를 살릴 기술은 이미 존재합니다.',
    missing: '부족한 한 조각은 바로 당신입니다.',
    stat: '140,000,000',
    statDesc: '미국의 모든 가정이 단 하나의 친환경 전환을 한다면 줄일 수 있는 자동차 배출량.',
    cta: 'Mira가 어디서 시작해야 할지 정확히 알려드립니다.',
  },
  VI: {
    label: '🌐 Tiếng Việt',
    button: 'Xem những gì có thể.',
    urgency: 'Hành tinh của chúng ta đang nóng lên nhanh hơn bất kỳ thời điểm nào trong lịch sử. Nhưng lần đầu tiên, người bình thường có công cụ để làm điều gì đó.',
    mission: 'Công nghệ để cứu hành tinh đã tồn tại.',
    missing: 'Mảnh ghép còn thiếu chính là bạn.',
    stat: '140,000,000',
    statDesc: 'lượng khí thải tương đương xe hơi có thể được loại bỏ nếu mỗi hộ gia đình Mỹ thực hiện một thay đổi xanh.',
    cta: 'Mira chỉ cho bạn chính xác nơi bắt đầu.',
  },
  TL: {
    label: '🌐 Tagalog',
    button: 'Tingnan ang posible.',
    urgency: 'Ang ating planeta ay nagpainit nang mas mabilis kaysa sa anumang punto sa kasaysayan. Ngunit sa unang pagkakataon, ang mga ordinaryong tao ay may mga kasangkapan upang gumawa ng pagbabago.',
    mission: 'Ang teknolohiya upang ayusin ang ating planeta ay mayroon na.',
    missing: 'Ang nawawalang piraso ay ikaw.',
    stat: '140,000,000',
    statDesc: 'sasakyan ang katumbas na emisyon na maaaring maalis kung bawat sambahayan sa U.S. ay gumawa ng isang malinis na pagpapalit.',
    cta: 'Ipinapakita ng Mira kung saan eksaktong magsisimula.',
  },
  RU: {
    label: '🌐 Русский',
    button: 'Увидьте возможное.',
    urgency: 'Наша планета нагревается быстрее, чем когда-либо в истории. Но впервые обычные люди получили инструменты, чтобы что-то изменить.',
    mission: 'Технологии для спасения планеты уже существуют.',
    missing: 'Недостающий элемент — это вы.',
    stat: '140,000,000',
    statDesc: 'автомобилей — столько выбросов можно устранить, если каждое домохозяйство в США сделает хотя бы одну экологичную замену.',
    cta: 'Mira покажет вам, с чего именно начать.',
  },
  HT: {
    label: '🌐 Kreyòl',
    button: 'Wè sa ki posib.',
    urgency: 'Planèt nou an ap chofe pi vit pase nenpòt lòt moman nan istwa. Men pou premye fwa, moun òdinè yo gen zouti pou fè yon bagay.',
    mission: 'Teknoloji pou repare planèt nou an egziste deja.',
    missing: 'Pati ki manke a se ou.',
    stat: '140,000,000',
    statDesc: 'machin ki ekivalan emisyon yo ka elimine si chak kay Ameriken fè yon sèl chanjman pwòp.',
    cta: 'Mira montre ou egzakteman kote pou kòmanse.',
  },
};

function LandingPage({ language, setLanguage, onGetStarted }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const current = languages[language];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Klee+One&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={{
        minHeight: '100vh',
        direction: language === 'AR' ? 'rtl' : 'ltr',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        position: 'relative',
        backgroundImage: 'url(/skyforest.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>

        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,20,10,0.65) 50%, rgba(0,0,0,0.7) 100%)',
          zIndex: 0,
        }} />

        {/* Language Selector */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: language === 'AR' ? 'flex-start' : 'flex-end',
          padding: '20px 24px',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1,
          ...fadeIn(0),
        }}>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.4)',
              backgroundColor: 'rgba(0,0,0,0.3)',
              color: 'white',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
              backdropFilter: 'blur(8px)',
            }}
          >
            {Object.entries(languages).map(([code, lang]) => (
              <option key={code} value={code} style={{ backgroundColor: '#1B5E3B', color: 'white' }}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        {/* Hero Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '20px 24px 60px',
          maxWidth: '860px',
          flex: 1,
          position: 'relative',
          zIndex: 1,
        }}>

          <h1 style={{
            color: 'white',
            fontSize: '88px',
            margin: '0 0 30px 0',
            fontFamily: 'Klee One, sans-serif',
            fontWeight: '700',
            letterSpacing: '-1px',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
            ...fadeIn(0.2),
          }}>
            Mira
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '18px',
            lineHeight: '1.9',
            marginBottom: '24px',
            maxWidth: '700px',
            fontWeight: '400',
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            ...fadeIn(0.6),
          }}>
            {current.urgency.split('. ').map((sentence, index, arr) => (
              <span key={index}>
                {sentence}{index < arr.length - 1 ? '.' : ''}
                {index < arr.length - 1 && <><br /><br /></>}
              </span>
            ))}
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '10px',
            fontWeight: '500',
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            ...fadeIn(0.8),
          }}>
            {current.mission}
          </p>

          <p style={{
            color: '#7CDB9E',
            fontSize: '26px',
            fontWeight: '650',
            marginBottom: '36px',
            letterSpacing: '-0.5px',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            ...fadeIn(1.0),
          }}>
            {current.missing}
          </p>

          <p style={{
            color: 'white',
            fontSize: '64px',
            fontWeight: '700',
            margin: '0 0 8px 0',
            letterSpacing: '-2px',
            lineHeight: '1',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
            ...fadeIn(1.2),
          }}>
            {current.stat}
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '18px',
            marginBottom: '24px',
            maxWidth: '580px',
            lineHeight: '1.6',
            fontWeight: '400',
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            ...fadeIn(1.4),
          }}>
            {language === 'EN'
              ? <>cars worth of emissions eliminated if every U.S. household made just <span style={{ textDecoration: 'underline', color: '#7CDB9E' }}>one</span> clean swap.</>
              : current.statDesc
            }
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '18px',
            marginBottom: '32px',
            fontWeight: '400',
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            ...fadeIn(1.6),
          }}>
            {current.cta}
          </p>

          <div style={fadeIn(1.8)}>
            <button
              onClick={onGetStarted}
              style={{
                backgroundColor: '#2D7D52',
                color: 'white',
                border: 'none',
                padding: '18px 56px',
                borderRadius: '30px',
                fontSize: '18px',
                cursor: 'pointer',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '500',
                letterSpacing: '0.5px',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = '#1B5E3B';
                e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.backgroundColor = '#2D7D52';
                e.target.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
              }}
            >
              {current.button}
            </button>
          </div>

          {/* Photo credit */}
          <p style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '11px',
            marginTop: '40px',
            ...fadeIn(2.0),
          }}>
            Photo by Sveta Moisseyeva on Pexels
          </p>

        </div>
      </div>
    </>
  );
}

function AppContent() {
  const [language, setLanguage] = useState('EN');
  const [screen, setScreen] = useState('landing');
  const [savedProfile, setSavedProfile] = useState(null);
  const [, setTransitioning] = useState(false);
  const [visible, setVisible] = useState(true);
  const isPreview = new URLSearchParams(window.location.search).get('preview') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  const transitionTo = (newScreen) => {
    setVisible(false);
    setTimeout(() => {
      setScreen(newScreen);
      setTimeout(() => setVisible(true), 50);
    }, 600);
  };

  useEffect(() => {
    try {
      const profile = localStorage.getItem('mira_profile');
      if (profile) {
        setSavedProfile(JSON.parse(profile));
      }
    } catch {
      console.log('localStorage not available');
    }
  }, []);

  const handleGetStarted = () => {
    if (process.env.NODE_ENV === 'development' || isPreview) {
      transitionTo('onboarding');
    } else {
      transitionTo('comingSoon');
    }
  };

  if (screen === 'comingSoon') {
    return (
      <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <ComingSoon language={language} onBack={() => transitionTo('landing')} />
      </div>
    );
  }

  if (screen === 'onboarding') {
    return (
      <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Onboarding language={language} onBack={() => transitionTo('landing')} />
      </div>
    );
  }

  if (screen === 'landing' && savedProfile && (process.env.NODE_ENV === 'development' || isPreview)) {
    return (
      <Dashboard
        language={savedProfile.language || language}
        zipCode={savedProfile.zipCode}
        housingType={savedProfile.housingType}
        budget={savedProfile.budget}
        householdSize={savedProfile.householdSize}
        householdIncome={savedProfile.householdIncome}
      />
    );
  }

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
      <LandingPage
        language={language}
        setLanguage={setLanguage}
        onGetStarted={handleGetStarted}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/guide" element={<ZeroWasteGuide />} />
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;