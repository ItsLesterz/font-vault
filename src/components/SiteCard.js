// src/components/SiteCard.js
import React from "react";

const CATEGORY_META = {
  serif:      { color: "#d4a843", bg: "rgba(212,168,67,0.12)",  label: "Serif" },
  "sans-serif":{ color: "#58a6ff", bg: "rgba(88,166,255,0.12)", label: "Sans-serif" },
  display:    { color: "#f85149", bg: "rgba(248,81,73,0.12)",   label: "Display" },
  script:     { color: "#bc8cff", bg: "rgba(188,140,255,0.12)", label: "Script" },
  monospace:  { color: "#3fb950", bg: "rgba(63,185,80,0.12)",   label: "Monospace" },
  variable:   { color: "#79c0ff", bg: "rgba(121,192,255,0.12)", label: "Variable" },
};

const PRICING_META = {
  "Free":       { cls: "pricing-free",   icon: "bi-gift",       label: "Free" },
  "Paid":       { cls: "pricing-paid",   icon: "bi-credit-card",label: "Paid" },
  "Free + Paid":{ cls: "pricing-mixed",  icon: "bi-layers",     label: "Free + Paid" },
};

export default function SiteCard({ site }) {
  const cat = CATEGORY_META[site.category] || CATEGORY_META["display"];
  const price = PRICING_META[site.pricing] || PRICING_META["Free"];
  const hostname = site.url.replace(/^https?:\/\//, "");

  return (
    <div className="site-card">
      {/* Top accent bar */}
      <div
        className="card-accent-bar"
        style={{ background: cat.color }}
      />

      <div className="site-card-body">
        {/* Header row */}
        <div className="card-header-row">
          <div className="card-icon" style={{ background: cat.bg, color: cat.color }}>
            <i className="bi bi-globe2" />
          </div>
        </div>

        {/* Name & URL */}
        <h3 className="card-name">{site.name}</h3>
        <p className="card-url">
          <i className="bi bi-link-45deg" />
          {hostname}
        </p>

        {/* Description */}
        <p className="card-description">{site.description}</p>

      </div>

      {/* Footer */}
      <div className="site-card-footer">
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-link"
        >
          Visitar sitio <i className="bi bi-arrow-up-right" />
        </a>
      </div>
    </div>
  );
}
