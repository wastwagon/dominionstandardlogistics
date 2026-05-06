/**
 * Unsplash (https://unsplash.com/license) — free to use; hotlinking supported.
 */

// const SITE_PHOTO = new URL(
//   "../../WhatsApp Image 2026-05-01 at 11.35.35.jpeg",
//   import.meta.url,
// ).href;

export const IMAGES = {
  sea: {
    src: "/assets/seafreight.jpg",
    alt: "Harbor and maritime freight",
  },
  air: {
    src: "/assets/air-freight.jpg",
    alt: "Air cargo and airport freight",
  },
  land: {
    src: "/assets/land-freight.jpg",
    alt: "Highway trucking and road freight",
  },
  warehouse: {
    src: "/assets/warehouse.jpg",
    alt: "Warehouse and distribution operations",
  },
  /** Import / export & customs context */
  customs: {
    src: "/assets/import.jpg",
    alt: "International cargo handling",
  },
  /** Freight forwarding — coordination & documentation */
  forwarding: {
    src: "/assets/freight-forwarding.jpg",
    alt: "Planning and logistics coordination",
  },
} as const;

/** Hero carousel slides */
export const HERO_SLIDES = [
  {
    src: "/assets/hero1.jpg",
    alt: "Global map and digital connectivity for logistics networks",
    label: "Global connectivity",
    blurb: "Coordinate shipments across regions with clear milestones",
  },
  {
    src: "/assets/seafreight.jpg",
    alt: "Port operations and container handling",
    label: "Ocean freight",
    blurb: "FCL, LCL, and port-to-port programmes",
  },
  {
    src: "/assets/air-freight.jpg",
    alt: "Aircraft loading cargo",
    label: "Air cargo",
    blurb: "Time-definite lift via carrier networks",
  },
  {
    src: "/assets/land-freight.jpg",
    alt: "Commercial trucks on highway",
    label: "Road transport",
    blurb: "FTL & LTL with tracking and routing",
  },
  {
    src: "/assets/warehouse.jpg",
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
  src: "/assets/land.jpg",
  alt: "Fleet and road freight operations",
} as const;

/** “Reasons to work with us” — six distinct Unsplash scenes */
export const WHY_CARD_IMAGES = [
  {
    src: "/assets/global.jpg",
    alt: "Global logistics connectivity",
  },
  {
    src: "/assets/special.jpg",
    alt: "Shipping containers at port",
  },
  {
    src: "/assets/air-freight.jpg",
    alt: "Air freight operations",
  },
  {
    src: "/assets/beskpoke.jpg",
    alt: "Road transport",
  },
  {
    src: "/assets/warehouse.jpg",
    alt: "Warehouse operations",
  },
  {
    src: "/assets/trust.jpg",
    alt: "Logistics and supply chain",
  },
] as const;

export type HeroSlide = (typeof HERO_SLIDES)[number];
