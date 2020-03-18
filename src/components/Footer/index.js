import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="csf-footer">
      <div className="csf-footer-links">
        <Link to="/contact">Contactez-nous</Link>
        <Link to="/legal">Mentions légales</Link>
        <Link to="/tou">Conditions d'utilisation</Link>
      </div>
      <div>
        <p>Stay & Save - 2020 Corona Solidarité</p>
      </div>
    </div>
  );
}
