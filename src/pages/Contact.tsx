import { SITE } from "../content/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("Contact — Dominion Standard Logistics Ltd");

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact us today</h1>
          <p>
            Reach our team for quotations, operational questions, or partnership discussions. We
            respond during business hours and monitor urgent shipment matters.
          </p>
        </div>
      </header>

      <section>
        <div className="container contact-layout">
          <div className="contact-cards">
            <article className="contact-card">
              <h3>Call us</h3>
              <p>
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
                <br />
                <a href={`tel:${SITE.phoneTelSecondary}`}>{SITE.phoneDisplaySecondary}</a>
              </p>
            </article>
            <article className="contact-card">
              <h3>Our office</h3>
              <p>{SITE.addressFull}</p>
            </article>
            <article className="contact-card">
              <h3>Email</h3>
              <p>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </article>
            <article className="contact-card">
              <h3>Website</h3>
              <p>
                <a href="https://www.dominionstandardlogistics.com">www.dominionstandardlogistics.com</a>
              </p>
            </article>
            <article className="contact-card">
              <h3>Opening hours</h3>
              <p>Monday–Friday · 08:00–17:00</p>
            </article>
          </div>

          <div className="contact-form">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", margin: "0 0 1rem" }}>
              Request a quote
            </h2>
            <p className="form-note" style={{ marginBottom: "1rem" }}>
              For pricing and shipment bookings, call or email us directly.
            </p>
            <p style={{ display: "flex", flexDirection: "column", gap: ".65rem", marginBottom: "1.25rem" }}>
              <a className="btn btn-primary" href={`tel:${SITE.phoneTel}`}>
                Call {SITE.phoneDisplay}
              </a>
              <a className="btn btn-primary" href={`tel:${SITE.phoneTelSecondary}`}>
                Call {SITE.phoneDisplaySecondary}
              </a>
              <a className="btn btn-ghost" href={`mailto:${SITE.email}`}>
                Email {SITE.email}
              </a>
            </p>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", margin: "0 0 1rem" }}>
              Contact us
            </h2>
            <p className="form-note" style={{ marginBottom: "1rem" }}>
              For general enquiries or support, use the same phone and email contacts.
            </p>
            <p style={{ margin: 0 }}>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> /{" "}
              <a href={`tel:${SITE.phoneTelSecondary}`}>{SITE.phoneDisplaySecondary}</a>
              <br />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
