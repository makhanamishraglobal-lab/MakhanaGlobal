export type Product = {
  rank: number;
  name: string;
  grade: "6+" | "5+" | "5" | "4+";
  type: "Hand Pick" | "Non Hand Pick";
  pricePerKg: number;
  tagline: string;
  description: string;
  pouch: { from: string; to: string; dark?: boolean };
};

export const products: Product[] = [
  {
    rank: 1,
    name: "6+ Handpicked Supreme",
    grade: "6+",
    type: "Hand Pick",
    pricePerKg: 1300,
    tagline: "Finest Selection · Export Premium",
    description: "6+ sutta - our biggest kernel size, hand-sorted piece by piece for spotless, unbroken lava. The export-premium pick for luxury retail.",
    pouch: { from: "#235a3f", to: "#0d2b1d" },
  },
  {
    rank: 2,
    name: "6+ Size Makhana",
    grade: "6+",
    type: "Non Hand Pick",
    pricePerKg: 1200,
    tagline: "Large Premium Kernels",
    description: "The same extra-large 6+ sutta kernels, machine-graded instead of hand-sorted - premium size at a better price.",
    pouch: { from: "#1e2f55", to: "#0c1630" },
  },
  {
    rank: 3,
    name: "5+ Handpicked Premium",
    grade: "5+",
    type: "Hand Pick",
    pricePerKg: 1090,
    tagline: "Carefully Selected Quality",
    description: "Large 5+ sutta kernels, hand-sorted for whiteness and crunch - carefully selected quality for premium retail brands.",
    pouch: { from: "#6a1f33", to: "#3a0e1c" },
  },
  {
    rank: 4,
    name: "5+ Size Makhana",
    grade: "5+",
    type: "Non Hand Pick",
    pricePerKg: 990,
    tagline: "Standard Premium Grade",
    description: "Large 5+ sutta kernels, machine-graded - the standard premium grade with great consumer preference.",
    pouch: { from: "#274b73", to: "#122844" },
  },
  {
    rank: 5,
    name: "5 Exclusive Handpicked",
    grade: "5",
    type: "Hand Pick",
    pricePerKg: 950,
    tagline: "Premium Business Choice",
    description: "Good mid-size 5 sutta kernels, hand-sorted for cleaner lots - the premium business choice for growing brands.",
    pouch: { from: "#175a52", to: "#082e29" },
  },
  {
    rank: 6,
    name: "5 Exclusive Grade",
    grade: "5",
    type: "Non Hand Pick",
    pricePerKg: 880,
    tagline: "Reliable Commercial Grade",
    description: "Good mid-size 5 sutta kernels, machine-graded - reliable commercial grade for distribution and steady growth.",
    pouch: { from: "#f0e2c4", to: "#d9bf94", dark: true },
  },
  {
    rank: 7,
    name: "4+ Handpicked Fresh & Natural",
    grade: "4+",
    type: "Hand Pick",
    pricePerKg: 990,
    tagline: "Value Premium Selection",
    description: "Standard 4+ sutta kernels, hand-sorted, fresh and natural - the value premium selection for quality-conscious buyers.",
    pouch: { from: "#2f6b4a", to: "#123a26" },
  },
  {
    rank: 8,
    name: "4+ Size Makhana",
    grade: "4+",
    type: "Non Hand Pick",
    pricePerKg: 900,
    tagline: "Wholesale Grade Quality",
    description: "Standard 4+ sutta kernels, machine-graded - wholesale quality with dependable supply for roasting and packaging units.",
    pouch: { from: "#4b2a72", to: "#241040" },
  },
  {
    rank: 9,
    name: "4+ Exclusive Handpicked",
    grade: "4+",
    type: "Hand Pick",
    pricePerKg: 780,
    tagline: "Commercial Premium Grade",
    description: "Standard 4+ sutta kernels, hand-sorted at an economical price - commercial premium grade for bulk programs.",
    pouch: { from: "#2e2e33", to: "#121215" },
  },
  {
    rank: 10,
    name: "4+ Exclusive Grade",
    grade: "4+",
    type: "Non Hand Pick",
    pricePerKg: 680,
    tagline: "Economical Bulk Solution",
    description: "Standard 4+ sutta kernels, machine-graded - our most economical bulk solution for industries and bulk buyers.",
    pouch: { from: "#efe0bf", to: "#d5ba8c", dark: true },
  },
];

export const productNames = products.map((p) => p.name) as [string, ...string[]];

export const gradeFamilies = [
  { grade: "6+", bestFor: "Luxury Retail & Export", benefit: "Extra large size, supreme quality, highest premium value." },
  { grade: "5+", bestFor: "Premium Retail", benefit: "Large size, high quality, great consumer preference." },
  { grade: "5", bestFor: "Commercial & Distribution", benefit: "Good size & quality, ideal for business growth." },
  { grade: "4+", bestFor: "Wholesale & Bulk Orders", benefit: "Value for money, consistent supply, bulk economy." },
] as const;

export function formatInr(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}
