// Import all organism images
import planckImg from "@/assets/organisms/planck.png";
import stringImg from "@/assets/organisms/string.png";
import quarkImg from "@/assets/organisms/quark.png";
import protonImg from "@/assets/organisms/proton.png";
import atomImg from "@/assets/organisms/atom.png";
import dnaImg from "@/assets/organisms/dna.png";
import virusImg from "@/assets/organisms/virus.png";
import bacteriaImg from "@/assets/organisms/bacteria.png";
import bloodCellImg from "@/assets/organisms/blood-cell.png";
import hairImg from "@/assets/organisms/hair.png";
import sandImg from "@/assets/organisms/sand.png";
import antImg from "@/assets/organisms/ant.png";
import ladybugImg from "@/assets/organisms/ladybug.png";
import hummingbirdImg from "@/assets/organisms/hummingbird.png";
import mouseImg from "@/assets/organisms/mouse.png";
import rabbitImg from "@/assets/organisms/rabbit.png";
import catImg from "@/assets/organisms/cat.png";
import humanImg from "@/assets/organisms/human.png";
import horseImg from "@/assets/organisms/horse.png";
import giraffeImg from "@/assets/organisms/giraffe.png";
import elephantImg from "@/assets/organisms/elephant.png";
import whaleSharkImg from "@/assets/organisms/whale-shark.png";
import trexImg from "@/assets/organisms/trex.png";
import blueWhaleImg from "@/assets/organisms/blue-whale.png";
import sequoiaImg from "@/assets/organisms/sequoia.png";
import earthImg from "@/assets/organisms/earth.png";
import sunImg from "@/assets/organisms/sun.png";
import galaxyImg from "@/assets/organisms/galaxy.png";
import universeImg from "@/assets/organisms/universe.png";

export interface Organism {
  id: string;
  name: string;
  scientificName?: string;
  size: number;
  sizeLabel: string;
  category: string;
  color: string;
  description: string;
  image: string;
}

