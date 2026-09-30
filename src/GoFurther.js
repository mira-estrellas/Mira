import React, { useState } from 'react';
import NavBar from './NavBar';

function GoFurther({ language, onTabChange }) {
  const [activeSection, setActiveSection] = useState('energy');

  const content = {
    EN: {
      title: 'Go Further',
      subtitle: 'Ready to do more? These are the next steps.',
      energy: '⚡ Green Energy',
      offsets: '🌳 Carbon Offsets',
      banking: '🏦 Green Banking',
      involved: '🌱 Get Involved',
      energyTitle: 'Switch to Clean Energy',
      energyDesc: 'These providers let you switch your home electricity to renewable energy — no solar panels needed. Some work even if you rent.',
      offsetsTitle: 'Offset Your Carbon Footprint',
      offsetsDesc: 'After reducing what you can, offsets help cancel out what remains. All programs below are third-party verified.',
      bankingTitle: 'Bank Green',
      bankingDesc: 'Traditional banks invest your deposits in fossil fuels. These alternatives don\'t.',
      involvedTitle: 'Get Involved',
      involvedDesc: 'Individual action matters — but collective action changes systems. Here\'s how to connect with others.',
      renterFriendly: '🏠 Works for Renters',
      ownerOnly: '🏡 Homeowners',
      both: '✅ Renters & Owners',
      international: '🌍 International',
      us: '🇺🇸 US',
      visitSite: 'Visit Site →',
      note: 'Mira has no affiliation with any of these services. We list them equally because they share our mission.',
    },
    ES: {
      title: 'Ir Más Lejos',
      subtitle: '¿Listo para hacer más? Estos son los próximos pasos.',
      energy: '⚡ Energía Verde',
      offsets: '🌳 Compensaciones',
      banking: '🏦 Banca Verde',
      involved: '🌱 Participar',
      energyTitle: 'Cambia a Energía Limpia',
      energyDesc: 'Estos proveedores te permiten cambiar tu electricidad a energía renovable — sin paneles solares. Algunos funcionan incluso si alquilas.',
      offsetsTitle: 'Compensa Tu Huella de Carbono',
      offsetsDesc: 'Después de reducir lo que puedas, las compensaciones ayudan a cancelar lo que queda. Todos los programas están verificados por terceros.',
      bankingTitle: 'Banca Verde',
      bankingDesc: 'Los bancos tradicionales invierten tus depósitos en combustibles fósiles. Estas alternativas no.',
      involvedTitle: 'Participa',
      involvedDesc: 'La acción individual importa — pero la acción colectiva cambia sistemas. Así es cómo conectarte con otros.',
      renterFriendly: '🏠 Funciona para Inquilinos',
      ownerOnly: '🏡 Propietarios',
      both: '✅ Inquilinos y Propietarios',
      international: '🌍 Internacional',
      us: '🇺🇸 EE.UU.',
      visitSite: 'Visitar Sitio →',
      note: 'Mira no tiene afiliación con ninguno de estos servicios. Los listamos por igual porque comparten nuestra misión.',
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

  const offsetPrograms = [
    {
      name: 'Cool Effect',
      description: 'Rigorously vetted carbon offset projects. Choose specific projects to support — forests, clean cookstoves, methane capture. 90% of funds go directly to projects.',
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
      description: 'Swiss nonprofit offering high quality carbon offsets for individuals and organizations. Strong international project portfolio.',
      region: 'international',
      url: 'https://www.myclimate.org',
      standard: 'Gold Standard verified',
    },
    {
      name: 'GoClimate',
      description: 'Swedish climate nonprofit. Simple monthly subscription to offset your footprint. Full transparency on projects and costs.',
      region: 'international',
      url: 'https://www.goclimate.com',
      standard: 'Gold Standard verified',
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <h3 style={{ color: '#2C2C2C', fontSize: '16px', margin: 0, flex: 1 }}>
              {item.name}
            </h3>
          </div>
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
            {['energy', 'offsets', 'banking', 'involved'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={tabStyle(activeSection === section)}
              >
                {section === 'energy' ? current.energy :
                 section === 'offsets' ? current.offsets :
                 section === 'banking' ? current.banking :
                 current.involved}
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

          {/* Offsets Section */}
          {activeSection === 'offsets' && (
            <>
              <h2 style={{ color: '#2C2C2C', fontSize: '20px', marginBottom: '8px' }}>
                {current.offsetsTitle}
              </h2>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
                {current.offsetsDesc}
              </p>
              {renderCards(offsetPrograms, true)}
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

          {/* Get Involved Section */}
          {activeSection === 'involved' && (
            <>
              <h2 style={{ color: '#2C2C2C', fontSize: '20px', marginBottom: '8px' }}>
                {current.involvedTitle}
              </h2>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>
                {current.involvedDesc}
              </p>
              {renderCards(organizations)}
            </>
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