export interface ScaleObject {
  id: string;
  name: string;
  size: number; // in meters
  sizeLabel: string;
  description: string;
  funFact: string;
  color: string;
  glowColor: string;
  category: "cosmic" | "terrestrial" | "biological" | "molecular" | "atomic" | "quantum";
}

export const scaleObjects: ScaleObject[] = [
  {
    id: "observable-universe",
    name: "Observable Universe",
    size: 8.8e26,
    sizeLabel: "8.8 × 10²⁶ m",
    description: "Everything we can theoretically observe",
    funFact: "Contains approximately 2 trillion galaxies",
    color: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.6)",
    category: "cosmic",
  },
  {
    id: "milky-way",
    name: "Milky Way Galaxy",
    size: 1e21,
    sizeLabel: "1 × 10²¹ m",
    description: "Our home galaxy in the cosmos",
    funFact: "Contains 100-400 billion stars",
    color: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.6)",
    category: "cosmic",
  },
  {
    id: "solar-system",
    name: "Solar System",
    size: 9e12,
    sizeLabel: "9 × 10¹² m",
    description: "Our cosmic neighborhood",
    funFact: "Takes 4.6 billion years to complete one galactic orbit",
    color: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.6)",
    category: "cosmic",
  },
  {
    id: "sun",
    name: "The Sun",
    size: 1.4e9,
    sizeLabel: "1.4 × 10⁹ m",
    description: "Our life-giving star",
    funFact: "Could fit 1.3 million Earths inside it",
    color: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.8)",
    category: "cosmic",
  },
  {
    id: "earth",
    name: "Earth",
    size: 1.27e7,
    sizeLabel: "1.27 × 10⁷ m",
    description: "Our blue marble home",
    funFact: "The only known planet with liquid water on the surface",
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.6)",
    category: "terrestrial",
  },
  {
    id: "moon",
    name: "Moon",
    size: 3.5e6,
    sizeLabel: "3.5 × 10⁶ m",
    description: "Earth's faithful companion",
    funFact: "Moving away from Earth at 3.8 cm per year",
    color: "#9ca3af",
    glowColor: "rgba(156, 163, 175, 0.5)",
    category: "terrestrial",
  },
  {
    id: "mount-everest",
    name: "Mount Everest",
    size: 8849,
    sizeLabel: "8,849 m",
    description: "Earth's highest peak",
    funFact: "Still growing by about 4mm per year",
    color: "#78716c",
    glowColor: "rgba(120, 113, 108, 0.5)",
    category: "terrestrial",
  },
  {
    id: "sequoia",
    name: "Giant Sequoia",
    size: 95,
    sizeLabel: "95 m",
    description: "Earth's largest living organism",
    funFact: "Can live for over 3,000 years",
    color: "#166534",
    glowColor: "rgba(22, 101, 52, 0.5)",
    category: "terrestrial",
  },
  {
    id: "blue-whale",
    name: "Blue Whale",
    size: 30,
    sizeLabel: "30 m",
    description: "The largest animal ever",
    funFact: "Heart is the size of a small car",
    color: "#0ea5e9",
    glowColor: "rgba(14, 165, 233, 0.5)",
    category: "biological",
  },
  {
    id: "statue-of-liberty",
    name: "Statue of Liberty",
    size: 93,
    sizeLabel: "93 m",
    description: "A symbol of freedom",
    funFact: "Her crown has 7 rays representing the 7 continents",
    color: "#22d3d1",
    glowColor: "rgba(34, 211, 209, 0.5)",
    category: "terrestrial",
  },
  {
    id: "human",
    name: "Human",
    size: 1.7,
    sizeLabel: "1.7 m",
    description: "That's you, the observer",
    funFact: "You contain 7 octillion atoms",
    color: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.5)",
    category: "biological",
  },
  {
    id: "ant",
    name: "Ant",
    size: 2e-3,
    sizeLabel: "2 mm",
    description: "Tiny but mighty",
    funFact: "Can lift 50 times their body weight",
    color: "#1c1917",
    glowColor: "rgba(28, 25, 23, 0.8)",
    category: "biological",
  },
  {
    id: "grain-of-sand",
    name: "Grain of Sand",
    size: 5e-4,
    sizeLabel: "0.5 mm",
    description: "Billions make a beach",
    funFact: "More stars in the universe than grains of sand on Earth",
    color: "#d4a574",
    glowColor: "rgba(212, 165, 116, 0.5)",
    category: "biological",
  },
  {
    id: "red-blood-cell",
    name: "Red Blood Cell",
    size: 7e-6,
    sizeLabel: "7 μm",
    description: "Your oxygen delivery system",
    funFact: "Your body creates 2 million per second",
    color: "#dc2626",
    glowColor: "rgba(220, 38, 38, 0.6)",
    category: "biological",
  },
  {
    id: "bacteria",
    name: "E. coli Bacteria",
    size: 2e-6,
    sizeLabel: "2 μm",
    description: "Microscopic life form",
    funFact: "You have 10x more bacteria than human cells",
    color: "#22c55e",
    glowColor: "rgba(34, 197, 94, 0.5)",
    category: "biological",
  },
  {
    id: "virus",
    name: "Coronavirus",
    size: 1.2e-7,
    sizeLabel: "120 nm",
    description: "A microscopic infectious agent",
    funFact: "Not technically alive - needs a host to replicate",
    color: "#0f766e",
    glowColor: "rgba(15, 118, 110, 0.5)",
    category: "molecular",
  },
  {
    id: "dna",
    name: "DNA Double Helix",
    size: 2e-9,
    sizeLabel: "2 nm",
    description: "The code of life",
    funFact: "If unwound, your DNA would stretch to the Sun and back 600 times",
    color: "#14b8a6",
    glowColor: "rgba(20, 184, 166, 0.5)",
    category: "molecular",
  },
  {
    id: "atom",
    name: "Hydrogen Atom",
    size: 1.2e-10,
    sizeLabel: "120 pm",
    description: "Building block of matter",
    funFact: "99.9999999% empty space",
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.6)",
    category: "atomic",
  },
  {
    id: "proton",
    name: "Proton",
    size: 8.4e-16,
    sizeLabel: "0.84 fm",
    description: "Heart of the atomic nucleus",
    funFact: "Made of 3 quarks held together by gluons",
    color: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.6)",
    category: "atomic",
  },
  {
    id: "quark",
    name: "Quark",
    size: 1e-18,
    sizeLabel: "10⁻¹⁸ m",
    description: "Fundamental particle",
    funFact: "Has never been observed in isolation",
    color: "#6366f1",
    glowColor: "rgba(99, 102, 241, 0.6)",
    category: "quantum",
  },
  {
    id: "planck-length",
    name: "Planck Length",
    size: 1.6e-35,
    sizeLabel: "1.6 × 10⁻³⁵ m",
    description: "The smallest meaningful length",
    funFact: "Beyond this, physics breaks down",
    color: "#00d4ff",
    glowColor: "rgba(0, 212, 255, 0.8)",
    category: "quantum",
  },
];

