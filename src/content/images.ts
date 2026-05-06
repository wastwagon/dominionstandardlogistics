/**
 * Unsplash (https://unsplash.com/license) — free to use; hotlinking supported.
 */

const SITE_PHOTO = new URL(
  "../../WhatsApp Image 2026-05-01 at 11.35.35.jpeg",
  import.meta.url,
).href;

export const IMAGES = {
  sea: {
    src: SITE_PHOTO,
    alt: "Harbor and maritime freight",
  },
  air: {
    src: SITE_PHOTO,
    alt: "Air cargo and airport freight",
  },
  land: {
    src: SITE_PHOTO,
    alt: "Highway trucking and road freight",
  },
  warehouse: {
    src: SITE_PHOTO,
    alt: "Warehouse and distribution operations",
  },
  /** Import / export & customs context */
  customs: {
    src: SITE_PHOTO,
    alt: "International cargo handling",
  },
  /** Freight forwarding — coordination & documentation */
  forwarding: {
    src: SITE_PHOTO,
    alt: "Planning and logistics coordination",
  },
} as const;

/** Hero carousel slides */
export const HERO_SLIDES = [
  {
    src: SITE_PHOTO,
    alt: "Global map and digital connectivity for logistics networks",
    label: "Global connectivity",
    blurb: "Coordinate shipments across regions with clear milestones",
  },
  {
    src: SITE_PHOTO,
    alt: "Port operations and container handling",
    label: "Ocean freight",
    blurb: "FCL, LCL, and port-to-port programmes",
  },
  {
    src: SITE_PHOTO,
    alt: "Aircraft loading cargo",
    label: "Air cargo",
    blurb: "Time-definite lift via carrier networks",
  },
  {
    src: SITE_PHOTO,
    alt: "Commercial trucks on highway",
    label: "Road transport",
    blurb: "FTL & LTL with tracking and routing",
  },
  {
    src: SITE_PHOTO,
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
  src: SITE_PHOTO,
  alt: "Fleet and road freight operations",
} as const;

/** “Reasons to work with us” — six distinct Unsplash scenes */
export const WHY_CARD_IMAGES = [
  {
    src: SITE_PHOTO,
    alt: "Global logistics connectivity",
  },
  {
    src: SITE_PHOTO,
    alt: "Shipping containers at port",
  },
  {
    src: SITE_PHOTO,
    alt: "Air freight operations",
  },
  {
    src: SITE_PHOTO,
    alt: "Road transport",
  },
  {
    src: SITE_PHOTO,
    alt: "Warehouse operations",
  },
  {
    src: SITE_PHOTO,
    alt: "Logistics and supply chain",
  },
] as const;

export type HeroSlide = (typeof HERO_SLIDES)[number];
