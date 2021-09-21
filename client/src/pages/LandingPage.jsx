import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Link to="create">
        <button className="button_primary" style={{ marginRight: "10px" }}>
          Create CV
        </button>
      </Link>
      <Link to="search">
        <button className="button_secondary">Your CV</button>
      </Link>
    </div>
  );
}
