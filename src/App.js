// src/App.js
import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SiteCard from "./components/SiteCard";
import StatsBar from "./components/StatsBar";
import EmptyState from "./components/EmptyState";
import { FONT_SITES, CATEGORIES } from "./data/fontSites";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [pricingFilter, setPricingFilter] = useState("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filtered = useMemo(() => {
    return FONT_SITES.filter((site) => {
      const matchCat =
        activeCategory === "all" || site.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchPrice =
        pricingFilter === "All" || site.pricing === pricingFilter;
      const matchFeatured = !featuredOnly || site.featured;
      return matchCat && matchSearch && matchPrice && matchFeatured;
    });
  }, [activeCategory, searchQuery, pricingFilter, featuredOnly]);

  const activeLabel =
    CATEGORIES.find((c) => c.id === activeCategory)?.label || "All";

  return (
    <div className="app-shell">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="app-body">
        
        <main className="main-content">
          <StatsBar
            count={filtered.length}
            total={FONT_SITES.length}
            label={activeLabel}
          />
          {filtered.length === 0 ? (
            <EmptyState
              onReset={() => {
                setSearchQuery("");
                setPricingFilter("All");
                setFeaturedOnly(false);
                setActiveCategory("all");
              }}
            />
          ) : (
            <div className="cards-grid">
              {filtered.map((site) => (
                <SiteCard key={`${site.id}-${site.category}`} site={site} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
