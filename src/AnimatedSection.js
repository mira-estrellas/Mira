import React from 'react';
import useScrollAnimation from './useScrollAnimation';

function AnimatedSection({ children, delay = 0, style = {} }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;