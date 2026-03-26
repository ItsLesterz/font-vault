// src/components/StatsBar.js
import React from "react";

export default function StatsBar({ count, total, label }) {
  return (
    <div className="stats-bar">
      <div className="stats-bar-left">
        <h2 className="stats-title">
          {label === "All" ? "All Font Resources" : label}
        </h2>
      </div>
    </div>
  );
}
