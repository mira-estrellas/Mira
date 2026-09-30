import React, { useState, useEffect } from 'react';
import { calculateImpact } from './impactCalculator';
import NavBar from './NavBar';
import Profile from './Profile';
import Community from './Community';
import Shop from './Shop';
import useIncentives from './useIncentives';
import CarbonTracker from './CarbonTracker';

function Dashboard({ language, zipCode, housingType, budget, householdSize, householdIncome }) {
  const [isWide, setIsWide] = useState(window.innerWidth > 600);
  const [activeTab, setActiveTab] = useState('home');
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [currentZip, setCurrentZip] = useState(zipCode);
  const [currentHousing, setCurrentHousing] = useState(housingType);
  const [currentBudget, setCurrentBudget] = useState(budget);
  const [currentSize, setCurrentSize] = useState(householdSize || 2);
  const [currentIncome, setCurrentIncome] = useState(householdIncome || 80000);
  const { incentives, loading, error } = useIncentives(currentZip, currentHousing, currentSize, currentIncome);
  const impactStats = calculateImpact(currentZip, currentHousing, currentSize, language);

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

  const budgetNum = parseFloat(currentBudget) || null;

  const allSwapItems = {
    renter: {
      EN: [
        { title: '💡 LED Bulbs', description: 'Simple swap, immediate savings on your electric bill.', cost: '~$15', costNum: 15 },
        { title: '🪟 Window Insulation Kit', description: 'Keep heat in during winter, reduce heating costs.', cost: '~$20', costNum: 20 },
        { title: '🌡️ Smart Power Strips', description: 'Eliminate phantom energy drain from electronics.', cost: '~$25', costNum: 25 },
        { title: '🚿 Low-Flow Showerhead', description: 'Reduce water and water heating costs.', cost: '~$30', costNum: 30 },
        { title: '🌡️ Smart Thermostat', description: 'Automatically optimizes heating and cooling.', cost: '~$130', costNum: 130 },
        { title: '⚡ Portable Solar Generator', description: 'Generate your own clean electricity anywhere. No installation needed.', cost: '~$200', costNum: 200 },
      ],
      ES: [
        { title: '💡 Bombillas LED', description: 'Cambio simple, ahorros inmediatos en tu factura eléctrica.', cost: '~$15', costNum: 15 },
        { title: '🪟 Kit de Aislamiento de Ventanas', description: 'Mantén el calor en invierno, reduce costos de calefacción.', cost: '~$20', costNum: 20 },
        { title: '🌡️ Regletas Inteligentes', description: 'Elimina el consumo fantasma de electrónicos.', cost: '~$25', costNum: 25 },
        { title: '🚿 Cabezal de Ducha de Bajo Flujo', description: 'Reduce el agua y los costos de calentamiento de agua.', cost: '~$30', costNum: 30 },
        { title: '🌡️ Termostato Inteligente', description: 'Optimiza automáticamente la calefacción y el enfriamiento.', cost: '~$130', costNum: 130 },
        { title: '⚡ Generador Solar Portátil', description: 'Genera tu propia electricidad limpia en cualquier lugar. Sin instalación.', cost: '~$200', costNum: 200 },
      ],
    },
    owner: {
      EN: [
        { title: '💡 LED Bulbs', description: 'Simple swap, immediate savings on your electric bill.', cost: '~$15', costNum: 15 },
        { title: '🪟 Window Insulation Kit', description: 'Keep heat in during winter, reduce heating costs.', cost: '~$20', costNum: 20 },
        { title: '🌡️ Smart Power Strips', description: 'Eliminate phantom energy drain from electronics.', cost: '~$25', costNum: 25 },
        { title: '🌡️ Smart Thermostat', description: 'Automatically optimizes heating and cooling.', cost: '~$130', costNum: 130 },
        { title: '🚗 EV Charger', description: 'Home charging station for electric vehicles.', cost: '~$400 after rebates', costNum: 400 },
        { title: '💧 Heat Pump Water Heater', description: 'Uses 70% less energy than traditional water heaters.', cost: '~$500 after rebates', costNum: 500 },
        { title: '☀️ Solar Panels', description: 'Generate your own clean electricity.', cost: 'From $0 with financing', costNum: 0 },
      ],
      ES: [
        { title: '💡 Bombillas LED', description: 'Cambio simple, ahorros inmediatos en tu factura eléctrica.', cost: '~$15', costNum: 15 },
        { title: '🪟 Kit de Aislamiento de Ventanas', description: 'Mantén el calor en invierno, reduce costos de calefacción.', cost: '~$20', costNum: 20 },
        { title: '🌡️ Regletas Inteligentes', description: 'Elimina el consumo fantasma de electrónicos.', cost: '~$25', costNum: 25 },
        { title: '🌡️ Termostato Inteligente', description: 'Optimiza automáticamente la calefacción y el enfriamiento.', cost: '~$130', costNum: 130 },
        { title: '🚗 Cargador de VE', description: 'Estación de carga doméstica para vehículos eléctricos.', cost: '~$400 después de reembolsos', costNum: 400 },
        { title: '💧 Calentador de Agua con Bomba de Calor', description: 'Usa 70% menos energía que los calentadores tradicionales.', cost: '~$500 después de reembolsos', costNum: 500 },
        { title: '☀️ Paneles Solares', description: 'Genera tu propia electricidad limpia.', cost: 'Desde $0 con financiamiento', costNum: 0 },
      ],
    },
  };

  const getSwapItems = () => {
    const isRenter = currentHousing === 'rent' || currentHousing === 'guest';
    const lang = language === 'ES' ? 'ES' : 'EN';
    const items = isRenter ? allSwapItems.renter[lang] : allSwapItems.owner[lang];

    if (!budgetNum) return items;

    // Filter and sort by what's affordable
    // Solar panels with $0 financing always show for owners
    const affordable = items.filter(item =>
      item.costNum === 0 || item.costNum <= budgetNum
    );

    // If nothing is affordable show the cheapest 2 options
    if (affordable.length === 0) {
      return [...items].sort((a, b) => a.costNum - b.costNum).slice(0, 2);
    }

    return affordable.sort((a, b) => a.costNum - b.costNum);
  };

  const swapItems = getSwapItems();

  const content = {
    EN: {
      greeting: 'Here\'s your personalized plan',
      subtitle: 'Based on your location and budget, here\'s what\'s available to you.',
      incentives: 'Incentives & Rebates',
      swaps: 'Affordable Clean Swaps',
      impact: 'Your Potential Impact',
      scrollHint: '↓ Scroll to see all your options',
      budgetNote: budgetNum ? `Showing swaps within your $${budgetNum}/mo budget` : 'Showing all available swaps',
      incentiveItems: [
        { title: 'Federal Solar Tax Credit', description: 'Get 30% back on solar panel installation costs.', amount: 'Up to $7,500' },
        { title: 'Heat Pump Rebate', description: 'Federal rebate for switching to an electric heat pump.', amount: 'Up to $2,000' },
        { title: 'EV Tax Credit', description: 'Credit for purchasing a new electric vehicle.', amount: 'Up to $7,500' },
      ],
    },
    ES: {
      greeting: 'Aquí está tu plan personalizado',
      subtitle: 'Basado en tu ubicación y presupuesto, esto es lo que está disponible para ti.',
      incentives: 'Incentivos y Reembolsos',
      swaps: 'Cambios Limpios Asequibles',
      impact: 'Tu Impacto Potencial',
      scrollHint: '↓ Desplázate para ver todas tus opciones',
      budgetNote: budgetNum ? `Mostrando cambios dentro de tu presupuesto de $${budgetNum}/mes` : 'Mostrando todos los cambios disponibles',
      incentiveItems: [
        { title: 'Crédito Federal Solar', description: 'Obtén el 30% de vuelta en costos de instalación solar.', amount: 'Hasta $7,500' },
        { title: 'Reembolso de Bomba de Calor', description: 'Reembolso federal por cambiar a una bomba de calor eléctrica.', amount: 'Hasta $2,000' },
        { title: 'Crédito Fiscal para VE', description: 'Crédito por comprar un vehículo eléctrico nuevo.', amount: 'Hasta $7,500' },
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
      <Shop
        language={language}
        onTabChange={setActiveTab}
      />
    );
  }

  if (activeTab === 'community') {
    return (
      <Community
        language={language}
        userZip={currentZip}
        onTabChange={setActiveTab}
      />
    );
  }

  if (activeTab === 'profile') {
    return (
      <Profile
        language={language}
        zipCode={currentZip}
        housingType={currentHousing}
        budget={currentBudget}
        householdSize={currentSize}
        householdIncome={currentIncome}
        onTabChange={setActiveTab}
        onUpdateProfile={({ zipCode, housingType, budget, householdSize, householdIncome }) => {
          setCurrentZip(zipCode);
          setCurrentHousing(housingType);
          setCurrentBudget(budget);
          setCurrentSize(householdSize);
          setCurrentIncome(householdIncome);
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
            color: '#4F8C6F',
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
            📍 Zip: {currentZip} &nbsp;|&nbsp; 🏠 {currentHousing === 'rent' ? 'Renter' : currentHousing === 'guest' ? 'Living with Family' : 'Homeowner'} &nbsp;|&nbsp; 💰 {currentBudget ? `$${currentBudget}/mo` : 'Budget flexible'}
          </div>

          {loading && (
            <p style={{ color: '#4F8C6F', fontSize: '14px', marginBottom: '16px', marginTop: '12px' }}>
              🌱 Loading real incentives for your area...
            </p>
          )}

          {error && (
            <p style={{ color: '#D4956A', fontSize: '14px', marginBottom: '16px', marginTop: '12px' }}>
              ⚠️ API error: {error}
            </p>
          )}

          <h2 style={{
            color: '#2C2C2C',
            fontSize: '18px',
            marginTop: '32px',
            marginBottom: '16px',
          }}>
            🎁 {current.incentives}
          </h2>

          {incentives.length > 0 ? (
            <div style={gridStyle}>
              {incentives
                .filter(item => !item.paused)
                .map((item, index) => (
                  <div key={index} style={cardStyle}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '6px',
                    }}>
                      <h3 style={{ color: '#2C2C2C', fontSize: '15px', margin: 0, flex: 1 }}>
                        {item.program}
                      </h3>
                      <span style={{
                        backgroundColor: '#EBF3EE',
                        color: '#4F8C6F',
                        borderRadius: '20px',
                        padding: '4px 10px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        marginLeft: '8px',
                        whiteSpace: 'nowrap',
                      }}>
                        {item.amount.type === 'dollar_amount'
                          ? `$${item.amount.number.toLocaleString()}`
                          : item.amount.type === 'percent'
                          ? `${item.amount.number}%`
                          : 'Varies'}
                      </span>
                    </div>
                    <p style={{ color: '#666', fontSize: '13px', margin: '0 0 8px 0' }}>
                      {item.short_description}
                    </p>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                      <span style={{
                        backgroundColor: '#F0EBE3',
                        color: '#2C2C2C',
                        borderRadius: '8px',
                        padding: '2px 8px',
                        fontSize: '11px',
                      }}>
                        {item.authority_type === 'federal' ? '🏛️ Federal' :
                         item.authority_type === 'state' ? '🏢 State' :
                         item.authority_type === 'utility' ? '⚡ Utility' : '🏠 Local'}
                      </span>
                      <span style={{
                        backgroundColor: '#F0EBE3',
                        color: '#2C2C2C',
                        borderRadius: '8px',
                        padding: '2px 8px',
                        fontSize: '11px',
                      }}>
                        {item.payment_methods[0] === 'tax_credit' ? '💳 Tax Credit' :
                         item.payment_methods[0] === 'pos_rebate' ? '💰 Instant Rebate' :
                         item.payment_methods[0] === 'rebate' ? '💰 Rebate' : '💵 Discount'}
                      </span>
                    </div>
                    {item.program_url && (
                      <button
                        onClick={() => window.open(item.program_url, '_blank')}
                        style={{
                          backgroundColor: '#4F8C6F',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          marginTop: 'auto',
                        }}
                      >
                        Learn More
                      </button>
                    )}
                  </div>
                ))}
            </div>
          ) : (
            <div>
              <div style={{
                backgroundColor: '#FDF0E8',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '16px',
                fontSize: '13px',
                color: '#D4956A',
              }}>
                🌱 Showing general federal incentives. Personalized data for your state coming soon.
              </div>
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
                        color: '#4F8C6F',
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
            </div>
          )}

          <h2 style={{
            color: '#2C2C2C',
            fontSize: '18px',
            marginTop: '32px',
            marginBottom: '8px',
          }}>
            ♻️ {current.swaps}
          </h2>

          <p style={{
            color: '#4F8C6F',
            fontSize: '13px',
            marginBottom: '16px',
          }}>
            {current.budgetNote}
          </p>

          <div style={gridStyle}>
            {swapItems.map((item, index) => (
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
            {impactStats.map((item, index) => (
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
                  color: '#4F8C6F',
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
          
          <CarbonTracker language={language} />

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