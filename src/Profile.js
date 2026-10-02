import React, { useState } from 'react';
import NavBar from './NavBar';

function Profile({ language, zipCode, housingType, budget, householdSize, householdIncome, savedIncentives, onTabChange, onUpdateProfile }) {
  const [editing, setEditing] = useState(false);
  const [newZip, setNewZip] = useState(zipCode || '');
  const [newHousing, setNewHousing] = useState(housingType || 'rent');
  const [newSize, setNewSize] = useState(householdSize || 2);
  const [newIncome, setNewIncome] = useState(householdIncome || 80000);
  const [newBudget, setNewBudget] = useState(budget || '');
  const [notifications, setNotifications] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const content = {
    EN: {
      title: 'Profile',
      subtitle: 'Your information stays on your device and is never shared.',
      location: 'Zip Code',
      housing: 'Living Situation',
      size: 'Household Size',
      income: 'Household Income',
      budget: 'Monthly Budget',
      notifications: 'Notifications',
      notificationsDesc: 'Get reminders about new incentives in your area.',
      savedIncentives: 'Saved Incentives',
      noSaved: 'No saved incentives yet. Explore your dashboard to find programs you qualify for.',
      edit: 'Edit Profile',
      save: 'Save Changes',
      cancel: 'Cancel',
      reset: 'Reset Mira',
      resetConfirm: 'This will clear all your data and restart onboarding. Are you sure?',
      housingOptions: { rent: 'Renter', own: 'Homeowner', guest: 'Living with Family' },
      incomeOptions: [
        { label: 'Under $30,000', value: 20000 },
        { label: '$30,000 to $60,000', value: 45000 },
        { label: '$60,000 to $100,000', value: 80000 },
        { label: '$100,000 to $150,000', value: 125000 },
        { label: 'Over $150,000', value: 175000 },
      ],
      people: 'people',
      person: 'person',
      perMonth: '/mo',
    },
    ES: {
      title: 'Perfil',
      subtitle: 'Tu información permanece en tu dispositivo y nunca se comparte.',
      location: 'Código Postal',
      housing: 'Situación de Vivienda',
      size: 'Tamaño del Hogar',
      income: 'Ingreso del Hogar',
      budget: 'Presupuesto Mensual',
      notifications: 'Notificaciones',
      notificationsDesc: 'Recibe recordatorios sobre nuevos incentivos en tu área.',
      savedIncentives: 'Incentivos Guardados',
      noSaved: 'Aún no hay incentivos guardados.',
      edit: 'Editar Perfil',
      save: 'Guardar Cambios',
      cancel: 'Cancelar',
      reset: 'Reiniciar Mira',
      resetConfirm: '¿Estás seguro? Esto borrará todos tus datos.',
      housingOptions: { rent: 'Inquilino', own: 'Propietario', guest: 'Vivo con Familia' },
      incomeOptions: [
        { label: 'Menos de $30,000', value: 20000 },
        { label: '$30,000 a $60,000', value: 45000 },
        { label: '$60,000 a $100,000', value: 80000 },
        { label: '$100,000 a $150,000', value: 125000 },
        { label: 'Más de $150,000', value: 175000 },
      ],
      people: 'personas',
      person: 'persona',
      perMonth: '/mes',
    },
  };

  const current = content[language] || content.EN;

  const handleSave = () => {
    const updatedProfile = {
      zipCode: newZip,
      housingType: newHousing,
      budget: newBudget,
      householdSize: newSize,
      householdIncome: newIncome,
    };
    try {
      localStorage.setItem('mira_profile', JSON.stringify({
        language,
        ...updatedProfile,
      }));
    } catch {}
    onUpdateProfile(updatedProfile);
    setEditing(false);
  };

  const handleReset = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    try {
      localStorage.clear();
    } catch {}
    window.location.reload();
  };

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '14px 20px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  };

  const labelStyle = {
    color: '#5C6B5E',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: '0 0 8px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const valueStyle = {
    color: '#1A1A1A',
    fontSize: '16px',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '12px',
    border: '2px solid #4CAF7D',
    fontSize: '15px',
    backgroundColor: '#FAF7F2',
    color: '#1A1A1A',
    boxSizing: 'border-box',
    outline: 'none',
    fontFamily: 'Poppins, sans-serif',
  };

  // SVG Icons
  const LocationIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  );

  const HomeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  );

  const PeopleIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="4"/>
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
      <path d="M21 21v-2a4 4 0 00-3-3.87"/>
    </svg>
  );

  const MoneyIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  );

  const BudgetIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
    </svg>
  );

  const BellIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 01-3.46 0"/>
    </svg>
  );

  const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );

  const TrashIcon = ({ color = 'currentColor', size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
      <path d="M10 11v6M14 11v6"/>
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
    </svg>
  );

  return (
    <>
      <NavBar activeTab="profile" onTabChange={onTabChange} language={language} fixed={false} />
      <div style={{
        backgroundColor: '#F5F0E8',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '24px',
        paddingBottom: '40px',
      }}>
        <div style={{ width: '100%', maxWidth: '600px' }}>

          <h1 style={{ color: '#1B5E3B', fontSize: '28px', marginBottom: '6px', marginTop: '16px' }}>
            {current.title}
          </h1>
          <p style={{ color: '#5C6B5E', fontSize: '14px', marginBottom: '28px', lineHeight: '1.6' }}>
            {current.subtitle}
          </p>

          {/* Profile Info */}
          <div style={sectionStyle}>
            {!editing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                <div>
                  <p style={labelStyle}><LocationIcon /> {current.location}</p>
                  <p style={valueStyle}>{zipCode || '—'}</p>
                </div>

                <div>
                  <p style={labelStyle}><HomeIcon /> {current.housing}</p>
                  <p style={valueStyle}>{current.housingOptions[housingType] || '—'}</p>
                </div>

                <div>
                  <p style={labelStyle}><PeopleIcon /> {current.size}</p>
                  <p style={valueStyle}>
                    {householdSize ? `${householdSize} ${householdSize === 1 ? current.person : current.people}` : '—'}
                  </p>
                </div>

                <div>
                  <p style={labelStyle}><MoneyIcon /> {current.income}</p>
                  <p style={valueStyle}>
                    {householdIncome ? current.incomeOptions.find(o => o.value === householdIncome)?.label || '—' : '—'}
                  </p>
                </div>

                <div>
                  <p style={labelStyle}><BudgetIcon /> {current.budget}</p>
                  <p style={valueStyle}>{budget ? `$${budget}${current.perMonth}` : '—'}</p>
                </div>

                <button
                  onClick={() => setEditing(true)}
                  style={{
                    width: '100%',
                    backgroundColor: '#1B5E3B',
                    color: 'white',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '30px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '8px',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {current.edit}
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                <div>
                  <p style={labelStyle}><LocationIcon /> {current.location}</p>
                  <input
                    type="number"
                    value={newZip}
                    onChange={(e) => setNewZip(e.target.value)}
                    maxLength={5}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <p style={labelStyle}><HomeIcon /> {current.housing}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['rent', 'own', 'guest'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setNewHousing(option)}
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: '12px',
                          border: `2px solid ${newHousing === option ? '#4CAF7D' : '#E8E0D5'}`,
                          backgroundColor: newHousing === option ? '#EBF3EE' : '#FAF7F2',
                          color: newHousing === option ? '#1B5E3B' : '#5C6B5E',
                          fontSize: '13px',
                          cursor: 'pointer',
                          fontFamily: 'Poppins, sans-serif',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {current.housingOptions[option]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={labelStyle}><PeopleIcon /> {current.size}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                    {[1, 2, 3, 4, 5, 6, 7, '8+'].map((num) => (
                      <button
                        key={num}
                        onClick={() => setNewSize(num)}
                        style={{
                          padding: '12px',
                          borderRadius: '12px',
                          border: `2px solid ${newSize === num ? '#4CAF7D' : '#E8E0D5'}`,
                          backgroundColor: newSize === num ? '#EBF3EE' : '#FAF7F2',
                          color: newSize === num ? '#1B5E3B' : '#5C6B5E',
                          fontSize: '15px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          fontFamily: 'Poppins, sans-serif',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={labelStyle}><MoneyIcon /> {current.income}</p>
                  <select
                    value={newIncome}
                    onChange={(e) => setNewIncome(Number(e.target.value))}
                    style={inputStyle}
                  >
                    {current.incomeOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <p style={labelStyle}><BudgetIcon /> {current.budget}</p>
                  <input
                    type="number"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    style={inputStyle}
                    placeholder="e.g. 200"
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={handleSave}
                    style={{
                      flex: 1,
                      backgroundColor: '#1B5E3B',
                      color: 'white',
                      border: 'none',
                      padding: '14px',
                      borderRadius: '30px',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {current.save}
                  </button>
                  <button
                    onClick={() => setEditing(false)}
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      color: '#5C6B5E',
                      border: '2px solid #E8E0D5',
                      padding: '14px',
                      borderRadius: '30px',
                      fontSize: '15px',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {current.cancel}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div style={sectionStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div>
                <p style={{ ...labelStyle, marginBottom: '4px' }}><BellIcon /> {current.notifications}</p>
                <p style={{ color: '#5C6B5E', fontSize: '13px', margin: '8px 0 4px 0' }}>
                  {current.notificationsDesc}
                </p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                style={{
                  backgroundColor: notifications ? '#1B5E3B' : '#E8E0D5',
                  border: 'none',
                  borderRadius: '20px',
                  width: '52px',
                  height: '28px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
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

          {/* Saved Incentives */}
          <div style={sectionStyle}>
            <p style={{ ...labelStyle, marginBottom: '12px' }}><StarIcon /> {current.savedIncentives}</p>
            {savedIncentives && savedIncentives.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {savedIncentives.map((item, index) => (
                  <div key={index} style={{
                    backgroundColor: '#F5F0E8',
                    borderRadius: '12px',
                    padding: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: '#1A1A1A', fontSize: '14px', fontWeight: '500', margin: '0 0 4px 0' }}>
                        {item.program || item.title}
                      </p>
                      {item.amount && (
                        <p style={{ color: '#1B5E3B', fontSize: '13px', margin: 0, fontWeight: '600' }}>
                          {item.amount.type === 'dollar_amount'
                            ? `$${item.amount.number?.toLocaleString()}`
                            : item.amount}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#5C6B5E', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                {current.noSaved}
              </p>
            )}
          </div>

          {/* Reset */}
          <button
            onClick={handleReset}
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              color: '#C0392B',
              border: '2px solid #C0392B',
              padding: '14px',
              borderRadius: '30px',
              fontSize: '14px',
              cursor: 'pointer',
              marginTop: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <TrashIcon />
            {current.reset}
          </button>

        </div>
      </div>

          {/* Reset Confirmation Modal */}
          {showResetConfirm && (
            <div style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              padding: '24px',
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '28px 24px',
                maxWidth: '340px',
                width: '100%',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#FEE2E2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <TrashIcon color="#C0392B" size={22} />
                </div>
                <h3 style={{ color: '#1A1A1A', fontSize: '18px', margin: '0 0 10px 0', fontWeight: '600' }}>
                  Reset Mira?
                </h3>
                <p style={{ color: '#5C6B5E', fontSize: '14px', margin: '0 0 24px 0', lineHeight: '1.6' }}>
                  {current.resetConfirm}
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      color: '#5C6B5E',
                      border: '2px solid #E8E0D5',
                      padding: '12px',
                      borderRadius: '30px',
                      fontSize: '15px',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {current.cancel}
                  </button>
                  <button
                    onClick={confirmReset}
                    style={{
                      flex: 1,
                      backgroundColor: '#C0392B',
                      color: 'white',
                      border: 'none',
                      padding: '12px',
                      borderRadius: '30px',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {current.reset}
                  </button>
                </div>
              </div>
            </div>
          )}

    </>
  );
}

export default Profile;