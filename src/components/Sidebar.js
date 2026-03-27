// src/components/Sidebar.js
import React from "react";
import { PRICING_TYPES } from "../data/fontSites";

export default function Sidebar({
  categories,
  activeCategory,
  setActiveCategory,
  pricingFilter,
  setPricingFilter,
  featuredOnly,
  setFeaturedOnly,
  allSites,
}) {
  const countForCat = (catId) => {
    if (catId === "all") return allSites.length;
    return allSites.filter((s) => s.category === catId).length;
  };

  return (
    <aside className="sidebar">
      {/* Categories */}
      <div className="sidebar-section">
        <p className="sidebar-section-label">Categories</p>
        <ul className="sidebar-nav">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                className={`sidebar-nav-item ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <i className={`bi ${cat.icon} sidebar-nav-icon`} />
                <span className="sidebar-nav-label">{cat.label}</span>
                <span className="sidebar-nav-count">{countForCat(cat.id)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing Filter 
      <div className="sidebar-section">
        <p className="sidebar-section-label">Pricing</p>
        <ul className="sidebar-nav">
          {["All", ...PRICING_TYPES].map((p) => (
            <li key={p}>
              <button
                className={`sidebar-nav-item ${
                  pricingFilter === p ? "active" : ""
                }`}
                onClick={() => setPricingFilter(p)}
              >
                <i
                  className={`bi ${
                    p === "Free"
                      ? "bi-gift"
                      : p === "Paid"
                      ? "bi-credit-card"
                      : p === "Free + Paid"
                      ? "bi-layers"
                      : "bi-funnel"
                  } sidebar-nav-icon`}
                />
                <span className="sidebar-nav-label">{p}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
     
      {/* Options 
      <div className="sidebar-section">
        <p className="sidebar-section-label">Options</p>
        <label className="sidebar-toggle">
          <input
            type="checkbox"
            checked={featuredOnly}
            onChange={(e) => setFeaturedOnly(e.target.checked)}
          />
          <span>
            <i className="bi bi-star-fill sidebar-nav-icon text-warning" />
            Featured only
          </span>
        </label>
      </div>
      */}

      {/* Footer */}
      <div className="sidebar-footer">
        <p className="sidebar-footer-text">
          <i className="bi bi-info-circle me-1" />
          Edit <code>src/data/fontSites.js</code> to add or update sites.
        </p>
      </div>
    </aside>
  );
}
