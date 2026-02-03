import { useEffect, useState } from "react";
import { ScaleObject } from "@/data/scaleObjects";
import { cn } from "@/lib/utils";

interface InfoPanelProps {
  object: ScaleObject | null;
  isVisible: boolean;
}

const InfoPanel = ({ object, isVisible }: InfoPanelProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (isVisible && object) {
      setShouldShow(true);
    } else if (!isHovered) {
      const timer = setTimeout(() => setShouldShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, object, isHovered]);

  if (!object) return null;

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        shouldShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 max-w-md"
        style={{
          background: "rgba(10, 10, 30, 0.7)",
          boxShadow: `0 0 40px rgba(0, 0, 0, 0.5), 
                      0 0 80px ${object.glowColor}30`,
        }}
      >
        {/* Glow accent */}
        <div
          className="absolute -inset-px rounded-2xl opacity-50 -z-10"
          style={{
            background: `linear-gradient(135deg, ${object.color}40, transparent 50%, ${object.glowColor}20)`,
          }}
        />

        {/* Category badge */}
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 uppercase tracking-wider"
          style={{
            background: `${object.color}30`,
            color: object.color,
            border: `1px solid ${object.color}50`,
          }}
        >
          {object.category}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-1">{object.name}</h2>

        {/* Size */}
        <p
          className="font-mono text-lg mb-3"
          style={{ color: object.color }}
        >
          {object.sizeLabel}
        </p>

        {/* Description */}
        <p className="text-white/70 mb-4">{object.description}</p>

        {/* Fun fact */}
        <div className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
          <span className="text-cyan-400 text-lg">💡</span>
          <p className="text-white/80 text-sm leading-relaxed">{object.funFact}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
