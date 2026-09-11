'use strict';

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Group the 14 new uploaded images for the gallery layout
  const rows = [
    ['gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg'],
    ['gallery-4.jpg', 'gallery-5.jpg', 'gallery-6.jpg'],
    ['gallery-7.jpg', 'gallery-8.jpg', 'gallery-9.jpg'],
    ['gallery-10.jpg', 'gallery-11.jpg', 'gallery-12.jpg'],
    ['gallery-13.jpg', 'gallery-14.jpg']
  ];

  const allImages = rows.flat();

  const openLightbox = (img: string) => {
    setActiveImage(`/nimg/${img}`);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  return (
    <div className="page-wrapper">
      
      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: 'url(/nimg/ABA-Therapy-Banner-Image-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '6rem 0' }}>
        <div className="auto-container">
          <div className="content-box">
            <h1>Gallery</h1>
            <ul className="bread-crumb">
              <li><Link className="home" href="/"><span className="fa fa-home"></span></Link></li>
              <li style={{ color: 'white' }}>Gallery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ paddingBottom: '3rem', paddingTop: '3rem' }}>
        <div className="auto-container">
          {rows.map((row, rowIdx) => (
            <div className="row" key={rowIdx}>
              {row.map((img, imgIdx) => (
                <div className="col-md-4 col-sm-6" key={imgIdx} style={{ cursor: 'pointer' }} onClick={() => openLightbox(img)}>
                  <img 
                    src={`/nimg/${img}`} 
                    style={{ 
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', 
                      marginBottom: '1.8rem', 
                      width: '100%', 
                      height: '420px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease'
                    }} 
                    className="gallery-img-hover"
                    alt={`Gallery ${imgIdx + 1}`} 
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={closeLightbox}
        >
          <div style={{ position: 'absolute', top: '20px', right: '25px', color: 'white', fontSize: '30px', cursor: 'pointer', fontWeight: 'bold' }}>
            &times;
          </div>
          <img 
            src={activeImage} 
            alt="Expanded gallery" 
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90%', 
              objectFit: 'contain',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
            }} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Inline styles for hover effect */}
      <style jsx>{`
        .gallery-img-hover:hover {
          transform: scale(1.03);
        }
      `}</style>

    </div>
  );
}
