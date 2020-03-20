import React from "react";

import "./index.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export default function Header() {
  return (
    <div className="csf-navigation">
      <div className="csf-navigation-text">
        <Link to="/" className="csf-header-title">
          Corona Solidarité <Icon name="heartbeat" />
        </Link>
        <span>Stay & Save</span>
      </div>
    </div>
  );
}
