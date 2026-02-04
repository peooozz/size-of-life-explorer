import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { organisms, Organism } from "@/data/organisms";
import { cn } from "@/lib/utils";

interface OrganismViewerProps {
  onExit: () => void;
}

const OrganismViewer = ({ onExit }: OrganismViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const currentOrganism = organisms[currentIndex];

  const goToNext = useCallback(() => {
    if (currentIndex < organisms.length - 1 && !isTransitioning) {
      setDirection("right");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(false);
        setDirection(null);
      }, 300);
    }
  }, [currentIndex, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0 && !isTransitioning) {
      setDirection("left");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(false);
        setDirection(null);
      }, 300);
    }
  }, [currentIndex, isTransitioning]);

  // Handle scroll
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThreshold = 400;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime < scrollThreshold) return;
      lastScrollTime = now;

      if (e.deltaY > 0 || e.deltaX > 0) {
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
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "Escape") {
        onExit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, onExit]);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      {/* Border frame */}
      <div className="absolute inset-4 md:inset-8 border border-foreground/20 pointer-events-none z-50" />

      {/* Exit button */}
      <button
        onClick={onExit}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-2 rounded-full hover:bg-foreground/10 transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6 text-foreground/60" />
      </button>

      {/* Progress indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
        <span className="text-sm text-muted-foreground font-medium">
          {currentIndex + 1} / {organisms.length}
        </span>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        disabled={currentIndex === 0 || isTransitioning}
        className={cn(
          "absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-foreground/20 transition-all duration-200",
          currentIndex === 0
            ? "opacity-30 cursor-not-allowed"
            : "hover:bg-foreground/5 hover:border-foreground/40"
        )}
        aria-label="Previous organism"
      >
        <ChevronLeft className="w-6 h-6 text-foreground/70" />
      </button>
      
      <button
        onClick={goToNext}
        disabled={currentIndex === organisms.length - 1 || isTransitioning}
        className={cn(
          "absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-foreground/20 transition-all duration-200",
          currentIndex === organisms.length - 1
            ? "opacity-30 cursor-not-allowed"
            : "hover:bg-foreground/5 hover:border-foreground/40"
        )}
        aria-label="Next organism"
      >
        <ChevronRight className="w-6 h-6 text-foreground/70" />
      </button>

      {/* Main content - Fixed layout to prevent overlap */}
      <div className="h-full flex flex-col pt-16 pb-20">
        {/* Image container - takes up most space */}
        <div 
          className={cn(
            "flex-1 flex items-center justify-center px-20 transition-all duration-300",
            isTransitioning && direction === "right" && "opacity-0 -translate-x-8",
            isTransitioning && direction === "left" && "opacity-0 translate-x-8"
          )}
        >
          <img 
            src={currentOrganism.image} 
            alt={currentOrganism.name}
            className="max-w-[320px] max-h-[320px] md:max-w-[400px] md:max-h-[400px] lg:max-w-[480px] lg:max-h-[480px] object-contain"
          />
        </div>

        {/* Info section - fixed at bottom, separate from image */}
        <div 
          className={cn(
            "flex-shrink-0 px-6 pb-4 transition-all duration-300",
            isTransitioning && "opacity-0"
          )}
        >
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-1 text-foreground">
              {currentOrganism.name}
            </h2>
            
            {currentOrganism.scientificName && (
              <p className="text-muted-foreground italic mb-3 text-base">
                {currentOrganism.scientificName}
              </p>
            )}

            {/* Size indicator */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-foreground/20" />
              <span className="text-sm font-medium text-foreground/70">
                {currentOrganism.sizeLabel}
              </span>
              <div className="h-px w-12 bg-foreground/20" />
            </div>

            <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
              {currentOrganism.description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex gap-1">
        {organisms.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentIndex) {
                setDirection(index > currentIndex ? "right" : "left");
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                  setDirection(null);
                }, 300);
              }
            }}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-foreground/60 scale-125"
                : "bg-foreground/20 hover:bg-foreground/40"
            )}
            aria-label={`Go to ${organisms[index].name}`}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-6 left-6 md:left-10 text-xs text-muted-foreground hidden md:block">
        ← → or scroll to navigate • ESC to exit
      </div>
    </div>
  );
};

export default OrganismViewer;
