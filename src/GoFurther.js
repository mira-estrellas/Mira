import React, { useState } from 'react';
import NavBar from './NavBar';

function GoFurther({ language, onTabChange }) {
  const [activeSection, setActiveSection] = useState('energy');
  const [showSubmitForm, setShowSubmitForm] = useState(false);
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

  const handleSubmit = () => {
    if (!submission.name || !submission.description || !submission.url) return;
    const newSubmission = { ...submission, id: Date.now(), category: activeSection };
    const updated = [...submissions, newSubmission];
    setSubmissions(updated);
    try {
      localStorage.setItem('mira_go_further_submissions', JSON.stringify(updated));
    } catch {}
    setSubmission({ name: '', description: '', url: '', category: activeSection });
    setSubmitted(true);
    setShowSubmitForm(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const content = {
    EN: {
      title: 'Go Further',
      subtitle: 'Small steps add up. Here\'s how to go even further.',
      energy: '⚡ Green Energy',
      banking: '🏦 Green Banking',
      action: '📣 Take Action',
      fund: '💸 Fund Projects',
      energyTitle: 'Switch to Clean Energy',
      energyDesc: 'These providers let you switch your home electricity to renewable energy — no solar panels needed. Some work even if you rent.',
      bankingTitle: 'Bank Green',
      bankingDesc: 'Traditional banks invest your deposits in fossil fuels. These alternatives don\'t.',
      actionTitle: 'Take Action',
      actionDesc: 'Individual action matters — but collective action changes systems. Here\'s how to connect with others.',
      fundTitle: 'Fund Climate Projects',
      fundDesc: 'These programs are independently verified and trusted by climate scientists worldwide. Mira has no financial relationship with any of them.',
      both: '✅ Renters & Owners',
      renterFriendly: '🏠 Works for Renters',
      ownerOnly: '🏡 Homeowners',
      us: '🇺🇸 U.S.',
      international: '🌍 International',
      visitSite: 'Visit Site →',
      note: 'Mira has no affiliation with any of these services. We list them equally because they share our mission.',
      suggestButton: '➕ Know a resource? Suggest one',
      submitTitle: 'Suggest a Resource',
      submitDesc: 'Know a service or organization that belongs here? Share it and we\'ll review it.',
      submitName: 'Resource name',
      submitDescription: 'What does it do? (one or two sentences)',
      submitUrl: 'Website URL',
      submitButton: 'Submit',
      submitSuccess: 'Thank you! We\'ll review your suggestion. 🌱',
      cancel: 'Cancel',
      communityLabel: '🌱 Suggested by the Mira community:',
    },
    ES: {
      title: 'Ir Más Lejos',
      subtitle: 'Los pequeños pasos suman. Así es cómo ir aún más lejos.',
      energy: '⚡ Energía Verde',
      banking: '🏦 Banca Verde',
      action: '📣 Tomar Acción',
      fund: '💸 Financiar',
      energyTitle: 'Cambia a Energía Limpia',
      energyDesc: 'Estos proveedores te permiten cambiar tu electricidad a energía renovable — sin paneles solares.',
      bankingTitle: 'Banca Verde',
      bankingDesc: 'Los bancos tradicionales invierten tus depósitos en combustibles fósiles. Estas alternativas no.',
      actionTitle: 'Toma Acción',
      actionDesc: 'La acción individual importa — pero la acción colectiva cambia sistemas.',
      fundTitle: 'Financia Proyectos Climáticos',
      fundDesc: 'Estos programas están verificados de forma independiente. Mira no tiene ninguna relación financiera con ninguno de ellos.',
      both: '✅ Inquilinos y Propietarios',
      renterFriendly: '🏠 Funciona para Inquilinos',
      ownerOnly: '🏡 Propietarios',
      us: '🇺🇸 EE.UU.',
      international: '🌍 Internacional',
      visitSite: 'Visitar Sitio →',
      note: 'Mira no tiene afiliación con ninguno de estos servicios. Los listamos por igual porque comparten nuestra misión.',
      suggestButton: '➕ ¿Conoces un recurso? Sugiérelo',
      submitTitle: 'Sugerir un Recurso',
      submitDesc: '¿Conoces un servicio u organización que debería estar aquí? Compártelo.',
      submitName: 'Nombre del recurso',
      submitDescription: '¿Qué hace?',
      submitUrl: 'URL del sitio web',
      submitButton: 'Enviar',
      submitSuccess: '¡Gracias! Revisaremos tu sugerencia. 🌱',
      cancel: 'Cancelar',
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

  const getItems = () => {
    if (activeSection === 'energy') return energyProviders;
    if (activeSection === 'banking') return banks;
    if (activeSection === 'action') return organizations;
    if (activeSection === 'fund') return fundPrograms;
    return [];
  };

  const getTitle = () => {
    if (activeSection === 'energy') return current.energyTitle;
    if (activeSection === 'banking') return current.bankingTitle;
    if (activeSection === 'action') return current.actionTitle;
    return current.fundTitle;
  };

  const getDesc = () => {
    if (activeSection === 'energy') return current.energyDesc;
    if (activeSection === 'banking') return current.bankingDesc;
    if (activeSection === 'action') return current.actionDesc;
    return current.fundDesc;
  };

  const getWhoLabel = (who) => {
    if (who === 'both') return current.both;
    if (who === 'renter') return current.renterFriendly;
    return current.ownerOnly;
  };

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
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

  const tabStyle = (active) => ({
    flex: 1,
    padding: '10px',
    backgroundColor: active ? '#4F8C6F' : 'transparent',
    color: active ? 'white' : '#A0A0A0',
    border: 'none',
    borderRadius: '12px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: active ? 'bold' : 'normal',
    fontFamily: 'Poppins, sans-serif',
  });

  const communitySubmissions = submissions.filter(s => s.category === activeSection);

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

          {/* Tabs */}
          <div style={{
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '4px',
            marginBottom: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            gap: '4px',
          }}>
            {['energy', 'banking', 'action', 'fund'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setShowSubmitForm(false);
                  setSubmitted(false);
                }}
                style={tabStyle(activeSection === section)}
              >
                {section === 'energy' ? current.energy :
                 section === 'banking' ? current.banking :
                 section === 'action' ? current.action :
                 current.fund}
              </button>
            ))}
          </div>

          {/* Section Title and Description */}
          <h2 style={{ color: '#2C2C2C', fontSize: '20px', marginBottom: '8px' }}>
            {getTitle()}
          </h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6' }}>
            {getDesc()}
          </p>

          {/* Suggest a Resource Button */}
          {submitted ? (
            <div style={{
              backgroundColor: '#EBF3EE',
              borderRadius: '12px',
              padding: '12px 16px',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
              <p style={{ color: '#4F8C6F', fontSize: '14px', margin: 0 }}>
                {current.submitSuccess}
              </p>
            </div>
          ) : !showSubmitForm ? (
            <button
              onClick={() => setShowSubmitForm(true)}
              style={{
                width: '100%',
                backgroundColor: 'white',
                color: '#4F8C6F',
                border: '2px dashed #4F8C6F',
                padding: '12px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '20px',
                fontFamily: 'Poppins, sans-serif',
                transition: 'all 0.2s ease',
              }}
            >
              {current.suggestButton}
            </button>
          ) : (
            <div style={{ ...sectionStyle, marginBottom: '20px', border: '2px solid #4F8C6F' }}>
              <h3 style={{ color: '#2C2C2C', fontSize: '16px', margin: '0 0 6px 0' }}>
                {current.submitTitle}
              </h3>
              <p style={{ color: '#666', fontSize: '13px', margin: '0 0 16px 0' }}>
                {current.submitDesc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={handleSubmit}
                    disabled={!submission.name || !submission.description || !submission.url}
                    style={{
                      flex: 1,
                      backgroundColor: submission.name && submission.description && submission.url ? '#D4956A' : '#E8E0D5',
                      color: submission.name && submission.description && submission.url ? 'white' : '#A0A0A0',
                      border: 'none',
                      padding: '12px',
                      borderRadius: '30px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: submission.name && submission.description && submission.url ? 'pointer' : 'not-allowed',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    🌱 {current.submitButton}
                  </button>
                  <button
                    onClick={() => setShowSubmitForm(false)}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#A0A0A0',
                      border: '2px solid #E8E0D5',
                      padding: '12px 20px',
                      borderRadius: '30px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {current.cancel}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Resource Cards */}
          {getItems().map((item) => (
            <div key={item.name} style={sectionStyle}>
              <h3 style={{ color: '#2C2C2C', fontSize: '16px', margin: '0 0 6px 0' }}>
                {item.name}
              </h3>
              <p style={{ color: '#666', fontSize: '13px', margin: '0 0 10px 0', lineHeight: '1.6' }}>
                {item.description}
              </p>
              {item.standard && (
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
                  {item.region === 'us' ? 'U.S.' : '🌍 International'}
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
          ))}

          {/* Community Submissions for this section */}
          {communitySubmissions.length > 0 && (
            <div style={{ marginTop: '8px' }}>
              <p style={{ color: '#4F8C6F', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>
                {current.communityLabel}
              </p>
              {communitySubmissions.map((item, index) => (
                <div key={index} style={{
                  ...sectionStyle,
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
            marginTop: '24px',
          }}>
            <p style={{ color: '#4F8C6F', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
              🌱 {current.note}
            </p>
          </div>

        </div>
      </div>
      <NavBar activeTab="goFurther" onTabChange={onTabChange} language={language} />
    </>
  );
}

export default GoFurther;