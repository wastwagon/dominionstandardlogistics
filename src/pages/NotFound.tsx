import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found — Dominion Standard Logistics Ltd");

  return (
    <header className="page-hero">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>This URL doesn’t match any page on our site.</p>
        <p style={{ marginTop: "1.5rem" }}>
          <Link className="btn btn-primary" to="/">
            Back to home
          </Link>
        </p>
      </div>
    </header>
  );
}
