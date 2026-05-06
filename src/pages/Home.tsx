import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import {
  ABOUT_PANEL_IMAGE,
  HERO_SLIDES,
  IMAGES,
  SERVICE_CARD_IMAGES,
  WHY_CARD_IMAGES,
} from "../content/images";
import { SITE } from "../content/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const HOME_SERVICES = [
  {
    num: "01",
    title: "Land transport",
    body:
      "Domestic and cross-border transportation from full truckload (FTL) to less-than-truckload (LTL), with real-time tracking and route optimisation.",
  },
  {
    num: "02",
    title: "Sea freight",
    body:
      "Cost-effective FCL and LCL programmes with seamless port-to-port and door-to-door coordination.",
  },
  {
    num: "03",
    title: "Import & export",
    body:
      "Customs clearance, tariff classification, and regulatory compliance so goods cross borders without unnecessary delay.",
  },
  {
    num: "04",
    title: "Air freight",
    body:
      "Time-sensitive shipments via a global carrier network—flexible options that balance speed and cost.",
  },
  {
    num: "05",
    title: "Freight forwarding",
    body:
      "Documentation, compliance, and route optimisation for smooth international movement of goods.",
  },
  {
    num: "06",
    title: "Warehousing",
    body:
      "Secure facilities with inventory systems that support agility across your supply chain.",
  },
] as const;

const WHY_ITEMS = [
  {
    title: "Global network",
    body:
      "Access to trade lanes and consolidation partners across Africa, Europe, the Americas, Asia–Pacific, and beyond.",
  },
  {
    title: "Special shipments",
    body: "Expertise for cargo with unique handling, storage, or movement requirements.",
  },
  {
    title: "Right-time delivery",
    body: "From pickup to customs clearance and tracking—we manage the full journey.",
  },
  {
    title: "Bespoke solutions",
    body: "Personalised intermodal plans aligned to your ports, airports, and deadlines.",
  },
  {
    title: "24-hour support",
    body:
      "Dedicated operators monitoring milestones so you always know where your cargo stands.",
  },
  {
    title: "Trusted partner",
    body:
      "A growing base of shippers and importers who rely on us for competitive, transparent service.",
  },
] as const;

