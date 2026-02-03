import { useState, useEffect } from "react";
import ScaleExplorer from "@/components/ScaleExplorer";
import Starfield from "@/components/Starfield";

const Index = () => {
  const [showExplorer, setShowExplorer] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Detect first scroll or click to start
  useEffect(() => {
    if (showExplorer) return;

    const handleInteraction = () => {
      setShowIntro(false);
      setTimeout(() => setShowExplorer(true), 800);
    };

    // Auto-fade after 5 seconds
    const autoTimer = setTimeout(() => {
      if (!showExplorer) {
        handleInteraction();
      }
    }, 10000);

    window.addEventListener("wheel", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      clearTimeout(autoTimer);
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [showExplorer]);

  if (showExplorer) {
    return <ScaleExplorer onExit={() => {
      setShowExplorer(false);
      setShowIntro(true);
    }} />;
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starfield background */}
      <Starfield />

      {/* Nebula effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className={`flex items-center justify-center min-h-screen px-4 py-16 relative z-10 transition-all duration-1000 ${
          showIntro ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #00d4ff 100%)",
              }}
            >
              Size of Life
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 mb-16 max-w-xl mx-auto leading-relaxed">
            Explore the scale of everything — from the observable universe to the Planck length
          </p>

          {/* Animated pulse ring */}
          <div className="relative inline-block">
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ background: "rgba(0, 212, 255, 0.5)" }}
            />
            <button
              onClick={() => {
                setShowIntro(false);
                setTimeout(() => setShowExplorer(true), 800);
              }}
              className="relative px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 border"
              style={{
                background: "rgba(0, 212, 255, 0.1)",
                borderColor: "rgba(0, 212, 255, 0.3)",
                color: "#00d4ff",
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.2), inset 0 0 30px rgba(0, 212, 255, 0.05)",
              }}
            >
              Begin Journey
            </button>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/40 text-sm">Scroll to Begin</span>
            <svg
              className="w-6 h-6 text-white/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/10 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-white/10 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-white/10 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/10 rounded-br-lg" />
    </div>
  );
};

export default Index;
