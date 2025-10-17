"use client";
import Image from "next/image";
import React from "react";

export default function DubaiOpportunity() {
  return (
    <section className="dubai-opportunity">
      <div className="opportunity-container">
        {/* MAIN CONTENT GRID */}
        <div className="content-grid">
          {/* LEFT COLUMN - IMAGES */}
          <div className="images-column">
            <div className="main-image-container">
              <div className="image-overlay"></div>
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Dubai luxury skyline"
                width={630}
                height={500}
                className="main-image"
                priority
              />
              <div className="image-badge">
                <div className="badge-content">
                  <span className="badge-text">Global Icon</span>
                  <div className="badge-line"></div>
                </div>
              </div>
            </div>

            <div className="image-grid-small">
              <div className="small-image">
                <Image
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Luxury interior"
                  width={330}
                  height={330}
                  className="grid-image"
                />
                <div className="small-badge">Premium</div>
              </div>
              <div className="small-image">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern villa"
                  width={330}
                  height={330}
                  className="grid-image"
                />
                <div className="small-badge">Villas</div>
              </div>
              <div className="small-image">
                <Image
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                  alt="Waterfront living"
                  width={330}
                  height={330}
                  className="grid-image"
                />
                <div className="small-badge">Marina</div>
              </div>
              <div className="small-image">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Palm Jumeirah"
                  width={330}
                  height={330}
                  className="grid-image"
                />
                <div className="small-badge">Exclusive</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTENT */}
          <div className="content-column">
            <div className="title-section">
              <div className="title-decoration">
                <div className="gold-bar"></div>
                <h2 className="opportunity-title">
                  Economic Growth & A Life of{" "}
                  <span className="title-gradient">
                    Unparalleled Opportunity
                  </span>
                </h2>
              </div>
              <p className="opportunity-subtitle">
                Dubai stands as a{" "}
                <strong>global benchmark for innovation and prosperity</strong>,
                offering unmatched opportunities for visionaries and investors
                alike.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                {/* <div className="feature-icon">🏛️</div> */}
                <div className="feature-content">
                  <h4>Regulatory Excellence</h4>
                  <p>
                    Dubai Land Department ensures{" "}
                    <strong>maximum security</strong> and long-term value
                    preservation
                  </p>
                </div>
              </div>

              <div className="feature-card">
                {/* <div className="feature-icon">📈</div> */}
                <div className="feature-content">
                  <h4>Market Growth</h4>
                  <p>
                    Sustained demand for off-plan properties in world's most{" "}
                    <strong>future-focused city</strong>
                  </p>
                </div>
              </div>

              <div className="feature-card">
                {/* <div className="feature-icon">💼</div> */}
                <div className="feature-content">
                  <h4>Career Advancement</h4>
                  <p>
                    Thriving ecosystem for <strong>professional growth</strong>{" "}
                    and business expansion
                  </p>
                </div>
              </div>

              <div className="feature-card">
                {/* <div className="feature-icon">🌍</div> */}
                <div className="feature-content">
                  <h4>Tax Advantages</h4>
                  <p>
                    <strong>Zero income tax</strong> for individuals and
                    corporations enhances investment returns
                  </p>
                </div>
              </div>
            </div>

            <div className="investment-highlights">
              <div className="highlight-item">
                <div className="highlight-number">99%</div>
                <div className="highlight-text">Investor Satisfaction Rate</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">24/7</div>
                <div className="highlight-text">Digital Platform Access</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">0%</div>
                <div className="highlight-text">Income Tax Liability</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <p className="cta-text">
            Join the elite circle of investors leveraging Dubai's{" "}
            <strong>progressive ecosystem </strong>
            for unprecedented growth and lifestyle excellence.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* MOBILE FIRST APPROACH - Base styles for smallest screens */
        .dubai-opportunity {
          background: radial-gradient(
              ellipse at 10% 20%,
              rgba(215, 180, 106, 0.12) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse at 90% 80%,
              rgba(215, 180, 106, 0.08) 0%,
              transparent 60%
            ),
            linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%);
          padding: 60px 5%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .dubai-opportunity::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d7b46a, transparent);
        }

        .opportunity-container {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .content-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
          width: 100%;
        }

        /* IMAGES COLUMN - Mobile First */
        .images-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
          width: 100%;
        }

        .main-image-container {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(215, 180, 106, 0.2),
            inset 0 0 30px rgba(215, 180, 106, 0.05);
          border: 1px solid rgba(215, 180, 106, 0.3);
          width: 100%;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(10, 10, 10, 0.4) 0%,
            transparent 50%,
            rgba(215, 180, 106, 0.1) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        .main-image {
          object-fit: cover;
          transition: transform 0.8s ease;
          width: 100%;
          height: 100%;
        }

        .main-image-container:hover .main-image {
          transform: scale(1.08);
        }

        .image-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 3;
        }

        .badge-content {
          background: rgba(10, 10, 10, 0.9);
          padding: 10px 16px;
          border: 1px solid rgba(215, 180, 106, 0.4);
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .badge-text {
          color: #d7b46a;
          font-size: clamp(0.8rem, 2.5vw, 0.9rem);
          font-weight: 600;
          letter-spacing: 1px;
        }

        .badge-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #d7b46a, transparent);
          margin-top: 6px;
        }

        .image-grid-small {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          width: 100%;
        }

        .small-image {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(215, 180, 106, 0.15);
          border: 1px solid rgba(215, 180, 106, 0.2);
          transition: all 0.4s ease;
        }

        .small-image:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(215, 180, 106, 0.25);
          border-color: rgba(215, 180, 106, 0.4);
        }

        .grid-image {
          object-fit: cover;
          transition: transform 0.6s ease;
          width: 100%;
          height: 100%;
        }

        .small-image:hover .grid-image {
          transform: scale(1.1);
        }

        .small-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(10, 10, 10, 0.85);
          color: #d7b46a;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: clamp(0.7rem, 2vw, 0.75rem);
          font-weight: 600;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(215, 180, 106, 0.3);
        }

        /* CONTENT COLUMN - Mobile First */
        .content-column {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
        }

        .title-section {
          margin-bottom: 10px;
        }

        .title-decoration {
          margin-bottom: 20px;
        }

        .gold-bar {
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, #d7b46a, transparent);
          margin-bottom: 15px;
          border-radius: 2px;
        }

        .opportunity-title {
          font-family: "Playfair Display", serif;
          color: #d7b46a;
          font-size: clamp(1.8rem, 6vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 15px;
          letter-spacing: -0.5px;
        }

        .title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #d7b46a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .opportunity-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: clamp(1rem, 3vw, 1.2rem);
          line-height: 1.6;
          font-weight: 400;
        }

        .opportunity-subtitle strong {
          color: #ffffff;
          font-weight: 600;
        }

        /* FEATURES GRID - Mobile First */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 15px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(215, 180, 106, 0.15);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(215, 180, 106, 0.05);
          border-color: rgba(215, 180, 106, 0.3);
          transform: translateX(5px);
        }

        .feature-icon {
          font-size: 1.6rem;
        }

        .feature-content h4 {
          color: #ffffff;
          font-size: clamp(1rem, 3vw, 1.15rem);
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .feature-content p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.5;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          font-weight: 400;
        }

        .feature-content strong {
          color: #ffffff;
          font-weight: 600;
        }

        /* HIGHLIGHTS - Mobile First */
        .investment-highlights {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
          margin-top: 10px;
        }

        .highlight-item {
          text-align: center;
          padding: 20px 15px;
          background: rgba(215, 180, 106, 0.08);
          border: 1px solid rgba(215, 180, 106, 0.2);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          background: rgba(215, 180, 106, 0.12);
          transform: translateY(-3px);
        }

        .highlight-number {
          color: #d7b46a;
          font-size: clamp(1.5rem, 5vw, 2rem);
          font-weight: 700;
          font-family: "Playfair Display", serif;
          margin-bottom: 8px;
        }

        .highlight-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: clamp(0.8rem, 2.5vw, 0.9rem);
          font-weight: 500;
          line-height: 1.4;
        }

        /* CTA SECTION - Mobile First */
        .cta-section {
          margin-top: 50px;
        }

        .cta-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 20px;
          line-height: 1.6;
          text-align: center;
          padding: 20px;
          background: rgba(215, 180, 106, 0.05);
          border: 1px solid rgba(215, 180, 106, 0.15);
          border-radius: 12px;
        }

        .cta-text strong {
          color: #ffffff;
          font-weight: 600;
        }

        /* SMALL MOBILE - 320px to 375px */
        @media (min-width: 320px) {
          .dubai-opportunity {
            padding: 60px 4%;
          }

          .content-grid {
            gap: 35px;
          }

          .image-grid-small {
            gap: 12px;
          }
        }

        /* MOBILE LANDSCAPE - 481px to 767px */
        @media (min-width: 481px) {
          .dubai-opportunity {
            padding: 70px 5%;
          }

          .content-grid {
            gap: 40px;
          }

          .feature-card {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
          }

          .investment-highlights {
            grid-template-columns: repeat(2, 1fr);
          }

          .image-grid-small {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* TABLET PORTRAIT - 768px to 1023px */
        @media (min-width: 768px) {
          .dubai-opportunity {
            padding: 80px 6%;
          }

          .content-grid {
            gap: 50px;
          }

          .main-image-container {
            border-radius: 20px;
          }

          .small-image {
            border-radius: 14px;
          }

          .small-image img {
            width: 100%;
            height: 100%;
          }

          .feature-card {
            padding: 25px;
          }

          .highlight-item {
            padding: 25px 15px;
          }

          .cta-text {
            padding: 25px;
          }
        }

        /* TABLET LANDSCAPE - 1024px to 1279px */
        @media (min-width: 1024px) {
          .dubai-opportunity {
            padding: 100px 8%;
          }

          .content-grid {
            flex-direction: row;
            align-items: flex-start;
            gap: 60px;
          }

          .images-column {
            flex: 1;
          }

          .content-column {
            flex: 1.1;
          }

          .investment-highlights {
            grid-template-columns: repeat(3, 1fr);
          }

          .main-image-container {
            border-radius: 24px;
          }

          .small-image {
            border-radius: 16px;
          }

          .image-badge {
            top: 25px;
            right: 25px;
          }

          .badge-content {
            padding: 12px 20px;
          }
        }

        /* DESKTOP - 1280px to 1439px */
        @media (min-width: 1280px) {
          .dubai-opportunity {
            padding: 120px 10%;
          }

          .opportunity-container {
            max-width: 1400px;
          }

          .content-grid {
            gap: 80px;
          }

          .images-column {
            gap: 30px;
          }

          .image-grid-small {
            gap: 20px;
          }

          .content-column {
            gap: 40px;
          }

          .features-grid {
            gap: 20px;
          }

          .gold-bar {
            width: 60px;
            height: 3px;
            margin-bottom: 20px;
          }
        }

        /* LARGE DESKTOP - 1440px to 1919px */
        @media (min-width: 1440px) {
          .dubai-opportunity {
            padding: 140px 12%;
          }

          .opportunity-container {
            max-width: 1600px;
          }
        }

        /* EXTRA LARGE DESKTOP - 1920px and above */
        @media (min-width: 1920px) {
          .dubai-opportunity {
            padding: 160px 15%;
          }

          .opportunity-container {
            max-width: 1800px;
          }
        }

        /* ULTRA WIDE SCREENS - 2560px and above */
        @media (min-width: 2560px) {
          .dubai-opportunity {
            padding: 180px 18%;
          }

          .opportunity-container {
            max-width: 2200px;
          }
        }

        /* HEIGHT-BASED ADJUSTMENTS FOR LANDSCAPE MOBILE */
        @media (max-height: 600px) and (orientation: landscape) {
          .dubai-opportunity {
            padding: 40px 5%;
            min-height: auto;
          }

          .content-grid {
            gap: 30px;
          }

          .title-decoration {
            margin-bottom: 15px;
          }

          .content-column {
            gap: 25px;
          }
        }

        /* PRINT STYLES */
        @media print {
          .dubai-opportunity {
            background: white !important;
            color: black !important;
            padding: 50px 20px !important;
          }

          .opportunity-title,
          .title-gradient {
            color: black !important;
            background: none !important;
            -webkit-text-fill-color: black !important;
          }

          .gold-bar {
            background: black !important;
          }
        }

        /* REDUCED MOTION FOR ACCESSIBILITY */
        @media (prefers-reduced-motion: reduce) {
          .main-image,
          .grid-image,
          .feature-card,
          .highlight-item,
          .small-image {
            transition: none !important;
            transform: none !important;
          }
        }

        /* HIGH CONTRAST MODE */
        @media (prefers-contrast: high) {
          .opportunity-title,
          .feature-content h4 {
            color: #000 !important;
          }

          .dubai-opportunity {
            background: #fff !important;
          }

          .opportunity-subtitle,
          .feature-content p,
          .highlight-text,
          .cta-text {
            color: #333 !important;
          }
        }
      `}</style>
    </section>
  );
}
