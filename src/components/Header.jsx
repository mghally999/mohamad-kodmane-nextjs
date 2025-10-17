"use client";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="overlay"></div>
        <div className="particles"></div>

        <div className="container">
          <div className="content">
            <div className="branding">
              <Image
                src="/logo.jpg"
                alt="Mohamad Kodmane"
                width={130}
                height={130}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(215,180,106,0.8)",
                  boxShadow:
                    "0 0 40px rgba(215,180,106,0.3), inset 0 0 30px rgba(215,180,106,0.2)",
                  backgroundColor: "#111",
                }}
              />
            </div>

            <h1 className="title">
              MOHAMAD <span>KODMANE</span>
            </h1>

            <p className="tagline">
              Crafting timeless spaces of elegance and investment value — where
              architecture meets artistry and Dubai's skyline redefines luxury.
            </p>

            <div className="stats">
              <div className="stat">
                <div className="stat-number">₿2.8B+</div>
                <div className="stat-label">Portfolio Value</div>
              </div>
              <div className="stat">
                <div className="stat-number">75+</div>
                <div className="stat-label">Luxury Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">18</div>
                <div className="stat-label">Years Excellence</div>
              </div>
            </div>

            <div className="cta">
              <button className="cta-btn primary">View Portfolio</button>
              <button className="cta-btn secondary">Start Your Legacy</button>
            </div>
          </div>

          <div className="portrait-wrapper">
            <div className="portrait">
              <Image
                src="/owner-hero.png"
                alt="Mohamad Kodmane"
                fill
                onError={(e) => {
                  const fallback = document.createElement("div");
                  fallback.innerHTML = "MOHAMAD KODMANE";
                  fallback.style.cssText = `
      width:100%;height:100%;display:flex;align-items:center;
      justify-content:center;color:#D7B46A;font-size:2rem;
      font-weight:700;background:rgba(255,255,255,0.05);
      font-family:'Playfair Display', serif;
    `;
                  e.target.parentNode.appendChild(fallback);
                  e.target.style.display = "none";
                }}
                className="owner-image"
              />
              <div className="portrait-glow"></div>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* ===== Base Layout ===== */
        .header {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(
              circle at 30% 20%,
              rgba(215, 180, 106, 0.15),
              transparent 60%
            ),
            linear-gradient(135deg, #0b0b0b 0%, #111111 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: "Playfair Display", serif;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8),
            rgba(11, 11, 11, 0.9)
          );
          z-index: 1;
        }

        /* ===== Floating Gold Particles ===== */
        .particles::before,
        .particles::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
              circle,
              rgba(215, 180, 106, 0.15) 1px,
              transparent 1px
            ),
            radial-gradient(
              circle,
              rgba(215, 180, 106, 0.05) 1px,
              transparent 1px
            );
          background-size: 80px 80px, 120px 120px;
          animation: floatParticles 30s linear infinite;
          z-index: 0;
        }

        @keyframes floatParticles {
          from {
            background-position: 0 0, 0 0;
          }
          to {
            background-position: 1000px 1000px, -1000px -1000px;
          }
        }

        /* ===== Main Container ===== */
        .container {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          max-width: 1500px;
          width: 100%;
          // padding: 80px 60px;
        }

        /* ===== Left Column ===== */
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 35px;
        }

        .branding {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .logo {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid rgba(215, 180, 106, 0.8);
          box-shadow: 0 0 50px rgba(215, 180, 106, 0.4),
            inset 0 0 30px rgba(215, 180, 106, 0.1);
          transition: all 0.5s ease;
        }

        .logo:hover {
          transform: scale(1.08);
          box-shadow: 0 0 80px rgba(215, 180, 106, 0.6),
            inset 0 0 40px rgba(215, 180, 106, 0.2);
        }

        /* ===== Title - MASSIVE LUXURY TYPOGRAPHY ===== */
        .title {
          font-size: clamp(4rem, 8vw, 7rem);
          font-weight: 800;
          line-height: 0.9;
          margin: 0;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #d7b46a 50%,
            #ffffff 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 60px rgba(215, 180, 106, 0.5);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .title span {
          display: block;
          background: linear-gradient(135deg, #d7b46a 0%, #b89444 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 80px rgba(215, 180, 106, 0.8);
          margin-top: 10px;
        }

        /* ===== Tagline ===== */
        .tagline {
          font-family: "Inter", sans-serif;
          color: rgba(255, 255, 255, 0.9);
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          line-height: 1.6;
          max-width: 650px;
          font-weight: 400;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
        }

        /* ===== Stats ===== */
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin: 20px 0;
        }

        .stat {
          padding: 25px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(215, 180, 106, 0.2);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .stat:hover {
          background: rgba(215, 180, 106, 0.1);
          transform: translateY(-5px);
          border-color: rgba(215, 180, 106, 0.4);
        }

        .stat-number {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #d7b46a;
          margin-bottom: 8px;
          text-shadow: 0 0 20px rgba(215, 180, 106, 0.4);
        }

        .stat-label {
          font-family: "Inter", sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* ===== CTA ===== */
        .cta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
        }

        .cta-btn {
          padding: 20px 40px;
          border: none;
          border-radius: 50px;
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-transform: uppercase;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #d7b46a 0%, #b89444 100%);
          color: #000;
          box-shadow: 0 10px 40px rgba(215, 180, 106, 0.4);
        }

        .cta-btn.secondary {
          background: transparent;
          color: #d7b46a;
          border: 2px solid #d7b46a;
          box-shadow: 0 0 30px rgba(215, 180, 106, 0.2);
        }

        .cta-btn:hover {
          transform: translateY(-3px) scale(1.05);
        }

        .cta-btn.primary:hover {
          box-shadow: 0 15px 60px rgba(215, 180, 106, 0.6);
        }

        .cta-btn.secondary:hover {
          background: rgba(215, 180, 106, 0.1);
          box-shadow: 0 0 50px rgba(215, 180, 106, 0.4);
        }

        /* ===== Portrait ===== */
        .portrait-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portrait {
          position: relative;
          width: 100%;
          border: 2px solid rgba(215, 180, 106, 0.4);
          box-shadow: 0 0 100px rgba(215, 180, 106, 0.3),
            inset 0 0 60px rgba(215, 180, 106, 0.1);
          overflow: hidden;
          border-radius: 20px;
          transition: all 0.4s ease;
          height: 100% !important;
        }

        .portrait:hover {
          transform: scale(1.03);
          box-shadow: 0 0 150px rgba(215, 180, 106, 0.5),
            inset 0 0 80px rgba(215, 180, 106, 0.15);
        }

        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.1) brightness(1.05);
          transition: all 0.6s ease;
        }

        .portrait:hover img {
          filter: contrast(1.15) brightness(1.1);
        }

        .portrait-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(215, 180, 106, 0.1) 0%,
            transparent 50%
          );
          pointer-events: none;
        }

        /* ===== Responsive Design ===== */
        @media (max-width: 1200px) {
          .container {
            gap: 60px;
            padding: 80px 50px;
          }
          .portrait {
            height: 600px;
          }
        }

        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
            padding: 100px 40px;
          }

          .portrait {
            width: 450px;
            height: 550px;
            margin: 0 auto;
          }

          .cta {
            justify-content: center;
          }

          .tagline {
            margin: 0 auto;
          }

          .stats {
            grid-template-columns: repeat(3, 1fr);
            max-width: 500px;
            margin: 20px auto;
          }
        }

        @media (max-width: 768px) {
          .logo {
            width: 100px;
            height: 100px;
          }
          .branding {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 25px;
          }
          .title {
            font-size: clamp(3rem, 9vw, 5rem);
          }
          .tagline {
            font-size: clamp(1.2rem, 3vw, 1.5rem);
          }
          .portrait {
            width: 380px;
            height: 480px;
          }
          .stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
          }
          .stat {
            padding: 20px;
          }
          .stat-number {
            font-size: clamp(1.5rem, 4vw, 2rem);
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 60px 20px;
          }
          .container {
            padding: 60px 20px;
            gap: 40px;
          }
          .title {
            font-size: clamp(2.5rem, 10vw, 4rem);
          }
          .tagline {
            font-size: 1.1rem;
            line-height: 1.5;
          }
          .portrait {
            width: 320px;
            height: 420px;
          }
          .stats {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .stat {
            padding: 15px;
          }
          .cta {
            flex-direction: column;
            align-items: center;
          }
          .cta-btn {
            width: 100%;
            max-width: 280px;
            padding: 18px 30px;
          }
        }

        @media (max-width: 320px) {
          .container {
            padding: 50px 15px;
          }
          .title {
            font-size: 2.2rem;
          }
          .tagline {
            font-size: 1rem;
          }
          .portrait {
            width: 280px;
            height: 380px;
          }
        }
      `}</style>
    </>
  );
}
