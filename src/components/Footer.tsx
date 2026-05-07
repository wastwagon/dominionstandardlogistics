import { Link } from "react-router-dom";
import { SITE } from "../content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/assets/newlogodominiologistics.png"
            width={240}
            height={63}
            alt="Dominion Standard Logistics Ltd"
          />
          <p>
            Freight forwarding, transport, and logistics from Lapaz, Accra—connecting local
            execution with worldwide lanes for dependable cargo movement.
          </p>
        </div>
        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="https://www.dominionstandardlogistics.com">
                dominionstandardlogistics.com
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>{SITE.addressFull}</li>
            <li>
              <a href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplayCombined}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} Dominion Standard Logistics Ltd. All rights reserved.</span>
        <span>Monday–Friday · 08:00–17:00</span>
      </div>
    </footer>
  );
}
