import React from "react";
import { useReveal } from "../../hooks/useReveal";
import "./Tile.css";

const Tile = ({
  status,
  statusLabel,
  size = "regular",
  delay = 0,
  className = "",
  media,
  children,
}) => {
  const [ref, revealed] = useReveal();

  const classes = [
    "tile",
    `tile-${size}`,
    status ? `tile-${status}` : "",
    revealed ? "tile-revealed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={{ "--reveal-delay": revealed ? `${delay}ms` : "0ms" }}
    >
      {media && <div className="tile-media">{media}</div>}
      <div className="tile-body">
        {statusLabel && (
          <span className={`tile-status tile-status-${status}`}>
            {statusLabel}
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default Tile;
