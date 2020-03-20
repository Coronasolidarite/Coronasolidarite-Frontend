import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
export default function Footer() {
  return (
    <div className="csf-footer">
      <div className="csf-footer-links">
        <a href="mailto:coronasolidarite@gmail.com">Contactez-nous</a>
        <Link to="/legal">Mentions légales</Link>
        <Link to="/tou">Conditions d'utilisation</Link>
        <Link to="/cat">Regarder un chat trop mim's !</Link>
      </div>
      <div>
        <p>
          Stay & Save - 2020 Corona Solidarité <Icon name="heartbeat" />
        </p>
      </div>
    </div>
  );
}
