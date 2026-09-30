import React, { useState } from 'react';
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
      subtitle: 'Ready to do more? These are the next steps.',
      energy: '⚡ Green Energy',
      banking: '🏦 Green Banking',
      action: '📣 Take Action',
      energyTitle: 'Switch to Clean Energy',
      energyDesc: 'These providers let you switch your home electricity to renewable energy — no solar panels needed. Some work even if you rent.',
      bankingTitle: 'Bank Green',
      bankingDesc: 'Traditional banks invest your deposits in fossil fuels. These alternatives don\'t.',
      actionTitle: 'Take Action',
      actionDesc: 'Individual action matters — but collective action changes systems. Here\'s how to connect with others and go even further.',
      fundTitle: '💸 Fund Climate Projects',
      fundDesc: 'These programs are independently verified and trusted by climate scientists worldwide. Mira has no financial relationship with any of them.',
      renterFriendly: '🏠 Works for Renters',
      ownerOnly: '🏡 Homeowners',
      both: '✅ Renters & Owners',
      international: '🌍 International',
      us: '🇺🇸 US',
      visitSite: 'Visit Site →',
      note: 'Mira has no affiliation with any of these services. We list them equally because they share our mission.',
      submitTitle: '🌱 Know a resource we should add?',
      submitDesc: 'Help us grow this list. Share a service or organization you trust.',
      submitName: 'Resource name',
      submitDescription: 'What does it do?',
      submitUrl: 'Website URL',
      submitCategory: 'Category',
      submitButton: 'Submit Resource',
      submitSuccess: 'Thank you! We\'ll review your suggestion. 🌱',
      submitCategories: {
        energy: '⚡ Green Energy',
        banking: '🏦 Green Banking',
        action: '📣 Take Action',
        fund: '💸 Fund Climate Projects',
      },
      yourSubmissions: 'Community suggestions:',
    },
    ES: {
      title: 'Ir Más Lejos',
      subtitle: '¿Listo para hacer más? Estos son los próximos pasos.',
      energy: '⚡ Energía Verde',
      banking: '🏦 Banca Verde',
      action: '📣 Tomar Acción',
      energyTitle: 'Cambia a Energía Limpia',
      energyDesc: 'Estos proveedores te permiten cambiar tu electricidad a energía renovable — sin paneles solares. Algunos funcionan incluso si alquilas.',
      bankingTitle: 'Banca Verde',
      bankingDesc: 'Los bancos tradicionales invierten tus depósitos en combustibles fósiles. Estas alternativas no.',
      actionTitle: 'Toma Acción',
      actionDesc: 'La acción individual importa — pero la acción colectiva cambia sistemas. Así es cómo conectarte con otros e ir aún más lejos.',
      fundTitle: '💸 Financia Proyectos Climáticos',
      fundDesc: 'Estos programas están verificados de forma independiente y son de confianza de científicos del clima en todo el mundo. Mira no tiene ninguna relación financiera con ninguno de ellos.',
      renterFriendly: '🏠 Funciona para Inquilinos',
      ownerOnly: '🏡 Propietarios',
      both: '✅ Inquilinos y Propietarios',
      international: '🌍 Internacional',
      us: '🇺🇸 EE.UU.',
      visitSite: 'Visitar Sitio →',
      note: 'Mira no tiene afiliación con ninguno de estos servicios. Los listamos por igual porque comparten nuestra misión.',
      submitTitle: '🌱 ¿Conoces un recurso que deberíamos agregar?',
      submitDesc: 'Ayúdanos a crecer esta lista. Comparte un servicio u organización en la que confíes.',
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
        fund: '💸 Proyectos Climáticos',
      },
      yourSubmissions: 'Sugerencias de la comunidad:',
    },
  };

  const current = content[language] || content.EN;

  const energyProviders = [
    {
      name: 'Arcadia',
      description: 'Connects your existing utility to community solar. Works nationwide for renters and homeowners. Can save 5-15% on your bill.',
      who: 'both',
      region: 'us',
      url: 'https://www.arcadia.com',
    },
    {
      name: 'CleanChoice Energy',
      description: 'Switch to 100% renewable electricity in minutes. No new equipment needed. Available in 11 states across the Northeast, Mid-Atlantic and Midwest.',
      who: 'both',
      region: 'us',
      url: 'https://cleanchoiceenergy.com',
    },
    {
      name: 'Green Mountain Energy',
      description: 'The oldest 100% renewable retailer in the US. Offers wind and solar plans. Available in Texas, New York, New Jersey, Pennsylvania, Illinois, Maryland and Massachusetts.',
      who: 'both',
      region: 'us',
      url: 'https://www.greenmountainenergy.com',
    },
    {
      name: 'Perch Energy',
      description: 'Community solar subscriptions across 16 states. Subscribe to a share of a local solar farm and get credits on your bill. No installation ever.',
      who: 'both',
      region: 'us',
      url: 'https://www.perchenergy.com',
    },
    {
      name: 'Rhythm Energy',
      description: '100% renewable wind and solar plans in Texas. Includes solar buyback options for homeowners with panels.',
      who: 'both',
      region: 'us',
      url: 'https://www.rhythmenergy.com',
    },
    {
      name: 'Bullfrog Power',
      description: 'Canada\'s leading green energy provider. Offers renewable electricity and gas for homes and businesses.',
      who: 'both',
      region: 'international',
      url: 'https://www.bullfrogpower.com',
    },
    {
      name: 'Good Energy',
      description: 'UK\'s leading independent green energy supplier. 100% renewable electricity from British generators.',
      who: 'both',
      region: 'international',
      url: 'https://www.goodenergy.co.uk',
    },
  ];

  const banks = [
    {
      name: 'Amalgamated Bank',
      description: 'America\'s most progressive bank. Does not invest in fossil fuels. Full FDIC insured checking, savings and loans.',
      region: 'us',
      url: 'https://www.amalgamatedbank.com',
    },
    {
      name: 'Aspiration',
      description: 'Plant a tree with every purchase. Fossil fuel free investments. Pays competitive interest on savings.',
      region: 'us',
      url: 'https://www.aspiration.com',
    },
    {
      name: 'Clean Energy Credit Union',
      description: 'Credit union focused specifically on financing clean energy for members — solar panels, EVs, heat pumps and more at low rates.',
      region: 'us',
      url: 'https://www.cleanenergycu.org',
    },
    {
      name: 'Triodos Bank',
      description: 'European leader in ethical banking. Only finances organizations that benefit people and the planet. Available in Netherlands, Belgium, UK, Spain and Germany.',
      region: 'international',
      url: 'https://www.triodos.com',
    },
  ];

  const organizations = [
    {
      name: 'Sierra Club',
      description: 'America\'s largest environmental organization. Local chapters in every state. Volunteer opportunities, advocacy campaigns and community events.',
      region: 'us',
      url: 'https://www.sierraclub.org',
    },
    {
      name: 'Sunrise Movement',
      description: 'Youth-led movement to stop climate change and create good jobs. Local hubs across the US organizing for a Green New Deal.',
      region: 'us',
      url: 'https://www.sunrisemovement.org',
    },
    {
      name: '350.org',
      description: 'Global grassroots climate movement active in 188 countries. Campaigns to end fossil fuel expansion and push for a just transition.',
      region: 'international',
      url: 'https://350.org',
    },
    {
      name: 'Climate Action Network',
      description: 'Network of over 1,500 NGOs worldwide working to limit climate change. Find local member organizations in your country.',
      region: 'international',
      url: 'https://climatenetwork.org',
    },
    {
      name: 'Contact Your Representatives',
      description: 'Find and contact your local, state and federal representatives about clean energy policy. Your voice as a constituent matters more than you think.',
      region: 'us',
      url: 'https://www.congress.gov/members/find-your-member',
    },
    {
      name: 'Vote Solar',
      description: 'Nonprofit fighting for solar energy policies that benefit everyone. Advocates for equitable clean energy access across the US.',
      region: 'us',
      url: 'https://votesolar.org',
    },
  ];

  const fundPrograms = [
    {
      name: 'Cool Effect',
      description: 'Rigorously vetted climate projects. Choose specific ones to support — forests, clean cookstoves, methane capture. 90% of funds go directly to projects.',
      region: 'us',
      url: 'https://www.cooleffect.org',
      standard: 'Gold Standard verified',
    },
    {
      name: 'Terrapass',
      description: 'US\'s first carbon offset provider. Subscription plans for households scaled to your size and lifestyle. Independent third-party audits published publicly.',
      region: 'us',
      url: 'https://terrapass.com',
      standard: 'Gold Standard + Verified Carbon Standard',
    },
    {
      name: 'Wren',
      description: 'Monthly subscription that funds a portfolio of climate projects. Shows you exactly where your money goes with regular project updates.',
      region: 'us',
      url: 'https://www.wren.co',
      standard: 'Multiple verified standards',
    },
    {
      name: 'myclimate',
      description: 'Swiss nonprofit offering high quality climate project funding for individuals and organizations. Strong international project portfolio.',
      region: 'international',
      url: 'https://www.myclimate.org',
      standard: 'Gold Standard verified',
    },
    {
      name: 'GoClimate',
      description: 'Swedish climate nonprofit. Simple monthly subscription to fund climate projects. Full transparency on where money goes.',
      region: 'international',
      url: 'https://www.goclimate.com',
      standard: 'Gold Standard verified',
    },
  ];

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
    fontSize: '11px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: active ? 'bold' : 'normal',
    fontFamily: 'Poppins, sans-serif',
  });

  const getWhoLabel = (who) => {
    if (who === 'both') return current.both;
    if (who === 'renter') return current.renterFriendly;
    return current.ownerOnly;
  };

  const getRegionLabel = (region) => {
    return region === 'us' ? current.us : current.international;
  };

  const renderCards = (items, showStandard = false) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((item, index) => (
        <div key={index} style={sectionStyle}>
          <h3 style={{ color: '#2C2C2C', fontSize: '16px', margin: '0 0 8px 0' }}>
            {item.name}
          </h3>
          <p style={{ color: '#666', fontSize: '13px', margin: '0 0 12px 0', lineHeight: '1.6' }}>
            {item.description}
          </p>
          {showStandard && item.standard && (
            <div style={{
              backgroundColor: '#EBF3EE',
              borderRadius: '8px',
              padding: '6px 12px',
              marginBottom: '12px',
            }}>
              <p style={{ color: '#4F8C6F', fontSize: '11px', margin: 0, fontWeight: '600' }}>
                ✓ {item.standard}
              </p>
            </div>
          )}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            {item.who && (
              <span style={{
                backgroundColor: '#F0EBE3',
                color: '#2C2C2C',
                fontSize: '11px',
                padding: '4px 8px',
                borderRadius: '8px',
              }}>
                {getWhoLabel(item.who)}
              </span>
            )}
            <span style={{
              backgroundColor: '#F0EBE3',
              color: '#2C2C2C',
              fontSize: '11px',
              padding: '4px 8px',
              borderRadius: '8px',
            }}>
              {getRegionLabel(item.region)}
            </span>
          </div>
          <button
            onClick={() => window.open(item.url, '_blank')}
            style={{
              width: '100%',
              backgroundColor: '#4F8C6F',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {current.visitSite}
          </button>
        </div>
      ))}
    </div>
  );

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

          {/* Section Tabs */}
          <div style={{
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '4px',
            marginBottom: '24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            gap: '4px',
          }}>
            {['energy', 'banking', 'action'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={tabStyle(activeSection === section)}
              >
                {section === 'energy' ? current.energy :
                 section === 'banking' ? current.banking :
                 current.action}
              </button>
            ))}
          </div>

          {/* Energy Section */}
          {activeSection === 'energy' && (
            <>
              <h2 style={{ color: '#2C2C2C', fontSize: '20px', marginBottom: '8px' }}>
                {current.energyTitle}
              </h2>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
                {current.energyDesc}
              </p>
              {renderCards(energyProviders)}
            </>
          )}

          {/* Banking Section */}
          {activeSection === 'banking' && (
            <>
              <h2 style={{ color: '#2C2C2C', fontSize: '20px', marginBottom: '8px' }}>
                {current.bankingTitle}
              </h2>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
                {current.bankingDesc}
              </p>
              {renderCards(banks)}
            </>
          )}

          {/* Take Action Section */}
          {activeSection === 'action' && (
            <>
              <h2 style={{ color: '#2C2C2C', fontSize: '20px', marginBottom: '8px' }}>
                {current.actionTitle}
              </h2>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
                {current.actionDesc}
              </p>
              {renderCards(organizations)}

              {/* Fund Climate Projects — folded into Take Action */}
              <div style={{
                backgroundColor: '#EBF3EE',
                borderRadius: '16px',
                padding: '16px',
                margin: '24px 0 16px 0',
              }}>
                <h3 style={{ color: '#2C2C2C', fontSize: '18px', margin: '0 0 8px 0' }}>
                  {current.fundTitle}
                </h3>
                <p style={{ color: '#666', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                  {current.fundDesc}
                </p>
              </div>
              {renderCards(fundPrograms, true)}
            </>
          )}

          {/* Community submissions for current section */}
          {communitySubmissions.length > 0 && (
            <div style={{ marginTop: '24px' }}>
              <p style={{ color: '#4F8C6F', fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
                🌱 {current.yourSubmissions}
              </p>
              {communitySubmissions.map((item, index) => (
                <div key={index} style={{ ...sectionStyle, borderLeft: '3px solid #4F8C6F' }}>
                  <h3 style={{ color: '#2C2C2C', fontSize: '15px', margin: '0 0 6px 0' }}>
                    {item.name}
                  </h3>
                  <p style={{ color: '#666', fontSize: '13px', margin: '0 0 10px 0', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                  <button
                    onClick={() => window.open(item.url.startsWith('http') ? item.url : `https://${item.url}`, '_blank')}
                    style={{
                      backgroundColor: '#4F8C6F',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
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

          {/* Community Submission Form */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '20px',
            marginTop: '24px',
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