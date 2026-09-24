import React, { useState, useEffect } from 'react';
import Onboarding from './Onboarding';
import ComingSoon from './ComingSoon';

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

function App() {
  const [language, setLanguage] = useState('EN');
  const [screen, setScreen] = useState('landing');
  const [visible, setVisible] = useState(false);
  const current = languages[language];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  if (screen === 'onboarding') {
    return <ComingSoon language={language} onBack={() => setScreen('landing')} />;
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Klee+One&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#FAF7F2',
        direction: language === 'AR' ? 'rtl' : 'ltr',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}>

        {/* Language Selector */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: language === 'AR' ? 'flex-start' : 'flex-end',
          padding: '20px 24px',
          boxSizing: 'border-box',
          ...fadeIn(0),
        }}>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '20px',
              border: '1px solid #4F8C6F',
              backgroundColor: '#FAF7F2',
              color: '#2C2C2C',
              fontSize: '16px',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {Object.entries(languages).map(([code, lang]) => (
              <option key={code} value={code}>{lang.label}</option>
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
          padding: '20px 24px 50px',
          maxWidth: '860px',
          flex: 1,
        }}>

          {/* Mira */}
          <h1 style={{
            color: '#2D6A4F',
            fontSize: '80px',
            margin: '0 0 30px 0',
            fontFamily: 'Klee One, sans-serif',
            fontWeight: '700',
            letterSpacing: '-1px',
            ...fadeIn(0.2),
          }}>
            Mira
          </h1>

          {/* Urgency */}
          <p style={{
            color: '#2C2C2C',
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '24px',
            maxWidth: '700px',
            fontWeight: '400',
            ...fadeIn(0.6),
          }}>
            {current.urgency.split('. ').map((sentence, index, arr) => (
              <span key={index}>
                {sentence}{index < arr.length - 1 ? '.' : ''}
                {index < arr.length - 1 && <><br /><br /></>}
              </span>
            ))}
          </p>

          {/* Mission */}
          <p style={{
            color: '#2C2C2C',
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '10px',
            fontWeight: '500',
            ...fadeIn(0.8),
          }}>
            {current.mission}
          </p>

          {/* Missing piece */}
          <p style={{
            color: '#4F8C6F',
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '32px',
            letterSpacing: '-0.5px',
            textDecoration: 'underline',
            ...fadeIn(1.0),
          }}>
            {current.missing}
          </p>

          {/* Stat number */}
          <p style={{
            color: '#2C2C2C',
            fontSize: '60px',
            fontWeight: '700',
            margin: '0 0 8px 0',
            letterSpacing: '-2px',
            lineHeight: '1',
            ...fadeIn(1.2),
          }}>
            {current.stat}
          </p>

          {/* Stat description */}
          <p style={{
            color: '#2C2C2C',
            fontSize: '18px',
            marginBottom: '24px',
            maxWidth: '580px',
            lineHeight: '1.6',
            fontWeight: '400',
            ...fadeIn(1.4),
          }}>
            {language === 'EN'
              ? <>cars worth of emissions eliminated if every U.S. household made just <span style={{ textDecoration: 'underline', color: '#4F8C6F' }}>one</span> clean swap.</>
              : current.statDesc
            }
          </p>

          {/* CTA text */}
          <p style={{
            color: '#2C2C2C',
            fontSize: '18px',
            marginBottom: '28px',
            fontWeight: '400',
            ...fadeIn(1.6),
          }}>
            {current.cta}
          </p>

          {/* Button */}
          <div style={fadeIn(1.8)}>
            <button
              onClick={() => setScreen('onboarding')}
              style={{
                backgroundColor: '#D4956A',
                color: 'white',
                border: 'none',
                padding: '18px 56px',
                borderRadius: '30px',
                fontSize: '18px',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(212, 149, 106, 0.4)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '500',
                letterSpacing: '0.5px',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 24px rgba(212, 149, 106, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(212, 149, 106, 0.4)';
              }}
            >
              {current.button}
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;