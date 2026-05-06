/**
 * Unsplash (https://unsplash.com/license) — free to use; hotlinking supported.
 */

export const IMAGES = {
  sea: {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=82",
    alt: "Harbor and maritime freight",
  },
  air: {
    src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=82",
    alt: "Air cargo and airport freight",
  },
  land: {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=82",
    alt: "Highway trucking and road freight",
  },
  warehouse: {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=82",
    alt: "Warehouse and distribution operations",
  },
  /** Import / export & customs context */
  customs: {
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=82",
    alt: "International cargo handling",
  },
  /** Freight forwarding — coordination & documentation */
  forwarding: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=82",
    alt: "Planning and logistics coordination",
  },
} as const;

/** Hero carousel slides */
export const HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=82",
    alt: "Global map and digital connectivity for logistics networks",
    label: "Global connectivity",
    blurb: "Coordinate shipments across regions with clear milestones",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=82",
    alt: "Port operations and container handling",
    label: "Ocean freight",
    blurb: "FCL, LCL, and port-to-port programmes",
  },
  {
    src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1400&q=82",
    alt: "Aircraft loading cargo",
    label: "Air cargo",
    blurb: "Time-definite lift via carrier networks",
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=82",
    alt: "Commercial trucks on highway",
    label: "Road transport",
    blurb: "FTL & LTL with tracking and routing",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=82",
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
  src: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=82",
  alt: "Fleet and road freight operations",
} as const;

/** “Reasons to work with us” — six distinct Unsplash scenes */
export const WHY_CARD_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=82",
    alt: "Global logistics connectivity",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=82",
    alt: "Shipping containers at port",
  },
  {
    src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=82",
    alt: "Air freight operations",
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=82",
    alt: "Road transport",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=82",
    alt: "Warehouse operations",
  },
  {
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=82",
    alt: "Logistics and supply chain",
  },
] as const;

export type HeroSlide = (typeof HERO_SLIDES)[number];
