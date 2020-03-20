import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
export default function Footer({ translation: { contactUs, legal, tou, cat } }) {
  return (
    <div className="csf-footer">
      <div className="csf-footer-links">
        <a href="mailto:coronasolidarite@gmail.com">{contactUs}</a>
        <Link to="/legal">{legal}</Link>
        <Link to="/tou">{tou}</Link>
        <Link to="/cat">Regarder un chat</Link>
      </div>
      <div>
        <p>
          Stay & Save - 2020 Corona Solidarité <Icon name="heartbeat" />
        </p>
      </div>
    </div>
  );
}
