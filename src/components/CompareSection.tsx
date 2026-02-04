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
    <div className="w-full max-w-4xl mx-auto p-6">
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
            <SelectTrigger className="w-full max-w-xs bg-card border-border">
              <SelectValue placeholder="Select first item" />
            </SelectTrigger>
            <SelectContent className="max-h-[150px]">
              {organisms.map((org) => (
                <SelectItem key={org.id} value={org.id}>
                  {org.name} ({org.sizeLabel})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {leftOrganism && (
            <div className="flex flex-col items-center gap-3 animate-fade-in">
              <div className="w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
                <img
                  src={leftOrganism.image}
                  alt={leftOrganism.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-foreground">{leftOrganism.name}</h3>
                <p className="text-sm text-muted-foreground">{leftOrganism.sizeLabel}</p>
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
            <SelectTrigger className="w-full max-w-xs bg-card border-border">
              <SelectValue placeholder="Select second item" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {organisms.map((org) => (
                <SelectItem key={org.id} value={org.id}>
                  {org.name} ({org.sizeLabel})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {rightOrganism && (
            <div className="flex flex-col items-center gap-3 animate-fade-in">
              <div className="w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
                <img
                  src={rightOrganism.image}
                  alt={rightOrganism.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-foreground">{rightOrganism.name}</h3>
                <p className="text-sm text-muted-foreground">{rightOrganism.sizeLabel}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Comparison Result */}
      {leftOrganism && rightOrganism && (
        <div className="mt-8 text-center animate-fade-in">
          <div className="inline-block px-6 py-4 bg-card rounded-xl border border-border">
            <p className="text-lg md:text-xl text-foreground font-medium">{getComparison()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareSection;
