import React, { useState } from 'react';
import PageBanner from '../../components/layout/PageBanner';
import LightboxModal from '../../components/ui/LightboxModal';

const galleryImages = [
  { id: 1, src: '/newimgg/gallery-1.jpg', alt: 'Gallery 1' },
  { id: 2, src: '/newimgg/gallery-2.jpg', alt: 'Gallery 2' },
  { id: 3, src: '/newimgg/gallery-3.jpg', alt: 'Gallery 3' },
  { id: 4, src: '/newimgg/gallery-4.jpg', alt: 'Gallery 4' },
  { id: 5, src: '/newimgg/gallery-5.jpg', alt: 'Gallery 5' },
  { id: 6, src: '/newimgg/gallery-6.jpg', alt: 'Gallery 6' },
  { id: 7, src: '/newimgg/gallery-7.jpg', alt: 'Gallery 7' },
  { id: 8, src: '/newimgg/gallery-8.jpg', alt: 'Gallery 8' },
  { id: 9, src: '/newimgg/gallery-9.jpg', alt: 'Gallery 9' },
  { id: 10, src: '/newimgg/gallery-10.jpg', alt: 'Gallery 10' },
  { id: 11, src: '/newimgg/gallery-11.jpg', alt: 'Gallery 11' },
  { id: 12, src: '/newimgg/gallery-12.jpg', alt: 'Gallery 12' },
  { id: 13, src: '/newimgg/gallery-13.jpg', alt: 'Gallery 13' },
  { id: 14, src: '/newimgg/gallery-14.jpg', alt: 'Gallery 14' }
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };
  const nextImage = () => {
    setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  const imageStyle = {
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
    marginBottom: '1.8rem',
    width: '100%',
    height: '420px',
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  };

  return (
    <div className="page-wrapper">
      <PageBanner
        title="Gallery"
        breadcrumb="Gallery"
        style={{ backgroundImage: 'url(/nimg/ABA-Therapy-Banner-Image-2.jpg)' }}
      />

      <section style={{ paddingBottom: '3rem', paddingTop: '3rem' }}>
        <div className="auto-container">
          <div className="row">
            {galleryImages.slice(0, 3).map((item, index) => (
              <div className="col-md-4" key={item.id}>
                <img
                  src={item.src}
                  style={imageStyle}
                  alt={item.alt}
                  onClick={() => openLightbox(index)}
                />
              </div>
            ))}
          </div>
          <div className="row">
            {galleryImages.slice(3, 6).map((item, index) => (
              <div className="col-md-4" key={item.id}>
                <img
                  src={item.src}
                  style={imageStyle}
                  alt={item.alt}
                  onClick={() => openLightbox(index + 3)}
                />
              </div>
            ))}
          </div>
          <div className="row">
            {galleryImages.slice(6, 9).map((item, index) => (
              <div className="col-md-4" key={item.id}>
                <img
                  src={item.src}
                  style={imageStyle}
                  alt={item.alt}
                  onClick={() => openLightbox(index + 6)}
                />
              </div>
            ))}
          </div>
          <div className="row">
            {galleryImages.slice(9, 12).map((item, index) => (
              <div className="col-md-4" key={item.id}>
                <img
                  src={item.src}
                  style={imageStyle}
                  alt={item.alt}
                  onClick={() => openLightbox(index + 9)}
                />
              </div>
            ))}
          </div>
          <div className="row">
            {galleryImages.slice(12, 14).map((item, index) => (
              <div className="col-md-4" key={item.id}>
                <img
                  src={item.src}
                  style={imageStyle}
                  alt={item.alt}
                  onClick={() => openLightbox(index + 12)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <LightboxModal
        images={galleryImages}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
}
