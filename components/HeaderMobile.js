"use client";

import { useState } from "react";
import styles from "./HeaderMobile.module.css";
import { assetPath } from "@/lib/assetPath";

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.headerMobile}>
        <a href={assetPath("/")} className={styles.logo}>
          <img
            src={assetPath("/images/logo.png")}
            alt="Mashad Leather"
          />
        </a>

        <div className={styles.actions}>
          {/* Search */}
          <button className={styles.iconButton} aria-label="جستجو">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16.5 16.5L21 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button className={styles.iconButton} aria-label="حساب کاربری">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="7"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M5 21V17C5 13.8 7.7 12 12 12C16.3 12 19 13.8 19 17V21H5Z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </button>

          <button className={styles.cartButton} aria-label="سبد خرید">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 8H19L18 21H6L5 8Z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M9 8V6C9 4.3 10.3 3 12 3C13.7 3 15 4.3 15 6V8"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>

            <span className={styles.cartCount}>0</span>
          </button>

          <button
            className={styles.iconButton}
            aria-label="منو"
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${
          menuOpen ? styles.overlayOpen : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.menuHeader}>
          <span>منو</span>

          <button
            onClick={() => setMenuOpen(false)}
            className={styles.closeButton}
            aria-label="بستن منو"
          >
            ×
          </button>
        </div>

        <nav className={styles.mobileNav}>
          <a href="#">کالکشن جدید</a>
          <a href="#">زنانه</a>
          <a href="#">مردانه</a>
          <a href="#">اکسسوری خانه</a>
          <a href="#">سایر محصولات</a>
          <a href="#">فروش سازمانی</a>
          <a href="#">شعب</a>
          <a href="#">باشگاه مشتریان</a>
        </nav>
      </aside>
    </>
  );
}