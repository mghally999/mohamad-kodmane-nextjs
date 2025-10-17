"use client";
import Image from "next/image";
import React from "react";

export default function OffPlan() {
  return (
    <section className="offplan-section">
      <div className="content-wrapper">
        {/* LEFT CONTENT */}
        <div className="text-content">
          <div className="title-decoration">
            <div className="gold-line"></div>
            <h2 className="section-title">
              What is <span>Off-Plan Real Estate Investment?</span>
            </h2>
          </div>

          <p className="section-paragraph">
            Off-plan property trading stands as{" "}
            <strong>
              one of the most sophisticated and strategically rewarding
            </strong>{" "}
            real estate investment avenues. Esteemed by{" "}
            <strong>
              global entrepreneurs, celebrities, and institutional investors
            </strong>
            for its unparalleled potential and hands-free acquisition process.
          </p>

          <div className="investment-process">
            <div className="process-header">
              <div className="gold-icon">✦</div>
              <h3 className="process-title">Investment Structure</h3>
            </div>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>Initial Commitment</h4>
                  <p>
                    Secure with <strong className="highlight-text">20%</strong>{" "}
                    down payment via <strong>protected escrow</strong>
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>Government Registration</h4>
                  <p>
                    <strong className="highlight-text">4%</strong> Dubai Land
                    Department <strong>registration fee</strong>
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>Flexible Financing</h4>
                  <p>
                    Remaining balance structured over{" "}
                    <strong className="highlight-text">24-36 months</strong>{" "}
                    construction period
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="investment-strategies">
            <div className="strategies-header">
              <div className="gold-icon">↯</div>
              <h3 className="strategies-title">Strategic Exit Opportunities</h3>
            </div>

            <div className="strategy-cards">
              <div className="strategy-card">
                <div className="card-number">1</div>
                <div className="card-content">
                  <h4>Portfolio Acquisition</h4>
                  <p>
                    Take possession and establish{" "}
                    <strong>premium rental portfolio</strong>
                  </p>
                </div>
              </div>

              <div className="strategy-card">
                <div className="card-number">2</div>
                <div className="card-content">
                  <h4>Capital Appreciation</h4>
                  <p>
                    Liquidate upon completion for{" "}
                    <strong>maximum market gains</strong>
                  </p>
                </div>
              </div>

              <div className="strategy-card">
                <div className="card-number">3</div>
                <div className="card-content">
                  <h4>Pre-Completion Trading</h4>
                  <p>
                    Strategic resale during <strong>construction phase</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="investment-note">
            <div className="note-icon">🌍</div>
            <p>
              <strong>Dubai's progressive regulatory framework</strong> welcomes
              global citizens — residents and international investors alike — to
              participate in premier off-plan opportunities. Entire acquisition
              process available through our{" "}
              <strong className="highlight-text">
                exclusive digital platform
              </strong>{" "}
              with <strong>full remote capability</strong>.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGES - STACKED */}
        <div className="images-wrapper">
          <div className="image-container">
            <div className="image-overlay"></div>
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Modern luxury villa with swimming pool"
              width={600}
              height={500}
              className="luxury-image"
            />
            <div className="image-badge">
              <div className="badge-content">
                <span className="badge-text">Premium Developments</span>
                <div className="badge-line"></div>
              </div>
            </div>
          </div>

          <div className="image-container">
            <div className="image-overlay"></div>
            <Image
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury interior of Dubai apartment"
              width={600}
              height={500}
              className="luxury-image"
            />
            <div className="image-badge">
              <div className="badge-content">
                <span className="badge-text">Elite Interiors</span>
                <div className="badge-line"></div>
              </div>
            </div>
          </div>

          <div className="image-container">
            <div className="image-overlay"></div>
            <Image
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt="Luxury interior of Dubai apartment"
              width={600}
              height={500}
              className="luxury-image"
            />
            <div className="image-badge">
              <div className="badge-content">
                <span className="badge-text">Luxury Amenities</span>
                <div className="badge-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base Styles - Mobile First Approach */
        .offplan-section {
          background: radial-gradient(
              ellipse at 15% 30%,
              rgba(215, 180, 106, 0.08) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse at 85% 70%,
              rgba(215, 180, 106, 0.05) 0%,
              transparent 60%
            ),
            linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%);
          padding: 60px 5%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-family: "Inter", sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          width: 100%;
          box-sizing: border-box;
        }

        .offplan-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d7b46a, transparent);
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 40px;
          max-width: 100%;
          align-items: center;
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }

        .text-content {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .title-decoration {
          margin-bottom: 30px;
          position: relative;
        }

        .gold-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #d7b46a, transparent);
          margin-bottom: 20px;
        }

        .section-title {
          font-family: "Playfair Display", serif;
          color: #d7b46a;
          font-size: clamp(1.8rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 0;
          letter-spacing: -0.5px;
        }

        .section-title span {
          color: #ffffff;
          font-weight: 600;
          display: block;
          margin-top: 8px;
        }

        .section-paragraph {
          color: rgba(255, 255, 255, 0.9);
          font-size: clamp(1rem, 3vw, 1.2rem);
          line-height: 1.6;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .section-paragraph strong {
          color: #ffffff;
          font-weight: 600;
        }

        .investment-process,
        .investment-strategies {
          margin-bottom: 50px;
        }

        .process-header,
        .strategies-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
        }

        .gold-icon {
          color: #d7b46a;
          font-size: 1.3rem;
          font-weight: 400;
        }

        .process-title,
        .strategies-title {
          color: #d7b46a;
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0;
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .process-step {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(215, 180, 106, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          background: rgba(215, 180, 106, 0.05);
          border-color: rgba(215, 180, 106, 0.3);
          transform: translateX(5px);
        }

        .step-number {
          color: #d7b46a;
          font-size: 1.5rem;
          font-weight: 400;
          font-family: "Playfair Display", serif;
        }

        .step-content h4 {
          color: #ffffff;
          font-size: clamp(1rem, 3vw, 1.15rem);
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .step-content p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.5;
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          font-weight: 400;
        }

        .highlight-text {
          color: #d7b46a !important;
          font-weight: 700 !important;
        }

        .strategy-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .strategy-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(215, 180, 106, 0.15);
          border-radius: 10px;
          padding: 25px 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .strategy-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d7b46a, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .strategy-card:hover {
          background: rgba(215, 180, 106, 0.03);
          border-color: rgba(215, 180, 106, 0.4);
          transform: translateY(-3px);
        }

        .strategy-card:hover::before {
          opacity: 1;
        }

        .card-number {
          color: #d7b46a;
          font-size: 2rem;
          font-weight: 400;
          font-family: "Playfair Display", serif;
          margin-bottom: 12px;
        }

        .card-content h4 {
          color: #ffffff;
          font-size: clamp(1.1rem, 3vw, 1.25rem);
          font-weight: 600;
          margin: 0 0 10px 0;
        }

        .card-content p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.5;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          font-weight: 400;
        }

        .card-content strong {
          color: #ffffff;
          font-weight: 600;
        }

        .investment-note {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 15px;
          padding: 25px;
          background: rgba(215, 180, 106, 0.08);
          border: 1px solid rgba(215, 180, 106, 0.2);
          border-radius: 10px;
          margin-top: 40px;
        }

        .note-icon {
          font-size: 1.6rem;
        }

        .investment-note p {
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
          line-height: 1.6;
          font-size: clamp(1rem, 3vw, 1.15rem);
          font-weight: 500;
        }

        .investment-note strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* IMAGES STACKED LAYOUT */
        .images-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 25px;
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(215, 180, 106, 0.15),
            inset 0 0 30px rgba(215, 180, 106, 0.05);
          border: 1px solid rgba(215, 180, 106, 0.2);
          transition: all 0.4s ease;
          width: 100%;
          aspect-ratio: 4/3;
        }

        .image-container:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 50px rgba(215, 180, 106, 0.25),
            inset 0 0 30px rgba(215, 180, 106, 0.05);
          border-color: rgba(215, 180, 106, 0.4);
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

        .luxury-image {
          object-fit: cover;
          transition: transform 0.8s ease;
          width: 100%;
          height: 100%;
        }

        .image-container:hover .luxury-image {
          transform: scale(1.05);
        }

        .image-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 3;
        }

        .badge-content {
          background: rgba(10, 10, 10, 0.85);
          padding: 8px 15px;
          border: 1px solid rgba(215, 180, 106, 0.4);
          border-radius: 6px;
          backdrop-filter: blur(10px);
        }

        .badge-text {
          color: #d7b46a;
          font-size: clamp(0.75rem, 2.5vw, 0.9rem);
          font-weight: 600;
          letter-spacing: 1px;
        }

        .badge-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #d7b46a, transparent);
          margin-top: 6px;
        }

        /* Small Mobile - 320px to 480px */
        @media (min-width: 320px) {
          .offplan-section {
            padding: 60px 5%;
          }

          .content-wrapper {
            gap: 35px;
          }
        }

        /* Mobile Landscape - 481px to 767px */
        @media (min-width: 481px) {
          .offplan-section {
            padding: 70px 6%;
          }

          .content-wrapper {
            gap: 40px;
          }

          .process-step {
            flex-direction: row;
            align-items: center;
          }

          .step-number {
            min-width: 45px;
          }

          .investment-note {
            flex-direction: row;
            text-align: left;
          }
        }

        /* Tablet Portrait - 768px to 1023px */
        @media (min-width: 768px) {
          .offplan-section {
            padding: 80px 7%;
          }

          .content-wrapper {
            gap: 50px;
          }

          .strategy-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .images-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .image-container:last-child {
            grid-column: 1 / -1;
          }
        }

        /* Tablet Landscape - 1024px to 1279px */
        @media (min-width: 1024px) {
          .offplan-section {
            padding: 100px 8%;
          }

          .content-wrapper {
            flex-direction: row;
            align-items: flex-start;
            gap: 60px;
          }

          .text-content {
            flex: 1;
          }

          .images-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .strategy-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-step {
            padding: 25px;
          }

          .strategy-card {
            padding: 30px 25px;
          }

          .investment-note {
            padding: 30px;
          }
        }

        /* Desktop - 1280px to 1439px */
        @media (min-width: 1280px) {
          .offplan-section {
            padding: 120px 10%;
          }

          .content-wrapper {
            gap: 80px;
            max-width: 1400px;
          }

          .section-title {
            font-size: clamp(2.5rem, 4.5vw, 4rem);
          }

          .section-paragraph {
            font-size: 1.2rem;
          }

          .process-steps {
            gap: 25px;
          }

          .strategy-cards {
            gap: 25px;
          }

          .images-wrapper {
            gap: 60px;
          }

          .image-container {
            border-radius: 20px;
          }

          .image-badge {
            top: 25px;
            right: 25px;
          }

          .badge-content {
            padding: 12px 20px;
          }
        }

        /* Large Desktop - 1440px to 1919px */
        @media (min-width: 1440px) {
          .offplan-section {
            padding: 140px 12%;
          }

          .content-wrapper {
            gap: 90px;
            max-width: 1600px;
          }
        }

        /* Extra Large Desktop - 1920px and above */
        @media (min-width: 1920px) {
          .offplan-section {
            padding: 160px 15%;
          }

          .content-wrapper {
            gap: 100px;
            max-width: 1800px;
          }

          .section-title {
            font-size: 4.5rem;
          }

          .section-paragraph {
            font-size: 1.4rem;
          }
        }

        /* Ultra Wide Screens - 2560px and above */
        @media (min-width: 2560px) {
          .offplan-section {
            padding: 180px 18%;
          }

          .content-wrapper {
            max-width: 2200px;
          }
        }

        /* Height-based adjustments for landscape mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .offplan-section {
            padding: 60px 5%;
            min-height: auto;
          }

          .content-wrapper {
            gap: 30px;
          }

          .title-decoration {
            margin-bottom: 20px;
          }

          .section-paragraph {
            margin-bottom: 30px;
          }

          .investment-process,
          .investment-strategies {
            margin-bottom: 30px;
          }
        }

        /* Print styles */
        @media print {
          .offplan-section {
            background: white !important;
            color: black !important;
            padding: 50px 20px !important;
          }

          .section-title,
          .section-title span {
            color: black !important;
          }

          .gold-line {
            background: black !important;
          }

          .image-container {
            display: none;
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .process-step,
          .strategy-card,
          .image-container,
          .luxury-image {
            transition: none !important;
            transform: none !important;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .section-title,
          .section-title span,
          .process-title,
          .strategies-title,
          .step-content h4,
          .card-content h4 {
            color: #000 !important;
          }

          .offplan-section {
            background: #fff !important;
          }

          .section-paragraph,
          .step-content p,
          .card-content p {
            color: #333 !important;
          }
        }
      `}</style>
    </section>
  );
}
