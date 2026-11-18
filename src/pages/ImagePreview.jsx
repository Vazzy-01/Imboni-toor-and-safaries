
import { useState } from "react";
import "./ImagePreview.css";

export default function ImagePreview({ image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="gallery-image-card">
        <img
          src={image.src}
          alt={image.name}
          onClick={() => setIsOpen(true)}
          className="gallery-thumbnail"
        />

        <div className="image-overlay">
          <button onClick={() => setIsOpen(true)}>
            <i className="fa-solid fa-expand"></i>
            View image
          </button>

          <a
            href={image.src}
            download={image.name}
            className="download-image"
            onClick={(e) => e.stopPropagation()}
          >
            <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          className="image-lightbox"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="lightbox-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close image"
          >
            &times;
          </button>

          <a
            href={image.src}
            download={image.name}
            className="lightbox-download"
            onClick={(e) => e.stopPropagation()}
          >
            <i className="fa-solid fa-download"></i>
            Download
          </a>

          <img
            src={image.src}
            alt={image.name}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
