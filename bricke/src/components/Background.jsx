import { useEffect, useState } from "react";

export default function Background() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < 60; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 5 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 5,
      });
    }

    setParticles(arr);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-red-500 opacity-20 animate-pulse"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}