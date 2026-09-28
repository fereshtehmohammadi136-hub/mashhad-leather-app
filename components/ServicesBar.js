import styles from "./ServicesBar.module.css";
import { assetPath } from "@/lib/assetPath";

export default function ServicesBar() {
  return (
    <section className={styles.iconLoopSection}>
      <div className={styles.iconLoop}>
        <div className={styles.loopTrack}>
          <img
            src={assetPath("/images/customerClubGift2.png")}
            alt=""
            width="216"
            height="28"
          />

          <img
            src={assetPath("/images/onlineSupport2.png")}
            alt=""
            width="140"
            height="29"
          />

          <img
            src={assetPath("/images/garantee2.png")}
            alt=""
            width="150"
            height="40"
          />

          <img
            src={assetPath("/images/Creditpurchase.png")}
            alt=""
            width="140"
            height="28"
          />

          <img
            src={assetPath("/images/customerClubGift2.png")}
            alt=""
            width="216"
            height="28"
          />

          <img
            src={assetPath("/images/onlineSupport2.png")}
            alt=""
            width="140"
            height="29"
          />

          <img
            src={assetPath("/images/garantee2.png")}
            alt=""
            width="150"
            height="40"
          />

          <img
            src={assetPath("/images/Creditpurchase.png")}
            alt=""
            width="140"
            height="28"
          />
        </div>
      </div>
    </section>
  );
}