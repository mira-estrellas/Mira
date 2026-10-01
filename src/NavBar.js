import React, { useState, useEffect } from 'react';

function NavBar({ activeTab, onTabChange, language, transparentAtTop = false, fixed = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const labels = {
    EN: { home: 'Home', shop: 'Shop', community: 'Community', goFurther: 'Go Further', profile: 'Profile' },
    ES: { home: 'Inicio', shop: 'Tienda', community: 'Comunidad', goFurther: 'Ir Más Lejos', profile: 'Perfil' },
    ZH: { home: '首页', shop: '商店', community: '社区', goFurther: '更进一步', profile: '个人' },
    AR: { home: 'الرئيسية', shop: 'المتجر', community: 'المجتمع', goFurther: 'اذهب أبعد', profile: 'الملف' },
    FR: { home: 'Accueil', shop: 'Boutique', community: 'Communauté', goFurther: 'Aller Plus Loin', profile: 'Profil' },
    PT: { home: 'Início', shop: 'Loja', community: 'Comunidade', goFurther: 'Ir Mais Longe', profile: 'Perfil' },
    KO: { home: '홈', shop: '쇼핑', community: '커뮤니티', goFurther: '더 나아가기', profile: '프로필' },
    VI: { home: 'Trang chủ', shop: 'Cửa hàng', community: 'Cộng đồng', goFurther: 'Tiến xa hơn', profile: 'Hồ sơ' },
    TL: { home: 'Tahanan', shop: 'Tindahan', community: 'Komunidad', goFurther: 'Sumulong Pa', profile: 'Profil' },
    RU: { home: 'Главная', shop: 'Магазин', community: 'Сообщество', goFurther: 'Идти дальше', profile: 'Профиль' },
    HT: { home: 'Akèy', shop: 'Boutik', community: 'Kominote', goFurther: 'Ale Pi Lwen', profile: 'Pwofil' },
  };

  const current = labels[language] || labels.EN;

  const tabs = [
    { id: 'home', icon: '🏠', label: current.home },
    { id: 'shop', icon: '🛍️', label: current.shop },
    { id: 'community', icon: '🤝', label: current.community },
    { id: 'goFurther', icon: '💚', label: current.goFurther },
    { id: 'profile', icon: '👤', label: current.profile },
  ];

  const isVisible = scrolled || hovered;

  return (
    <nav
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: fixed ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: fixed ? (isVisible ? '#1B5E3B' : 'transparent') : '#1B5E3B',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: fixed ? (isVisible ? '0 2px 20px rgba(0,0,0,0.2)' : 'none') : '0 2px 20px rgba(0,0,0,0.15)',
        padding: '0 16px',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '10px 0',
        gap: '4px',
        overflowX: 'auto',
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px',
              backgroundColor: activeTab === tab.id
                ? 'rgba(255,255,255,0.15)'
                : 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '12px',
              transition: 'all 0.2s ease',
              flex: 1,
              minWidth: '60px',
            }}
          >
            <span style={{ fontSize: '18px' }}>{tab.icon}</span>
            <span style={{
              fontSize: '10px',
              color: activeTab === tab.id
                ? 'white'
                : 'rgba(255,255,255,0.65)',
              fontWeight: activeTab === tab.id ? '600' : '400',
              fontFamily: 'Poppins, sans-serif',
              whiteSpace: 'nowrap',
            }}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;