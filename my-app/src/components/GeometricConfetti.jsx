import  { useState, useEffect } from 'react';

export const GeometricConfetti = () => {
  const [clickItems, setClickItems] = useState([]);

  // Spawn playful confetti shape on background click
  const handleBgClick = (e) => {
    // Only spawn if clicked on container background or non-button element
    const target = e.target;
    if (
      target.closest('button') || 
      target.closest('a') || 
      target.closest('input') || 
      target.closest('textarea')
    ) {
      return;
    }

    const colors = ['#FF2A85', '#00F0FF', '#FFE600', '#8B3DFF', '#50EB14', '#FF6B00'];
    const shapes = ['star', 'circle', 'square', 'triangle'];

    const newConfetti = Array.from({ length: 4 }).map((_, idx) => ({
      id: Date.now() + idx,
      x: e.clientX + (Math.random() * 60 - 30),
      y: e.clientY + (Math.random() * 60 - 30),
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    }));

    setClickItems(prev => [...prev.slice(-12), ...newConfetti]);
  };

  useEffect(() => {
    if (clickItems.length === 0) return;
    const timer = setTimeout(() => {
      setClickItems(prev => prev.slice(4));
    }, 1800);
    return () => clearTimeout(timer);
  }, [clickItems]);

  return (
    <div 
      className="fixed inset-0 pointer-events-auto z-0 overflow-hidden select-none"
      onClick={handleBgClick}
      title="Clique em qualquer lado para soltar confetti!"
    >
      {/* Background Memphis Grid Overlay */}
      <div className="absolute inset-0 bg-memphis-grid opacity-50 pointer-events-none" />

      {/* Static Floating & Drifting Shapes */}
      
      {/* 1. Yellow Striped Circle Top Left */}
      <div className="absolute top-[8%] left-[3%] w-24 h-24 rounded-full border-3 border-black bg-memphis-stripes-yellow animate-drift-1 shadow-memphis pointer-events-none hidden md:block opacity-90" />

      {/* 2. Magenta Squiggle Top Right */}
      <div className="absolute top-[12%] right-[5%] animate-drift-2 pointer-events-none z-0">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          <path d="M10 30 Q 35 5, 60 30 T 110 30" stroke="#FF2A85" strokeWidth="12" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* 3. Cyan Triangle Mid Left */}
      <div className="absolute top-[38%] left-[2%] animate-drift-3 pointer-events-none z-0">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <polygon points="35,5 65,65 5,65" fill="#00F0FF" stroke="#000000" strokeWidth="4" />
        </svg>
      </div>

      {/* 4. Violet Quarter-Arc Mid Right */}
      <div className="absolute top-[45%] right-[3%] animate-spin-slow pointer-events-none z-0">
        <div className="w-20 h-20 bg-[#8B3DFF] border-3 border-black rounded-tl-full shadow-memphis" />
      </div>

      {/* 5. Electric Lemon Dotted Circle Bottom Left */}
      <div className="absolute bottom-[20%] left-[4%] w-20 h-20 rounded-full border-3 border-black bg-memphis-dots animate-float pointer-events-none z-0 bg-[#FFE600] shadow-memphis" />

      {/* 6. Orange Zigzag Bottom Right */}
      <div className="absolute bottom-[15%] right-[6%] animate-wiggle pointer-events-none z-0">
        <svg width="100" height="50" viewBox="0 0 100 50" fill="none" className="drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          <path d="M5 25 L25 5 L45 45 L65 5 L85 45 L95 25" stroke="#FF6B00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* 7. Lime Green Starburst Center Left */}
      <div className="absolute top-[65%] left-[8%] animate-spin-reverse pointer-events-none z-0 hidden lg:block">
        <div className="w-14 h-14 bg-[#50EB14] border-3 border-black rotate-45 shadow-memphis-xs flex items-center justify-center">
          <div className="w-6 h-6 bg-white border-2 border-black rounded-full" />
        </div>
      </div>

      {/* 8. Extra Memphis Decorative Plus / Crosses */}
      <div className="absolute top-[25%] left-[18%] animate-float pointer-events-none z-0 text-black font-bungee text-3xl opacity-40 select-none">
        ✦
      </div>
      <div className="absolute top-[75%] right-[18%] animate-drift-2 pointer-events-none z-0 text-[#FF2A85] font-bungee text-4xl opacity-70 select-none">
        ✖
      </div>
      <div className="absolute top-[18%] right-[28%] animate-wiggle pointer-events-none z-0 text-[#00F0FF] font-bungee text-3xl opacity-80 select-none">
        ●
      </div>

      {/* Interactive On-Click Confetti Pops */}
      {clickItems.map(item => (
        <div
          key={item.id}
          className="absolute pointer-events-none transition-all duration-700 animate-ping"
          style={{
            left: item.x,
            top: item.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {item.shape === 'star' && (
            <span className="text-2xl font-black drop-shadow-[2px_2px_0_#000]" style={{ color: item.color }}>★</span>
          )}
          {item.shape === 'circle' && (
            <div className="w-5 h-5 rounded-full border-2 border-black" style={{ backgroundColor: item.color }} />
          )}
          {item.shape === 'square' && (
            <div className="w-5 h-5 border-2 border-black rotate-12" style={{ backgroundColor: item.color }} />
          )}
          {item.shape === 'triangle' && (
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px]" style={{ borderBottomColor: item.color }} />
          )}
        </div>
      ))}
    </div>
  );
};
