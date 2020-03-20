import React from "react";
import { Link } from "react-router-dom";
import { Icon, Select } from "semantic-ui-react";
import { languageOptions } from "../../config";

import "./index.css";

export default function Header({ lang, setLang }) {
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
