import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";

export default function() {
  return (
    <div>
      <h1>This is the index page</h1>
      <Link to="/listings">Listings</Link>
    </div>
  );
}
