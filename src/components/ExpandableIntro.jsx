import React, { useState } from "react";

function ExpandableIntro({ fullText = "", children }) {
  const [expanded, setExpanded] = useState(false);

  // Preview: first third of the text or empty string
  const previewLength = Math.floor(fullText.length / 3);
  const previewText = fullText.length > 0 ? fullText.slice(0, previewLength) + "..." : "";

  return (
    <button
      className={`expandable-button-wide ${expanded ? "open" : ""}`}
      onClick={() => setExpanded(!expanded)}
      type="button"
    >
      <div className="expandable-text">
        {expanded ? (
          <>
            <span>{fullText} </span>
            {children}
          </>
        ) : (
          previewText
        )}
      </div>
      <span className={`arrow ${expanded ? "up" : "down"}`}>▶</span>
    </button>
  );
}

export default ExpandableIntro;
