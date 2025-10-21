"use client";
import React, { useState } from "react";
import styles from "@/styles/MiniCallbackForm.module.css";

export default function MiniCallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    // Remove any non-digit characters
    const value = e.target.value.replace(/[^\d]/g, "");
    setFormData({
      ...formData,
      phone: value,
    });
  };

  return (
    <section className={styles.callbackSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className={styles.container}>
        {/* Header with Icon */}
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <div className={styles.iconCircle}>
              <div className={styles.iconPhone}></div>
            </div>
            <div className={styles.iconGlow}></div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>
              <span className={styles.titleMain}>Connect With Our</span>
              <span className={styles.titleAccent}>Investment Team</span>
            </h2>
            <p className={styles.subtitle}>
              Speak directly with our luxury property specialists. We'll call
              you back within <strong>15 minutes</strong> to discuss your
              investment goals.
            </p>
          </div>
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <div className={styles.checkmark}></div>
            </div>
            <h3 className={styles.successTitle}>Callback Confirmed!</h3>
            <p className={styles.successMessage}>
              Our investment specialist will contact you within 15 minutes.
              Prepare to discuss premium opportunities.
            </p>
            <div className={styles.successGlow}></div>
          </div>
        ) : (
          /* Form */
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              {/* Input Fields */}
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className={styles.inputField}
                    required
                  />
                  <label htmlFor="name" className={styles.inputLabel}>
                    Your Full Name
                  </label>
                  <div className={styles.inputLine}></div>
                </div>

                <div className={styles.phoneInputWrapper}>
                  <div className={styles.phonePrefixStatic}>+971</div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder=" "
                    className={styles.phoneInputField}
                    required
                    maxLength={9}
                  />
                  <label htmlFor="phone" className={styles.phoneInputLabel}>
                    Contact Number
                  </label>
                  <div className={styles.inputLine}></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`${styles.submitButton} ${
                  isSubmitting ? styles.submitting : ""
                }`}
                disabled={isSubmitting}
              >
                <span className={styles.buttonText}>
                  {isSubmitting ? "Connecting..." : "Request Priority Callback"}
                </span>
                <div className={styles.buttonGlow}></div>
                <div className={styles.buttonOrnament}>
                  <div className={styles.ornamentDot}></div>
                  <div className={styles.ornamentDot}></div>
                  <div className={styles.ornamentDot}></div>
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>⚡</div>
                <span>15-Minute Response</span>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>🛡️</div>
                <span>Confidential</span>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>🎯</div>
                <span>Expert Advice</span>
              </div>
            </div>
          </form>
        )}

        {/* Decorative Elements */}
        <div className={styles.decoration}>
          <div className={styles.cornerOrnament}></div>
          <div className={styles.cornerOrnament}></div>
          <div className={styles.cornerOrnament}></div>
          <div className={styles.cornerOrnament}></div>
        </div>
      </div>
    </section>
  );
}
