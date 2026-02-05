import { useState } from "react";
import { organisms, Organism } from "@/data/organisms";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CompareSection = () => {
  const [leftOrganism, setLeftOrganism] = useState<Organism | null>(null);
  const [rightOrganism, setRightOrganism] = useState<Organism | null>(null);

  const getComparison = () => {
    if (!leftOrganism || !rightOrganism) return null;

    const ratio = leftOrganism.size / rightOrganism.size;
    if (ratio > 1) {
      return `${leftOrganism.name} is ${ratio.toExponential(2)}× larger than ${rightOrganism.name}`;
    } else if (ratio < 1) {
      return `${leftOrganism.name} is ${(1 / ratio).toExponential(2)}× smaller than ${rightOrganism.name}`;
    }
    return `${leftOrganism.name} and ${rightOrganism.name} are the same size`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 relative z-30">
      <h2 className="text-3xl md:text-4xl font-medium text-center mb-8 text-foreground">Compare Sizes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Selection */}
        <div className="flex flex-col items-center gap-4">
          <Select
            onValueChange={(value) => {
              const org = organisms.find((o) => o.id === value);
              setLeftOrganism(org || null);
            }}
          >
            <SelectTrigger className="w-full max-w-xs bg-card border-border shadow-sm hover:shadow-md transition-shadow">
              <SelectValue placeholder="Select first item" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px] z-50 bg-popover">
              {organisms.map((org) => (
                <SelectItem key={org.id} value={org.id}>
                  <span className="flex items-center gap-2">
                    <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{org.category}</span>
                    {org.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {leftOrganism && (
            <div className="flex flex-col items-center gap-3 animate-fade-in p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
                <img
                  src={leftOrganism.image}
                  alt={leftOrganism.name}
                  className="max-w-full max-h-full object-contain smooth-transition hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-foreground">{leftOrganism.name}</h3>
                <p className="text-sm text-primary font-medium">{leftOrganism.sizeLabel}</p>
                <p className="text-xs text-muted-foreground mt-2 max-w-[200px]">{leftOrganism.description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Selection */}
        <div className="flex flex-col items-center gap-4">
          <Select
            onValueChange={(value) => {
              const org = organisms.find((o) => o.id === value);
              setRightOrganism(org || null);
            }}
          >
            <SelectTrigger className="w-full max-w-xs bg-card border-border shadow-sm hover:shadow-md transition-shadow">
              <SelectValue placeholder="Select second item" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px] z-50 bg-popover">
              {organisms.map((org) => (
                <SelectItem key={org.id} value={org.id}>
                  <span className="flex items-center gap-2">
                    <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{org.category}</span>
                    {org.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {rightOrganism && (
            <div className="flex flex-col items-center gap-3 animate-fade-in p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
                <img
                  src={rightOrganism.image}
                  alt={rightOrganism.name}
                  className="max-w-full max-h-full object-contain smooth-transition hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-foreground">{rightOrganism.name}</h3>
                <p className="text-sm text-primary font-medium">{rightOrganism.sizeLabel}</p>
                <p className="text-xs text-muted-foreground mt-2 max-w-[200px]">{rightOrganism.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Comparison Result */}
      {leftOrganism && rightOrganism && (
        <div className="mt-8 text-center animate-fade-in">
          <div className="inline-block px-8 py-5 bg-gradient-to-r from-primary/10 via-card to-accent/10 rounded-2xl border border-border shadow-lg">
            <p className="text-lg md:text-xl text-foreground font-medium">{getComparison()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareSection;
