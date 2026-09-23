import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Placeholder from './Placeholder';
import Profile from './Profile';

function Dashboard({ language, zipCode, housingType, budget }) {
  const [isWide, setIsWide] = useState(window.innerWidth > 600);
  const [activeTab, setActiveTab] = useState('home');
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [currentZip, setCurrentZip] = useState(zipCode);
  const [currentHousing, setCurrentHousing] = useState(housingType);
  const [currentBudget, setCurrentBudget] = useState(budget);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  const content = {
    EN: {
      greeting: 'Here\'s your personalized plan',
      subtitle: 'Based on your location and budget, here\'s what\'s available to you.',
      incentives: 'Incentives & Rebates',
      swaps: 'Affordable Clean Swaps',
      impact: 'Your Potential Impact',
      scrollHint: '↓ Scroll to see all your options',
      incentiveItems: [
        { title: 'Federal Solar Tax Credit', description: 'Get 30% back on solar panel installation costs.', amount: 'Up to $7,500' },
        { title: 'Heat Pump Rebate', description: 'Federal rebate for switching to an electric heat pump.', amount: 'Up to $2,000' },
        { title: 'EV Tax Credit', description: 'Credit for purchasing a new electric vehicle.', amount: 'Up to $7,500' },
      ],
      swapItems: housingType === 'rent' ? [
        { title: '💡 LED Bulbs', description: 'Simple swap, immediate savings on your electric bill.', cost: '~$15' },
        { title: '🌡️ Smart Power Strips', description: 'Eliminate phantom energy drain from electronics.', cost: '~$25' },
        { title: '🚿 Low-Flow Showerhead', description: 'Reduce water and water heating costs.', cost: '~$30' },
        { title: '🪟 Window Insulation Kit', description: 'Keep heat in during winter, reduce heating costs.', cost: '~$20' },
      ] : [
        { title: '🌡️ Smart Thermostat', description: 'Automatically optimizes heating and cooling.', cost: '~$130' },
        { title: '💧 Heat Pump Water Heater', description: 'Uses 70% less energy than traditional water heaters.', cost: '~$500 after rebates' },
        { title: '☀️ Solar Panels', description: 'Generate your own clean electricity.', cost: 'From $0 with financing' },
        { title: '🚗 EV Charger', description: 'Home charging station for electric vehicles.', cost: '~$400 after rebates' },
      ],
      impactStats: [
        { stat: '4.2 tons', description: 'of CO₂ saved per year with clean swaps' },
        { stat: '$1,400', description: 'average annual energy savings' },
        { stat: '🌳 210', description: 'trees worth of carbon absorbed' },
      ],
    },
    ES: {
      greeting: 'Aquí está tu plan personalizado',
      subtitle: 'Basado en tu ubicación y presupuesto, esto es lo que está disponible para ti.',
      incentives: 'Incentivos y Reembolsos',
      swaps: 'Cambios Limpios Asequibles',
      impact: 'Tu Impacto Potencial',
      scrollHint: '↓ Desplázate para ver todas tus opciones',
      incentiveItems: [
        { title: 'Crédito Federal Solar', description: 'Obtén el 30% de vuelta en costos de instalación solar.', amount: 'Hasta $7,500' },
        { title: 'Reembolso de Bomba de Calor', description: 'Reembolso federal por cambiar a una bomba de calor eléctrica.', amount: 'Hasta $2,000' },
        { title: 'Crédito Fiscal para VE', description: 'Crédito por comprar un vehículo eléctrico nuevo.', amount: 'Hasta $7,500' },
      ],
      swapItems: housingType === 'rent' ? [
        { title: '💡 Bombillas LED', description: 'Cambio simple, ahorros inmediatos en tu factura eléctrica.', cost: '~$15' },
        { title: '🌡️ Regletas Inteligentes', description: 'Elimina el consumo fantasma de electrónicos.', cost: '~$25' },
        { title: '🚿 Cabezal de Ducha de Bajo Flujo', description: 'Reduce el agua y los costos de calentamiento de agua.', cost: '~$30' },
        { title: '🪟 Kit de Aislamiento de Ventanas', description: 'Mantén el calor en invierno, reduce costos de calefacción.', cost: '~$20' },
      ] : [
        { title: '🌡️ Termostato Inteligente', description: 'Optimiza automáticamente la calefacción y el enfriamiento.', cost: '~$130' },
        { title: '💧 Calentador de Agua con Bomba de Calor', description: 'Usa 70% menos energía que los calentadores tradicionales.', cost: '~$500 después de reembolsos' },
        { title: '☀️ Paneles Solares', description: 'Genera tu propia electricidad limpia.', cost: 'Desde $0 con financiamiento' },
        { title: '🚗 Cargador de VE', description: 'Estación de carga doméstica para vehículos eléctricos.', cost: '~$400 después de reembolsos' },
      ],
      impactStats: [
        { stat: '4.2 toneladas', description: 'de CO₂ ahorradas por año con cambios limpios' },
        { stat: '$1,400', description: 'ahorros promedio anuales de energía' },
        { stat: '🌳 210', description: 'árboles equivalentes de carbono absorbido' },
      ],
    },
  };

  const current = content[language] || content.EN;

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isWide ? 'repeat(2, 1fr)' : '1fr',
    gap: '12px',
    marginBottom: '12px',
  };

  const impactGridStyle = {
    display: 'grid',
    gridTemplateColumns: isWide ? 'repeat(3, 1fr)' : '1fr',
    gap: '12px',
    marginBottom: '48px',
  };

  if (activeTab === 'shop') {
    return (
      <>
        <Placeholder icon="🛍️" title="Shop" description="Browse and buy clean energy products from trusted sellers. Coming soon!" />
        <NavBar activeTab={activeTab} onTabChange={setActiveTab} language={language} />
      </>
    );
  }

  if (activeTab === 'community') {
    return (
      <>
        <Placeholder icon="🤝" title="Community" description="Borrow and lend green tools with your neighbors. Coming soon!" />
        <NavBar activeTab={activeTab} onTabChange={setActiveTab} language={language} />
      </>
    );
  }

  if (activeTab === 'profile') {
    return (
      <Profile
        language={language}
        zipCode={currentZip}
        housingType={currentHousing}
        budget={currentBudget}
        onTabChange={setActiveTab}
        onUpdateProfile={({ zipCode, housingType, budget }) => {
          setCurrentZip(zipCode);
          setCurrentHousing(housingType);
          setCurrentBudget(budget);
          setActiveTab('home');
        }}
      />
    );
  }

  return (
    <>
      <div style={{
        backgroundColor: '#F0EBE3',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '24px',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '900px',
          paddingBottom: '80px',
        }}>

          <h1 style={{
            color: '#7A9E87',
            fontSize: '28px',
            marginBottom: '8px',
            marginTop: '16px',
          }}>
            {current.greeting}
          </h1>
          <p style={{
            color: '#2C2C2C',
            fontSize: '14px',
            marginBottom: '32px',
          }}>
            {current.subtitle}
          </p>

          <div style={{
            backgroundColor: '#EBF3EE',
            borderRadius: '16px',
            padding: '16px',
            marginBottom: '8px',
            fontSize: '13px',
            color: '#2C2C2C',
          }}>
            📍 Zip: {zipCode} &nbsp;|&nbsp; 🏠 {housingType === 'rent' ? 'Renter' : 'Homeowner'} &nbsp;|&nbsp; 💰 {budget ? `$${budget}/mo` : 'Budget flexible'}
          </div>

          <h2 style={{
            color: '#2C2C2C',
            fontSize: '18px',
            marginTop: '32px',
            marginBottom: '16px',
          }}>
            🎁 {current.incentives}
          </h2>

          <div style={gridStyle}>
            {current.incentiveItems.map((item, index) => (
              <div key={index} style={cardStyle}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '6px',
                }}>
                  <h3 style={{ color: '#2C2C2C', fontSize: '15px', margin: 0, flex: 1 }}>
                    {item.title}
                  </h3>
                  <span style={{
                    backgroundColor: '#EBF3EE',
                    color: '#7A9E87',
                    borderRadius: '20px',
                    padding: '4px 10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginLeft: '8px',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.amount}
                  </span>
                </div>
                <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <h2 style={{
            color: '#2C2C2C',
            fontSize: '18px',
            marginTop: '32px',
            marginBottom: '16px',
          }}>
            ♻️ {current.swaps}
          </h2>

          <div style={gridStyle}>
            {current.swapItems.map((item, index) => (
              <div key={index} style={cardStyle}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '6px',
                }}>
                  <h3 style={{ color: '#2C2C2C', fontSize: '15px', margin: 0, flex: 1 }}>
                    {item.title}
                  </h3>
                  <span style={{
                    backgroundColor: '#FDF0E8',
                    color: '#D4956A',
                    borderRadius: '20px',
                    padding: '4px 10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginLeft: '8px',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.cost}
                  </span>
                </div>
                <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <h2 style={{
            color: '#2C2C2C',
            fontSize: '18px',
            marginTop: '32px',
            marginBottom: '16px',
          }}>
            🌍 {current.impact}
          </h2>

          <div style={impactGridStyle}>
            {current.impactStats.map((item, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <span style={{
                  color: '#7A9E87',
                  fontSize: '26px',
                  fontWeight: 'bold',
                }}>
                  {item.stat}
                </span>
                <span style={{ color: '#666', fontSize: '13px' }}>
                  {item.description}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {showScrollHint && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          zIndex: 999,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(122, 158, 135, 0.9)',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '20px',
          fontSize: '16px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    animation: 'bounce 1.5s infinite',
        }}>
          {current.scrollHint}
        </div>
      )}

      <NavBar activeTab={activeTab} onTabChange={setActiveTab} language={language} />
    </>
  );
}

export default Dashboard;