/**
 * Unsplash (https://unsplash.com/license) — free to use; hotlinking supported.
 */

export const IMAGES = {
  sea: {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Harbor and maritime freight",
  },
  air: {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Air cargo and airport freight",
  },
  land: {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Highway trucking and road freight",
  },
  warehouse: {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Warehouse and distribution operations",
  },
  /** Import / export & customs context */
  customs: {
    src: "/assets/letterhead-reference.jpeg",
    alt: "International cargo handling",
  },
  /** Freight forwarding — coordination & documentation */
  forwarding: {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Planning and logistics coordination",
  },
} as const;

/** Hero carousel slides */
export const HERO_SLIDES = [
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Global map and digital connectivity for logistics networks",
    label: "Global connectivity",
    blurb: "Coordinate shipments across regions with clear milestones",
  },
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Port operations and container handling",
    label: "Ocean freight",
    blurb: "FCL, LCL, and port-to-port programmes",
  },
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Aircraft loading cargo",
    label: "Air cargo",
    blurb: "Time-definite lift via carrier networks",
  },
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Commercial trucks on highway",
    label: "Road transport",
    blurb: "FTL & LTL with tracking and routing",
  },
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Modern warehouse interior",
    label: "Warehousing",
    blurb: "Storage and inventory aligned to your network",
  },
] as const;

/** Home & Services grids — same order as copy: land, sea, import/export, air, forwarding, warehouse */
export const SERVICE_CARD_IMAGES = [
  IMAGES.land,
  IMAGES.sea,
  IMAGES.customs,
  IMAGES.air,
  IMAGES.forwarding,
  IMAGES.warehouse,
] as const;

export const ABOUT_PANEL_IMAGE = {
  src: "/assets/letterhead-reference.jpeg",
  alt: "Fleet and road freight operations",
} as const;

/** “Reasons to work with us” — six distinct Unsplash scenes */
export const WHY_CARD_IMAGES = [
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Global logistics connectivity",
  },
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Shipping containers at port",
  },
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Air freight operations",
  },
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Road transport",
  },
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Warehouse operations",
  },
  {
    src: "/assets/letterhead-reference.jpeg",
    alt: "Logistics and supply chain",
  },
] as const;

export type HeroSlide = (typeof HERO_SLIDES)[number];
