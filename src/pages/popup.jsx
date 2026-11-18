
import React, { useState } from "react";
import flyer from "../assets/flyer.jpeg";
import "./Popupstyle.css";

export default function popup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="popup-backdrop">
      <div className="popup">

        <button
          className="popup-close"
          onClick={() => setVisible(false)}
          aria-label="Close announcement"
        >
          &times;
        </button>

        <div className="popup-image">
          <img src={flyer} alt="Special travel announcement" />
        </div>

        <div className="popup-content">
          <span className="popup-tag">
            SPECIAL ANNOUNCEMENT
          </span>

          <h2>Don't Miss This Opportunity!</h2>

          <p>
            Discover something special with Rwanda Roots Tour.
            Explore our latest offers and upcoming experiences.
          </p>

          <div className="popup-actions">
            <button
              className="popup-book"
              onClick={() => {
                setVisible(false);
                window.location.href = "/contact";
              }}
            >
              Book Now
            </button>

            <button
              className="popup-more"
              onClick={() => {
                setVisible(false);
                window.location.href = "/about";
              }}
            >
              More Information
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
