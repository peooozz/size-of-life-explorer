import { scaleObjects } from "@/data/scaleObjects";
import { cn } from "@/lib/utils";

interface ScaleBarProps {
  currentZoom: number;
  onNavigate: (zoom: number) => void;
}

const ScaleBar = ({ currentZoom, onNavigate }: ScaleBarProps) => {
  // Calculate current size based on zoom
  const maxSize = 8.8e26;
  const minSize = 1.6e-35;
  const logMax = Math.log10(maxSize);
  const logMin = Math.log10(minSize);
  const currentLogSize = logMax - (currentZoom / 100) * (logMax - logMin);
  const currentExponent = Math.round(currentLogSize);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2">
      {/* Scale bar container */}
      <div className="relative h-[60vh] w-1 rounded-full bg-white/10 overflow-visible">
        {/* Progress fill */}
        <div
          className="absolute bottom-0 left-0 w-full rounded-full transition-all duration-500"
          style={{
            height: `${currentZoom}%`,
            background: "linear-gradient(to top, #00d4ff, #a855f7)",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
          }}
        />

        {/* Object markers */}
        {scaleObjects.map((obj, index) => {
          const position = ((logMax - Math.log10(obj.size)) / (logMax - logMin)) * 100;
          const isActive = Math.abs(currentZoom - position) < 3;

          return (
            <button
              key={obj.id}
              onClick={() => onNavigate(position)}
              className={cn(
                "absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300 hover:scale-150",
                isActive ? "scale-125" : "scale-100"
              )}
              style={{
                bottom: `${position}%`,
                background: isActive ? obj.color : "rgba(255,255,255,0.3)",
                boxShadow: isActive ? `0 0 15px ${obj.glowColor}` : "none",
              }}
              title={obj.name}
            />
          );
        })}

        {/* Current position indicator */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-cyan-400 transition-all duration-300"
          style={{
            bottom: `${currentZoom}%`,
            transform: "translate(-50%, 50%)",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.8)",
          }}
        />
      </div>

      {/* Labels */}
      <div className="absolute left-8 top-0 text-xs text-white/50 font-mono">
        Universe
      </div>
      <div className="absolute left-8 bottom-0 text-xs text-white/50 font-mono">
        Planck
      </div>

      {/* Current scale display */}
      <div
        className="mt-4 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/10"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <p className="text-cyan-400 font-mono text-sm">
          10<sup>{currentExponent}</sup> m
        </p>
      </div>
    </div>
  );
};

export default ScaleBar;
