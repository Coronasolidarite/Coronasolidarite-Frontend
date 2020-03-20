import React from "react";
import { CatCard } from "../../components";

import "./index.css";

export default function CatPage({ translation: { catCardContent } }) {
  return (
    <div className="csf-index-cat-card-container">
      <CatCard content={catCardContent} />
    </div>
  );
}
