import { ScaleObject as ScaleObjectType } from "@/data/scaleObjects";
import { cn } from "@/lib/utils";

interface ScaleObjectProps {
  object: ScaleObjectType;
  scale: number;
  isActive: boolean;
}

const ScaleObject = ({ object, scale, isActive }: ScaleObjectProps) => {
  const renderObjectVisual = () => {
    switch (object.id) {
      case "observable-universe":
        return (
          <div
            className="relative rounded-full animate-pulse-slow"
            style={{
              width: `${Math.min(400 * scale, 800)}px`,
              height: `${Math.min(400 * scale, 800)}px`,
              background: `radial-gradient(circle at 30% 30%, 
                ${object.color} 0%, 
                rgba(139, 92, 246, 0.5) 30%, 
                rgba(59, 130, 246, 0.3) 60%, 
                transparent 80%)`,
              boxShadow: `0 0 ${100 * scale}px ${object.glowColor}, 
                          0 0 ${200 * scale}px rgba(168, 85, 247, 0.3)`,
            }}
          >
            {/* Galaxy dots */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  opacity: 0.3 + Math.random() * 0.7,
                }}
              />
            ))}
          </div>
        );

      case "milky-way":
        return (
          <div
            className="relative animate-spin-slow"
            style={{
              width: `${Math.min(350 * scale, 700)}px`,
              height: `${Math.min(100 * scale, 200)}px`,
              background: `linear-gradient(90deg, 
                transparent 0%, 
                ${object.color} 30%, 
                white 50%, 
                ${object.color} 70%, 
                transparent 100%)`,
              borderRadius: "50%",
              boxShadow: `0 0 ${80 * scale}px ${object.glowColor}`,
              transform: "perspective(500px) rotateX(70deg)",
            }}
          />
        );

      case "solar-system":
        return (
          <div
            className="relative"
            style={{
              width: `${Math.min(300 * scale, 600)}px`,
              height: `${Math.min(300 * scale, 600)}px`,
            }}
          >
            {/* Sun center */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: `${30 * scale}px`,
                height: `${30 * scale}px`,
                background: "radial-gradient(circle at 30% 30%, #fef08a, #f59e0b, #d97706)",
                boxShadow: `0 0 ${40 * scale}px rgba(251, 191, 36, 0.8)`,
              }}
            />
            {/* Orbit rings */}
            {[40, 70, 100, 140].map((radius, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
                style={{
                  width: `${radius * scale}px`,
                  height: `${radius * scale}px`,
                }}
              >
                {/* Planet on orbit */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: `${6 + i * 2}px`,
                    height: `${6 + i * 2}px`,
                    background: ["#94a3b8", "#f97316", "#3b82f6", "#dc2626"][i],
                    top: "50%",
                    left: "0",
                    transform: "translate(-50%, -50%)",
                    boxShadow: `0 0 10px ${["#94a3b8", "#f97316", "#3b82f6", "#dc2626"][i]}`,
                  }}
                />
              </div>
            ))}
          </div>
        );

      case "sun":
        return (
          <div
            className="relative rounded-full animate-pulse-slow"
            style={{
              width: `${Math.min(250 * scale, 500)}px`,
              height: `${Math.min(250 * scale, 500)}px`,
              background: `radial-gradient(circle at 30% 30%, 
                #fef9c3 0%, 
                #fbbf24 30%, 
                #f59e0b 60%, 
                #d97706 100%)`,
              boxShadow: `0 0 ${100 * scale}px rgba(251, 191, 36, 0.8), 
                          0 0 ${200 * scale}px rgba(245, 158, 11, 0.4)`,
            }}
          >
            {/* Solar flares */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.4) 0%, transparent 30%)",
              }}
            />
          </div>
        );

      case "earth":
        return (
          <div
            className="relative rounded-full overflow-hidden"
            style={{
              width: `${Math.min(200 * scale, 400)}px`,
              height: `${Math.min(200 * scale, 400)}px`,
              background: `radial-gradient(circle at 30% 30%, 
                #60a5fa 0%, 
                #3b82f6 40%, 
                #1e3a5f 100%)`,
              boxShadow: `0 0 ${60 * scale}px ${object.glowColor}`,
            }}
          >
            {/* Continents */}
            <div
              className="absolute"
              style={{
                width: "60%",
                height: "40%",
                top: "20%",
                left: "15%",
                background: "#22c55e",
                borderRadius: "40% 60% 30% 70%",
                opacity: 0.7,
              }}
            />
            <div
              className="absolute"
              style={{
                width: "30%",
                height: "50%",
                top: "45%",
                left: "55%",
                background: "#22c55e",
                borderRadius: "30% 70% 60% 40%",
                opacity: 0.7,
              }}
            />
            {/* Clouds */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `
                  radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 30%),
                  radial-gradient(ellipse at 70% 60%, rgba(255,255,255,0.5) 0%, transparent 25%),
                  radial-gradient(ellipse at 40% 80%, rgba(255,255,255,0.4) 0%, transparent 20%)
                `,
              }}
            />
            {/* Atmosphere glow */}
            <div
              className="absolute -inset-2 rounded-full"
              style={{
                background: "radial-gradient(circle, transparent 70%, rgba(96, 165, 250, 0.3) 100%)",
              }}
            />
          </div>
        );

      case "moon":
        return (
          <div
            className="relative rounded-full"
            style={{
              width: `${Math.min(120 * scale, 240)}px`,
              height: `${Math.min(120 * scale, 240)}px`,
              background: `radial-gradient(circle at 30% 30%, 
                #e5e7eb 0%, 
                #9ca3af 60%, 
                #6b7280 100%)`,
              boxShadow: `0 0 ${40 * scale}px ${object.glowColor}`,
            }}
          >
            {/* Craters */}
            {[
              { top: "20%", left: "30%", size: 15 },
              { top: "50%", left: "60%", size: 20 },
              { top: "70%", left: "25%", size: 12 },
            ].map((crater, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  top: crater.top,
                  left: crater.left,
                  width: `${crater.size}%`,
                  height: `${crater.size}%`,
                  background: "radial-gradient(circle, #6b7280 0%, #4b5563 100%)",
                  boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.3)",
                }}
              />
            ))}
          </div>
        );

      case "human":
        return (
          <div
            className="relative flex flex-col items-center"
            style={{
              filter: `drop-shadow(0 0 ${20 * scale}px ${object.glowColor})`,
            }}
          >
            {/* Head */}
            <div
              className="rounded-full bg-gradient-to-b from-amber-200 to-amber-400"
              style={{
                width: `${30 * scale}px`,
                height: `${30 * scale}px`,
              }}
            />
            {/* Body */}
            <div
              className="rounded-t-lg bg-gradient-to-b from-blue-500 to-blue-600"
              style={{
                width: `${40 * scale}px`,
                height: `${60 * scale}px`,
                marginTop: `${5 * scale}px`,
              }}
            />
            {/* Legs */}
            <div className="flex" style={{ gap: `${5 * scale}px` }}>
              <div
                className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-b"
                style={{
                  width: `${15 * scale}px`,
                  height: `${50 * scale}px`,
                }}
              />
              <div
                className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-b"
                style={{
                  width: `${15 * scale}px`,
                  height: `${50 * scale}px`,
                }}
              />
            </div>
          </div>
        );

      case "red-blood-cell":
        return (
          <div
            className="relative rounded-full"
            style={{
              width: `${Math.min(150 * scale, 300)}px`,
              height: `${Math.min(150 * scale, 300)}px`,
              background: `radial-gradient(circle at 50% 50%, 
                transparent 20%, 
                #ef4444 40%, 
                #dc2626 60%, 
                #b91c1c 100%)`,
              boxShadow: `0 0 ${50 * scale}px ${object.glowColor}`,
            }}
          />
        );

      case "dna":
        return (
          <div
            className="relative flex items-center justify-center"
            style={{
              width: `${Math.min(100 * scale, 200)}px`,
              height: `${Math.min(200 * scale, 400)}px`,
            }}
          >
            {/* DNA helix - simplified */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute flex justify-between w-full">
                <div
                  className="rounded-full bg-cyan-400"
                  style={{
                    width: `${12 * scale}px`,
                    height: `${12 * scale}px`,
                    transform: `translateY(${i * 25 * scale}px) translateX(${Math.sin(i * 0.8) * 30 * scale}px)`,
                    boxShadow: `0 0 ${10 * scale}px rgba(34, 211, 238, 0.6)`,
                  }}
                />
                <div
                  className="rounded-full bg-pink-400"
                  style={{
                    width: `${12 * scale}px`,
                    height: `${12 * scale}px`,
                    transform: `translateY(${i * 25 * scale}px) translateX(${-Math.sin(i * 0.8) * 30 * scale}px)`,
                    boxShadow: `0 0 ${10 * scale}px rgba(244, 114, 182, 0.6)`,
                  }}
                />
              </div>
            ))}
          </div>
        );

      case "atom":
        return (
          <div
            className="relative"
            style={{
              width: `${Math.min(200 * scale, 400)}px`,
              height: `${Math.min(200 * scale, 400)}px`,
            }}
          >
            {/* Nucleus */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
              style={{
                width: `${30 * scale}px`,
                height: `${30 * scale}px`,
                background: `radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6)`,
                boxShadow: `0 0 ${30 * scale}px rgba(59, 130, 246, 0.8)`,
              }}
            />
            {/* Electron orbits */}
            {[0, 60, 120].map((rotation, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
                style={{
                  width: `${150 * scale}px`,
                  height: `${60 * scale}px`,
                  transform: `translate(-50%, -50%) rotateZ(${rotation}deg)`,
                }}
              >
                <div
                  className="absolute rounded-full bg-cyan-400 animate-orbit"
                  style={{
                    width: `${10 * scale}px`,
                    height: `${10 * scale}px`,
                    top: "50%",
                    left: "0",
                    transform: "translate(-50%, -50%)",
                    boxShadow: `0 0 ${15 * scale}px rgba(34, 211, 238, 0.8)`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              </div>
            ))}
          </div>
        );

      case "proton":
      case "quark":
        return (
          <div
            className="relative rounded-full animate-pulse"
            style={{
              width: `${Math.min(100 * scale, 200)}px`,
              height: `${Math.min(100 * scale, 200)}px`,
              background: `radial-gradient(circle at 30% 30%, 
                ${object.color}dd 0%, 
                ${object.color} 60%, 
                ${object.color}88 100%)`,
              boxShadow: `0 0 ${50 * scale}px ${object.glowColor}, 
                          0 0 ${100 * scale}px ${object.glowColor}`,
            }}
          />
        );

      case "planck-length":
        return (
          <div
            className="relative"
            style={{
              width: `${Math.min(50 * scale, 100)}px`,
              height: `${Math.min(50 * scale, 100)}px`,
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
              style={{
                width: `${20 * scale}px`,
                height: `${20 * scale}px`,
                background: object.color,
                boxShadow: `0 0 ${30 * scale}px ${object.glowColor}, 
                            0 0 ${60 * scale}px ${object.glowColor}, 
                            0 0 ${90 * scale}px rgba(0, 212, 255, 0.3)`,
              }}
            />
          </div>
        );

      default:
        return (
          <div
            className="rounded-full"
            style={{
              width: `${Math.min(150 * scale, 300)}px`,
              height: `${Math.min(150 * scale, 300)}px`,
              background: `radial-gradient(circle at 30% 30%, ${object.color}dd, ${object.color})`,
              boxShadow: `0 0 ${40 * scale}px ${object.glowColor}`,
            }}
          />
        );
    }
  };

  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700",
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      style={{
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    >
      {renderObjectVisual()}
    </div>
  );
};

export default ScaleObject;
