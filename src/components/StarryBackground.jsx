import React, { useMemo } from 'react';
import './StarryBackground.css';

/**
 * Generates box-shadow string of stars distributed across width and height.
 * Includes subtle blue-tinted stars for realistic celestial depth.
 */
function generateStars(count, maxCoord = 2500) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * maxCoord);
    const y = Math.floor(Math.random() * maxCoord);
    // Subtle star hue: 80% pure white, 20% soft ice-blue
    const color = i % 5 === 0 ? '#93c5fd' : '#ffffff';
    stars.push(`${x}px ${y}px ${color}`);
  }
  return stars.join(', ');
}

export default function StarryBackground() {
  // Generate once per session for performance and consistency
  const shadow1 = useMemo(() => generateStars(700, 2500), []);
  const shadow2 = useMemo(() => generateStars(250, 2500), []);
  const shadow3 = useMemo(() => generateStars(100, 2500), []);

  return (
    <div
      className="stars-background-wrapper"
      aria-hidden="true"
      style={{
        '--star-shadow-1': shadow1,
        '--star-shadow-2': shadow2,
        '--star-shadow-3': shadow3,
      }}
    >
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
}
