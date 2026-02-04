import { useState } from "react";
import { ArrowRight } from "lucide-react";
import OrganismViewer from "@/components/OrganismViewer";
import CompareSection from "@/components/CompareSection";

// Import sticker images
import catImg from "@/assets/organisms/cat.png";
import hummingbirdImg from "@/assets/organisms/hummingbird.png";
import sequoiaImg from "@/assets/organisms/sequoia.png";
import ladybugImg from "@/assets/organisms/ladybug.png";

const Index = () => {
  const [showViewer, setShowViewer] = useState(false);

  if (showViewer) {
    return <OrganismViewer onExit={() => setShowViewer(false)} />;
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Main bordered frame */}
      <div className="absolute inset-4 md:inset-8 lg:inset-12 border border-foreground/20 pointer-events-none" />

      {/* Decorative stickers */}
      {/* Top left - Hummingbird */}
      <div className="absolute top-12 left-12 md:top-20 md:left-24 lg:top-24 lg:left-32 z-10">
        <img
          src={hummingbirdImg}
          alt="Hummingbird"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain sticker-shadow animate-float"
          style={{ animationDelay: "0s" }}
        />
      </div>

      {/* Top right - Sequoia/Vines */}
      <div className="absolute -top-4 -right-4 md:top-0 md:right-0 z-10">
        <img
          src={sequoiaImg}
          alt="Tree"
          className="w-32 h-48 md:w-40 md:h-56 lg:w-48 lg:h-64 object-contain sticker-shadow opacity-90"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center min-h-screen px-4 py-16 relative z-20">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-xl mx-auto">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-4 text-foreground tracking-tight">
              Size of Everything
            </h1>

            {/* Decorative DNA divider */}
            <div className="flex justify-center mb-6">
              <svg width="180" height="24" viewBox="0 0 180 24" className="text-primary">
                <path
                  d="M0 12 Q22.5 2 45 12 T90 12 T135 12 T180 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                />
                <path
                  d="M0 12 Q22.5 22 45 12 T90 12 T135 12 T180 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                />
                {/* Connection dots */}
                <circle cx="22.5" cy="12" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="67.5" cy="12" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="112.5" cy="12" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="157.5" cy="12" r="2" fill="currentColor" opacity="0.5" />
              </svg>
            </div>

            {/* Subtitle */}
            <p className="text-muted-foreground mb-8 text-lg">From the Planck length to the Observable Universe</p>

            {/* Enter Button */}
            <button
              onClick={() => setShowViewer(true)}
              className="group inline-flex items-center gap-3 px-8 py-3 border-2 border-foreground/30 rounded-full hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-300 text-lg font-medium text-foreground hover-lift"
            >
              Enter
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Compare Section */}
        <div className="w-full mt-16 mb-8">
          <CompareSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
