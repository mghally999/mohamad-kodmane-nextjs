"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/TopHeader.module.css";

export default function TopHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Handle body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.classList.add(styles.mobileMenuOpen);
    } else {
      document.body.classList.remove(styles.mobileMenuOpen);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove(styles.mobileMenuOpen);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "/", label: "Home", type: "primary" },
    { href: "/about", label: "About", type: "primary" },
    { href: "/projects", label: "Luxury Projects", type: "primary" },
    { href: "/articles", label: "Market Insights", type: "primary" },
    { href: "/contact", label: "Consultation", type: "cta" },
  ];

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.backgroundOverlay}></div>

        <div className={styles.container}>
          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  item.type === "cta" ? styles.ctaButton : ""
                } ${pathname === item.href ? styles.active : ""}`}
              >
                {item.label}
                {item.type === "cta" && (
                  <span className={styles.ctaGlow}></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact CTA */}
          <div className={styles.desktopContact}>
            <div className={styles.contactBadge}>
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>Direct Line</div>
                <div className={styles.contactNumber}>+971 56 666 5560</div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${
              isMobileMenuOpen ? styles.active : ""
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Fixed positioning */}
      <div
        className={`${styles.mobileNav} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <div className={styles.mobileNavBackground}></div>
        <div className={styles.mobileNavContainer}>
          <div className={styles.mobileNavHeader}>
            <div className={styles.mobileLogo}>
              <span className={styles.mobileLogoText}>KODMAN</span>
              <span className={styles.mobileLogoSubtitle}>
                Luxury Properties
              </span>
            </div>
            <button
              className={styles.mobileCloseButton}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className={styles.mobileNavContent}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  item.type === "cta" ? styles.mobileCta : ""
                } ${pathname === item.href ? styles.active : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={styles.mobileNavText}>{item.label}</span>
                {item.type === "cta" && (
                  <span className={styles.mobileCtaIcon}>✨</span>
                )}
              </Link>
            ))}

            {/* Mobile Contact Info */}
            <div className={styles.mobileContact}>
              <div className={styles.mobileContactTitle}>Contact Us</div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div className={styles.contactDetails}>
                  <div className={styles.contactType}>Direct Line</div>
                  <div className={styles.contactValue}>+971 50 123 4567</div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div className={styles.contactDetails}>
                  <div className={styles.contactType}>Email</div>
                  <div className={styles.contactValue}>info@kodman.com</div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
