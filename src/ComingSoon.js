import React, { useState, useEffect } from 'react';

function ComingSoon({ language, onBack }) {
  const [visible, setVisible] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollHint(false);
      } else {
        setShowScrollHint(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const content = {
    EN: {
      back: '← Back',
      badge: '🌱 Coming Soon',
      title: 'Mira is almost ready.',
      description: 'We\'re building something that will show you exactly how to make your home cleaner, more affordable, and better for the planet. Personalized to where you live.',
      listTitle: 'Here\'s what\'s coming:',
      features: [
        '📍 Real-time incentives and rebates personalized to your zip code',
        '💰 Affordable clean energy swaps matched to your budget',
        '🌍 See exactly how much impact your choices make',
        '🤝 Borrow and lend green tools with your neighbors',
        '🛍️ Shop curated clean energy products from trusted sellers',
      ],
      cta: 'Be the first to know when we launch.',
      button: 'Join the Waitlist',
      note: 'No spam. Ever. Just one email when Mira is ready for you.',
      scrollHint: '↓ Scroll to see what\'s coming',
    },
    ES: {
      back: '← Atrás',
      badge: '🌱 Próximamente',
      title: 'Mira casi está lista.',
      description: 'Estamos construyendo algo que te mostrará exactamente cómo hacer tu hogar más limpio, más asequible y mejor para el planeta — personalizado a donde vives.',
      listTitle: 'Esto es lo que viene:',
      features: [
        '📍 Incentivos y reembolsos en tiempo real personalizados a tu código postal',
        '💰 Cambios de energía limpia asequibles adaptados a tu presupuesto',
        '🌍 Ve exactamente cuánto impacto tienen tus elecciones',
        '🤝 Presta y toma prestado herramientas verdes con tus vecinos',
        '🛍️ Compra productos de energía limpia de vendedores de confianza',
      ],
      cta: 'Sé el primero en saber cuando lancemos.',
      button: 'Unirse a la Lista de Espera',
      note: 'Sin spam. Nunca. Solo un correo cuando Mira esté lista para ti.',
      scrollHint: '↓ Desplázate para ver lo que viene',
    },
    ZH: {
      back: '← 返回',
      badge: '🌱 即将推出',
      title: 'Mira 即将就绪。',
      description: '我们正在构建一个平台，将向您展示如何让您的家更清洁、更实惠、对地球更有益——根据您所在的位置个性化定制。',
      listTitle: '即将推出的功能：',
      features: [
        '📍 根据您的邮政编码个性化的实时激励和返利',
        '💰 根据您的预算匹配的经济实惠清洁能源替换方案',
        '🌍 了解您的选择能带来多大影响',
        '🤝 与邻居借用和共享绿色工具',
        '🛍️ 从可信赖的卖家购买精选清洁能源产品',
      ],
      cta: '成为第一个知道我们上线的人。',
      button: '加入候补名单',
      note: '绝不发垃圾邮件。Mira 准备好后只发一封邮件。',
      scrollHint: '↓ 向下滚动查看即将推出的内容',
    },
    AR: {
      back: 'رجوع →',
      badge: '🌱 قريباً',
      title: '.Mira على وشك الاكتمال',
      description: 'نبني شيئاً سيُظهر لك بالضبط كيف تجعل منزلك أنظف وأكثر بأسعار معقولة وأفضل للكوكب — مخصص لمكان إقامتك.',
      listTitle: 'إليك ما هو قادم:',
      features: [
        '📍 حوافز ومكافآت في الوقت الفعلي مخصصة لرمزك البريدي',
        '💰 بدائل طاقة نظيفة بأسعار معقولة تتناسب مع ميزانيتك',
        '🌍 اعرف بالضبط مقدار التأثير الذي تحدثه خياراتك',
        '🤝 استعر وأقرض الأدوات الخضراء مع جيرانك',
        '🛍️ تسوق منتجات الطاقة النظيفة من بائعين موثوقين',
      ],
      cta: '.كن أول من يعلم عند إطلاقنا',
      button: 'انضم إلى قائمة الانتظار',
      note: '.لا رسائل مزعجة أبداً. فقط رسالة واحدة عندما يكون Mira جاهزاً لك',
      scrollHint: '↓ مرر لأسفل لرؤية ما هو قادم',
    },
    FR: {
      back: '← Retour',
      badge: '🌱 Bientôt disponible',
      title: 'Mira est presque prête.',
      description: 'Nous construisons quelque chose qui vous montrera exactement comment rendre votre maison plus propre, plus abordable et meilleure pour la planète — personnalisé selon votre lieu de résidence.',
      listTitle: 'Voici ce qui arrive :',
      features: [
        '📍 Incitations et remboursements en temps réel personnalisés selon votre code postal',
        '💰 Échanges d\'énergie propre abordables adaptés à votre budget',
        '🌍 Voyez exactement l\'impact de vos choix',
        '🤝 Empruntez et prêtez des outils verts avec vos voisins',
        '🛍️ Achetez des produits d\'énergie propre auprès de vendeurs de confiance',
      ],
      cta: 'Soyez le premier à savoir quand nous lançons.',
      button: 'Rejoindre la liste d\'attente',
      note: 'Pas de spam. Jamais. Juste un email quand Mira est prête pour vous.',
      scrollHint: '↓ Faites défiler pour voir ce qui arrive',
    },
    PT: {
      back: '← Voltar',
      badge: '🌱 Em breve',
      title: 'Mira está quase pronta.',
      description: 'Estamos construindo algo que mostrará exatamente como tornar sua casa mais limpa, mais acessível e melhor para o planeta — personalizado para onde você mora.',
      listTitle: 'Veja o que está chegando:',
      features: [
        '📍 Incentivos e reembolsos em tempo real personalizados para o seu CEP',
        '💰 Trocas de energia limpa acessíveis combinadas ao seu orçamento',
        '🌍 Veja exatamente o impacto que suas escolhas causam',
        '🤝 Empreste e pegue ferramentas verdes emprestadas com seus vizinhos',
        '🛍️ Compre produtos de energia limpa de vendedores confiáveis',
      ],
      cta: 'Seja o primeiro a saber quando lançarmos.',
      button: 'Entrar na lista de espera',
      note: 'Sem spam. Nunca. Apenas um e-mail quando o Mira estiver pronto para você.',
      scrollHint: '↓ Role para ver o que está chegando',
    },
    KO: {
      back: '← 뒤로',
      badge: '🌱 곧 출시',
      title: 'Mira가 거의 준비되었습니다.',
      description: '우리는 당신이 사는 곳에 맞춰 집을 더 깨끗하고, 더 저렴하고, 지구에 더 좋게 만드는 방법을 정확히 보여줄 무언가를 만들고 있습니다.',
      listTitle: '출시 예정 기능:',
      features: [
        '📍 우편번호에 맞춘 실시간 인센티브 및 리베이트',
        '💰 예산에 맞는 저렴한 친환경 에너지 교체',
        '🌍 당신의 선택이 얼마나 큰 영향을 미치는지 확인',
        '🤝 이웃과 친환경 도구 빌리기 및 빌려주기',
        '🛍️ 신뢰할 수 있는 판매자의 친환경 에너지 제품 쇼핑',
      ],
      cta: '출시 소식을 가장 먼저 받아보세요.',
      button: '대기자 명단 참여',
      note: '스팸 없음. Mira 준비 완료 시 이메일 한 통만 보냅니다.',
      scrollHint: '↓ 스크롤하여 출시 예정 내용 확인',
    },
    VI: {
      back: '← Quay lại',
      badge: '🌱 Sắp ra mắt',
      title: 'Mira gần sẵn sàng rồi.',
      description: 'Chúng tôi đang xây dựng thứ gì đó sẽ chỉ cho bạn chính xác cách làm cho ngôi nhà của bạn sạch hơn, tiết kiệm hơn và tốt hơn cho hành tinh — được cá nhân hóa theo nơi bạn sống.',
      listTitle: 'Đây là những gì sắp ra mắt:',
      features: [
        '📍 Ưu đãi và hoàn tiền theo thời gian thực được cá nhân hóa theo mã zip của bạn',
        '💰 Các lựa chọn năng lượng sạch giá rẻ phù hợp với ngân sách của bạn',
        '🌍 Xem chính xác tác động mà các lựa chọn của bạn tạo ra',
        '🤝 Mượn và cho mượn công cụ xanh với hàng xóm',
        '🛍️ Mua sản phẩm năng lượng sạch từ người bán uy tín',
      ],
      cta: 'Hãy là người đầu tiên biết khi chúng tôi ra mắt.',
      button: 'Tham gia danh sách chờ',
      note: 'Không spam. Bao giờ. Chỉ một email khi Mira sẵn sàng cho bạn.',
      scrollHint: '↓ Cuộn xuống để xem những gì sắp ra mắt',
    },
    TL: {
      back: '← Bumalik',
      badge: '🌱 Paparating Na',
      title: 'Halos handa na ang Mira.',
      description: 'Nagtatayo kami ng isang bagay na magpapakita sa iyo kung paano gawing mas malinis, mas abot-kaya, at mas mabuti para sa planeta ang iyong tahanan — na naka-personalize sa iyong lokasyon.',
      listTitle: 'Narito ang darating:',
      features: [
        '📍 Mga real-time na insentibo at rebate na naka-personalize sa iyong zip code',
        '💰 Mga abot-kayang malinis na pagpapalit ng enerhiya na angkop sa iyong badyet',
        '🌍 Tingnan kung gaano kalaki ang epekto ng iyong mga pagpili',
        '🤝 Manghiram at magpahiram ng mga berdeng kagamitan sa iyong mga kapitbahay',
        '🛍️ Mamili ng mga produktong malinis na enerhiya mula sa mga pinagkakatiwalaang nagbebenta',
      ],
      cta: 'Maging una sa pagkaalam kapag naglunsad kami.',
      button: 'Sumali sa Waitlist',
      note: 'Walang spam. Kailanman. Isang email lang kapag handa na ang Mira para sa iyo.',
      scrollHint: '↓ Mag-scroll pababa para makita ang darating',
    },
    RU: {
      back: '← Назад',
      badge: '🌱 Скоро',
      title: 'Mira почти готова.',
      description: 'Мы создаём нечто, что покажет вам, как сделать ваш дом чище, доступнее и лучше для планеты — персонализировано для вашего местоположения.',
      listTitle: 'Вот что будет доступно:',
      features: [
        '📍 Льготы и скидки в реальном времени, персонализированные по вашему почтовому индексу',
        '💰 Доступные замены на чистую энергию, подобранные под ваш бюджет',
        '🌍 Узнайте, какой именно вклад вносят ваши выборы',
        '🤝 Берите и давайте в аренду зелёные инструменты соседям',
        '🛍️ Покупайте продукты чистой энергии у проверенных продавцов',
      ],
      cta: 'Будьте первыми, кто узнает о запуске.',
      button: 'Присоединиться к списку ожидания',
      note: 'Никакого спама. Никогда. Только одно письмо, когда Mira будет готова.',
      scrollHint: '↓ Прокрутите вниз, чтобы увидеть что будет',
    },
    HT: {
      back: '← Retounen',
      badge: '🌱 Byento',
      title: 'Mira prèske prè.',
      description: 'Nou ap bati yon bagay ki pral montre ou egzakteman kijan pou fè kay ou pi pwòp, pi abòdab, ak pi bon pou planèt la — pèsonalize pou kote ou rete.',
      listTitle: 'Men sa k ap vini:',
      features: [
        '📍 Ensentif ak ranbousman an tan reyèl pèsonalize pou kòd postal ou',
        '💰 Echanj enèji pwòp abòdab ki koresponn ak bidjè ou',
        '🌍 Wè egzakteman kantite enpak chwa ou yo fè',
        '🤝 Prete ak bay zouti vèt an prè ak vwazen ou yo',
        '🛍️ Achte pwodui enèji pwòp nan men vandè ki fè konfyans',
      ],
      cta: 'Swa premye a konnen lè nou lanse.',
      button: 'Rantre nan lis datant',
      note: 'Pa gen spam. Janm. Yon sèl imèl lè Mira prè pou ou.',
      scrollHint: '↓ Défile pou wè sa k ap vini',
    },
  };

  const current = content[language] || content.EN;

  return (
    <>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        direction: language === 'AR' ? 'rtl' : 'ltr',
      }}>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Back button */}
        <div style={{
          width: '100%',
          padding: '20px 24px',
          boxSizing: 'border-box',
          ...fadeIn(0),
        }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#4F8C6F',
              fontSize: '16px',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {current.back}
          </button>
        </div>

        {/* Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px 24px 60px',
          maxWidth: '680px',
          width: '100%',
        }}>

          {/* Coming Soon text */}
          <p style={{
            color: '#4F8C6F',
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '16px',
            ...fadeIn(0.2),
          }}>
            {current.badge}
          </p>

          {/* Title */}
          <h1 style={{
            color: '#2C2C2C',
            fontSize: '42px',
            fontWeight: '700',
            margin: '0 0 24px 0',
            lineHeight: '1.2',
            ...fadeIn(0.4),
          }}>
            {current.title}
          </h1>

          {/* Description */}
          <p style={{
            color: '#2C2C2C',
            fontSize: '16px',
            lineHeight: '1.8',
            marginBottom: '40px',
            fontWeight: '300',
            maxWidth: '560px',
            ...fadeIn(0.6),
          }}>
            {current.description}
          </p>

          {/* Features list */}
          <div style={{
            width: '100%',
            maxWidth: '520px',
            marginBottom: '48px',
            ...fadeIn(0.8),
          }}>
            <p style={{
              color: '#2C2C2C',
              fontSize: '15px',
              fontWeight: '500',
              marginBottom: '16px',
              textAlign: language === 'AR' ? 'right' : 'left',
            }}>
              {current.listTitle}
            </p>
            {current.features.map((feature, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '14px 16px',
                marginBottom: '8px',
                fontSize: '14px',
                color: '#2C2C2C',
                textAlign: language === 'AR' ? 'right' : 'left',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                lineHeight: '1.5',
              }}>
                {feature}
              </div>
            ))}
          </div>

          {/* CTA */}
          <p style={{
            color: '#2C2C2C',
            fontSize: '17px',
            fontWeight: '500',
            marginBottom: '24px',
            ...fadeIn(1.0),
          }}>
            {current.cta}
          </p>

          {/* Waitlist button */}
          <div style={fadeIn(1.2)}>
            <button
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeHsT7fVFGewZ2tnhQX1Cc9ZthQlcd5d9e-tjD10Z16MN_UdA/viewform', '_blank')}
              style={{
                backgroundColor: '#D4956A',
                color: 'white',
                padding: '18px 48px',
                borderRadius: '30px',
                fontSize: '18px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(212, 149, 106, 0.4)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {current.button}
            </button>
          </div>

          {/* No spam note */}
          <p style={{
            color: '#2C2C2C',
            fontSize: '15px',
            marginTop: '16px',
            ...fadeIn(1.4),
          }}>
            {current.note}
          </p>

        </div>
      </div>

      {/* Scroll hint */}
      {showScrollHint && (
        <div style={{
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(79, 140, 111, 0.9)',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '20px',
          fontSize: '16px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          zIndex: 999,
          animation: 'bounce 1.5s infinite',
        }}>
          {current.scrollHint}
        </div>
      )}
    </>
  );
}

export default ComingSoon;