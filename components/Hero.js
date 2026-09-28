import Image from "next/image";
import HeroSlider from "./HeroSlider";
import styles from "./Hero.module.css";
import { assetPath } from "@/lib/assetPath";

export default function Hero() {
  return (
    <>
      <HeroSlider />

      <section className={styles.womenSection}>
        <div className={styles.womenItem}>
          <Image
            src={assetPath("/images/women 1.webp")}
            alt="Women's Bag"
            fill
            className={styles.womenImage}
          />

          <p className={styles.womenText}>
            WOMEN&apos;S BAG | NEW COLLECTION
          </p>
        </div>

        <div className={styles.womenItem}>
          <Image
            src={assetPath("/images/women 2.webp")}
            alt="Women's Shoes"
            fill
            className={styles.womenImage}
          />

          <p className={styles.womenText}>
            WOMEN&apos;S SHOES | NEW COLLECTION
          </p>
        </div>

        <div className={styles.season}>2026 - SUMMER</div>

        <a href="#" className={styles.womenButton}>
          محصولات زنانه
        </a>
      </section>

      <section className={styles.menSection}>
        <div className={styles.menItem}>
          <Image
            src={assetPath("/images/men 1.webp")}
            alt="Men's Bag"
            fill
            className={styles.menImage}
          />

          <p className={styles.menText}>
            MEN&apos;S BAG | NEW COLLECTION
          </p>
        </div>

        <div className={styles.menItem}>
          <Image
            src={assetPath("/images/men 2.webp")}
            alt="Men's Shoes"
            fill
            className={styles.menImage}
          />

          <p className={styles.menText}>
            MEN&apos;S SHOES | NEW COLLECTION
          </p>
        </div>

        <a href="#" className={styles.menButton}>
          محصولات مردانه
        </a>

        <div className={styles.menSeason}>2026 - SUMMER</div>
      </section>

      <section className={styles.careSection}>
        <Image
          src={assetPath("/images/moraghebat.webp")}
          alt="مراقبت از چرم و جیر"
          fill
          className={styles.careImage}
        />
      </section>

      <section className={styles.giftSection}>
        <Image
          src={assetPath("/images/GiftCard.webp")}
          alt="کارت هدیه"
          fill
          className={styles.giftImage}
        />
      </section>
    </>
  );
}