import React, { useState } from 'react';
import NavBar from './NavBar';

function Profile({ language, zipCode, housingType, budget, householdSize, householdIncome, savedIncentives, onUpdateProfile, onTabChange }) {

  const [editing, setEditing] = useState(false);
  const [newZip, setNewZip] = useState(zipCode);
  const [newHousing, setNewHousing] = useState(housingType);
  const [newBudget, setNewBudget] = useState(budget || '');
  const [newSize, setNewSize] = useState(householdSize || 2);
  const [newIncome, setNewIncome] = useState(householdIncome || 80000);
  const [saved, setSaved] = useState(false);

  const incomeBrackets = [
    { label: 'Under $30,000', value: 20000 },
    { label: '$30,000 – $60,000', value: 45000 },
    { label: '$60,000 – $100,000', value: 80000 },
    { label: '$100,000 – $150,000', value: 125000 },
    { label: 'Over $150,000', value: 175000 },
  ];

  const incomeBracketsES = [
    { label: 'Menos de $30,000', value: 20000 },
    { label: '$30,000 – $60,000', value: 45000 },
    { label: '$60,000 – $100,000', value: 80000 },
    { label: '$100,000 – $150,000', value: 125000 },
    { label: 'Más de $150,000', value: 175000 },
  ];

  const content = {
    EN: {
      title: 'My Profile',
      subtitle: 'Manage your preferences and saved information.',
      location: 'Location',
      housing: 'Housing Type',
      monthlyBudget: 'Monthly Budget',
      householdSize: 'Household Size',
      householdIncome: 'Annual Household Income',
      renter: 'Renter',
      homeowner: 'Homeowner',
      guest: 'Living with Family/Others',
      flexible: 'Flexible',
      edit: 'Edit Profile',
      save: 'Save Changes',
      cancel: 'Cancel',
      saved: 'Saved Items',
      savedEmpty: 'No saved items yet. Browse your dashboard to save incentives and swaps!',
      notifications: 'Notifications',
      notifDesc: 'Get updates when new incentives become available in your area.',
      person: 'person',
      people: 'people',
      reset: '🔄 Reset and redo onboarding',
    },
    ES: {
      title: 'Mi Perfil',
      subtitle: 'Administra tus preferencias e información guardada.',
      location: 'Ubicación',
      housing: 'Tipo de Vivienda',
      monthlyBudget: 'Presupuesto Mensual',
      householdSize: 'Tamaño del Hogar',
      householdIncome: 'Ingreso Anual del Hogar',
      renter: 'Inquilino',
      homeowner: 'Propietario',
      guest: 'Vivo con Familia/Otros',
      flexible: 'Flexible',
      edit: 'Editar Perfil',
      save: 'Guardar Cambios',
      cancel: 'Cancelar',
      saved: 'Elementos Guardados',
      savedEmpty: '¡Aún no hay elementos guardados. Explora tu panel para guardar incentivos!',
      notifications: 'Notificaciones',
      notifDesc: 'Recibe actualizaciones cuando haya nuevos incentivos disponibles en tu área.',
      person: 'persona',
      people: 'personas',
      reset: '🔄 Restablecer y rehacer el proceso',
    },
  };

  const current = content[language] || content.EN;
  const currentBrackets = language === 'ES' ? incomeBracketsES : incomeBrackets;
  const [notifications, setNotifications] = useState(true);

  const getIncomeLabel = (value) => {
    const bracket = incomeBrackets.find(b => b.value === value);
    return bracket ? bracket.label : '$60,000 – $100,000';
  };

  const getHousingLabel = (type) => {
    if (type === 'rent') return current.renter;
    if (type === 'own') return current.homeowner;
    if (type === 'guest') return current.guest;
    return current.renter;
  };

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  };

  const labelStyle = {
    color: '#A0A0A0',
    fontSize: '12px',
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const valueStyle = {
    color: '#2C2C2C',
    fontSize: '16px',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: '2px solid #4F8C6F',
    fontSize: '16px',
    backgroundColor: '#FAF7F2',
    color: '#2C2C2C',
    boxSizing: 'border-box',
    outline: 'none',
    marginTop: '4px',
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('mira_profile');
    } catch {}
    window.location.reload();
  };

  return (
    <>
      <NavBar activeTab="profile" onTabChange={onTabChange} language={language} fixed={false} />
      <div style={{
        backgroundColor: '#F0EBE3',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '24px',
        paddingBottom: '40px',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '600px',
        }}>

          <h1 style={{
            color: '#4F8C6F',
            fontSize: '28px',
            marginBottom: '8px',
            marginTop: '16px',
          }}>
            {current.title}
          </h1>
          <p style={{
            color: '#2C2C2C',
            fontSize: '14px',
            marginBottom: '32px',
          }}>
            {current.subtitle}
          </p>

          {/* Profile Info Section */}
          <div style={sectionStyle}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#EBF3EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}>
                🌱
              </div>
              <button
                onClick={() => setEditing(!editing)}
                style={{
                  backgroundColor: editing ? 'transparent' : '#4F8C6F',
                  color: editing ? '#A0A0A0' : 'white',
                  border: editing ? '1px solid #E8E0D5' : 'none',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                {editing ? current.cancel : current.edit}
              </button>
            </div>

            {editing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Zip Code */}
                <div>
                  <p style={labelStyle}>📍 {current.location}</p>
                  <input
                    type="number"
                    value={newZip}
                    onChange={(e) => setNewZip(e.target.value)}
                    maxLength={5}
                    style={inputStyle}
                  />
                </div>

                {/* Housing Type */}
                <div>
                  <p style={labelStyle}>🏠 {current.housing}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                    {['rent', 'own', 'guest'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setNewHousing(option)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '12px',
                          border: `2px solid ${newHousing === option ? '#4F8C6F' : '#E8E0D5'}`,
                          backgroundColor: newHousing === option ? '#EBF3EE' : '#FAF7F2',
                          color: '#2C2C2C',
                          fontSize: '14px',
                          cursor: 'pointer',
                          textAlign: 'center',
                        }}
                      >
                        {option === 'rent' ? `🏠 ${current.renter}` :
                         option === 'own' ? `🏡 ${current.homeowner}` :
                         `👨‍👩‍👧 ${current.guest}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Household Size */}
                <div>
                  <p style={labelStyle}>👥 {current.householdSize}</p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '8px',
                    marginTop: '4px',
                  }}>
                    {[1, 2, 3, 4, 5, 6, 7, '8+'].map((num) => (
                      <button
                        key={num}
                        onClick={() => setNewSize(num === '8+' ? 8 : num)}
                        style={{
                          padding: '14px 8px',
                          borderRadius: '12px',
                          border: `2px solid ${(num === '8+' ? 8 : num) === newSize ? '#4F8C6F' : '#E8E0D5'}`,
                          backgroundColor: (num === '8+' ? 8 : num) === newSize ? '#EBF3EE' : '#FAF7F2',
                          color: (num === '8+' ? 8 : num) === newSize ? '#4F8C6F' : '#2C2C2C',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <p style={{ color: '#4F8C6F', fontSize: '13px', marginTop: '8px', textAlign: 'center' }}>
                    {newSize} {newSize === 1 ? current.person : current.people}
                  </p>
                </div>

                {/* Household Income */}
                <div>
                  <p style={labelStyle}>💰 {current.householdIncome}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                    {currentBrackets.map((bracket, index) => (
                      <button
                        key={index}
                        onClick={() => setNewIncome(bracket.value)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '12px',
                          border: `2px solid ${newIncome === bracket.value ? '#4F8C6F' : '#E8E0D5'}`,
                          backgroundColor: newIncome === bracket.value ? '#EBF3EE' : '#FAF7F2',
                          color: '#2C2C2C',
                          fontSize: '14px',
                          cursor: 'pointer',
                          textAlign: 'center',
                        }}
                      >
                        {bracket.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Monthly Budget */}
                <div>
                  <p style={labelStyle}>💵 {current.monthlyBudget}</p>
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#4F8C6F',
                      fontSize: '16px',
                    }}>$</span>
                    <input
                      type="number"
                      value={newBudget}
                      onChange={(e) => setNewBudget(e.target.value)}
                      style={{ ...inputStyle, paddingLeft: '28px' }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSaved(true);
                    setTimeout(() => {
                      onUpdateProfile({
                        zipCode: newZip,
                        housingType: newHousing,
                        budget: newBudget,
                        householdSize: newSize,
                        householdIncome: newIncome,
                      });
                      setEditing(false);
                      setSaved(false);
                    }, 1500);
                  }}
                  style={{
                    width: '100%',
                    backgroundColor: saved ? '#4F8C6F' : '#D4956A',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '30px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginTop: '8px',
                  }}
                >
                  {saved ? '✓ Saved!' : current.save}
                </button>

                {saved && (
                  <p style={{
                    color: '#4F8C6F',
                    fontSize: '14px',
                    textAlign: 'center',
                    marginTop: '12px',
                    animation: 'fadeIn 0.3s ease',
                  }}>
                    Taking you back to your dashboard with updated options... 🌱
                  </p>
                )}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p style={labelStyle}>📍 {current.location}</p>
                  <p style={valueStyle}>{zipCode || 'Not set'}</p>
                </div>
                <div>
                  <p style={labelStyle}>🏠 {current.housing}</p>
                  <p style={valueStyle}>{getHousingLabel(housingType)}</p>
                </div>
                <div>
                  <p style={labelStyle}>👥 {current.householdSize}</p>
                  <p style={valueStyle}>{householdSize ? `${householdSize === 8 ? '8+' : householdSize} ${householdSize === 1 ? current.person : current.people}` : '2 people'}</p>
                </div>
                <div>
                  <p style={labelStyle}>💰 {current.householdIncome}</p>
                  <p style={valueStyle}>{getIncomeLabel(householdIncome)}</p>
                </div>
                <div>
                  <p style={labelStyle}>💵 {current.monthlyBudget}</p>
                  <p style={valueStyle}>{budget ? `$${budget}/mo` : current.flexible}</p>
                </div>
              </div>
            )}

            {/* Reset button — always visible at bottom */}
            <button
              onClick={handleReset}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                color: '#A0A0A0',
                border: 'none',
                padding: '12px',
                fontSize: '13px',
                cursor: 'pointer',
                marginTop: '16px',
              }}
            >
              {current.reset}
            </button>
          </div>

          {/* Notifications Section */}
          <div style={sectionStyle}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p style={{ color: '#2C2C2C', fontSize: '16px', fontWeight: '500', margin: 0 }}>
                  🔔 {current.notifications}
                </p>
                <p style={{ color: '#A0A0A0', fontSize: '13px', marginTop: '4px' }}>
                  {current.notifDesc}
                </p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                style={{
                  backgroundColor: notifications ? '#4F8C6F' : '#E8E0D5',
                  border: 'none',
                  borderRadius: '20px',
                  width: '52px',
                  height: '28px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                  marginLeft: '16px',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: notifications ? '26px' : '3px',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                }}/>
              </button>
            </div>
          </div>

          {/* Saved Items Section */}
          <div style={sectionStyle}>
            <p style={{ color: '#2C2C2C', fontSize: '16px', fontWeight: '500', marginBottom: '12px' }}>
              ⭐ {current.saved}
            </p>
            {!savedIncentives || savedIncentives.length === 0 ? (
              <p style={{ color: '#A0A0A0', fontSize: '14px', textAlign: 'center', padding: '24px 0' }}>
                {current.savedEmpty}
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {savedIncentives.map((item, index) => (
                  <div key={index} style={{
                    backgroundColor: '#FAF7F2',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: '#2C2C2C', fontSize: '14px', fontWeight: '500', margin: '0 0 4px 0' }}>
                        {item.program || item.title}
                      </p>
                      <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>
                        {item.short_description || item.description}
                      </p>
                    </div>
                    <span style={{
                      backgroundColor: '#EBF3EE',
                      color: '#4F8C6F',
                      borderRadius: '20px',
                      padding: '4px 10px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.amount?.type === 'dollar_amount'
                        ? `$${item.amount.number.toLocaleString()}`
                        : item.amount?.type === 'percent'
                        ? `${item.amount.number}%`
                        : item.amount || 'Varies'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
      <NavBar activeTab="profile" onTabChange={onTabChange} language={language} fixed={false} />
    </>
  );
}

export default Profile;