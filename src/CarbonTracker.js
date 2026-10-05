import React, { useState } from 'react';

function CarbonTracker({ language, dark = false }) {
  const [expanded, setExpanded] = useState(false);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const content = {
    EN: {
      title: '🌿 Track Your Carbon Footprint',
      subtitle: 'Answer a few questions to estimate your monthly carbon output.',
      calculate: 'Calculate My Footprint',
      reset: 'Start Over',
      questions: [
        {
          id: 'transport',
          question: 'How do you mainly get around?',
          options: [
            { label: 'Car (gas)', value: 4.6 },
            { label: 'Car (hybrid)', value: 2.4 },
            { label: 'Electric vehicle', value: 0.9 },
            { label: 'Public transit', value: 0.6 },
            { label: 'Walk or bike', value: 0 },
          ],
        },
        {
          id: 'diet',
          question: 'What best describes your diet?',
          options: [
            { label: 'Meat with every meal', value: 3.3 },
            { label: 'Meat a few times a week', value: 2.1 },
            { label: 'Mostly plant-based', value: 1.1 },
            { label: 'Fully vegan', value: 0.7 },
          ],
        },
        {
          id: 'home',
          question: 'How is your home heated?',
          options: [
            { label: 'Natural gas', value: 2.1 },
            { label: 'Electric (grid)', value: 1.5 },
            { label: 'Electric (renewable)', value: 0.2 },
            { label: 'I don\'t control my heating', value: 1.0 },
          ],
        },
        {
          id: 'shopping',
          question: 'How often do you buy new clothes or electronics?',
          options: [
            { label: 'Frequently', value: 1.8 },
            { label: 'Occasionally', value: 1.0 },
            { label: 'Rarely', value: 0.4 },
            { label: 'Mostly secondhand', value: 0.1 },
          ],
        },
      ],
      results: {
        low: { label: 'Low footprint', color: '#4CAF7D', message: 'You\'re already doing great. Keep it up and explore the swaps above to go even further.' },
        medium: { label: 'Average footprint', color: '#F4A261', message: 'There\'s real room to reduce. The swaps and tools above can make a meaningful difference.' },
        high: { label: 'High footprint', color: '#E07070', message: 'Small changes add up fast. Start with one swap from above and build from there.' },
      },
      tonsPerMonth: 'tons CO₂/month',
      expand: 'Track My Carbon Footprint',
      collapse: 'Close',
    },
    ES: {
      title: '🌿 Rastrea Tu Huella de Carbono',
      subtitle: 'Responde algunas preguntas para estimar tu huella de carbono mensual.',
      calculate: 'Calcular Mi Huella',
      reset: 'Empezar de Nuevo',
      questions: [
        {
          id: 'transport',
          question: '¿Cómo te transportas principalmente?',
          options: [
            { label: 'Auto (gasolina)', value: 4.6 },
            { label: 'Auto (híbrido)', value: 2.4 },
            { label: 'Vehículo eléctrico', value: 0.9 },
            { label: 'Transporte público', value: 0.6 },
            { label: 'Caminar o bicicleta', value: 0 },
          ],
        },
        {
          id: 'diet',
          question: '¿Qué describe mejor tu dieta?',
          options: [
            { label: 'Carne en cada comida', value: 3.3 },
            { label: 'Carne algunas veces por semana', value: 2.1 },
            { label: 'Principalmente plantas', value: 1.1 },
            { label: 'Completamente vegano', value: 0.7 },
          ],
        },
        {
          id: 'home',
          question: '¿Cómo se calienta tu hogar?',
          options: [
            { label: 'Gas natural', value: 2.1 },
            { label: 'Eléctrico (red)', value: 1.5 },
            { label: 'Eléctrico (renovable)', value: 0.2 },
            { label: 'No controlo mi calefacción', value: 1.0 },
          ],
        },
        {
          id: 'shopping',
          question: '¿Con qué frecuencia compras ropa o electrónicos nuevos?',
          options: [
            { label: 'Frecuentemente', value: 1.8 },
            { label: 'Ocasionalmente', value: 1.0 },
            { label: 'Raramente', value: 0.4 },
            { label: 'Principalmente de segunda mano', value: 0.1 },
          ],
        },
      ],
      results: {
        low: { label: 'Huella baja', color: '#4CAF7D', message: 'Ya lo estás haciendo muy bien. Explora los cambios anteriores para ir aún más lejos.' },
        medium: { label: 'Huella promedio', color: '#F4A261', message: 'Hay espacio real para reducir. Los cambios y herramientas anteriores pueden marcar una diferencia significativa.' },
        high: { label: 'Huella alta', color: '#E07070', message: 'Los pequeños cambios suman rápido. Empieza con un cambio de los anteriores y construye desde ahí.' },
      },
      tonsPerMonth: 'toneladas CO₂/mes',
      expand: 'Rastrear Mi Huella de Carbono',
      collapse: 'Cerrar',
    },
  };

  const current = content[language] || content.EN;

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleCalculate = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const level = total < 4 ? 'low' : total < 7 ? 'medium' : 'high';
    setResult({ total: total.toFixed(1), level });
  };

  const allAnswered = current.questions.every(q => answers[q.id] !== undefined);

  const bg = dark ? 'rgba(255,255,255,0.08)' : 'white';
  const border = dark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #E8F0E9';
  const textPrimary = dark ? 'white' : '#1A1A1A';
  const textSecondary = dark ? 'rgba(255,255,255,0.7)' : '#5C6B5E';
  const optionBg = dark ? 'rgba(255,255,255,0.08)' : '#FAF7F2';
  const optionBorder = dark ? 'rgba(255,255,255,0.2)' : '#E8E0D5';
  const optionActiveBg = dark ? 'rgba(76,175,125,0.3)' : '#EBF3EE';
  const optionActiveBorder = dark ? '#4CAF7D' : '#4CAF7D';

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
                  backgroundColor: allAnswered ? '#4CAF7D' : 'rgba(255,255,255,0.15)',
                  color: allAnswered ? 'white' : textSecondary,
                  border: 'none',
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
                  {current.tonsPerMonth}
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

export default CarbonTracker;