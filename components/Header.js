import Link from "next/link";
import styles from "./Header.module.css";
import { assetPath } from "@/lib/assetPath";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <nav className={styles.navbar}>
          <div className={styles.menuItem}>
            <Link href="#">کالکشن جدید</Link>

            <div className={styles.smallMenu}>
              <Link href="#">نیوکالکشن زنانه</Link>
              <Link href="#">نیوکالکشن مردانه</Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Link href="#">زنانه</Link>

            <div className={styles.megaMenu}>
              <div className={styles.megaMenuInner}>
                <div className={styles.menuColumn}>
                  <h3>کیف زنانه</h3>
                  <Link href="#">کیف دوشی</Link>
                  <Link href="#">کیف دستی</Link>
                  <Link href="#">کوله پشتی</Link>
                  <Link href="#">کیف کمری</Link>
                </div>

                <div className={styles.menuColumn}>
                  <h3>کفش زنانه</h3>
                  <Link href="#">صندل</Link>
                  <Link href="#">کفش راحتی</Link>
                  <Link href="#">کفش پاشنه‌دار</Link>
                  <Link href="#">کفش تخت</Link>
                  <Link href="#">بوت و نیم‌بوت</Link>
                </div>

                <div className={styles.menuColumn}>
                  <h3>لباس چرمی</h3>
                  <Link href="#">کت کوتاه</Link>
                  <Link href="#">کت بلند</Link>
                  <Link href="#">دامن</Link>
                  <Link href="#">وست</Link>
                </div>

                <div className={styles.menuColumn}>
                  <h3>اکسسوری</h3>
                  <Link href="#">کمربند</Link>
                  <Link href="#">کیف پول</Link>
                  <Link href="#">جاکارتی</Link>
                  <Link href="#">دستکش</Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Link href="#">مردانه</Link>

            <div className={styles.megaMenu}>
              <div className={styles.megaMenuInner}>
                <div className={styles.menuColumn}>
                  <h3>کیف مردانه</h3>
                  <Link href="#">کیف دوشی</Link>
                  <Link href="#">کیف دستی</Link>
                  <Link href="#">کوله پشتی</Link>
                  <Link href="#">کیف اداری</Link>
                </div>

                <div className={styles.menuColumn}>
                  <h3>کفش مردانه</h3>
                  <Link href="#">کفش رسمی</Link>
                  <Link href="#">کفش روزمره</Link>
                  <Link href="#">کفش راحتی</Link>
                  <Link href="#">بوت و نیم‌بوت</Link>
                </div>

                <div className={styles.menuColumn}>
                  <h3>لباس چرمی</h3>
                  <Link href="#">کت چرمی</Link>
                  <Link href="#">کاپشن چرمی</Link>
                  <Link href="#">وست</Link>
                </div>

                <div className={styles.menuColumn}>
                  <h3>اکسسوری</h3>
                  <Link href="#">کمربند</Link>
                  <Link href="#">کیف پول</Link>
                  <Link href="#">جاکارتی</Link>
                  <Link href="#">دستکش</Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Link href="#">اکسسوری خانه</Link>

            <div className={styles.smallMenu}>
              <Link href="#">سرگرمی</Link>
              <Link href="#">فرش چرمی</Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Link href="#">سایر محصولات</Link>

            <div className={styles.smallMenu}>
              <Link href="#">کارت هدیه</Link>
            </div>
          </div>

          <Link href="#">فروش سازمانی</Link>
          <Link href="#">شعب</Link>
          <Link href="#">باشگاه مشتریان</Link>
        </nav>

        <Link href={assetPath("/")} className={styles.logo}>
          <img
            src={assetPath("/images/logo.png")}
            alt="Mashad Leather"
            className={styles.logoImage}
          />
        </Link>

        <div className={styles.actions}>
          <div className={styles.actionMenu}>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="حساب کاربری"
            >
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="7" r="3.5" />
                <path d="M5 21v-3a7 7 0 0 1 14 0v3H5Z" />
              </svg>
            </button>

            <div className={styles.actionDropdown}>
              <Link href="#">حساب کاربری</Link>
              <Link href="#">پیگیری سفارش</Link>
            </div>
          </div>

          <button
            type="button"
            className={styles.iconButton}
            aria-label="سبد خرید"
          >
            <svg
              viewBox="0 0 24 24"
              width="25"
              height="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M5 8h14l-1 12H6L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>

          <span className={styles.divider}></span>

          <div className={styles.actionMenu}>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="زبان"
            >
              <svg
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c3 3 3 15 0 18" />
                <path d="M12 3c-3 3-3 15 0 18" />
              </svg>
            </button>

            <div className={styles.actionDropdown}>
              <Link href="#">EN</Link>
              <Link href="#">FA</Link>
              <Link href="#">AR</Link>
            </div>
          </div>

          <button
            type="button"
            className={styles.iconButton}
            aria-label="جستجو"
          >
            <svg
              viewBox="0 0 24 24"
              width="25"
              height="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M16.5 16.5L21 21" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}