export default function Home() {
  useDocumentTitle("Dominion Standard Logistics Ltd — Freight, Transport & Logistics");

  return (
    <>
      <section className="hero hero--immersive">
        <div className="hero__stage">
          <HeroSlider slides={HERO_SLIDES} intervalMs={6500} variant="immersive" />
          <div className="hero__scrim" aria-hidden />
          <div className="container hero__shell">
            <div className="hero__copy">
              <p className="hero__kicker">Freight · Transport · Logistics</p>
              <h1>Reliable movement of goods across borders and continents</h1>
              <p className="hero__lead">
                Dominion Standard Logistics Ltd delivers freight forwarding, transport, and
                import–export programmes for businesses worldwide. From our Accra base we coordinate
                reliable movement of cargo across borders and continents—on time, with clear
                communication.
              </p>
              <div className="hero__actions hero__actions--immersive">
                <Link className="btn-hero-solid" to="/contact">
                  Get a free quote
                </Link>
                <Link className="btn-hero-outline" to="/services">
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__trust">
          <div className="container hero__trust-inner">
            <div className="hero__trust-block">
              <span className="hero__trust-label">Headquarters</span>
              <strong>{SITE.addressHighlight}</strong>
              <span className="hero__trust-sub">{SITE.taglineLocation}</span>
            </div>
            <div className="hero__trust-divider" aria-hidden />
            <div className="hero__trust-block">
              <span className="hero__trust-label">Call us</span>
              <a className="hero__trust-phone" href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplay}
              </a>
              <span className="hero__trust-sub">Quotes, bookings &amp; shipment updates</span>
            </div>
            <div className="hero__trust-divider" aria-hidden />
            <div className="hero__trust-block hero__trust-block--cta">
              <span className="hero__trust-label">Next step</span>
              <Link className="btn-hero-solid btn-hero-solid--compact" to="/contact">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="modes" aria-labelledby="modes-heading">
        <div className="container">
          <header className="section-head">
            <h2 id="modes-heading">Modes we excel at</h2>
            <p>
              Global-standard execution across major trade lanes—ocean, air, and road—with
              schedules and visibility aligned to your markets.
            </p>
          </header>
          <div className="mode-grid">
            <article className="mode-card">
              <div className="mode-card__img" aria-hidden>
                <img src={IMAGES.sea.src} alt="" width={900} height={600} loading="lazy" />
              </div>
              <span className="tag">01 · Sea freight</span>
              <h3>Sea freight</h3>
              <p>
                Dependable ocean solutions for full container and consolidated shipments, aligned
                with your schedules and budgets.
              </p>
              <Link className="btn btn-primary" to="/contact">
                Get a free quote
              </Link>
            </article>
            <article className="mode-card">
              <div className="mode-card__img" aria-hidden>
                <img src={IMAGES.air.src} alt="" width={900} height={600} loading="lazy" />
              </div>
              <span className="tag">02 · Air freight</span>
              <h3>Air freight</h3>
              <p>
                Fast lift for time-critical cargo via a global network of carriers and tailored
                routing options.
              </p>
              <Link className="btn btn-primary" to="/contact">
                Get a free quote
              </Link>
            </article>
            <article className="mode-card">
              <div className="mode-card__img" aria-hidden>
                <img src={IMAGES.land.src} alt="" width={900} height={600} loading="lazy" />
              </div>
              <span className="tag">03 · Land freight</span>
              <h3>Land freight</h3>
              <p>
                Domestic and cross-border trucking with FTL and LTL options, tracking, and route
                optimisation.
              </p>
              <Link className="btn btn-primary" to="/contact">
                Get a free quote
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="about-strip">
        <div className="container about-strip__grid">
          <div>
            <span className="eyebrow">About the company</span>
            <h2>Dominion Standard Logistics Ltd</h2>
            <p>
              We are a freight, transport, and logistics partner focused on dependable execution.
              Our team covers air, ocean, and land programmes so your cargo moves efficiently and
              securely—whether regional lanes or intercontinental corridors.
            </p>
            <p>
              We simplify complexity: documentation, customs alignment, warehousing, and milestone
              tracking—so you stay informed from origin to destination.
            </p>
            <Link className="btn btn-ghost" to="/about">
              Read our story
            </Link>
          </div>
          <div className="about-strip__aside">
            <figure className="about-strip__figure">
              <img
                src={ABOUT_PANEL_IMAGE.src}
                alt={ABOUT_PANEL_IMAGE.alt}
                width={900}
                height={560}
                loading="lazy"
              />
              <figcaption className="about-strip__caption">
                Road freight and fleet capability alongside multimodal programmes.
              </figcaption>
            </figure>
            <div className="feature-mini">
              <article>
                <h3>Fast worldwide delivery</h3>
                <p>
                  Reliable and efficient shipping solutions so your goods reach any destination
                  quickly and securely.
                </p>
              </article>
              <article>
                <h3>Safe and secure handling</h3>
                <p>
                  Your cargo is handled with care end-to-end, with strict security and visibility at
                  every step.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="services" aria-labelledby="services-heading">
        <div className="container">
          <header className="section-head">
            <h2 id="services-heading">Logistics services</h2>
            <p>
              End-to-end solutions covering transport modes, trade compliance, forwarding, and
              storage.
            </p>
          </header>
          <div className="services-grid">
            {HOME_SERVICES.map((s, i) => (
              <article className="service-card" key={s.title}>
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
                  <div className="num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link className="btn btn-primary" to="/services">
              View all services
            </Link>
          </p>
        </div>
      </section>

      <section className="stats" aria-label="Highlights">
        <div className="container stats__grid">
          <div className="stat">
            <strong>Proven</strong>
            <span>Execution across trade lanes</span>
          </div>
          <div className="stat">
            <strong>Global</strong>
            <span>Network of partners &amp; carriers</span>
          </div>
          <div className="stat">
            <strong>24/7</strong>
            <span>Shipment tracking &amp; support</span>
          </div>
          <div className="stat">
            <strong>{SITE.statsRegionLabel}</strong>
            <span>{SITE.statsRegionDetail}</span>
          </div>
        </div>
      </section>

      <section className="why" aria-labelledby="why-heading">
        <div className="container">
          <header className="section-head">
            <h2 id="why-heading">Reasons to work with us</h2>
            <p>
              We connect your shipments to international hubs and consolidation partners—tailored
              programmes, transparent milestones, worldwide scope.
            </p>
          </header>
          <div className="why-grid">
            {WHY_ITEMS.map((item, i) => (
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
          <h2>
            We are a premier freight, transport &amp; logistics company committed to delivering the
            highest quality service.
          </h2>
          <Link className="btn btn-primary" to="/contact">
            Contact us today
          </Link>
        </div>
      </section>
    </>
  );
}
