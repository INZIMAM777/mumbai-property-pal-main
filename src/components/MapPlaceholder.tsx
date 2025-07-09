import React from "react";

const MapPlaceholder: React.FC<{ height?: string }> = ({ height = "300px" }) => (
  <div
    style={{
      width: "100%",
      height,
      background: "#e0e0e0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "12px",
      border: "1px solid #ccc",
      color: "#888",
      fontSize: "1.2rem",
      fontWeight: 500,
      margin: "16px 0"
    }}
    aria-label="Map will appear here"
  >
    [Map will appear here]
  </div>
);

export default MapPlaceholder; 