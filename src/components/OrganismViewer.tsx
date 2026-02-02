import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown, X, Home } from "lucide-react";
import { organisms, Organism } from "@/data/organisms";
import { cn } from "@/lib/utils";

interface OrganismViewerProps {
  onExit: () => void;
}

const OrganismViewer = ({ onExit }: OrganismViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  const currentOrganism = organisms[currentIndex];

  const goToNext = useCallback(() => {
    if (currentIndex < organisms.length - 1 && !isTransitioning) {
      setDirection("down");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(false);
        setDirection(null);
      }, 400);
    }
  }, [currentIndex, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0 && !isTransitioning) {
      setDirection("up");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(false);
        setDirection(null);
      }, 400);
    }
  }, [currentIndex, isTransitioning]);

  // Handle scroll
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThreshold = 600; // Minimum ms between scrolls

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime < scrollThreshold) return;
      lastScrollTime = now;

      if (e.deltaY > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goToNext, goToPrev]);

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "Escape") {
        onExit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, onExit]);

  const getOrganismDisplay = (organism: Organism) => {
    // Display emoji or colored circle based on organism
    if (organism.emoji) {
      return (
        <span className="text-[12rem] md:text-[16rem] lg:text-[20rem] select-none leading-none">
          {organism.emoji}
        </span>
      );
    }
    
    // For microscopic organisms, show a stylized circle
    return (
      <div
        className="rounded-full animate-pulse"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: organism.color,
          boxShadow: `0 0 60px ${organism.color}40, 0 0 120px ${organism.color}20`,
        }}
      />
    );
  };

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
        <button
          onClick={onExit}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
        >
          <Home className="w-4 h-4" />
          Home
        </button>
        
        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {organisms.length}
          </span>
        </div>

        <button
          onClick={onExit}
          className="p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Progress bar */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-1">
          {organisms.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setDirection(index > currentIndex ? "down" : "up");
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                    setDirection(null);
                  }, 300);
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-foreground scale-150"
                  : "bg-foreground/20 hover:bg-foreground/40"
              )}
              aria-label={`Go to ${organisms[index].name}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0 || isTransitioning}
          className={cn(
            "p-3 rounded-full bg-secondary transition-all duration-200",
            currentIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-secondary/80 hover:scale-110"
          )}
          aria-label="Previous organism"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex === organisms.length - 1 || isTransitioning}
          className={cn(
            "p-3 rounded-full bg-secondary transition-all duration-200",
            currentIndex === organisms.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-secondary/80 hover:scale-110"
          )}
          aria-label="Next organism"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Main content */}
      <div
        className={cn(
          "h-full flex flex-col items-center justify-center transition-all duration-500",
          isTransitioning && direction === "down" && "opacity-0 -translate-y-20",
          isTransitioning && direction === "up" && "opacity-0 translate-y-20"
        )}
      >
        {/* Size label */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center">
          <div
            className="inline-block px-4 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: `${currentOrganism.color}20`, color: currentOrganism.color }}
          >
            {currentOrganism.category}
          </div>
        </div>

        {/* Organism display */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="relative">
            {getOrganismDisplay(currentOrganism)}
            
            {/* Size indicator line */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <div className="w-16 h-px bg-foreground/30" />
              <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                {currentOrganism.sizeLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Info card */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center max-w-md px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentOrganism.name}</h2>
          {currentOrganism.scientificName && (
            <p className="text-muted-foreground italic mb-2">{currentOrganism.scientificName}</p>
          )}
          <p className="text-foreground/80">{currentOrganism.description}</p>
        </div>

        {/* Scroll hint */}
        {currentIndex === 0 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        )}
      </div>

      {/* Scale reference */}
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground hidden md:block">
        <p>Use scroll or arrow keys to navigate</p>
      </div>
    </div>
  );
};

export default OrganismViewer;