export const organisms: Organism[] = [
  {
    id: "planck",
    name: "Planck Length",
    scientificName: "Smallest measurable length",
    size: 1.616e-35,
    sizeLabel: "1.6 × 10⁻³⁵ m",
    category: "Quantum",
    color: "#a855f7",
    description: "The smallest meaningful length in physics — nothing can be smaller",
    image: planckImg,
  },
  {
    id: "string",
    name: "String",
    scientificName: "Theoretical particle",
    size: 1e-35,
    sizeLabel: "10⁻³⁵ m",
    category: "Theoretical",
    color: "#8b5cf6",
    description: "The smallest theorized unit of matter in string theory",
    image: stringImg,
  },
  {
    id: "quark",
    name: "Quark",
    scientificName: "Elementary particle",
    size: 1e-18,
    sizeLabel: "10⁻¹⁸ m",
    category: "Subatomic",
    color: "#6366f1",
    description: "Fundamental building blocks of protons and neutrons",
    image: quarkImg,
  },
  {
    id: "proton",
    name: "Proton",
    scientificName: "Hadron",
    size: 8.4e-16,
    sizeLabel: "0.84 fm",
    category: "Subatomic",
    color: "#ec4899",
    description: "Positively charged particle in atomic nuclei",
    image: protonImg,
  },
  {
    id: "atom",
    name: "Hydrogen Atom",
    scientificName: "H",
    size: 1.2e-10,
    sizeLabel: "120 pm",
    category: "Atom",
    color: "#3b82f6",
    description: "The simplest and most abundant element in the universe",
    image: atomImg,
  },
  {
    id: "dna-helix",
    name: "DNA Double Helix",
    scientificName: "Deoxyribonucleic acid",
    size: 2e-9,
    sizeLabel: "2 nm",
    category: "Molecule",
    color: "#14b8a6",
    description: "The molecule that carries genetic instructions for life",
    image: dnaImg,
  },
  {
    id: "virus",
    name: "Coronavirus",
    scientificName: "SARS-CoV-2",
    size: 1.2e-7,
    sizeLabel: "120 nm",
    category: "Virus",
    color: "#0f766e",
    description: "A microscopic infectious agent",
    image: virusImg,
  },
  {
    id: "bacteria",
    name: "E. coli",
    scientificName: "Escherichia coli",
    size: 2e-6,
    sizeLabel: "2 μm",
    category: "Bacteria",
    color: "#22c55e",
    description: "Common gut bacteria essential for digestion",
    image: bacteriaImg,
  },
  {
    id: "red-blood-cell",
    name: "Red Blood Cell",
    scientificName: "Erythrocyte",
    size: 7e-6,
    sizeLabel: "7 μm",
    category: "Cell",
    color: "#dc2626",
    description: "Carries oxygen throughout your body",
    image: bloodCellImg,
  },
  {
    id: "human-hair",
    name: "Human Hair Width",
    size: 7e-5,
    sizeLabel: "70 μm",
    category: "Human",
    color: "#d97706",
    description: "Cross-section of a single strand of hair",
    image: hairImg,
  },
  {
    id: "grain-of-sand",
    name: "Grain of Sand",
    size: 5e-4,
    sizeLabel: "0.5 mm",
    category: "Object",
    color: "#d4a574",
    description: "A tiny piece of weathered rock",
    image: sandImg,
  },
  {
    id: "ant",
    name: "Ant",
    scientificName: "Formicidae",
    size: 2e-3,
    sizeLabel: "2 mm",
    category: "Insect",
    color: "#1c1917",
    description: "Tiny but incredibly strong for their size",
    image: antImg,
  },
  {
    id: "ladybug",
    name: "Ladybug",
    scientificName: "Coccinellidae",
    size: 8e-3,
    sizeLabel: "8 mm",
    category: "Insect",
    color: "#dc2626",
    description: "A gardener's favorite beetle",
    image: ladybugImg,
  },
  {
    id: "hummingbird",
    name: "Bee Hummingbird",
    scientificName: "Mellisuga helenae",
    size: 5.5e-2,
    sizeLabel: "5.5 cm",
    category: "Bird",
    color: "#14b8a6",
    description: "The world's smallest bird",
    image: hummingbirdImg,
  },
  {
    id: "mouse",
    name: "House Mouse",
    scientificName: "Mus musculus",
    size: 9e-2,
    sizeLabel: "9 cm",
    category: "Mammal",
    color: "#78716c",
    description: "One of the most common mammals on Earth",
    image: mouseImg,
  },
  {
    id: "rabbit",
    name: "Rabbit",
    scientificName: "Oryctolagus cuniculus",
    size: 4e-1,
    sizeLabel: "40 cm",
    category: "Mammal",
    color: "#9ca3af",
    description: "Fluffy and remarkably fast",
    image: rabbitImg,
  },
  {
    id: "cat",
    name: "Domestic Cat",
    scientificName: "Felis catus",
    size: 4.6e-1,
    sizeLabel: "46 cm",
    category: "Mammal",
    color: "#f97316",
    description: "Humanity's beloved companion for millennia",
    image: catImg,
  },
  {
    id: "human",
    name: "Human",
    scientificName: "Homo sapiens",
    size: 1.7,
    sizeLabel: "1.7 m",
    category: "Mammal",
    color: "#f59e0b",
    description: "That's you! The observer of scales",
    image: humanImg,
  },
  {
    id: "horse",
    name: "Horse",
    scientificName: "Equus caballus",
    size: 2.4,
    sizeLabel: "2.4 m",
    category: "Mammal",
    color: "#78350f",
    description: "Majestic animals that shaped civilization",
    image: horseImg,
  },
  {
    id: "giraffe",
    name: "Giraffe",
    scientificName: "Giraffa",
    size: 5.5,
    sizeLabel: "5.5 m",
    category: "Mammal",
    color: "#eab308",
    description: "The tallest living terrestrial animal",
    image: giraffeImg,
  },
  {
    id: "elephant",
    name: "African Elephant",
    scientificName: "Loxodonta africana",
    size: 4,
    sizeLabel: "4 m tall",
    category: "Mammal",
    color: "#6b7280",
    description: "The largest living land animal",
    image: elephantImg,
  },
  {
    id: "whale-shark",
    name: "Whale Shark",
    scientificName: "Rhincodon typus",
    size: 12,
    sizeLabel: "12 m",
    category: "Fish",
    color: "#0ea5e9",
    description: "The largest fish in the ocean",
    image: whaleSharkImg,
  },
  {
    id: "t-rex",
    name: "T-Rex",
    scientificName: "Tyrannosaurus rex",
    size: 12,
    sizeLabel: "12 m",
    category: "Dinosaur",
    color: "#65a30d",
    description: "The legendary king of dinosaurs",
    image: trexImg,
  },
  {
    id: "blue-whale",
    name: "Blue Whale",
    scientificName: "Balaenoptera musculus",
    size: 30,
    sizeLabel: "30 m",
    category: "Mammal",
    color: "#3b82f6",
    description: "The largest animal to have ever existed on Earth",
    image: blueWhaleImg,
  },
  {
    id: "sequoia",
    name: "Giant Sequoia",
    scientificName: "Sequoiadendron giganteum",
    size: 95,
    sizeLabel: "95 m",
    category: "Plant",
    color: "#166534",
    description: "Among the tallest and most massive trees on Earth",
    image: sequoiaImg,
  },
  {
    id: "earth",
    name: "Earth",
    scientificName: "Terra",
    size: 1.27e7,
    sizeLabel: "12,742 km",
    category: "Planet",
    color: "#3b82f6",
    description: "Our home planet, the only known world with life",
    image: earthImg,
  },
  {
    id: "sun",
    name: "The Sun",
    scientificName: "Sol",
    size: 1.39e9,
    sizeLabel: "1.39 million km",
    category: "Star",
    color: "#f59e0b",
    description: "The star at the center of our solar system",
    image: sunImg,
  },
  {
    id: "milky-way",
    name: "Milky Way",
    scientificName: "Our Galaxy",
    size: 9.5e20,
    sizeLabel: "100,000 light years",
    category: "Galaxy",
    color: "#8b5cf6",
    description: "Our home galaxy containing 100-400 billion stars",
    image: galaxyImg,
  },
  {
    id: "observable-universe",
    name: "Observable Universe",
    scientificName: "The Cosmos",
    size: 8.8e26,
    sizeLabel: "93 billion light years",
    category: "Universe",
    color: "#6366f1",
    description: "Everything we can possibly observe — the ultimate scale",
    image: universeImg,
  },
];
