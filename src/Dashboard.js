import React, { useState, useEffect } from 'react';
import { calculateImpact } from './impactCalculator';
import NavBar from './NavBar';
import Profile from './Profile';
import Community from './Community';
import Shop from './Shop';
import useIncentives from './useIncentives';
import CarbonTracker from './CarbonTracker';
import WaterTracker from './WaterTracker';
import GoFurther from './GoFurther';
import AnimatedSection from './AnimatedSection';

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

  const [savedIncentives, setSavedIncentives] = useState(() => {
    try {
      const saved = localStorage.getItem('mira_saved_incentives');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mira_saved_incentives', JSON.stringify(savedIncentives));
    } catch {}
  }, [savedIncentives]);

  const handleSaveIncentive = (item) => {
    const isAlreadySaved = savedIncentives.some(s => s.program === item.program);
    if (isAlreadySaved) {
      setSavedIncentives(savedIncentives.filter(s => s.program !== item.program));
    } else {
      setSavedIncentives([...savedIncentives, item]);
    }
  };

  const handleSaveFallbackIncentive = (item) => {
    const isAlreadySaved = savedIncentives.some(s => s.title === item.title);
    if (isAlreadySaved) {
      setSavedIncentives(savedIncentives.filter(s => s.title !== item.title));
    } else {
      setSavedIncentives([...savedIncentives, { ...item, isFallback: true }]);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowScrollHint(false);
      else setShowScrollHint(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const budgetNum = parseFloat(currentBudget) || null;

  const getStateFromZip = (zip) => {
    if (!zip) return null;
    const ZIP_TO_STATE = {
      '06': 'Connecticut', '07': 'New Jersey', '08': 'New Jersey',
      '10': 'New York', '11': 'New York', '12': 'New York', '13': 'New York', '14': 'New York',
      '15': 'Pennsylvania', '16': 'Pennsylvania', '17': 'Pennsylvania', '18': 'Pennsylvania', '19': 'Pennsylvania',
      '20': 'Washington D.C.', '21': 'Maryland', '22': 'Virginia', '23': 'Virginia', '24': 'Virginia',
      '25': 'West Virginia', '26': 'West Virginia', '27': 'North Carolina', '28': 'North Carolina',
      '29': 'South Carolina', '30': 'Georgia', '31': 'Georgia', '32': 'Florida', '33': 'Florida', '34': 'Florida',
      '35': 'Alabama', '36': 'Alabama', '37': 'Tennessee', '38': 'Tennessee', '39': 'Mississippi',
      '40': 'Kentucky', '41': 'Kentucky', '42': 'Kentucky', '43': 'Ohio', '44': 'Ohio', '45': 'Ohio',
      '46': 'Indiana', '47': 'Indiana', '48': 'Michigan', '49': 'Michigan',
      '50': 'Iowa', '51': 'Iowa', '52': 'Iowa', '53': 'Wisconsin', '54': 'Wisconsin',
      '55': 'Minnesota', '56': 'Minnesota', '57': 'South Dakota', '58': 'North Dakota', '59': 'Montana',
      '60': 'Illinois', '61': 'Illinois', '62': 'Illinois', '63': 'Missouri', '64': 'Missouri', '65': 'Missouri',
      '66': 'Kansas', '67': 'Kansas', '68': 'Nebraska', '69': 'Nebraska',
      '70': 'Louisiana', '71': 'Louisiana', '72': 'Arkansas', '73': 'Oklahoma', '74': 'Oklahoma',
      '75': 'Texas', '76': 'Texas', '77': 'Texas', '78': 'Texas', '79': 'Texas',
      '80': 'Colorado', '81': 'Colorado', '82': 'Wyoming', '83': 'Idaho', '84': 'Utah',
      '85': 'Arizona', '86': 'Arizona', '87': 'New Mexico', '88': 'New Mexico', '89': 'Nevada',
      '90': 'California', '91': 'California', '92': 'California', '93': 'California',
      '94': 'California', '95': 'California', '96': 'California', '97': 'Oregon', '98': 'Washington', '99': 'Alaska',
    };
    const prefix2 = zip.substring(0, 2);
    const prefix1 = zip.substring(0, 1);
    return ZIP_TO_STATE[prefix2] || ZIP_TO_STATE[prefix1] || null;
  };

  const stateName = getStateFromZip(currentZip);

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
        { title: '⚡ Generador Solar Portátil', description: 'Genera tu propia electricidad limpia en cualquier lugar.', cost: '~$200', costNum: 200 },
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
    const affordable = items.filter(item => item.costNum === 0 || item.costNum <= budgetNum);
    if (affordable.length === 0) return [...items].sort((a, b) => a.costNum - b.costNum).slice(0, 2);
    return affordable.sort((a, b) => a.costNum - b.costNum);
  };

  const swapItems = getSwapItems();

  const content = {
    EN: {
      greeting: stateName ? `Here's what Mira found for you in ${stateName}` : 'Here\'s what Mira found for you',
      subtitle: 'Your personalized roadmap to saving money and reducing your environmental impact — based on where you live and what you can afford.',
      incentivesTitle: 'Money Available to You',
      incentivesDesc: 'Programs that help cover the cost of going green — from your government and utility company.',
      swapsTitle: 'Easy Changes You Can Make',
      swapsDesc: 'Small swaps that reduce your energy use and save you money — filtered for your budget and living situation.',
      impactTitle: 'What This Could Mean for You',
      impactDesc: 'If you made these changes, here\'s the real difference it would make — for your wallet and the planet.',
      trackTitle: 'Track Your Footprint',
      trackDesc: 'Curious how your daily habits stack up? Answer a few quick questions to see your carbon and water footprint — and where you can reduce it most.',
      scrollHint: 'Scroll to see your full plan',
      budgetNote: budgetNum ? `Filtered to fit your $${budgetNum}/mo budget — update anytime in your profile.` : 'Showing all available swaps for your situation.',
      fallbackNote: 'Your state is not yet fully covered by our incentives database. These are federal programs available to everyone in the U.S. — personalized state data is coming soon.',
      incentiveItems: [
        { title: 'Federal Solar Tax Credit', description: 'Get 30% back on solar panel installation costs.', amount: 'Up to $7,500' },
        { title: 'Heat Pump Rebate', description: 'Federal rebate for switching to an electric heat pump.', amount: 'Up to $2,000' },
        { title: 'EV Tax Credit', description: 'Credit for purchasing a new electric vehicle.', amount: 'Up to $7,500' },
      ],
      saveIncentive: 'Save',
      savedIncentive: 'Saved ⭐',
      profileHousing: { rent: 'Renter', own: 'Homeowner', guest: 'Living with Family' },
      guideLink: 'Want more ideas? Read the Zero Waste Guide →',
    },
    ES: {
      greeting: stateName ? `Esto es lo que Mira encontró para ti en ${stateName}` : 'Esto es lo que Mira encontró para ti',
      subtitle: 'Tu hoja de ruta personalizada para ahorrar dinero y reducir tu impacto ambiental.',
      incentivesTitle: 'Dinero Disponible para Ti',
      incentivesDesc: 'Programas que ayudan a cubrir el costo de volverse verde.',
      swapsTitle: 'Cambios Fáciles que Puedes Hacer',
      swapsDesc: 'Pequeños cambios que reducen tu consumo de energía y te ahorran dinero.',
      impactTitle: 'Lo que Esto Podría Significar para Ti',
      impactDesc: 'Si hicieras estos cambios, aquí está la diferencia real que haría.',
      trackTitle: 'Rastrea Tu Huella',
      trackDesc: '¿Curioso sobre cómo se comparan tus hábitos diarios?',
      scrollHint: 'Desplázate para ver tu plan completo',
      budgetNote: budgetNum ? `Filtrado para tu presupuesto de $${budgetNum}/mes.` : 'Mostrando todos los cambios disponibles.',
      fallbackNote: 'Tu estado aún no está completamente cubierto. Estos son programas federales disponibles para todos en EE.UU.',
      incentiveItems: [
        { title: 'Crédito Federal Solar', description: 'Obtén el 30% de vuelta en costos de instalación solar.', amount: 'Hasta $7,500' },
        { title: 'Reembolso de Bomba de Calor', description: 'Reembolso federal por cambiar a una bomba de calor eléctrica.', amount: 'Hasta $2,000' },
        { title: 'Crédito Fiscal para VE', description: 'Crédito por comprar un vehículo eléctrico nuevo.', amount: 'Hasta $7,500' },
      ],
      saveIncentive: 'Guardar',
      savedIncentive: 'Guardado ⭐',
      profileHousing: { rent: 'Inquilino', own: 'Propietario', guest: 'Vivo con Familia' },
      guideLink: '¿Quieres más ideas? Lee la Guía Zero Residuos →',
    },
  };

  const current = content[language] || content.EN;

  const colors = {
    forestDeep: '#1B5E3B',
    canopy: '#2D7D52',
    newGrowth: '#4CAF7D',
    clay: '#C4874A',
    parchment: '#F5F0E8',
    morningDew: '#E8F0E9',
    almostBlack: '#1A1A1A',
    mossy: '#5C6B5E',
    softWhite: '#FDFAF5',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isWide ? 'repeat(2, 1fr)' : '1fr',
    gap: '14px',
    marginBottom: '16px',
  };

  const impactGridStyle = {
    display: 'grid',
    gridTemplateColumns: isWide ? 'repeat(3, 1fr)' : '1fr',
    gap: '14px',
    marginBottom: '56px',
  };

  const cardStyle = {
    backgroundColor: colors.softWhite,
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 2px 12px rgba(27,94,59,0.08)',
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${colors.morningDew}`,
  };

  const sectionStyle = {
    marginBottom: '12px',
    marginTop: '48px',
  };

  if (activeTab === 'shop') return <Shop language={language} onTabChange={setActiveTab} />;
  if (activeTab === 'community') return <Community language={language} userZip={currentZip} onTabChange={setActiveTab} />;
  if (activeTab === 'goFurther') return <GoFurther language={language} onTabChange={setActiveTab} />;
  if (activeTab === 'profile') {
    return (
      <Profile
        language={language}
        zipCode={currentZip}
        housingType={currentHousing}
        budget={currentBudget}
        householdSize={currentSize}
        householdIncome={currentIncome}
        savedIncentives={savedIncentives}
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
    <div style={{ backgroundColor: colors.parchment, minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>

      {/* Hero header */}
      <div style={{
        background: `linear-gradient(160deg, ${colors.forestDeep} 0%, ${colors.canopy} 100%)`,
        padding: '100px 24px 48px',
        position: 'relative',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '200px', height: '200px', borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.04)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-20px',
          width: '150px', height: '150px', borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.03)',
        }} />

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            color: 'white',
            fontSize: isWide ? '34px' : '28px',
            fontWeight: '700',
            margin: '0 0 14px 0',
            lineHeight: '1.3',
            letterSpacing: '-0.5px',
          }}>
            {current.greeting}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '17px',
            margin: '0 auto 28px',
            lineHeight: '1.7',
            maxWidth: '560px',
          }}>
            {current.subtitle}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {[
              currentZip && (
                <span key="zip" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  {currentZip}
                </span>
              ),
              current.profileHousing[currentHousing] || current.profileHousing.rent,
              currentBudget ? `$${currentBudget}/mo budget` : 'Budget flexible',
            ].filter(Boolean).map((item, index) => (
              <span key={index} style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.9)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
          {/* Wave built into hero */}
          <div style={{
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            right: 0,
            lineHeight: 0,
          }}>
            <svg
              viewBox="0 0 1440 60"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block', width: '100%' }}
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C360,60 1080,0 1440,60 L1440,60 L0,60 Z"
                fill="#F5F0E8"
              />
            </svg>
          </div>
        </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 60px' }}>

        {loading && (
          <p style={{ color: colors.canopy, fontSize: '15px', margin: '24px 0 0 0' }}>
            Finding money available to you...
          </p>
        )}
        {error && (
          <p style={{ color: colors.clay, fontSize: '15px', margin: '24px 0 0 0' }}>
            Couldn't load live incentives right now. Showing general programs below.
          </p>
        )}

        {/* Money Available Section */}
        <AnimatedSection delay={0}>
          <div style={sectionStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '4px', height: '28px', backgroundColor: colors.canopy, borderRadius: '4px' }} />
              <h2 style={{ color: colors.almostBlack, fontSize: '22px', fontWeight: '700', margin: 0, letterSpacing: '-0.3px' }}>
                {current.incentivesTitle}
              </h2>
            </div>
            <p style={{ color: colors.mossy, fontSize: '14px', margin: '0 0 20px 0', lineHeight: '1.6', paddingLeft: '14px' }}>
              {current.incentivesDesc}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {incentives.length > 0 ? (
            <div style={gridStyle}>
              {incentives.filter(item => !item.paused).map((item, index) => {
                const isSaved = savedIncentives.some(s => s.program === item.program);
                return (
                  <div key={index} style={cardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h3 style={{ color: colors.almostBlack, fontSize: '15px', margin: 0, flex: 1, lineHeight: '1.4' }}>
                        {item.program}
                      </h3>
                      <span style={{
                        backgroundColor: colors.morningDew, color: colors.forestDeep,
                        borderRadius: '20px', padding: '4px 12px',
                        fontSize: '13px', fontWeight: '700',
                        marginLeft: '10px', whiteSpace: 'nowrap',
                      }}>
                        {item.amount.type === 'dollar_amount' ? `$${item.amount.number.toLocaleString()}` :
                         item.amount.type === 'percent' ? `${item.amount.number}%` : 'Varies'}
                      </span>
                    </div>
                    <p style={{ color: colors.mossy, fontSize: '13px', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                      {item.short_description}
                    </p>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      <span style={{ backgroundColor: colors.morningDew, color: colors.canopy, borderRadius: '8px', padding: '3px 8px', fontSize: '11px', fontWeight: '600' }}>
                        {item.authority_type === 'federal' ? 'Federal' :
                         item.authority_type === 'state' ? 'State' :
                         item.authority_type === 'utility' ? 'Utility' : 'Local'}
                      </span>
                      <span style={{ backgroundColor: colors.morningDew, color: colors.canopy, borderRadius: '8px', padding: '3px 8px', fontSize: '11px', fontWeight: '600' }}>
                        {item.payment_methods[0] === 'tax_credit' ? 'Tax Credit' :
                         item.payment_methods[0] === 'pos_rebate' ? 'Instant Rebate' :
                         item.payment_methods[0] === 'rebate' ? 'Rebate' : 'Discount'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                      {item.program_url && (
                        <button
                          onClick={() => window.open(item.program_url, '_blank')}
                          style={{
                            flex: 1, backgroundColor: colors.canopy, color: 'white',
                            border: 'none', padding: '10px', borderRadius: '12px',
                            fontSize: '13px', cursor: 'pointer', fontWeight: '600',
                            fontFamily: 'Poppins, sans-serif',
                          }}
                        >
                          Learn More
                        </button>
                      )}
                      <button
                        onClick={() => handleSaveIncentive(item)}
                        style={{
                          flex: 1,
                          backgroundColor: isSaved ? colors.morningDew : 'transparent',
                          color: isSaved ? colors.forestDeep : colors.mossy,
                          border: `2px solid ${isSaved ? colors.newGrowth : colors.morningDew}`,
                          padding: '10px', borderRadius: '12px',
                          fontSize: '13px', cursor: 'pointer',
                          fontFamily: 'Poppins, sans-serif',
                        }}
                      >
                        {isSaved ? current.savedIncentive : current.saveIncentive}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <div style={{
                backgroundColor: colors.softWhite,
                borderRadius: '16px',
                padding: '16px 20px',
                marginBottom: '16px',
                fontSize: '14px',
                color: colors.mossy,
                lineHeight: '1.7',
                borderLeft: `4px solid ${colors.clay}`,
              }}>
                {current.fallbackNote}
              </div>
              <div style={gridStyle}>
                {current.incentiveItems.map((item, index) => {
                  const isSaved = savedIncentives.some(s => s.title === item.title);
                  return (
                    <div key={index} style={cardStyle}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <h3 style={{ color: colors.almostBlack, fontSize: '15px', margin: 0, flex: 1 }}>
                          {item.title}
                        </h3>
                        <span style={{
                          backgroundColor: colors.morningDew, color: colors.forestDeep,
                          borderRadius: '20px', padding: '4px 12px',
                          fontSize: '13px', fontWeight: '700',
                          marginLeft: '10px', whiteSpace: 'nowrap',
                        }}>
                          {item.amount}
                        </span>
                      </div>
                      <p style={{ color: colors.mossy, fontSize: '13px', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                        {item.description}
                      </p>
                      <button
                        onClick={() => handleSaveFallbackIncentive(item)}
                        style={{
                          width: '100%',
                          backgroundColor: isSaved ? colors.morningDew : 'transparent',
                          color: isSaved ? colors.forestDeep : colors.mossy,
                          border: `2px solid ${isSaved ? colors.newGrowth : colors.morningDew}`,
                          padding: '10px', borderRadius: '12px',
                          fontSize: '13px', cursor: 'pointer', marginTop: 'auto',
                          fontFamily: 'Poppins, sans-serif',
                        }}
                      >
                        {isSaved ? current.savedIncentive : current.saveIncentive}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </AnimatedSection>

        {/* Easy Changes Section */}
        <AnimatedSection delay={0}>
          <div style={sectionStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '4px', height: '28px', backgroundColor: colors.clay, borderRadius: '4px' }} />
              <h2 style={{ color: colors.almostBlack, fontSize: '22px', fontWeight: '700', margin: 0, letterSpacing: '-0.3px' }}>
                {current.swapsTitle}
              </h2>
            </div>
            <p style={{ color: colors.mossy, fontSize: '14px', margin: '0 0 6px 0', lineHeight: '1.6', paddingLeft: '14px' }}>
              {current.swapsDesc}
            </p>
            <p style={{ color: colors.canopy, fontSize: '13px', margin: '0 0 20px 0', paddingLeft: '14px', fontWeight: '500' }}>
              {current.budgetNote}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div style={gridStyle}>
            {swapItems.map((item, index) => (
              <div key={index} style={cardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ color: colors.almostBlack, fontSize: '15px', margin: 0, flex: 1 }}>
                    {item.title}
                  </h3>
                  <span style={{
                    backgroundColor: '#FDF0E8', color: colors.clay,
                    borderRadius: '20px', padding: '4px 12px',
                    fontSize: '13px', fontWeight: '700',
                    marginLeft: '10px', whiteSpace: 'nowrap',
                  }}>
                    {item.cost}
                  </span>
                </div>
                <p style={{ color: colors.mossy, fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <a
            href="/guide"
            style={{
              display: 'block',
              textAlign: 'center',
              color: colors.canopy,
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              padding: '14px',
              backgroundColor: colors.softWhite,
              borderRadius: '12px',
              border: `2px solid ${colors.morningDew}`,
              marginBottom: '16px',
            }}
          >
            {current.guideLink}
          </a>
        </AnimatedSection>

        {/* Impact Section */}
        <AnimatedSection delay={0}>
          <div style={sectionStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '4px', height: '28px', backgroundColor: colors.newGrowth, borderRadius: '4px' }} />
              <h2 style={{ color: colors.almostBlack, fontSize: '22px', fontWeight: '700', margin: 0, letterSpacing: '-0.3px' }}>
                {current.impactTitle}
              </h2>
            </div>
            <p style={{ color: colors.mossy, fontSize: '14px', margin: '0 0 20px 0', lineHeight: '1.6', paddingLeft: '14px' }}>
              {current.impactDesc}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div style={impactGridStyle}>
            {impactStats.map((item, index) => (
              <div key={index} style={{
                background: `linear-gradient(135deg, ${colors.forestDeep} 0%, ${colors.canopy} 100%)`,
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <span style={{ color: 'white', fontSize: '28px', fontWeight: '800', letterSpacing: '-1px' }}>
                  {item.stat}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', lineHeight: '1.5' }}>
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Track Your Footprint Section */}
        <AnimatedSection delay={0}>
          <div style={sectionStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '4px', height: '28px', backgroundColor: colors.canopy, borderRadius: '4px' }} />
              <h2 style={{ color: colors.almostBlack, fontSize: '22px', fontWeight: '700', margin: 0, letterSpacing: '-0.3px' }}>
                {current.trackTitle}
              </h2>
            </div>
            <p style={{ color: colors.mossy, fontSize: '14px', margin: '0 0 20px 0', lineHeight: '1.6', paddingLeft: '14px' }}>
              {current.trackDesc}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <CarbonTracker language={language} />
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <WaterTracker language={language} />
        </AnimatedSection>

      </div>

      {showScrollHint && (
        <div style={{
          position: 'fixed',
          bottom: '32px',
          zIndex: 999,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: colors.forestDeep,
          color: 'white',
          padding: '10px 24px',
          borderRadius: '20px',
          fontSize: '14px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 16px rgba(27,94,59,0.3)',
        }}>
          {current.scrollHint}
        </div>
      )}

      <NavBar activeTab={activeTab} onTabChange={setActiveTab} language={language} transparentAtTop={true} />
    </div>
  );
}

export default Dashboard;