// Calculate zoom levels based on object sizes
export const getZoomLevel = (size: number): number => {
  // Map size to a 0-100 zoom level
  const maxSize = 8.8e26; // Observable Universe
  const minSize = 1.6e-35; // Planck length
  const logMax = Math.log10(maxSize);
  const logMin = Math.log10(minSize);
  const logSize = Math.log10(size);
  
  return ((logMax - logSize) / (logMax - logMin)) * 100;
};

export const getObjectAtZoom = (zoomPercent: number): ScaleObject | null => {
  const maxSize = 8.8e26;
  const minSize = 1.6e-35;
  const logMax = Math.log10(maxSize);
  const logMin = Math.log10(minSize);
  
  const targetLogSize = logMax - (zoomPercent / 100) * (logMax - logMin);
  const targetSize = Math.pow(10, targetLogSize);
  
  // Find the closest object
  let closest = scaleObjects[0];
  let closestDiff = Infinity;
  
  scaleObjects.forEach(obj => {
    const diff = Math.abs(Math.log10(obj.size) - Math.log10(targetSize));
    if (diff < closestDiff) {
      closestDiff = diff;
      closest = obj;
    }
  });
  
  // Only return if we're close enough
  if (closestDiff < 2) {
    return closest;
  }
  
  return null;
};
