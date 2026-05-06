import { Link } from "react-router-dom";
import { SERVICE_CARD_IMAGES, WHY_CARD_IMAGES } from "../content/images";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const SERVICES_DETAIL = [
  {
    title: "Land transport",
    body:
      "Our land freight services cover domestic and cross-border transportation. From full truckload (FTL) to less-than-truckload (LTL) solutions, we ensure safe and reliable delivery for goods of all sizes, backed by real-time tracking and route optimization.",
  },
  {
    title: "Sea freight",
    body:
      "For larger shipments and cost-effective solutions, our sea freight services are the ideal choice. We handle full container loads (FCL) and less-than-container loads (LCL), ensuring seamless coordination of port-to-port and door-to-door deliveries.",
  },
  {
    title: "Import & export",
    body:
      "We simplify international trade with comprehensive import and export solutions. From customs clearance and tariff classification to compliance with international regulations, we help your goods move across borders without unnecessary delays.",
  },
  {
    title: "Air freight",
    body:
      "For time-sensitive shipments, our air freight services deliver quickly and efficiently. With access to a global network of carriers, we provide flexible options to meet your deadlines without compromising on cost or quality.",
  },
  {
    title: "Freight forwarding",
    body:
      "We specialize in end-to-end freight forwarding—smooth movement of goods across international borders. Our work includes documentation, customs compliance, and optimizing shipping routes for cost-effective, timely solutions.",
  },
  {
    title: "Warehousing & distribution",
    body:
      "Cargo warehousing is a vital part of the supply chain. Our services include secure storage, disciplined inventory management, and distribution support aligned to your fulfilment needs.",
  },
] as const;

const WHY_SERVICE = [
  {
    title: "Global network",
    body:
      "We connect your shipments to international hubs and consolidation partners—programmes tailored to your lanes and regions worldwide.",
  },
  {
    title: "Special shipments",
    body:
      "If your goods need distinct movement, storage, or handling—we bring structured expertise.",
  },
  {
    title: "Right-time delivery",
    body: "You place the order; we coordinate pickup, clearance, tracking, and handover.",
  },
  {
    title: "Bespoke solutions",
    body: "Personalised intermodal designs for seaports, airports, and inland corridors.",
  },
  {
    title: "24-hour support",
    body:
      "Our team tracks milestones and responds when exceptions arise—around the clock when your programme requires it.",
  },
  {
    title: "Trusted partner",
    body:
      "Businesses choose us for responsive communication, disciplined execution, and competitive positioning.",
  },
] as const;

export default function Services() {
  useDocumentTitle("Services — Dominion Standard Logistics Ltd");

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1>We provide all kinds of logistics service</h1>
          <p>
            From freight forwarding and customs coordination to warehousing and distribution—we
            structure programmes around your lanes, volumes, and timelines.
          </p>
        </div>
      </header>

      <section className="services">
        <div className="container">
          <div className="services-grid">
            {SERVICES_DETAIL.map((item, i) => (
              <article className="service-card" key={item.title}>
                <div className="service-card__img">
                  <img
                    src={SERVICE_CARD_IMAGES[i].src}
                    alt=""
                    width={600}
                    height={360}
                    loading="lazy"
                  />
                </div>
                <div className="service-card__body">
                  <div className="num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why" aria-labelledby="why-svc">
        <div className="container">
          <header className="section-head">
            <h2 id="why-svc">Reasons to work with us</h2>
            <p>The operating principles behind every lane we manage.</p>
          </header>
          <div className="why-grid">
            {WHY_SERVICE.map((item, i) => (
              <article className="why-card" key={item.title}>
                <div className="why-card__img">
                  <img
                    src={WHY_CARD_IMAGES[i].src}
                    alt={WHY_CARD_IMAGES[i].alt}
                    width={640}
                    height={360}
                    loading="lazy"
                  />
                </div>
                <div className="why-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Tell us about your next shipment</h2>
          <Link className="btn btn-primary" to="/contact">
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
