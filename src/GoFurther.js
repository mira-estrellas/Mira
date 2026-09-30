import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';

function GoFurther({ language, onTabChange }) {
  const [activeSection, setActiveSection] = useState('energy');
  const [submission, setSubmission] = useState({ name: '', description: '', url: '', category: 'energy' });
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState(() => {
    try {
      const saved = localStorage.getItem('mira_go_further_submissions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const sectionRefs = {
    energy: useRef(null),
    banking: useRef(null),
    action: useRef(null),
    fund: useRef(null),
    submit: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['energy', 'banking', 'action', 'fund', 'submit'];
      for (const section of sections) {
        const ref = sectionRefs[section].current;
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (section) => {
    const ref = sectionRefs[section].current;
    if (ref) {
      const offset = 80;
      const top = ref.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (!submission.name || !submission.description || !submission.url) return;
    const newSubmission = { ...submission, id: Date.now() };
    const updated = [...submissions, newSubmission];
    setSubmissions(updated);
    try {
      localStorage.setItem('mira_go_further_submissions', JSON.stringify(updated));
    } catch {}
    setSubmission({ name: '', description: '', url: '', category: 'energy' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const content = {
    EN: {
      title: 'Go Further',
      subtitle: 'Small steps add up. Here\'s how to go even further.',
      sections: {
        energy: { icon: '⚡', label: 'Green Energy' },
        banking: { icon: '🏦', label: 'Green Banking' },
        action: { icon: '📣', label: 'Take Action' },
        fund: { icon: '💸', label: 'Fund Projects' },
        submit: { icon: '🌱', label: 'Add Resource' },
      },
      energyTitle: '⚡ Switch to Clean Energy',
      energyDesc: 'These providers let you switch your home electricity to renewable energy — no solar panels needed. Some work even if you rent.',
      bankingTitle: '🏦 Bank Green',
      bankingDesc: 'Traditional banks invest your deposits in fossil fuels. These alternatives don\'t.',
      actionTitle: '📣 Take Action',
      actionDesc: 'Individual action matters — but collective action changes systems. Here\'s how to connect with others.',
      fundTitle: '💸 Fund Climate Projects',
      fundDesc: 'These programs are independently verified and trusted by climate scientists worldwide. Mira has no financial relationship with any of them.',
      both: '✅ Renters & Owners',
      renterFriendly: '🏠 Works for Renters',
      ownerOnly: '🏡 Homeowners',
      us: '🇺🇸 US',
      international: '🌍 International',
      visitSite: 'Visit Site →',
      note: 'Mira has no affiliation with any of these services. We list them equally because they share our mission.',
      submitTitle: '🌱 Know a resource we should add?',
      submitDesc: 'Help us grow this list. Share a service or organization you trust.',
      submitName: 'Resource name',
      submitDescription: 'What does it do? (one or two sentences)',
      submitUrl: 'Website URL',
      submitCategory: 'Category',
      submitButton: 'Submit Resource',
      submitSuccess: 'Thank you! We\'ll review your suggestion. 🌱',
      submitCategories: {
        energy: '⚡ Green Energy',
        banking: '🏦 Green Banking',
        action: '📣 Take Action',
        fund: '💸 Fund Projects',
      },
      communityLabel: '🌱 Suggested by the Mira community:',
    },
    ES: {
      title: 'Ir Más Lejos',
      subtitle: 'Los pequeños pasos suman. Así es cómo ir aún más lejos.',
      sections: {
        energy: { icon: '⚡', label: 'Energía Verde' },
        banking: { icon: '🏦', label: 'Banca Verde' },
        action: { icon: '📣', label: 'Tomar Acción' },
        fund: { icon: '💸', label: 'Financiar' },
        submit: { icon: '🌱', label: 'Agregar' },
      },
      energyTitle: '⚡ Cambia a Energía Limpia',
      energyDesc: 'Estos proveedores te permiten cambiar tu electricidad a energía renovable — sin paneles solares.',
      bankingTitle: '🏦 Banca Verde',
      bankingDesc: 'Los bancos tradicionales invierten tus depósitos en combustibles fósiles. Estas alternativas no.',
      actionTitle: '📣 Toma Acción',
      actionDesc: 'La acción individual importa — pero la acción colectiva cambia sistemas.',
      fundTitle: '💸 Financia Proyectos Climáticos',
      fundDesc: 'Estos programas están verificados de forma independiente. Mira no tiene ninguna relación financiera con ninguno de ellos.',
      both: '✅ Inquilinos y Propietarios',
      renterFriendly: '🏠 Funciona para Inquilinos',
      ownerOnly: '🏡 Propietarios',
      us: '🇺🇸 EE.UU.',
      international: '🌍 Internacional',
      visitSite: 'Visitar Sitio →',
      note: 'Mira no tiene afiliación con ninguno de estos servicios. Los listamos por igual porque comparten nuestra misión.',
      submitTitle: '🌱 ¿Conoces un recurso que deberíamos agregar?',
      submitDesc: 'Ayúdanos a crecer esta lista.',
      submitName: 'Nombre del recurso',
      submitDescription: '¿Qué hace?',
      submitUrl: 'URL del sitio web',
      submitCategory: 'Categoría',
      submitButton: 'Enviar Recurso',
      submitSuccess: '¡Gracias! Revisaremos tu sugerencia. 🌱',
      submitCategories: {
        energy: '⚡ Energía Verde',
        banking: '🏦 Banca Verde',
        action: '📣 Tomar Acción',
        fund: '💸 Financiar',
      },
      communityLabel: '🌱 Sugerido por la comunidad Mira:',
    },
  };

  const current = content[language] || content.EN;

  const energyProviders = [
    { name: 'Arcadia', description: 'Connects your existing utility to community solar. Works nationwide for renters and homeowners. Can save 5-15% on your bill.', who: 'both', region: 'us', url: 'https://www.arcadia.com' },
    { name: 'CleanChoice Energy', description: 'Switch to 100% renewable electricity in minutes. No new equipment needed. Available in 11 states across the Northeast, Mid-Atlantic and Midwest.', who: 'both', region: 'us', url: 'https://cleanchoiceenergy.com' },
    { name: 'Green Mountain Energy', description: 'The oldest 100% renewable retailer in the US. Offers wind and solar plans across multiple states.', who: 'both', region: 'us', url: 'https://www.greenmountainenergy.com' },
    { name: 'Perch Energy', description: 'Community solar subscriptions across 16 states. Get credits on your bill — no installation ever.', who: 'both', region: 'us', url: 'https://www.perchenergy.com' },
    { name: 'Rhythm Energy', description: '100% renewable wind and solar plans in Texas. Includes solar buyback options for homeowners with panels.', who: 'both', region: 'us', url: 'https://www.rhythmenergy.com' },
    { name: 'Bullfrog Power', description: 'Canada\'s leading green energy provider. Renewable electricity and gas for homes and businesses.', who: 'both', region: 'international', url: 'https://www.bullfrogpower.com' },
    { name: 'Good Energy', description: 'UK\'s leading independent green energy supplier. 100% renewable electricity from British generators.', who: 'both', region: 'international', url: 'https://www.goodenergy.co.uk' },
  ];

  const banks = [
    { name: 'Amalgamated Bank', description: 'America\'s most progressive bank. Does not invest in fossil fuels. Full FDIC insured.', region: 'us', url: 'https://www.amalgamatedbank.com' },
    { name: 'Aspiration', description: 'Plant a tree with every purchase. Fossil fuel free investments. Competitive interest on savings.', region: 'us', url: 'https://www.aspiration.com' },
    { name: 'Clean Energy Credit Union', description: 'Finances clean energy for members — solar panels, EVs, heat pumps — at low rates.', region: 'us', url: 'https://www.cleanenergycu.org' },
    { name: 'Triodos Bank', description: 'European leader in ethical banking. Only finances organizations that benefit people and the planet.', region: 'international', url: 'https://www.triodos.com' },
  ];

  const organizations = [
    { name: 'Sierra Club', description: 'America\'s largest environmental organization. Local chapters in every state. Volunteer and advocacy opportunities.', region: 'us', url: 'https://www.sierraclub.org' },
    { name: 'Sunrise Movement', description: 'Youth-led movement to stop climate change and create good jobs. Local hubs across the US.', region: 'us', url: 'https://www.sunrisemovement.org' },
    { name: '350.org', description: 'Global grassroots climate movement active in 188 countries. Campaigns to end fossil fuel expansion.', region: 'international', url: 'https://350.org' },
    { name: 'Climate Action Network', description: 'Network of over 1,500 NGOs worldwide. Find local member organizations in your country.', region: 'international', url: 'https://climatenetwork.org' },
    { name: 'Contact Your Representatives', description: 'Find and contact your local, state and federal representatives about clean energy policy. Your voice matters more than you think.', region: 'us', url: 'https://www.congress.gov/members/find-your-member' },
    { name: 'Vote Solar', description: 'Fights for solar energy policies that benefit everyone. Advocates for equitable clean energy access.', region: 'us', url: 'https://votesolar.org' },
  ];

  const fundPrograms = [
    { name: 'Cool Effect', description: 'Choose specific climate projects to support — forests, clean cookstoves, methane capture. 90% of funds go directly to projects.', region: 'us', url: 'https://www.cooleffect.org', standard: 'Gold Standard verified' },
    { name: 'Terrapass', description: 'Subscription plans for households scaled to your size and lifestyle. Independent third-party audits published publicly.', region: 'us', url: 'https://terrapass.com', standard: 'Gold Standard + Verified Carbon Standard' },
    { name: 'Wren', description: 'Monthly subscription funding a portfolio of climate projects. Shows exactly where your money goes with regular updates.', region: 'us', url: 'https://www.wren.co', standard: 'Multiple verified standards' },
    { name: 'myclimate', description: 'Swiss nonprofit offering high quality climate project funding for individuals and organizations worldwide.', region: 'international', url: 'https://www.myclimate.org', standard: 'Gold Standard verified' },
    { name: 'GoClimate', description: 'Swedish climate nonprofit. Simple monthly subscription with full transparency on where money goes.', region: 'international', url: 'https://www.goclimate.com', standard: 'Gold Standard verified' },
  ];

  const getWhoLabel = (who) => {
    if (who === 'both') return current.both;
    if (who === 'renter') return current.renterFriendly;
    return current.ownerOnly;
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: '2px solid #4F8C6F',
    fontSize: '14px',
    backgroundColor: '#FAF7F2',
    color: '#2C2C2C',
    boxSizing: 'border-box',
    outline: 'none',
    fontFamily: 'Poppins, sans-serif',
  };

  const renderCard = (item, showStandard = false) => (
    <div key={item.name} style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    }}>
      <h3 style={{ color: '#2C2C2C', fontSize: '16px', margin: '0 0 6px 0' }}>
        {item.name}
      </h3>
      <p style={{ color: '#666', fontSize: '13px', margin: '0 0 10px 0', lineHeight: '1.6' }}>
        {item.description}
      </p>
      {showStandard && item.standard && (
        <div style={{ backgroundColor: '#EBF3EE', borderRadius: '8px', padding: '6px 12px', marginBottom: '10px' }}>
          <p style={{ color: '#4F8C6F', fontSize: '11px', margin: 0, fontWeight: '600' }}>✓ {item.standard}</p>
        </div>
      )}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
        {item.who && (
          <span style={{ backgroundColor: '#F0EBE3', color: '#2C2C2C', fontSize: '11px', padding: '3px 8px', borderRadius: '8px' }}>
            {getWhoLabel(item.who)}
          </span>
        )}
        <span style={{ backgroundColor: '#F0EBE3', color: '#2C2C2C', fontSize: '11px', padding: '3px 8px', borderRadius: '8px' }}>
          {item.region === 'us' ? current.us : current.international}
        </span>
      </div>
      <button
        onClick={() => window.open(item.url, '_blank')}
        style={{
          width: '100%',
          backgroundColor: '#4F8C6F',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: '600',
          cursor: 'pointer',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {current.visitSite}
      </button>
    </div>
  );

  const navSections = ['energy', 'banking', 'action', 'fund', 'submit'];

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
        <div style={{ width: '100%', maxWidth: '900px', position: 'relative' }}>

          {/* Sticky side nav */}
          <div style={{
            position: 'fixed',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 100,
          }}>
            {navSections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  width: '64px',
                  padding: '8px 4px',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: activeSection === section ? '#4F8C6F' : 'white',
                  color: activeSection === section ? 'white' : '#A0A0A0',
                  fontSize: '18px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                <span style={{ fontSize: '18px' }}>{current.sections[section].icon}</span>
                <span style={{
                  fontSize: '9px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: activeSection === section ? '600' : '400',
                  lineHeight: '1.2',
                  textAlign: 'center',
                }}>
                  {current.sections[section].label}
                </span>
              </button>
            ))}
          </div>

          <h1 style={{ color: '#4F8C6F', fontSize: '28px', marginBottom: '8px', marginTop: '16px' }}>
            {current.title}
          </h1>
          <p style={{ color: '#2C2C2C', fontSize: '14px', marginBottom: '40px' }}>
            {current.subtitle}
          </p>

          {/* Green Energy Section */}
          <div ref={sectionRefs.energy} style={{ marginBottom: '48px' }}>
            <h2 style={{ color: '#2C2C2C', fontSize: '22px', marginBottom: '8px' }}>
              {current.energyTitle}
            </h2>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
              {current.energyDesc}
            </p>
            {energyProviders.map(item => renderCard(item))}
          </div>

          {/* Green Banking Section */}
          <div ref={sectionRefs.banking} style={{ marginBottom: '48px' }}>
            <h2 style={{ color: '#2C2C2C', fontSize: '22px', marginBottom: '8px' }}>
              {current.bankingTitle}
            </h2>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
              {current.bankingDesc}
            </p>
            {banks.map(item => renderCard(item))}
          </div>

          {/* Take Action Section */}
          <div ref={sectionRefs.action} style={{ marginBottom: '48px' }}>
            <h2 style={{ color: '#2C2C2C', fontSize: '22px', marginBottom: '8px' }}>
              {current.actionTitle}
            </h2>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
              {current.actionDesc}
            </p>
            {organizations.map(item => renderCard(item))}
          </div>

          {/* Fund Climate Projects Section */}
          <div ref={sectionRefs.fund} style={{ marginBottom: '48px' }}>
            <h2 style={{ color: '#2C2C2C', fontSize: '22px', marginBottom: '8px' }}>
              {current.fundTitle}
            </h2>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
              {current.fundDesc}
            </p>
            {fundPrograms.map(item => renderCard(item, true))}
          </div>

          {/* Community submissions */}
          {submissions.length > 0 && (
            <div style={{ marginBottom: '48px' }}>
              <p style={{ color: '#4F8C6F', fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
                {current.communityLabel}
              </p>
              {submissions.map((item, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '16px',
                  marginBottom: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  borderLeft: '3px solid #4F8C6F',
                }}>
                  <h3 style={{ color: '#2C2C2C', fontSize: '15px', margin: '0 0 6px 0' }}>{item.name}</h3>
                  <p style={{ color: '#666', fontSize: '13px', margin: '0 0 10px 0', lineHeight: '1.5' }}>{item.description}</p>
                  <button
                    onClick={() => window.open(item.url.startsWith('http') ? item.url : `https://${item.url}`, '_blank')}
                    style={{
                      backgroundColor: '#4F8C6F', color: 'white', border: 'none',
                      padding: '8px 16px', borderRadius: '20px', fontSize: '13px',
                      cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {current.visitSite}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Transparency note */}
          <div style={{
            backgroundColor: '#EBF3EE',
            borderRadius: '16px',
            padding: '16px',
            marginBottom: '48px',
          }}>
            <p style={{ color: '#4F8C6F', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
              🌱 {current.note}
            </p>
          </div>

          {/* Community Submission Form */}
          <div ref={sectionRefs.submit} style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <h3 style={{ color: '#2C2C2C', fontSize: '18px', margin: '0 0 8px 0' }}>
              {current.submitTitle}
            </h3>
            <p style={{ color: '#666', fontSize: '13px', margin: '0 0 20px 0', lineHeight: '1.5' }}>
              {current.submitDesc}
            </p>
            {submitted ? (
              <p style={{ color: '#4F8C6F', fontSize: '15px', textAlign: 'center', padding: '16px 0' }}>
                {current.submitSuccess}
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input
                  type="text"
                  placeholder={current.submitName}
                  value={submission.name}
                  onChange={(e) => setSubmission({ ...submission, name: e.target.value })}
                  style={inputStyle}
                />
                <textarea
                  placeholder={current.submitDescription}
                  value={submission.description}
                  onChange={(e) => setSubmission({ ...submission, description: e.target.value })}
                  style={{ ...inputStyle, height: '80px', resize: 'vertical' }}
                />
                <input
                  type="text"
                  placeholder={current.submitUrl}
                  value={submission.url}
                  onChange={(e) => setSubmission({ ...submission, url: e.target.value })}
                  style={inputStyle}
                />
                <select
                  value={submission.category}
                  onChange={(e) => setSubmission({ ...submission, category: e.target.value })}
                  style={inputStyle}
                >
                  {Object.entries(current.submitCategories).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
                <button
                  onClick={handleSubmit}
                  disabled={!submission.name || !submission.description || !submission.url}
                  style={{
                    width: '100%',
                    backgroundColor: submission.name && submission.description && submission.url ? '#D4956A' : '#E8E0D5',
                    color: submission.name && submission.description && submission.url ? 'white' : '#A0A0A0',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '30px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: submission.name && submission.description && submission.url ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  🌱 {current.submitButton}
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
      <NavBar activeTab="goFurther" onTabChange={onTabChange} language={language} />
    </>
  );
}

export default GoFurther;