"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      title: "Arada – Massar 3",
      description:
        "Luxury villas in Sharjah's premier community featuring smart home technology, premium amenities, and sustainable living spaces with guaranteed rental returns.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Arada",
      location: "Sharjah",
      type: "Luxury Villas",
      roi: "12-18%",
      status: "Under Construction",
      units: "Limited Units",
      cta: "View Available Units",
      slug: "arada-massar-3",
      featured: true,
    },
    {
      id: 2,
      title: "Azizi Riviera – Retails",
      description:
        "Premium retail spaces in Dubai's most ambitious waterfront community. Strategic location with high foot traffic and exceptional rental yields.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Azizi",
      location: "Dubai",
      type: "Retail Spaces",
      roi: "15-22%",
      status: "Ready Soon",
      units: "Prime Locations",
      cta: "Explore Retail Opportunities",
      slug: "azizi-riviera-retails",
      featured: true,
    },
    {
      id: 3,
      title: "Lumina Alta – Omniyat",
      description:
        "Ultra-luxury residences in the heart of Dubai with panoramic views, bespoke interiors, and exclusive amenities for discerning investors.",
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Omniyat",
      location: "Dubai",
      type: "Luxury Residences",
      roi: "18-25%",
      status: "Off-Plan",
      units: "Limited Edition",
      cta: "Discover Luxury Living",
      slug: "lumina-alta-omniyat",
      featured: true,
    },
    {
      id: 4,
      title: "S Tower – Sobha Hartland",
      description:
        "Iconic high-rise offering sophisticated urban living with world-class amenities, located in Mohammed Bin Rashid City.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha",
      location: "Dubai",
      type: "Luxury Apartments",
      roi: "14-20%",
      status: "Under Construction",
      units: "Multiple Configurations",
      cta: "View Floor Plans",
      slug: "s-tower-sobha-hartland",
    },
    {
      id: 5,
      title: "Sobha Central",
      description:
        "Urban masterpiece in the heart of Dubai offering premium residential and commercial spaces with exceptional connectivity.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha",
      location: "Dubai",
      type: "Mixed Use",
      roi: "13-19%",
      status: "Off-Plan",
      units: "Various Options",
      cta: "Explore Investment",
      slug: "sobha-central",
    },
    {
      id: 6,
      title: "Sobha The Element",
      description:
        "Contemporary living spaces designed for modern lifestyles, featuring innovative architecture and premium finishes.",
      image:
        "https://images.unsplash.com/photo-1540259579797-88e28e233a82?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha",
      location: "Dubai",
      type: "Apartments",
      roi: "12-17%",
      status: "Ready Soon",
      units: "Family Friendly",
      cta: "See Availability",
      slug: "sobha-the-element",
    },
    {
      id: 7,
      title: "Sobha UAQ Downtown",
      description:
        "Transformative development in Umm Al Quwain offering affordable luxury with high potential for capital appreciation.",
      image:
        "https://images.unsplash.com/photo-1600585154340-ffffd8e0d6aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha",
      location: "Umm Al Quwain",
      type: "Mixed Community",
      roi: "16-24%",
      status: "Off-Plan",
      units: "Best Value",
      cta: "Discover Opportunity",
      slug: "sobha-uaq-downtown",
    },
    {
      id: 8,
      title: "Sobha Sky Park",
      description:
        "Elevated living experience with green spaces, premium amenities, and stunning views in a prime Dubai location.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha",
      location: "Dubai",
      type: "Residential",
      roi: "15-21%",
      status: "Under Construction",
      units: "Limited Availability",
      cta: "Book Viewing",
      slug: "sobha-sky-park",
    },
    {
      id: 9,
      title: "Sobha Sea Haven Penthouse",
      description:
        "Exclusive penthouse collection offering unparalleled luxury, privacy, and breathtaking sea views for elite investors.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha",
      location: "Dubai",
      type: "Penthouses",
      roi: "20-30%",
      status: "Last Units",
      units: "Ultra Exclusive",
      cta: "Request Private Tour",
      slug: "sobha-sea-haven-penthouse",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const handleProjectClick = (slug) => {
    router.push(`/projects/${slug}`);
  };

  const handleCTAClick = (e, slug) => {
    e.stopPropagation();
    router.push(`/projects/${slug}`);
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Premium Dubai Real Estate Developments - Exclusive Projects Portfolio"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>EXCLUSIVE DEVELOPMENTS PORTFOLIO</span>
              <div className={styles.badgeLine}></div>
            </div>

            <h1 className={styles.heroTitle}>
              Handpicked Projects with{" "}
              <span className={styles.highlight}>Proven ROI 12-30%</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Curated selection of premium real estate opportunities in Dubai
              and UAE. Every project is thoroughly vetted for maximum returns
              and minimum risk.
            </p>

            {/* Trust Stats */}
            <div className={styles.trustStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>9</div>
                <div className={styles.statLabel}>Premium Projects</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>12-30%</div>
                <div className={styles.statLabel}>Guaranteed ROI</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Sold Out Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>HOT OPPORTUNITIES</div>
            <h2 className={styles.sectionTitle}>
              Featured <span className={styles.highlight}>High-Demand</span>{" "}
              Projects
            </h2>
            <p className={styles.sectionSubtitle}>
              Limited units available in Dubai's most sought-after developments
            </p>
          </div>

          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className={styles.featuredCard}
                onClick={() => handleProjectClick(project.slug)}
              >
                <div className={styles.featuredBadge}>🔥 HOT DEAL</div>

                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.developer} - ${project.location}`}
                    fill
                    className={styles.projectImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay}></div>

                  <div className={styles.projectMeta}>
                    <div className={styles.developer}>{project.developer}</div>
                    <div className={styles.location}>{project.location}</div>
                  </div>

                  <div className={styles.roiBadge}>
                    <span>{project.roi} ROI</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.projectDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Type</span>
                      <span className={styles.detailValue}>{project.type}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Status</span>
                      <span className={styles.detailValue}>
                        {project.status}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Availability</span>
                      <span className={styles.detailValue}>
                        {project.units}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleCTAClick(e, project.slug)}
                    className={styles.projectCTA}
                  >
                    {project.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>PREMIUM PORTFOLIO</div>
            <h2 className={styles.sectionTitle}>
              Complete <span className={styles.highlight}>Project</span>{" "}
              Collection
            </h2>
            <p className={styles.sectionSubtitle}>
              Carefully selected developments offering exceptional value and
              growth potential
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className={styles.projectCard}
                onClick={() => handleProjectClick(project.slug)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.developer} Development`}
                    fill
                    className={styles.projectImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay}></div>

                  <div className={styles.projectMeta}>
                    <div className={styles.developer}>{project.developer}</div>
                    <div className={styles.location}>{project.location}</div>
                  </div>

                  <div className={styles.roiBadge}>
                    <span>{project.roi} ROI</span>
                  </div>

                  <div className={styles.cardHover}>
                    <div className={styles.hoverContent}>
                      <span>View Project Details</span>
                      <div className={styles.arrowIcon}>→</div>
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.projectDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Type</span>
                      <span className={styles.detailValue}>{project.type}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Status</span>
                      <span className={styles.detailValue}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleCTAClick(e, project.slug)}
                    className={styles.projectCTA}
                  >
                    {project.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate CTA Section */}
      <section className={styles.ultimateCTA}>
        <div className={styles.container}>
          <div className={styles.ultimateCTACard}>
            <div className={styles.ctaBadge}>🚀 LIMITED OPPORTUNITY</div>
            <h2 className={styles.ctaTitle}>
              Ready to Secure Your{" "}
              <span className={styles.highlight}>Dream Investment?</span>
            </h2>
            <p className={styles.ctaDescription}>
              Don't miss out on these exclusive projects. Get personalized
              consultation, special pricing, and guaranteed returns. Our clients
              average 18-25% ROI annually.
            </p>

            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Best Price Guarantee</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Rental Guarantee Programs</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Post-Sales Support</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Flexible Payment Plans</span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/971501234567?text=I'm interested in your premium projects and want to schedule a viewing"
                className={styles.primaryCTA}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp for Exclusive Pricing
              </a>
              <a href="tel:+971501234567" className={styles.secondaryCTA}>
                📞 Call Now for Urgent Deals
              </a>
            </div>

            <div className={styles.urgencyNote}>
              <strong>
                ⚠️ Last units available - Prices increasing next week!
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
