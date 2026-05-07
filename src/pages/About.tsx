import { Link } from "react-router-dom";
import { ABOUT_PANEL_IMAGE, SERVICE_CARD_IMAGES, WHY_CARD_IMAGES } from "../content/images";
import { SITE } from "../content/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const ABOUT_SERVICES = [
  {
    title: "Land transport",
    body: "Domestic and cross-border trucking—FTL and LTL—with tracking and route optimisation.",
  },
  {
    title: "Sea freight",
    body: "FCL and LCL programmes with coordinated port-to-port and door-to-door delivery.",
  },
  {
    title: "Import & export",
    body:
      "Customs clearance, tariff classification, and regulatory alignment for smoother border crossings.",
  },
  {
    title: "Air freight",
    body: "Express options through global carriers when deadlines dominate.",
  },
  {
    title: "Freight forwarding",
    body: "Documentation, compliance, and routing expertise for international movements.",
  },
  {
    title: "Warehousing & distribution",
    body: "Secure storage and inventory disciplines that keep your network responsive.",
  },
] as const;

const ABOUT_WHY = [
  {
    title: "Global network",
    body:
      "We connect your shipments to international hubs and consolidation partners across Africa, Europe, the Americas, Asia–Pacific, and beyond.",
  },
  {
    title: "Special shipments",
    body: "Expertise when goods require tailored handling, storage, or routing.",
  },
  {
    title: "Right-time delivery",
    body:
      "Pickup through customs clearance and milestone tracking—we stay close to your cargo.",
  },
  {
    title: "Bespoke solutions",
    body: "Intermodal designs aligned to your ports, airports, and production calendars.",
  },
  {
    title: "24-hour support",
    body: "Operators focused on exceptions and updates whenever your lanes are active.",
  },
  {
    title: "Esteemed partner",
    body:
      "Chosen by growing brands that value transparency, responsiveness, and competitive execution.",
  },
] as const;

export default function About() {
  useDocumentTitle("About Us — Dominion Standard Logistics Ltd");

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>Freight, transport &amp; logistics company</h1>
          <p>
            At Dominion Standard Logistics Ltd—based in {SITE.addressFull}—we deliver logistics,
            cargo movement, and warehousing programmes tailored to diverse industries, with
            reliability and efficiency at the centre of everything we do.
          </p>
        </div>
      </header>

      <section>
        <div className="container prose">
          <h2>Our vision</h2>
          <p>
            To be a global leader in logistics and warehousing, driving innovation and delivering
            seamless supply chain solutions that empower businesses to thrive in a competitive
            world.
          </p>
          <h2>Our mission</h2>
          <p>
            To provide reliable, efficient, and scalable logistics and storage solutions through
            robust partnerships, disciplined execution, and a customer-first approach—ensuring the
            success of our clients’ supply chains.
          </p>
          <p>
            With a commitment to reliability, efficiency, and customer satisfaction, we have
            built a reputation as a trusted partner for businesses seeking to streamline operations.
            From secure cargo transport and warehousing to scalable logistics programmes, we
            empower you to focus on growth while we manage complexity.
          </p>
        </div>
      </section>

      <section className="about-strip">
        <div className="container about-strip__grid">
          <div>
            <span className="eyebrow">Capabilities</span>
            <h2>We provide all kinds of logistics service</h2>
            <p>
              We offer a comprehensive range of logistics services to meet transportation and
              supply chain needs—from freight forwarding and customs support to warehousing and
              distribution.
            </p>
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
                Fleet and multimodal capability supporting your movement plans.
              </figcaption>
            </figure>
            <div className="feature-mini">
              <article>
                <h3>Fast worldwide delivery</h3>
                <p>
                  Reliable shipping solutions so your goods reach any destination quickly and
                  securely.
                </p>
              </article>
              <article>
                <h3>Safe and secure delivery</h3>
                <p>
                  Careful handling and robust controls so cargo arrives in spec and on schedule.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <header className="section-head">
            <h2>How we support your supply chain</h2>
            <p>
              The same six pillars our clients rely on—aligned to international trade and regional
              distribution realities.
            </p>
          </header>
          <div className="services-grid">
            {ABOUT_SERVICES.map((item, i) => (
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
          <p style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link className="btn btn-primary" to="/services">
              Full services overview
            </Link>
          </p>
        </div>
      </section>

      <section className="why" aria-labelledby="why-about">
        <div className="container">
          <header className="section-head">
            <h2 id="why-about">Reasons to work with us</h2>
          </header>
          <div className="why-grid">
            {ABOUT_WHY.map((item, i) => (
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
          <h2>Ready to simplify your logistics?</h2>
          <Link className="btn btn-primary" to="/contact">
            Request a quote
          </Link>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`} style={{ marginLeft: ".75rem" }}>
            Call now
          </a>
        </div>
      </section>
    </>
  );
}
