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
    ES: { home: 'Inicio', shop: 'Tienda', community: 'Comunidad', goFurther: 'Más Lejos', profile: 'Perfil' },
    ZH: { home: '首页', shop: '商店', community: '社区', goFurther: '更进一步', profile: '个人' },
    AR: { home: 'الرئيسية', shop: 'المتجر', community: 'المجتمع', goFurther: 'أبعد', profile: 'الملف' },
    FR: { home: 'Accueil', shop: 'Boutique', community: 'Communauté', goFurther: 'Plus Loin', profile: 'Profil' },
    PT: { home: 'Início', shop: 'Loja', community: 'Comunidade', goFurther: 'Mais Longe', profile: 'Perfil' },
    KO: { home: '홈', shop: '쇼핑', community: '커뮤니티', goFurther: '더보기', profile: '프로필' },
    VI: { home: 'Trang chủ', shop: 'Cửa hàng', community: 'Cộng đồng', goFurther: 'Xa hơn', profile: 'Hồ sơ' },
    TL: { home: 'Tahanan', shop: 'Tindahan', community: 'Komunidad', goFurther: 'Higit Pa', profile: 'Profil' },
    RU: { home: 'Главная', shop: 'Магазин', community: 'Сообщество', goFurther: 'Дальше', profile: 'Профиль' },
    HT: { home: 'Akèy', shop: 'Boutik', community: 'Kominote', goFurther: 'Pi Lwen', profile: 'Pwofil' },
  };

  const current = labels[language] || labels.EN;

  const icons = {
    home: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
    shop: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    community: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4"/>
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
        <path d="M21 21v-2a4 4 0 00-3-3.87"/>
      </svg>
    ),
    goFurther: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    profile: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  };

  const isVisible = !transparentAtTop || scrolled || hovered;

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
      }}>
        {Object.entries(icons).map(([id, icon]) => {
          const label = current[id];
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 10px',
                borderRadius: '14px',
                transition: 'all 0.2s ease',
                flex: 1,
                color: isActive ? 'white' : 'rgba(255,255,255,0.6)',
              }}
            >
              {icon}
              <span style={{
                fontSize: '12px',
                fontWeight: isActive ? '600' : '400',
                fontFamily: 'Poppins, sans-serif',
                whiteSpace: 'nowrap',
                letterSpacing: '0.2px',
              }}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;