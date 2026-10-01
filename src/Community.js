import React, { useState } from 'react';
import NavBar from './NavBar';

function Community({ language, userZip, onTabChange }) {
  const [activeSection, setActiveSection] = useState('recycle');

  const recycleCategories = [
    { icon: '📱', title: 'Electronics', tips: 'Old phones, laptops, TVs and cables. Never throw in regular trash — they contain toxic materials.', earth911Material: 'Electronics' },
    { icon: '🔋', title: 'Batteries', tips: 'Car batteries, AA/AAA, lithium-ion. Many hardware stores accept them for free.', earth911Material: 'Batteries' },
    { icon: '🪟', title: 'Glass', tips: 'Bottles and jars are widely accepted. Window glass and mirrors usually require special drop-off.', earth911Material: 'Glass' },
    { icon: '📦', title: 'Cardboard', tips: 'Break down boxes and keep dry. Greasy pizza boxes go in compost, not recycling.', earth911Material: 'Cardboard' },
    { icon: '🥤', title: 'Plastic', tips: 'Check the number on the bottom. #1 and #2 are most widely accepted. Plastic bags need special drop-off.', earth911Material: 'Plastic Bags' },
    { icon: '💡', title: 'Light Bulbs', tips: 'LED and CFL bulbs need special recycling. Many hardware stores accept them.', earth911Material: 'Light Bulbs' },
    { icon: '🛋️', title: 'Furniture', tips: 'Donate usable furniture first. For broken items check local bulk pickup or Habitat for Humanity.', earth911Material: 'Furniture' },
    { icon: '👕', title: 'Clothing', tips: 'Donate wearable clothes. Worn out textiles can go to H&M, Patagonia or TerraCycle.', earth911Material: 'Clothing' },
    { icon: '🚗', title: 'Motor Oil', tips: 'Never pour down the drain. Most auto parts stores accept used motor oil for free.', earth911Material: 'Motor Oil' },
    { icon: '💊', title: 'Medications', tips: 'Never flush medications. Use DEA drug take-back programs or approved disposal bags.', earth911Material: 'Medications' },
  ];

  const content = {
    EN: {
      title: 'Community',
      subtitle: 'Recycle smarter and connect with what\'s coming.',
      recycle: '♻️ Recycle',
      comingSoon: '🔜 Coming Soon',
      recycleTitle: 'What can I recycle?',
      recycleSubtitle: 'Tap any category to find recycling locations near you.',
      findRecycling: '🗺️ Find Recycling Near You',
      findWater: '💧 Find Free Water Refill Stations',
      earth911Note: 'Opens Earth911 with your zip code pre-filled. Just hit Search to see results!',
      tapNote: 'Opens Tap — a worldwide map of free water refill stations.',
      comingSoonTitle: 'Neighbor-to-Neighbor Tool Sharing',
      comingSoonDesc: 'We\'re building a real community network — borrow and lend green tools with people near you, post free items, buy and sell sustainably, and connect with neighbors who share your values.',
      comingSoonFeatures: [
        '🔧 Browse tools available near you',
        '📦 Post your own tools to lend, sell or give away',
        '🎁 Find free items from neighbors',
        '🤝 Connect with your local green community',
        '🛡️ Safety tips built into every exchange',
      ],
      comingSoonCta: 'Want to know when this launches in your area?',
      comingSoonButton: 'Join the Community Waitlist',
      comingSoonNote: 'No spam. Just one email when community features are ready near you.',
    },
    ES: {
      title: 'Comunidad',
      subtitle: 'Recicla mejor y conéctate con lo que viene.',
      recycle: '♻️ Reciclar',
      comingSoon: '🔜 Próximamente',
      recycleTitle: '¿Qué puedo reciclar?',
      recycleSubtitle: 'Toca cualquier categoría para encontrar lugares de reciclaje cerca de ti.',
      findRecycling: '🗺️ Encuentra Reciclaje Cerca de Ti',
      findWater: '💧 Encuentra Estaciones de Agua Gratis',
      earth911Note: 'Abre Earth911 con tu código postal prellenado. ¡Solo presiona Buscar para ver resultados!',
      tapNote: 'Abre Tap — un mapa mundial de estaciones de agua gratuitas.',
      comingSoonTitle: 'Préstamo de Herramientas entre Vecinos',
      comingSoonDesc: 'Estamos construyendo una red comunitaria real — presta y toma prestado herramientas verdes con personas cerca de ti, publica artículos gratis, compra y vende de forma sostenible.',
      comingSoonFeatures: [
        '🔧 Explora herramientas disponibles cerca de ti',
        '📦 Publica tus propias herramientas para prestar, vender o regalar',
        '🎁 Encuentra artículos gratis de vecinos',
        '🤝 Conéctate con tu comunidad verde local',
        '🛡️ Consejos de seguridad integrados en cada intercambio',
      ],
      comingSoonCta: '¿Quieres saber cuándo se lanza en tu área?',
      comingSoonButton: 'Unirse a la Lista de Espera',
      comingSoonNote: 'Sin spam. Solo un correo cuando las funciones comunitarias estén listas cerca de ti.',
    },
  };

  const current = content[language] || content.EN;

  const handleEarth911 = (material) => {
    const zip = userZip || '';
    window.open(`https://search.earth911.com/?what=${encodeURIComponent(material)}&where=${zip}&radius=25`, '_blank');
  };

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  };

  const tabStyle = (active) => ({
    flex: 1,
    padding: '10px',
    backgroundColor: active ? '#4F8C6F' : 'transparent',
    color: active ? 'white' : '#A0A0A0',
    border: 'none',
    borderRadius: '12px',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: active ? 'bold' : 'normal',
    fontFamily: 'Poppins, sans-serif',
  });

  return (
    <>
      <div style={{
        backgroundColor: '#F0EBE3',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '24px',
        paddingBottom: '100px',
      }}>
        <div style={{ width: '100%', maxWidth: '900px' }}>

          <h1 style={{ color: '#4F8C6F', fontSize: '28px', marginBottom: '8px', marginTop: '16px' }}>
            {current.title}
          </h1>
          <p style={{ color: '#2C2C2C', fontSize: '14px', marginBottom: '24px' }}>
            {current.subtitle}
          </p>

          {/* Two-tab layout */}
          <div style={{
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '4px',
            marginBottom: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            gap: '4px',
          }}>
            <button
              onClick={() => setActiveSection('recycle')}
              style={tabStyle(activeSection === 'recycle')}
            >
              {current.recycle}
            </button>
            <button
              onClick={() => setActiveSection('comingSoon')}
              style={tabStyle(activeSection === 'comingSoon')}
            >
              {current.comingSoon}
            </button>
          </div>

          {/* Recycle Section */}
          {activeSection === 'recycle' && (
            <>
              <h2 style={{ color: '#2C2C2C', fontSize: '20px', marginBottom: '8px' }}>
                {current.recycleTitle}
              </h2>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
                {current.recycleSubtitle}
              </p>

              <div style={{ ...sectionStyle, textAlign: 'center' }}>
                <button
                  onClick={() => window.open(`https://search.earth911.com/?where=${userZip || ''}&radius=25`, '_blank')}
                  style={{
                    width: '100%', backgroundColor: '#4F8C6F', color: 'white', border: 'none',
                    padding: '16px', borderRadius: '16px', fontSize: '16px', fontWeight: '600',
                    cursor: 'pointer', marginBottom: '8px',
                  }}
                >
                  {current.findRecycling}
                </button>
                <p style={{ color: '#A0A0A0', fontSize: '12px', margin: 0 }}>{current.earth911Note}</p>
              </div>

              <div style={{ ...sectionStyle, textAlign: 'center' }}>
                <button
                  onClick={() => window.open('https://www.findtap.com', '_blank')}
                  style={{
                    width: '100%', backgroundColor: '#4F8C6F', color: 'white', border: 'none',
                    padding: '16px', borderRadius: '16px', fontSize: '16px', fontWeight: '600',
                    cursor: 'pointer', marginBottom: '8px',
                  }}
                >
                  {current.findWater}
                </button>
                <p style={{ color: '#A0A0A0', fontSize: '12px', margin: 0 }}>{current.tapNote}</p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '12px',
                marginTop: '8px',
              }}>
                {recycleCategories.map((cat, index) => (
                  <div
                    key={index}
                    onClick={() => handleEarth911(cat.earth911Material)}
                    style={{
                      backgroundColor: 'white', borderRadius: '16px', padding: '16px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)', cursor: 'pointer',
                      transition: 'all 0.2s ease', border: '2px solid transparent',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4F8C6F'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '28px' }}>{cat.icon}</span>
                      <h3 style={{ color: '#2C2C2C', fontSize: '15px', margin: 0 }}>{cat.title}</h3>
                    </div>
                    <p style={{ color: '#666', fontSize: '13px', margin: '0 0 8px 0', lineHeight: '1.5' }}>
                      {cat.tips}
                    </p>
                    <span style={{ color: '#4F8C6F', fontSize: '12px', fontWeight: '600' }}>
                      Find locations →
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Coming Soon Section */}
          {activeSection === 'comingSoon' && (
            <>
              {/* Hero card */}
              <div style={{
                backgroundColor: '#EBF3EE',
                borderRadius: '20px',
                padding: '28px 24px',
                marginBottom: '16px',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '48px', margin: '0 0 16px 0' }}>🤝</p>
                <h2 style={{ color: '#2C2C2C', fontSize: '22px', margin: '0 0 12px 0', lineHeight: '1.3' }}>
                  {current.comingSoonTitle}
                </h2>
                <p style={{ color: '#666', fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
                  {current.comingSoonDesc}
                </p>
              </div>

              {/* Features list */}
              <div style={sectionStyle}>
                {current.comingSoonFeatures.map((feature, index) => (
                  <div key={index} style={{
                    padding: '12px 0',
                    borderBottom: index < current.comingSoonFeatures.length - 1 ? '1px solid #F0EBE3' : 'none',
                    fontSize: '14px',
                    color: '#2C2C2C',
                    lineHeight: '1.5',
                  }}>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Waitlist CTA */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                textAlign: 'center',
              }}>
                <p style={{ color: '#2C2C2C', fontSize: '16px', fontWeight: '500', margin: '0 0 20px 0' }}>
                  {current.comingSoonCta}
                </p>
                <button
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe5IYBG4qe9mNX-ga-ZT7feyLilymFWtUAGxtYhoEvXd8KtFA/viewform', '_blank')}
                  style={{
                    width: '100%',
                    backgroundColor: '#D4956A',
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '30px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(212, 149, 106, 0.4)',
                    marginBottom: '12px',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {current.comingSoonButton}
                </button>
                <p style={{ color: '#A0A0A0', fontSize: '13px', margin: 0 }}>
                  {current.comingSoonNote}
                </p>
              </div>
            </>
          )}

        </div>
      </div>
      <NavBar activeTab="community" onTabChange={onTabChange} language={language} />
    </>
  );
}

export default Community;