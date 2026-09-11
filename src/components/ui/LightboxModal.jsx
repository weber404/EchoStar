import React, { useEffect } from 'react';

export default function LightboxModal({ images, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (activeIndex === null || activeIndex === undefined || activeIndex < 0) return null;

  const currentImage = images[activeIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <span className="lightbox-close" onClick={onClose}>&times;</span>
      {images.length > 1 && (
        <span
          className="lightbox-prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          &#10094;
        </span>
      )}
      <img
        src={typeof currentImage === 'string' ? currentImage : currentImage?.src}
        alt={currentImage?.alt || 'Gallery Preview'}
        onClick={(e) => e.stopPropagation()}
      />
      {images.length > 1 && (
        <span
          className="lightbox-next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          &#10095;
        </span>
      )}
    </div>
  );
}
