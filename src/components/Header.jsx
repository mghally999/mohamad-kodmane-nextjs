"use client";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>
      <div className={styles.particles}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <Image
              src="/logo.jpg"
              alt="Mohamad Kodmane"
              width={130}
              height={130}
              className={styles.logo}
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

          <h1 className={styles.title}>
            MOHAMAD <span>KODMANE</span>
          </h1>

          <p className={styles.tagline}>
            Crafting timeless spaces of elegance and investment value — where
            architecture meets artistry and Dubai's skyline redefines luxury.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>₿2.8B+</div>
              <div className={styles.statLabel}>Portfolio Value</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>75+</div>
              <div className={styles.statLabel}>Luxury Projects</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>18</div>
              <div className={styles.statLabel}>Years Excellence</div>
            </div>
          </div>

          <div className={styles.cta}>
            <button className={`${styles.ctaBtn} ${styles.primary}`}>
              View Portfolio
            </button>
            <button className={`${styles.ctaBtn} ${styles.secondary}`}>
              Start Your Legacy
            </button>
          </div>
        </div>

        <div className={styles.portraitWrapper}>
          <div className={styles.portrait}>
            <Image
              src="/owner-hero.png"
              alt="Mohamad Kodmane"
              fill
              className={styles.ownerImage}
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
            />
            <div className={styles.portraitGlow}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
