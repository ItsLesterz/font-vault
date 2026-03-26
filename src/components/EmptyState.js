// src/components/EmptyState.js
import React from "react";

export default function EmptyState({ onReset }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <i className="bi bi-search" />
      </div>
      <h3 className="empty-title">No sites found</h3>
      <p className="empty-desc">
        No font websites match your current filters. Try adjusting the search or
        category.
      </p>
      <button className="btn-reset" onClick={onReset}>
        <i className="bi bi-arrow-counterclockwise me-2" />
        Reset filters
      </button>
    </div>
  );
}
