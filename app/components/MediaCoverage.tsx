"use client";

import { useState } from "react";
import { mediaData } from "../../data/media";

export default function MediaCoverage() {
  const [activeMedia, setActiveMedia] = useState<typeof mediaData[0] | null>(null);

  const openModal = (media: typeof mediaData[0]) => {
    setActiveMedia(media);
  };

  const closeModal = () => {
    setActiveMedia(null);
  };

  return (
    <>
      <section id="coverage" className="section coverage-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">OUR WORK</p>
            <h2>
              Media Coverage
              <br />
              <span>& Events.</span>
            </h2>
          </div>

          <div className="coverage-grid">
            {mediaData.map((media) => (
              <article key={media.id} className="coverage-card" onClick={() => openModal(media)}>
                <div className="video-wrapper thumbnail-wrapper">
                  <video 
                    src={media.videoUrl} 
                    className="thumbnail-video" 
                    muted 
                    playsInline 
                    poster={media.posterUrl}
                  />
                  <div className="play-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                </div>
                <div className="coverage-info">
                  <h3>{media.title}</h3>
                  <p>{media.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {activeMedia && (
        <div className="media-modal-overlay" onClick={closeModal}>
          <div className="media-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <video 
              controls 
              autoPlay 
              className="modal-video"
            >
              <source src={activeMedia.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
