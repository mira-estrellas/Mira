import React from 'react';

function NavBar({ activeTab, onTabChange, language }) {

  const labels = {
    EN: { home: 'Home', shop: 'Shop', community: 'Community', profile: 'Profile' },
    ES: { home: 'Inicio', shop: 'Tienda', community: 'Comunidad', profile: 'Perfil' },
    ZH: { home: '主页', shop: '商店', community: '社区', profile: '我的' },
    AR: { home: 'الرئيسية', shop: 'المتجر', community: 'المجتمع', profile: 'ملفي' },
    FR: { home: 'Accueil', shop: 'Boutique', community: 'Communauté', profile: 'Profil' },
    PT: { home: 'Início', shop: 'Loja', community: 'Comunidade', profile: 'Perfil' },
    KO: { home: '홈', shop: '쇼핑', community: '커뮤니티', profile: '프로필' },
    VI: { home: 'Trang chủ', shop: 'Cửa hàng', community: 'Cộng đồng', profile: 'Hồ sơ' },
    TL: { home: 'Home', shop: 'Tindahan', community: 'Komunidad', profile: 'Profile' },
    RU: { home: 'Главная', shop: 'Магазин', community: 'Сообщество', profile: 'Профиль' },
    HT: { home: 'Akèy', shop: 'Boutik', community: 'Kominote', profile: 'Pwofil' },
  };

  const current = labels[language] || labels.EN;

  const tabs = [
    { key: 'home', icon: '🏠', label: current.home },
    { key: 'shop', icon: '🛍️', label: current.shop },
    { key: 'community', icon: '🤝', label: current.community },
    { key: 'profile', icon: '👤', label: current.profile },
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderTop: '1px solid #E8E0D5',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '8px 0 16px 0',
      zIndex: 1000,
      boxShadow: '0 -2px 12px rgba(0,0,0,0.06)',
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 16px',
            borderRadius: '12px',
            transition: 'all 0.2s ease',
          }}
        >
          <span style={{ fontSize: '22px' }}>{tab.icon}</span>
          <span style={{
            fontSize: '11px',
            color: activeTab === tab.key ? '#4F8C6F' : '#A0A0A0',
            fontWeight: activeTab === tab.key ? 'bold' : 'normal',
          }}>
            {tab.label}
          </span>
          {activeTab === tab.key && (
            <div style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: '#4F8C6F',
            }}/>
          )}
        </button>
      ))}
    </div>
  );
}

export default NavBar;