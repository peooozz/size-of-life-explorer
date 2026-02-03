import { useState, useEffect, useCallback, useRef } from "react";
import { scaleObjects, getObjectAtZoom } from "@/data/scaleObjects";
import ScaleObject from "./ScaleObject";
import InfoPanel from "./InfoPanel";
import ScaleBar from "./ScaleBar";
import Starfield from "./Starfield";
import { Home, HelpCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScaleExplorerProps {
  onExit: () => void;
}

const ScaleExplorer = ({ onExit }: ScaleExplorerProps) => {
  const [zoom, setZoom] = useState(0);
  const [targetZoom, setTargetZoom] = useState(0);
  const [activeObject, setActiveObject] = useState(scaleObjects[0]);
  const [showInfo, setShowInfo] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const animationRef = useRef<number>();
  const lastScrollRef = useRef(0);

  // Smooth zoom interpolation
  useEffect(() => {
    const animate = () => {
      setZoom((prev) => {
        const diff = targetZoom - prev;
        if (Math.abs(diff) < 0.01) return targetZoom;
        return prev + diff * 0.08;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [targetZoom]);

  // Update active object based on zoom
  useEffect(() => {
    const obj = getObjectAtZoom(zoom);
    if (obj && obj.id !== activeObject?.id) {
      setActiveObject(obj);
      setShowInfo(true);
    }

    // Easter egg at the end
    if (zoom >= 99.5) {
      setShowEasterEgg(true);
    } else {
      setShowEasterEgg(false);
    }
  }, [zoom, activeObject]);

  // Auto-hide info panel
  useEffect(() => {
    if (showInfo) {
      const timer = setTimeout(() => setShowInfo(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showInfo, activeObject]);

  // Handle scroll
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastScrollRef.current < 50) return;
    lastScrollRef.current = now;

    const delta = e.deltaY * 0.03;
    setTargetZoom((prev) => Math.max(0, Math.min(100, prev + delta)));
  }, []);

  // Handle keyboard
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === " ") {
      e.preventDefault();
      setTargetZoom((prev) => Math.min(100, prev + 3));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setTargetZoom((prev) => Math.max(0, prev - 3));
    } else if (e.key === "Escape") {
      onExit();
    }
  }, [onExit]);

  // Handle touch
  const touchStartRef = useRef(0);
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    const deltaY = touchStartRef.current - e.touches[0].clientY;
    touchStartRef.current = e.touches[0].clientY;
    setTargetZoom((prev) => Math.max(0, Math.min(100, prev + deltaY * 0.1)));
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheel, handleKeyDown, handleTouchStart, handleTouchMove]);

  // Calculate background color based on zoom
  const getBackgroundGradient = () => {
    if (zoom < 20) return "radial-gradient(ellipse at center, rgba(30, 0, 50, 0.3) 0%, transparent 70%)";
    if (zoom < 40) return "radial-gradient(ellipse at center, rgba(0, 30, 60, 0.3) 0%, transparent 70%)";
    if (zoom < 60) return "radial-gradient(ellipse at center, rgba(0, 50, 30, 0.2) 0%, transparent 70%)";
    if (zoom < 80) return "radial-gradient(ellipse at center, rgba(60, 20, 20, 0.3) 0%, transparent 70%)";
    return "radial-gradient(ellipse at center, rgba(60, 0, 80, 0.3) 0%, transparent 70%)";
  };

  const navigateToZoom = (newZoom: number) => {
    setTargetZoom(newZoom);
  };

  // Calculate scale for each object
  const getObjectScale = (objZoom: number) => {
    const maxSize = 8.8e26;
    const minSize = 1.6e-35;
    const logMax = Math.log10(maxSize);
    const logMin = Math.log10(minSize);
    const objPosition = ((logMax - Math.log10(scaleObjects.find(o => getObjectAtZoom(objZoom)?.id === o.id)?.size || 1)) / (logMax - logMin)) * 100;
    
    const diff = Math.abs(zoom - objPosition);
    if (diff > 15) return 0;
    
    const scale = 1 - (diff / 15);
    return Math.max(0, Math.pow(scale, 2));
  };

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Starfield */}
      <Starfield scrollProgress={zoom} />

      {/* Dynamic background */}
      <div
        className="absolute inset-0 transition-all duration-1000 pointer-events-none"
        style={{ background: getBackgroundGradient() }}
      />

      {/* 3D Scene Container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center center",
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(${(zoom - 50) * 10}px)`,
          }}
        >
          {scaleObjects.map((obj) => {
            const maxSize = 8.8e26;
            const minSize = 1.6e-35;
            const logMax = Math.log10(maxSize);
            const logMin = Math.log10(minSize);
            const objPosition = ((logMax - Math.log10(obj.size)) / (logMax - logMin)) * 100;
            
            const diff = zoom - objPosition;
            const isVisible = Math.abs(diff) < 15;
            const scale = isVisible ? Math.max(0.1, 1 - Math.abs(diff) / 20) : 0;
            const zOffset = -diff * 50;

            return (
              <div
                key={obj.id}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                style={{
                  opacity: isVisible ? scale : 0,
                  transform: `translateZ(${zOffset}px) scale(${scale})`,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <ScaleObject
                  object={obj}
                  scale={scale * 1.5}
                  isActive={activeObject?.id === obj.id}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
        <button
          onClick={onExit}
          className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all text-sm font-medium text-white"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <Home className="w-4 h-4" />
          Home
        </button>

        <div className="text-center">
          <h1 className="text-white font-bold tracking-wider text-sm">SIZE OF LIFE</h1>
        </div>

        <button
          onClick={() => setShowHelp(!showHelp)}
          className="p-2 rounded-full backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all text-white"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </header>

      {/* Help Panel */}
      {showHelp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            className="relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 max-w-sm"
            style={{ background: "rgba(10, 10, 30, 0.9)" }}
          >
            <button
              onClick={() => setShowHelp(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white mb-4">Controls</h3>
            <div className="space-y-3 text-white/70 text-sm">
              <p>🖱️ <strong>Scroll</strong> — Zoom in/out</p>
              <p>⌨️ <strong>↑↓ Arrows</strong> — Navigate scale</p>
              <p>👆 <strong>Swipe</strong> — Touch navigation</p>
              <p>⎋ <strong>ESC</strong> — Exit explorer</p>
            </div>
          </div>
        </div>
      )}

      {/* Scale Bar */}
      <ScaleBar currentZoom={zoom} onNavigate={navigateToZoom} />

      {/* Info Panel */}
      <InfoPanel object={activeObject} isVisible={showInfo} />

      {/* Easter Egg */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div
            className="text-center p-8 rounded-2xl backdrop-blur-xl border border-cyan-400/30 animate-pulse"
            style={{ background: "rgba(0, 20, 40, 0.8)" }}
          >
            <p className="text-4xl mb-4">🤯</p>
            <p className="text-cyan-400 font-bold text-xl">You've reached the end of known physics!</p>
            <p className="text-white/60 text-sm mt-2">Beyond Planck length, our understanding breaks down</p>
          </div>
        </div>
      )}

      {/* Mobile Scale Indicator */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
        <div
          className="p-3 rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-between"
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
        >
          <span className="text-white/50 text-xs">Universe</span>
          <div className="flex-1 mx-4 h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${zoom}%`,
                background: "linear-gradient(to right, #a855f7, #00d4ff)",
              }}
            />
          </div>
          <span className="text-white/50 text-xs">Planck</span>
        </div>
      </div>

      {/* Scroll hint at start */}
      {zoom < 2 && (
        <div className="fixed bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-white/50">
          <span className="text-sm">Scroll to explore</span>
          <span className="text-xl">↓</span>
        </div>
      )}
    </div>
  );
};

export default ScaleExplorer;
