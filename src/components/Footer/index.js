import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="csf-footer">
      <div className="csf-footer-links">
        <Link to="/contact">Contact</Link>
        <Link to="/legal">Legal</Link>
        <Link to="/tou">Terms of use</Link>
      </div>
      <div>
        <p>Stay save - 2020 Corona Solidarité</p>
      </div>
    </div>
  );
}
