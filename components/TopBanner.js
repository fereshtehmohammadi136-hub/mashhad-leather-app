import styles from "./TopBanner.module.css";
import { assetPath } from "@/lib/assetPath";

export default function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.motionHome}>
        <img
          src={assetPath(
            "/images/557c25742f2b42209d280bf42c086512.gif"
          )}
          alt="گیف"
          className={styles.desktopBanner}
        />

        <img
          src={assetPath(
            "/images/e0733868c012401f878317c291a23ad4.gif"
          )}
          alt="گیف"
          className={styles.mobileBanner}
        />
      </div>
    </div>
  );
}