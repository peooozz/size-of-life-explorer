import { ArrowRight } from "lucide-react";
import catImage from "@/assets/cat.png";
import flowerImage from "@/assets/flower.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* NEAL.FUN Logo */}
      <div className="absolute top-4 left-4 z-10">
        <span className="font-bold text-lg tracking-wider text-foreground uppercase" style={{ fontFamily: 'system-ui', fontStyle: 'italic' }}>
          NEAL.FUN
        </span>
      </div>

      {/* Decorative Images */}
      {/* Top Right - Leaves/Vines */}
      <div className="absolute -top-4 -right-4 w-48 md:w-64 lg:w-80 opacity-95">
        <svg viewBox="0 0 200 280" className="w-full h-auto">
          <defs>
            <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d6a4f" />
              <stop offset="100%" stopColor="#1b4332" />
            </linearGradient>
            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#40916c" />
              <stop offset="100%" stopColor="#2d6a4f" />
            </linearGradient>
          </defs>
          <g>
            {/* Large monstera leaves */}
            <path d="M180 -10 Q 160 40 150 80 L 140 75 Q 145 50 140 30 L 130 60 Q 135 80 125 100 L 115 95 Q 120 75 110 55 L 100 85 Q 110 110 100 130 L 90 125 Q 95 105 85 85 L 75 115 Q 85 140 80 160 L 200 180 L 200 -10 Z" fill="url(#leafGrad1)" />
            <path d="M200 20 Q 170 60 165 100 L 155 95 Q 160 70 150 50 L 140 80 Q 150 110 140 130 L 130 125 Q 135 100 125 80 L 115 110 Q 125 140 120 165 L 200 180 L 200 20 Z" fill="url(#leafGrad2)" opacity="0.9" />
            <path d="M160 50 Q 140 90 135 130 L 125 125 Q 130 100 120 80 L 110 110 Q 120 140 115 170 L 175 200 Q 180 150 175 100 Z" fill="url(#leafGrad1)" opacity="0.85" />
            {/* Stems */}
            <path d="M200 0 Q 170 60 155 120" stroke="#1b4332" strokeWidth="3" fill="none" />
            <path d="M185 30 Q 160 80 145 140" stroke="#1b4332" strokeWidth="2" fill="none" />
            {/* Smaller leaves */}
            <ellipse cx="175" cy="180" rx="30" ry="45" fill="url(#leafGrad2)" transform="rotate(25 175 180)" />
            <ellipse cx="145" cy="210" rx="25" ry="40" fill="url(#leafGrad1)" transform="rotate(40 145 210)" opacity="0.9" />
            <ellipse cx="180" cy="240" rx="28" ry="42" fill="url(#leafGrad2)" transform="rotate(15 180 240)" />
          </g>
        </svg>
      </div>

      {/* Bottom Left - Flower */}
      <div className="absolute -bottom-16 -left-16 w-48 md:w-64 lg:w-80 opacity-95 z-10">
        <img 
          src={flowerImage} 
          alt="Red flower illustration" 
          className="w-full h-auto object-contain transform rotate-12"
        />
      </div>

      {/* Top Left Inside Frame - Butterfly */}
      <div className="absolute top-24 left-20 md:top-28 md:left-28 lg:top-32 lg:left-36 w-32 md:w-40 lg:w-48 z-20">
        <svg viewBox="0 0 140 110" className="w-full h-auto drop-shadow-sm">
          <defs>
            <linearGradient id="wingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="50%" stopColor="#115e59" />
              <stop offset="100%" stopColor="#042f2e" />
            </linearGradient>
            <linearGradient id="wingGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#042f2e" />
              <stop offset="50%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          {/* Left upper wing */}
          <path d="M70 55 Q 35 15 10 35 Q -5 55 15 75 Q 45 85 70 55" fill="url(#wingGrad1)" />
          {/* Left lower wing */}
          <path d="M70 55 Q 50 70 30 90 Q 45 100 60 92 Q 70 80 70 55" fill="url(#wingGrad2)" />
          {/* Right upper wing */}
          <path d="M70 55 Q 105 15 130 35 Q 145 55 125 75 Q 95 85 70 55" fill="url(#wingGrad1)" />
          {/* Right lower wing */}
          <path d="M70 55 Q 90 70 110 90 Q 95 100 80 92 Q 70 80 70 55" fill="url(#wingGrad2)" />
          {/* Wing patterns */}
          <circle cx="40" cy="45" r="10" fill="#042f2e" opacity="0.6" />
          <circle cx="100" cy="45" r="10" fill="#042f2e" opacity="0.6" />
          <circle cx="45" cy="75" r="6" fill="#0f766e" opacity="0.5" />
          <circle cx="95" cy="75" r="6" fill="#0f766e" opacity="0.5" />
          {/* White markings */}
          <circle cx="25" cy="50" r="3" fill="#f0fdfa" opacity="0.7" />
          <circle cx="115" cy="50" r="3" fill="#f0fdfa" opacity="0.7" />
          {/* Body */}
          <ellipse cx="70" cy="55" rx="5" ry="22" fill="#1c1917" />
          <ellipse cx="70" cy="55" rx="3" ry="18" fill="#ca8a04" />
          {/* Antennae */}
          <path d="M68 35 Q 60 20 55 15" stroke="#1c1917" strokeWidth="1.5" fill="none" />
          <path d="M72 35 Q 80 20 85 15" stroke="#1c1917" strokeWidth="1.5" fill="none" />
          <circle cx="55" cy="14" r="2" fill="#1c1917" />
          <circle cx="85" cy="14" r="2" fill="#1c1917" />
        </svg>
      </div>

      {/* Bottom Right - Cat */}
      <div className="absolute -bottom-6 right-8 md:right-16 lg:right-24 w-40 md:w-52 lg:w-64 z-20">
        <img 
          src={catImage} 
          alt="Tabby cat illustration" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content Frame */}
      <div className="flex items-center justify-center min-h-screen px-4 py-16">
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Frame Border */}
          <div className="border-2 border-foreground/80 bg-background/60 backdrop-blur-sm mx-6 md:mx-12 lg:mx-20 py-28 md:py-36 lg:py-44">
            {/* Content */}
            <div className="text-center px-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-4 tracking-tight">
                Size of Life
              </h1>
              
              {/* Decorative wavy line */}
              <div className="flex justify-center mb-8">
                <svg width="220" height="14" viewBox="0 0 220 14" className="opacity-60">
                  <path 
                    d="M0 7 Q 13.75 1, 27.5 7 T 55 7 T 82.5 7 T 110 7 T 137.5 7 T 165 7 T 192.5 7 T 220 7" 
                    stroke="#c4a484" 
                    strokeWidth="2.5" 
                    fill="none"
                  />
                </svg>
              </div>

              <p className="text-lg md:text-xl text-foreground mb-1.5">
                By Neal Agarwal
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-12">
                Illustrations by Julius Csotonyi
              </p>

              {/* Enter Button */}
              <button className="enter-button group inline-flex items-center gap-3 px-8 py-3 border-2 border-foreground/80 rounded-full bg-transparent hover:bg-foreground hover:text-primary-foreground transition-all duration-300 text-lg font-medium">
                Enter
                <ArrowRight className="arrow-icon w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
