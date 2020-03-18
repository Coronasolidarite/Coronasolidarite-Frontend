import React from "react";

import "./index.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="csf-navigation">
      <div className="csf-navigation-text">
        <Link to="/" className="csf-header-title">
          Corona Solidarité
        </Link>
        <span>Help your neighbors</span>
      </div>
    </div>
  );
}
