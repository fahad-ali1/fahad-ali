import React, { useMemo } from "react";
import "./HeroField.css";

const COLS = 22;
const ROWS = 11;

const pickColor = (rand) => {
  if (rand < 0.06) return "active";
  if (rand < 0.22) return "complete";
  return "idle";
};

const HeroField = () => {
  const dots = useMemo(() => {
    const items = [];
    for (let row = 0; row < ROWS; row += 1) {
      for (let col = 0; col < COLS; col += 1) {
        const seed = Math.random();
        items.push({
          id: `${row}-${col}`,
          x: ((col + 0.5) / COLS) * 100,
          y: ((row + 0.5) / ROWS) * 100,
          color: pickColor(seed),
          delay: (Math.random() * 6).toFixed(2),
          duration: (3.5 + Math.random() * 3.5).toFixed(2),
        });
      }
    }
    return items;
  }, []);

  return (
    <div className="hero-field" aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className={`hero-field-dot hero-field-dot-${dot.color}`}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default HeroField;
