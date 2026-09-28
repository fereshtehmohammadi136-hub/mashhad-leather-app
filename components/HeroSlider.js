"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import { assetPath } from "@/lib/assetPath";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const videoRef = useRef(null);

  useEffect(() => {
    if (currentSlide !== 0) return;

    const timer = setTimeout(() => {
      setTransitionEnabled(true);
      setCurrentSlide(1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    if (currentSlide === 1 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  const handleVideoEnd = () => {
    setTransitionEnabled(true);
    setCurrentSlide(2);
  };

  const handleTransitionEnd = () => {
    if (currentSlide === 2) {
      setTransitionEnabled(false);
      setCurrentSlide(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  return (
    <section className={styles.heroSlider}>
      <div
        className={styles.slides}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: transitionEnabled
            ? "transform 0.8s ease-in-out"
            : "none",
        }}
      >
        <div className={styles.heroSlide}>
          <Image
            src={assetPath("/images/hero.webp")}
            alt="چرم مشهد"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.content}>
            <h1>چرم مشهد</h1>
            <p>کالکشن جدید</p>
          </div>
        </div>

        <div className={styles.heroSlide}>
          <video
            ref={videoRef}
            className={styles.videoBg}
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source
              src={assetPath("/images/film.webm")}
              type="video/webm"
            />
          </video>

          <div className={styles.videoText}>
            <div>Mashad Leather - 2026 Summer</div>
            <h2>New Collection</h2>
          </div>
        </div>

        <div className={styles.heroSlide}>
          <Image
            src={assetPath("/images/hero.webp")}
            alt="چرم مشهد"
            fill
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.content}>
            <h1>چرم مشهد</h1>
            <p>کالکشن جدید</p>
          </div>
        </div>
      </div>
    </section>
  );
}