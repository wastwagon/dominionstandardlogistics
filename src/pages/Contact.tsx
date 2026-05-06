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
                <a href="tel:+233274752963">+233 274 752 963</a>
              </p>
            </article>
            <article className="contact-card">
              <h3>Our office</h3>
              <p>{SITE.addressFull}</p>
            </article>
            <article className="contact-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:a92070478@gmail.com">a92070478@gmail.com</a>
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
              Send a message
            </h2>
            <form action="https://formsubmit.co/a92070478@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="Dominion Standard Logistics — Website enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
              />
              <div className="form-row two">
                <div>
                  <label htmlFor="first">First name</label>
                  <input id="first" name="first_name" type="text" autoComplete="given-name" />
                </div>
                <div>
                  <label htmlFor="last">Last name</label>
                  <input id="last" name="last_name" type="text" autoComplete="family-name" />
                </div>
              </div>
              <label htmlFor="email">
                Email address <span aria-hidden="true">*</span>
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" />
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
              <label htmlFor="reason">Reason for enquiry</label>
              <select id="reason" name="reason" defaultValue="General">
                <option value="General">General</option>
                <option value="Shipment">Shipment</option>
                <option value="Support">Support</option>
              </select>
              <label htmlFor="message">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea id="message" name="message" required />
              <button className="btn btn-primary" type="submit" style={{ width: "100%" }}>
                Send message
              </button>
            </form>
            <p className="form-note">
              Submissions are delivered by FormSubmit (third-party). On first use you may receive a
              confirmation email to authorize delivery—alternatively email us directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
