"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/AboutMohamadKodmane.module.css";
import Image from "next/image";

export default function AboutMohamadKodmane() {
  const [activeVision, setActiveVision] = useState("heritage");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real professional achievements - Based on actual data
  const professionalMilestones = [
    {
      number: "100+",
      label: "Luxury Properties",
      description: "Successfully transacted",
    },
    {
      number: "AED 500M+",
      label: "Portfolio Volume",
      description: "Client investments managed",
    },
    {
      number: "9K+",
      label: "Digital Community",
      description: "Educating investors daily",
    },
    {
      number: "4+",
      label: "Years Excellence",
      description: "Since 2020",
    },
  ];

  const socialLinks = [
    {
      platform: "YouTube",
      handle: "@Mohamad.Kodmane",
      url: "https://www.youtube.com/@Mohamad.Kodmane",
      icon: "▶️",
      stats: "9,000+ Subscribers",
      content: "Market Insights & Education",
    },
    {
      platform: "Instagram",
      handle: "@mohamadkodmane",
      url: "https://www.instagram.com/mohamadkodmane/",
      icon: "📸",
      stats: "Professional Network",
      content: "Luxury Property Showcases",
    },
    {
      platform: "WhatsApp",
      handle: "Direct Consultation",
      url: "https://wa.me/971566665560?text=Hey%20Mr.%20Mohamad!%20I%20have%20an%20enquiry%20regarding%20your%20real%20estate%20website.%20I%20saw%20your%20work%20and%20wanted%20to%20discuss%20further.",
      icon: "💬",
      stats: "Immediate Response",
      content: "Private Client Service",
    },
  ];

  const expertiseAreas = [
    {
      icon: "🏗️",
      title: "Off-Plan Investments",
      description:
        "Early access to premium developments with maximum growth potential and strategic entry points",
    },
    {
      icon: "🏰",
      title: "Luxury Residential",
      description:
        "Exclusive properties in Dubai's most prestigious locations including Palm Jumeirah, Downtown, and Emirates Hills",
    },
    {
      icon: "📊",
      title: "Portfolio Strategy",
      description:
        "Comprehensive wealth-building strategies through diversified real estate investments",
    },
    {
      icon: "🌍",
      title: "International Investors",
      description:
        "Specialized guidance for global clients navigating Dubai's dynamic property market",
    },
  ];

  const valuePropositions = [
    {
      icon: "🏛️",
      title: "DLD Certified Professional",
      description:
        "Full licensing and regulation by Dubai Land Department ensuring complete transaction security and legal compliance",
    },
    {
      icon: "🎯",
      title: "Data-Driven Market Intelligence",
      description:
        "Leveraging deep market analytics and trend forecasting to identify high-yield opportunities before market trends",
    },
    {
      icon: "🤝",
      title: "Client-First Partnership",
      description:
        "Building lifelong relationships through transparent communication, exceptional service, and proven results",
    },
    {
      icon: "💎",
      title: "Exclusive Access",
      description:
        "Priority access to off-market listings and premium developments through strong developer relationships",
    },
  ];

  return (
    <section
      className={`${styles.aboutSection} ${isVisible ? styles.visible : ""}`}
    >
      {/* Luxury Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.luxuryOrb}></div>
        <div className={styles.luxuryOrb}></div>
        <div className={styles.luxuryAccent}></div>
      </div>

      <div className={styles.container}>
        {/* Main Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.titleSection}>
              <div className={styles.titleDecoration}>
                <div className={styles.goldBar}></div>
                <h1 className={styles.mainTitle}>
                  Mohamad <span className={styles.titleHighlight}>Kodmane</span>
                </h1>
                <div className={styles.professionalTitles}>
                  <span className={styles.primaryTitle}>
                    Dubai Real Estate Visionary
                  </span>
                  <span className={styles.secondaryTitle}>
                    Founder & Strategic Investment Advisor
                  </span>
                </div>
              </div>

              {/* Core Value Statement */}
              <div className={styles.valueStatement}>
                <p>
                  Transforming real estate investment through{" "}
                  <strong>strategic market positioning</strong>,
                  <strong> data-driven insights</strong>, and{" "}
                  <strong>personalized wealth-building strategies</strong>.
                  Trusted by international investors for exceptional results in
                  Dubai's dynamic property landscape.
                </p>
              </div>
            </div>

            {/* Professional Portrait with Stats */}
            <div className={styles.portraitSection}>
              <div className={styles.portraitContainer}>
                <Image
                  src="/owner-hero.png"
                  alt="Mohamad Kodmane - Dubai Real Estate Expert & Investment Advisor"
                  className={styles.portraitImage}
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Trust & Achievement Overlay */}
                <div className={styles.achievementOverlay}>
                  <div className={styles.trustBadges}>
                    <div className={styles.badge}>
                      <div className={styles.badgeIcon}>🏛️</div>
                      <span>DLD Certified</span>
                    </div>
                    <div className={styles.badge}>
                      <div className={styles.badgeIcon}>⭐</div>
                      <span>Market Leader</span>
                    </div>
                  </div>

                  {/* Achievement Stats Grid */}
                  <div className={styles.achievementStats}>
                    {professionalMilestones.map((milestone, index) => (
                      <div key={milestone.label} className={styles.milestone}>
                        <div className={styles.milestoneNumber}>
                          {milestone.number}
                        </div>
                        <div className={styles.milestoneLabel}>
                          {milestone.label}
                        </div>
                        <div className={styles.milestoneDescription}>
                          {milestone.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise & Value Proposition Section */}
        <div className={styles.expertiseSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Areas of Strategic Expertise
            </h2>
            <p className={styles.sectionSubtitle}>
              Specialized knowledge in Dubai's most lucrative real estate
              segments
            </p>
          </div>

          <div className={styles.expertiseGrid}>
            {expertiseAreas.map((expertise, index) => (
              <div key={expertise.title} className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>{expertise.icon}</div>
                <h3 className={styles.expertiseTitle}>{expertise.title}</h3>
                <p className={styles.expertiseDescription}>
                  {expertise.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Kodmane Difference Section */}
        <div className={styles.differenceSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Kodmane Difference</h2>
            <p className={styles.sectionSubtitle}>
              Why clients choose Mohamad for their Dubai real estate investments
            </p>
          </div>

          <div className={styles.valueGrid}>
            {valuePropositions.map((value, index) => (
              <div key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Vision Navigation */}
        <div className={styles.visionSection}>
          <div className={styles.visionNavigation}>
            {[
              { id: "heritage", label: "Professional Heritage", icon: "🏛️" },
              {
                id: "methodology",
                label: "Investment Methodology",
                icon: "📊",
              },
              { id: "philosophy", label: "Client Philosophy", icon: "💎" },
            ].map((vision) => (
              <button
                key={vision.id}
                className={`${styles.visionTab} ${
                  activeVision === vision.id ? styles.active : ""
                }`}
                onClick={() => setActiveVision(vision.id)}
              >
                <span className={styles.visionIcon}>{vision.icon}</span>
                <span className={styles.visionLabel}>{vision.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.visionContent}>
            {activeVision === "heritage" && (
              <div className={styles.visionPanel}>
                <h3>Built on Excellence & Trust</h3>
                <p>
                  Since establishing his practice in 2020, Mohamad has
                  consistently delivered exceptional results through a
                  commitment to excellence and client success.
                </p>
                <div className={styles.heritageHighlights}>
                  <div className={styles.heritageItem}>
                    <strong>Proven Track Record</strong>
                    <span>100+ successful luxury transactions</span>
                  </div>
                  <div className={styles.heritageItem}>
                    <strong>Developer Relationships</strong>
                    <span>
                      Strong partnerships with Dubai's premier developers
                    </span>
                  </div>
                  <div className={styles.heritageItem}>
                    <strong>Market Analysis</strong>
                    <span>Comprehensive due diligence and research</span>
                  </div>
                  <div className={styles.heritageItem}>
                    <strong>Client Success</strong>
                    <span>Consistent delivery of investment objectives</span>
                  </div>
                </div>
              </div>
            )}

            {activeVision === "methodology" && (
              <div className={styles.visionPanel}>
                <h3>Strategic Investment Approach</h3>
                <p>
                  A disciplined methodology that combines market intelligence
                  with personalized strategy for optimal investment outcomes.
                </p>
                <div className={styles.methodologySteps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>01</div>
                    <div className={styles.stepContent}>
                      <strong>Market Analysis</strong>
                      <p>
                        Comprehensive research and opportunity identification
                      </p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>02</div>
                    <div className={styles.stepContent}>
                      <strong>Strategy Development</strong>
                      <p>
                        Customized investment plan aligned with client goals
                      </p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>03</div>
                    <div className={styles.stepContent}>
                      <strong>Execution Excellence</strong>
                      <p>Seamless transaction management and due diligence</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>04</div>
                    <div className={styles.stepContent}>
                      <strong>Portfolio Growth</strong>
                      <p>Ongoing management and optimization strategies</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeVision === "philosophy" && (
              <div className={styles.visionPanel}>
                <h3>Client-Centric Philosophy</h3>
                <p>
                  Every client relationship is built on fundamental principles
                  that ensure trust, transparency, and exceptional results.
                </p>
                <div className={styles.philosophyPrinciples}>
                  <div className={styles.principle}>
                    <div className={styles.principleIcon}>🛡️</div>
                    <div className={styles.principleContent}>
                      <strong>Security & Trust</strong>
                      <p>
                        All transactions protected through official DLD channels
                        with complete transparency
                      </p>
                    </div>
                  </div>
                  <div className={styles.principle}>
                    <div className={styles.principleIcon}>🎯</div>
                    <div className={styles.principleContent}>
                      <strong>Strategic Precision</strong>
                      <p>
                        Data-driven decisions and market timing for optimal
                        investment returns
                      </p>
                    </div>
                  </div>
                  <div className={styles.principle}>
                    <div className={styles.principleIcon}>💫</div>
                    <div className={styles.principleContent}>
                      <strong>Long-term Partnership</strong>
                      <p>
                        Building generational wealth through ongoing portfolio
                        management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Proof & Connection Section */}
        <div className={styles.socialSection}>
          <div className={styles.socialContent}>
            <div className={styles.socialHeader}>
              <h2 className={styles.socialTitle}>
                Connect & Gain Market Insights
              </h2>
              <p className={styles.socialSubtitle}>
                Follow for daily market updates, investment strategies, and
                exclusive property opportunities
              </p>
            </div>

            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <div className={styles.socialIconContainer}>
                    <span className={styles.socialIcon}>{social.icon}</span>
                  </div>
                  <div className={styles.socialInfo}>
                    <div className={styles.socialPlatform}>
                      {social.platform}
                    </div>
                    <div className={styles.socialHandle}>{social.handle}</div>
                    <div className={styles.socialStats}>{social.stats}</div>
                    <div className={styles.socialContentType}>
                      {social.content}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* High-Converting CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Invest with Confidence?
              </h2>
              <p className={styles.ctaDescription}>
                Join numerous satisfied investors who trust Mohamad to guide
                their Dubai real estate journey. From strategic off-plan
                acquisitions to luxury property investments, experience the
                Kodmane difference.
              </p>

              <div className={styles.ctaBenefits}>
                <div className={styles.benefit}>
                  ✓ Personalized Investment Strategy
                </div>
                <div className={styles.benefit}>✓ Exclusive Market Access</div>
                <div className={styles.benefit}>✓ Full Transaction Support</div>
                <div className={styles.benefit}>
                  ✓ Ongoing Portfolio Management
                </div>
              </div>

              <div className={styles.ctaActions}>
                <a
                  href="https://wa.me/message/AHLCIZILK45JH1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryCTA}
                >
                  <span className={styles.ctaIcon}>💬</span>
                  Start Your Investment Journey
                </a>
                <a
                  href="https://www.youtube.com/@Mohamad.Kodmane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryCTA}
                >
                  <span className={styles.ctaIcon}>▶️</span>
                  Watch Market Insights
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
