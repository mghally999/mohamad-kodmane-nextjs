"use client";
import React from "react";

export default function VideoSection() {
  return (
    <section className="video-section">
      {/* Background Elements */}
      <div className="particles"></div>
      <div className="overlay"></div>

      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">Vision & Leadership</h2>

        <div className="gold-divider" />

        <p className="section-description">
          Discover the visionary behind Dubai's most prestigious developments.
          Mohamad Kodmane shares his philosophy on luxury, innovation, and
          creating timeless legacies in real estate.
        </p>
      </div>

      {/* Luxury Video Container */}
      <div className="video-container">
        <div className="video-placeholder">
          {/* Play Button */}
          <div className="play-button">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              className="play-icon"
            >
              <path
                d="M8 5V19L19 12L8 5Z"
                fill="#0b0b0b"
                stroke="#0b0b0b"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Video Thumbnail Overlay */}
          <div className="video-overlay">
            <div className="thumbnail-content">
              <h3 className="thumbnail-title">Mohamad Kodmane</h3>
              <p className="thumbnail-subtitle">
                Visionary Real Estate Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Caption */}
      <div className="video-caption">
        <p className="caption-main">"Building Tomorrow's Landmarks Today"</p>
        <p className="caption-sub">
          Exclusive interview and insights from the visionary himself
        </p>
      </div>

      {/* Divider Line */}
      <div className="section-divider" />

      {/* CALLBACK FORM */}
      <div className="callback-form">
        <h2 className="form-title">Book A Consultation</h2>

        <form className="form">
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-input"
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              placeholder="+971 50 123 4567"
              className="form-input"
            />
          </div>

          {/* Message */}
          <div className="form-group full-width">
            <label className="form-label">Message</label>
            <textarea
              placeholder="Share your vision or inquiry..."
              className="form-textarea"
              rows="4"
            />
          </div>

          {/* Submit */}
          <div className="form-submit">
            <button type="submit" className="submit-btn">
              Request Personal Consultation
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .video-section {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(
              circle at 20% 30%,
              rgba(215, 180, 106, 0.12) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(215, 180, 106, 0.08) 0%,
              transparent 50%
            ),
            linear-gradient(135deg, #0b0b0b 0%, #111111 50%, #0b0b0b 100%);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 100px 20px;
          font-family: "Playfair Display", serif;
        }

        /* Background Elements */
        .particles::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(215, 180, 106, 0.08) 2px,
              transparent 2px
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(215, 180, 106, 0.05) 1px,
              transparent 1px
            );
          background-size: 100px 100px, 150px 150px;
          animation: floatParticles 40s linear infinite;
          z-index: 0;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(11, 11, 11, 0.85) 100%
          );
          z-index: 1;
        }

        @keyframes floatParticles {
          from {
            background-position: 0 0, 0 0;
          }
          to {
            background-position: 1000px 1000px, -1000px -1000px;
          }
        }

        /* Section Header - OPTIMIZED BOLDNESS */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          position: relative;
          z-index: 5;
        }

        .section-title {
          font-family: "Playfair Display", serif;
          color: #d7b46a;
          font-size: clamp(2.8rem, 5vw, 3.8rem);
          font-weight: 700;
          margin: 0 0 25px 0;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 0 0 40px rgba(215, 180, 106, 0.4);
          line-height: 1.1;
        }

        .gold-divider {
          width: 120px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #d7b46a, transparent);
          margin: 0 auto 30px auto;
          opacity: 0.9;
          box-shadow: 0 0 20px rgba(215, 180, 106, 0.3);
        }

        .section-description {
          color: rgba(255, 255, 255, 0.95);
          font-size: clamp(1.2rem, 2.2vw, 1.5rem);
          font-weight: 500;
          line-height: 1.6;
          letter-spacing: 0.8px;
          font-family: "Inter", sans-serif;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
        }

        /* Video Container - ENHANCED VISUAL APPEAL */
        .video-container {
          position: relative;
          width: 90%;
          max-width: 1000px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 90px rgba(215, 180, 106, 0.3),
            0 20px 100px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(215, 180, 106, 0.15);
          border: 2px solid rgba(215, 180, 106, 0.35);
          transform: translateY(0);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 5;
        }

        .video-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 120px rgba(215, 180, 106, 0.4),
            0 25px 120px rgba(0, 0, 0, 0.7),
            inset 0 1px 0 rgba(215, 180, 106, 0.2);
        }

        .video-placeholder {
          width: 100%;
          height: 500px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Play Button - REFINED */
        .play-button {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d7b46a 0%, #b89444 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 50px rgba(215, 180, 106, 0.6),
            inset 0 0 20px rgba(255, 255, 255, 0.15);
          z-index: 2;
          position: relative;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .play-button:hover {
          transform: scale(1.12);
          box-shadow: 0 0 70px rgba(215, 180, 106, 0.8),
            inset 0 0 25px rgba(255, 255, 255, 0.2);
        }

        .play-icon {
          margin-left: 4px;
          transition: transform 0.3s ease;
        }

        .play-button:hover .play-icon {
          transform: scale(1.08);
        }

        /* Video Overlay - ENHANCED */
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(11, 11, 11, 0.3) 0%,
            rgba(215, 180, 106, 0.12) 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 40px;
          pointer-events: none;
        }

        .thumbnail-content {
          text-align: left;
        }

        .thumbnail-title {
          color: #ffffff;
          font-size: 1.9rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          text-shadow: 0 2px 15px rgba(0, 0, 0, 0.7);
          letter-spacing: 1px;
          font-family: "Playfair Display", serif;
        }

        .thumbnail-subtitle {
          color: #d7b46a;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
          font-family: "Inter", sans-serif;
          letter-spacing: 0.5px;
        }

        /* Video Caption - BOLDER & CLEANER */
        .video-caption {
          text-align: center;
          margin-top: 45px;
          max-width: 650px;
          position: relative;
          z-index: 5;
        }

        .caption-main {
          color: #d7b46a;
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 600;
          letter-spacing: 1.2px;
          font-style: italic;
          margin: 0;
          font-family: "Playfair Display", serif;
          text-shadow: 0 0 25px rgba(215, 180, 106, 0.4);
          line-height: 1.3;
        }

        .caption-sub {
          color: rgba(255, 255, 255, 0.9);
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          font-weight: 500;
          margin-top: 12px;
          font-family: "Inter", sans-serif;
          letter-spacing: 0.8px;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
        }

        /* Section Divider */
        .section-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(215, 180, 106, 0.35),
            transparent
          );
          margin: 80px 0 60px;
          max-width: 1000px;
          position: relative;
          z-index: 5;
        }

        /* Callback Form - ENHANCED BOLDNESS */
        .callback-form {
          background: linear-gradient(
            145deg,
            rgba(28, 28, 28, 0.95) 0%,
            rgba(18, 18, 18, 0.95) 100%
          );
          border: 1.5px solid rgba(215, 180, 106, 0.3);
          border-radius: 20px;
          box-shadow: 0 0 90px rgba(215, 180, 106, 0.25),
            inset 0 0 20px rgba(215, 180, 106, 0.08);
          padding: 55px 60px;
          max-width: 800px;
          width: 100%;
          backdrop-filter: blur(12px);
          position: relative;
          z-index: 5;
        }

        .form-title {
          text-align: center;
          color: #d7b46a;
          font-family: "Playfair Display", serif;
          font-size: clamp(2rem, 3.5vw, 2.4rem);
          font-weight: 700;
          margin-bottom: 45px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-shadow: 0 0 25px rgba(215, 180, 106, 0.4);
        }

        .form {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          justify-content: center;
        }

        .form-group {
          flex: 1 1 300px;
          min-width: 250px;
        }

        .form-group.full-width {
          flex: 1 1 100%;
        }

        .form-label {
          display: block;
          color: #d7b46a;
          font-weight: 600;
          margin-bottom: 14px;
          font-size: 1.05rem;
          font-family: "Inter", sans-serif;
          letter-spacing: 0.8px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 17px 20px;
          border-radius: 10px;
          border: 1.5px solid rgba(215, 180, 106, 0.35);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-size: 1.05rem;
          outline: none;
          transition: all 0.3s ease;
          font-family: "Inter", sans-serif;
          font-weight: 500;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #d7b46a;
          background: rgba(255, 255, 255, 0.09);
          box-shadow: 0 0 25px rgba(215, 180, 106, 0.25);
          transform: translateY(-2px);
        }

        .form-textarea {
          resize: vertical;
          min-height: 130px;
        }

        .form-submit {
          flex: 1 1 100%;
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #d7b46a 0%, #b89444 100%);
          color: #0b0b0b;
          font-weight: 700;
          border: none;
          border-radius: 50px;
          padding: 19px 48px;
          cursor: pointer;
          font-size: 1.15rem;
          letter-spacing: 1.2px;
          box-shadow: 0 0 45px rgba(215, 180, 106, 0.45),
            inset 0 0 12px rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          font-family: "Inter", sans-serif;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 65px rgba(215, 180, 106, 0.6),
            inset 0 0 15px rgba(255, 255, 255, 0.25);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .video-section {
            padding: 80px 20px;
          }

          .video-placeholder {
            height: 450px;
          }

          .play-button {
            width: 85px;
            height: 85px;
          }

          .video-overlay {
            padding: 35px;
          }

          .callback-form {
            padding: 50px 40px;
          }
        }

        @media (max-width: 768px) {
          .video-section {
            padding: 70px 20px;
          }

          .section-title {
            font-size: clamp(2.4rem, 6vw, 3.2rem);
          }

          .section-description {
            font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          }

          .video-placeholder {
            height: 380px;
          }

          .play-button {
            width: 80px;
            height: 80px;
          }

          .video-overlay {
            padding: 30px;
          }

          .thumbnail-title {
            font-size: 1.6rem;
          }

          .thumbnail-subtitle {
            font-size: 1.1rem;
          }

          .callback-form {
            padding: 40px 30px;
          }

          .form {
            gap: 20px;
          }

          .form-group {
            flex: 1 1 100%;
          }
        }

        @media (max-width: 480px) {
          .video-section {
            padding: 60px 15px;
          }

          .video-placeholder {
            height: 320px;
          }

          .play-button {
            width: 75px;
            height: 75px;
          }

          .video-overlay {
            padding: 25px;
          }

          .callback-form {
            padding: 35px 25px;
          }

          .submit-btn {
            width: 100%;
            padding: 18px 35px;
            font-size: 1.1rem;
          }

          .form-input,
          .form-textarea {
            padding: 16px 18px;
          }
        }
      `}</style>
    </section>
  );
}
