import React, { useState } from 'react';

function WaterTracker({ language, dark = false }) {
  const [expanded, setExpanded] = useState(false);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const content = {
    EN: {
      title: '💧 Track Your Water Footprint',
      subtitle: 'Answer a few questions to estimate your monthly water usage.',
      calculate: 'Calculate My Footprint',
      reset: 'Start Over',
      questions: [
        {
          id: 'shower',
          question: 'How long are your showers on average?',
          options: [
            { label: 'Under 5 minutes', value: 750 },
            { label: '5 to 10 minutes', value: 1500 },
            { label: '10 to 15 minutes', value: 2250 },
            { label: 'Over 15 minutes', value: 3000 },
          ],
        },
        {
          id: 'diet',
          question: 'What best describes your diet?',
          options: [
            { label: 'Meat with every meal', value: 5000 },
            { label: 'Meat a few times a week', value: 3200 },
            { label: 'Mostly plant-based', value: 1800 },
            { label: 'Fully vegan', value: 1100 },
          ],
        },
        {
          id: 'laundry',
          question: 'How often do you do laundry?',
          options: [
            { label: 'Every day', value: 2400 },
            { label: 'A few times a week', value: 1200 },
            { label: 'Once a week', value: 600 },
            { label: 'Every two weeks or less', value: 300 },
          ],
        },
        {
          id: 'shopping',
          question: 'How often do you buy new clothes?',
          options: [
            { label: 'Frequently', value: 2700 },
            { label: 'Occasionally', value: 1350 },
            { label: 'Rarely', value: 500 },
            { label: 'Mostly secondhand', value: 100 },
          ],
        },
      ],
      results: {
        low: { label: 'Low water use', color: '#4CAF7D', message: 'You\'re already conserving well. Check the Zero Waste Guide for more tips.' },
        medium: { label: 'Average water use', color: '#F4A261', message: 'A few small changes could make a big difference. Try shorter showers or more plant-based meals.' },
        high: { label: 'High water use', color: '#E07070', message: 'There\'s a lot of room to reduce. Start with diet and shower habits for the biggest impact.' },
      },
      gallonsPerMonth: 'gallons/month',
      expand: 'Track My Water Footprint',
      collapse: 'Close',
    },
    ES: {
      title: '💧 Rastrea Tu Huella de Agua',
      subtitle: 'Responde algunas preguntas para estimar tu uso mensual de agua.',
      calculate: 'Calcular Mi Huella',
      reset: 'Empezar de Nuevo',
      questions: [
        {
          id: 'shower',
          question: '¿Cuánto duran tus duchas en promedio?',
          options: [
            { label: 'Menos de 5 minutos', value: 750 },
            { label: '5 a 10 minutos', value: 1500 },
            { label: '10 a 15 minutos', value: 2250 },
            { label: 'Más de 15 minutos', value: 3000 },
          ],
        },
        {
          id: 'diet',
          question: '¿Qué describe mejor tu dieta?',
          options: [
            { label: 'Carne en cada comida', value: 5000 },
            { label: 'Carne algunas veces por semana', value: 3200 },
            { label: 'Principalmente plantas', value: 1800 },
            { label: 'Completamente vegano', value: 1100 },
          ],
        },
        {
          id: 'laundry',
          question: '¿Con qué frecuencia lavas ropa?',
          options: [
            { label: 'Todos los días', value: 2400 },
            { label: 'Varias veces a la semana', value: 1200 },
            { label: 'Una vez a la semana', value: 600 },
            { label: 'Cada dos semanas o menos', value: 300 },
          ],
        },
        {
          id: 'shopping',
          question: '¿Con qué frecuencia compras ropa nueva?',
          options: [
            { label: 'Frecuentemente', value: 2700 },
            { label: 'Ocasionalmente', value: 1350 },
            { label: 'Raramente', value: 500 },
            { label: 'Principalmente de segunda mano', value: 100 },
          ],
        },
      ],
      results: {
        low: { label: 'Uso de agua bajo', color: '#4CAF7D', message: 'Ya estás conservando bien. Consulta la Guía Zero Residuos para más consejos.' },
        medium: { label: 'Uso de agua promedio', color: '#F4A261', message: 'Algunos pequeños cambios podrían hacer una gran diferencia.' },
        high: { label: 'Uso de agua alto', color: '#E07070', message: 'Hay mucho espacio para reducir. Empieza con la dieta y los hábitos de ducha.' },
      },
      gallonsPerMonth: 'galones/mes',
      expand: 'Rastrear Mi Huella de Agua',
      collapse: 'Cerrar',
    },
  };

  const current = content[language] || content.EN;

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleCalculate = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const level = total < 5000 ? 'low' : total < 9000 ? 'medium' : 'high';
    setResult({ total: total.toLocaleString(), level });
  };

  const allAnswered = current.questions.every(q => answers[q.id] !== undefined);

  const bg = dark ? 'rgba(255,255,255,0.12)' : 'white';
  const border = dark ? '1px solid rgba(255,255,255,0.3)' : '1px solid #E8F0E9';
  const textPrimary = dark ? 'white' : '#1A1A1A';
  const textSecondary = dark ? 'rgba(255,255,255,0.9)' : '#5C6B5E';
  const optionBg = dark ? 'rgba(255,255,255,0.12)' : '#FAF7F2';
  const optionBorder = dark ? 'rgba(255,255,255,0.4)' : '#E8E0D5';
  const optionActiveBg = dark ? 'rgba(76,175,125,0.4)' : '#EBF3EE';
  const optionActiveBorder = '#4CAF7D';

  return (
    <div style={{
      backgroundColor: bg,
      borderRadius: '20px',
      padding: '20px',
      marginBottom: '16px',
      border,
    }}>
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <div>
          <h3 style={{ color: textPrimary, fontSize: '17px', margin: '0 0 4px 0', fontWeight: '600' }}>
            {current.title}
          </h3>
          {!expanded && (
            <p style={{ color: textSecondary, fontSize: '13px', margin: 0 }}>
              {current.subtitle}
            </p>
          )}
        </div>
        <span style={{ color: textSecondary, fontSize: '20px', marginLeft: '12px' }}>
          {expanded ? '−' : '+'}
        </span>
      </div>

      {expanded && (
        <div style={{ marginTop: '20px' }}>
          {!result ? (
            <>
              {current.questions.map((q) => (
                <div key={q.id} style={{ marginBottom: '24px' }}>
                  <p style={{ color: textPrimary, fontSize: '15px', fontWeight: '500', margin: '0 0 12px 0' }}>
                    {q.question}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {q.options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => handleAnswer(q.id, opt.value)}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: `2px solid ${answers[q.id] === opt.value ? optionActiveBorder : optionBorder}`,
                          backgroundColor: answers[q.id] === opt.value ? optionActiveBg : optionBg,
                          color: answers[q.id] === opt.value ? '#4CAF7D' : textPrimary,
                          fontSize: '14px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: answers[q.id] === opt.value ? '600' : '400',
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={handleCalculate}
                disabled={!allAnswered}
                style={{
                  width: '100%',
                  backgroundColor: allAnswered ? '#4CAF7D' : 'transparent',
                  color: allAnswered ? 'white' : 'white',
                  border: allAnswered ? 'none' : '2px solid rgba(255,255,255,0.6)',
                  padding: '14px',
                  borderRadius: '30px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: allAnswered ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {current.calculate}
              </button>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: dark ? 'rgba(255,255,255,0.1)' : '#F5F0E8',
                borderRadius: '16px',
                padding: '24px',
                marginBottom: '16px',
              }}>
                <p style={{ color: current.results[result.level].color, fontSize: '48px', fontWeight: '800', margin: '0 0 4px 0' }}>
                  {result.total}
                </p>
                <p style={{ color: textSecondary, fontSize: '14px', margin: '0 0 12px 0' }}>
                  {current.gallonsPerMonth}
                </p>
                <span style={{
                  backgroundColor: current.results[result.level].color,
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                }}>
                  {current.results[result.level].label}
                </span>
                <p style={{ color: textSecondary, fontSize: '14px', margin: '16px 0 0 0', lineHeight: '1.6' }}>
                  {current.results[result.level].message}
                </p>
              </div>
              <button
                onClick={() => { setResult(null); setAnswers({}); }}
                style={{
                  backgroundColor: 'transparent',
                  color: textSecondary,
                  border: `2px solid ${dark ? 'rgba(255,255,255,0.3)' : '#E8E0D5'}`,
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {current.reset}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WaterTracker;