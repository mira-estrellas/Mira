import React from 'react';

function NavBar({ activeTab, onTabChange, language }) {
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

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderTop: '1px solid #E8E0D5',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '8px 0 12px',
      zIndex: 1000,
      boxShadow: '0 -2px 12px rgba(0,0,0,0.06)',
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 8px',
            flex: 1,
          }}
        >
          <span style={{ fontSize: '20px' }}>{tab.icon}</span>
          <span style={{
            fontSize: '10px',
            color: activeTab === tab.id ? '#4F8C6F' : '#A0A0A0',
            fontWeight: activeTab === tab.id ? '600' : '400',
            fontFamily: 'Poppins, sans-serif',
          }}>
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

export default NavBar;