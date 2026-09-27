import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footerSpace}></div>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <h3>اطلاعات تماس</h3>

            <ul>
              <li>
                <a
                  href="https://career.hrcando.ir/co/Mashad%20leather-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  همکاری با ما
                </a>
              </li>

              <li>
                <a href="/about">درباره ما</a>
              </li>

              <li>
                <a href="/contact">تماس با ما</a>
              </li>

              <li>
                <a href="/suppliercooperation">همکاری با تامین کننده</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>با چرم مشهد</h3>

            <ul>
              <li>
                <a href="/OrganizationalSales">فروش سازمانی</a>
              </li>

              <li>
                <a href="/Export">صادرات</a>
              </li>

              <li>
                <a href="/SiteBranches/List">شعب</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>خدمات مشتریان</h3>

            <ul>
              <li>
                <a href="/blog">اخبار</a>
              </li>

              <li>
                <a href="/return-product-condition">قوانین مرجوعی کالا</a>
              </li>

              <li>
                <a href="/faqs/list">سوالات متداول</a>
              </li>

              <li>
                <a href="/aftersaleservice">خدمات پس از فروش</a>
              </li>

              <li>
                <a href="#">خبرنامه +</a>
              </li>
            </ul>
          </div>

          <div className={styles.logoBox}>
            <img src="/images/footerLogo.png" alt="Mashad Leather" />
          </div>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.address}>
            <p>
              <strong>دفتر تهران:</strong> جردن، خیابان شهید عاطفی شرقی پلاک 37،
              طبقه چهارم
            </p>

            <p>
              <strong>دفتر مشهد:</strong> میدان جانباز، ساختمان پاژ ساختمان
              اداری شماره 2، طبقه 9، واحد 911
            </p>
          </div>

          <div className={styles.contact}>
            <p>
              <strong>تماس با ما:</strong>
              <span>05131711</span>
            </p>

            <p>
              <strong>شنبه تا چهارشنبه به جز تعطیلات رسمی:</strong>

              <span>08:00 - 17:00</span>
            </p>

            <a href="mailto:info@mashadleather.com">info@mashadleather.com</a>
          </div>
        </div>

        <div className={styles.social}>
          <ul>
            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com/MashadLeatherco/"
                target="_blank"
                rel="nofollow noopener"
                aria-label="Facebook"
              >
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="32"
                    height="32"
                    rx="16"
                    stroke="#878787"
                  />

                  <path
                    d="M20.625 9.5H18.375C17.3804 9.5 16.4266 9.89509 15.7233 10.5983C15.0201 11.3016 14.625 12.2554 14.625 13.25V15.5H12.375V18.5H14.625V24.5H17.625V18.5H19.875L20.625 15.5H17.625V13.25C17.625 13.0511 17.704 12.8603 17.8447 12.7197C17.9853 12.579 18.1761 12.5 18.375 12.5H20.625V9.5Z"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/mashadleatherco/"
                target="_blank"
                rel="nofollow noopener"
                aria-label="Instagram"
              >
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="32"
                    height="32"
                    rx="16"
                    stroke="#878787"
                  />

                  <path
                    d="M20.25 9.5H12.75C10.6789 9.5 9 11.1789 9 13.25V20.75C9 22.8211 10.6789 24.5 12.75 24.5H20.25C22.3211 24.5 24 22.8211 24 20.75V13.25C24 11.1789 22.3211 9.5 20.25 9.5Z"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M19.4998 16.5277C19.5923 17.1519 19.4857 17.7894 19.1951 18.3495C18.9045 18.9096 18.4446 19.3638 17.881 19.6475C17.3174 19.9312 16.6786 20.0299 16.0556 19.9297C15.4326 19.8294 14.8571 19.5353 14.4109 19.0891C13.9647 18.6429 13.6706 18.0674 13.5703 17.4444C13.4701 16.8214 13.5688 16.1826 13.8525 15.619C14.1362 15.0554 14.5904 14.5955 15.1505 14.3049C15.7106 14.0143 16.3481 13.9077 16.9723 14.0002C17.609 14.0946 18.1984 14.3913 18.6536 14.8465C19.1087 15.3016 19.4054 15.891 19.4998 16.5277Z"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M20.625 12.875H20.6325"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>

            {/* YouTube */}
            <li>
              <a
                href="https://www.youtube.com/channel/UCnOFTnwspwot-inQS_YmA8A"
                target="_blank"
                rel="nofollow noopener"
                aria-label="YouTube"
              >
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="32"
                    height="32"
                    rx="16"
                    stroke="#878787"
                  />

                  <path
                    d="M24.4047 12.815C24.3156 12.4591 24.1342 12.1329 23.8787 11.8696C23.6232 11.6062 23.3028 11.4149 22.9497 11.315C21.6597 11 16.4997 11 16.4997 11C16.4997 11 11.3397 11 10.0497 11.345C9.69663 11.4449 9.37618 11.6362 9.12071 11.8996C8.86523 12.1629 8.68379 12.4891 8.5947 12.845C8.35861 14.1542 8.24312 15.4822 8.2497 16.8125C8.24128 18.1528 8.35677 19.491 8.5947 20.81C8.69292 21.1549 8.87843 21.4686 9.1333 21.7209C9.38818 21.9731 9.70381 22.1554 10.0497 22.25C11.3397 22.595 16.4997 22.595 16.4997 22.595C16.4997 22.595 21.6597 22.595 22.9497 22.25C23.3028 22.1501 23.6232 21.9588 23.8787 21.6954C24.1342 21.4321 24.3156 21.1059 24.4047 20.75C24.639 19.4507 24.7544 18.1328 24.7497 16.8125C24.7581 15.4722 24.6426 14.134 24.4047 12.815Z"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M14.8125 19.265L19.125 16.8125L14.8125 14.36V19.265Z"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>

            {/* X */}
            <li>
              <a href="#" aria-label="X">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="32"
                    height="32"
                    rx="16"
                    stroke="#878787"
                  />

                  <path
                    d="M10.5293 11.3L15.1628 17.5143L10.5 22.5654H11.55L15.6311 18.1418L18.9293 22.5654H22.5L17.6067 16.0025L21.9457 11.3H20.8976L17.1384 15.3732L14.1018 11.3H10.5293ZM12.0732 12.0743H13.714L20.9579 21.7893H19.3171L12.0732 12.0743Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>

            {/* Aparat */}
            <li>
              <a
                href="https://www.aparat.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aparat"
                className={styles.aparatIcon}
              >
                <img src="/images/aparat.png" alt="Aparat" />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.copyright}>
          <span>
            MASHADLEATHER © 2024 - ALL RIGHTS RESERVED - Developed by{" "}
            <a
              href="https://zavoshsoftware.com/service/web-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZAVOSH
            </a>
          </span>
        </div>

        <div className={styles.symbols}>
          <img
            src="/images/enamadasli.png"
            alt="نماد اعتماد الکترونیکی"
            className={styles.enamad}
          />

          <img src="/images/Asset 45@3x-8.png" alt="مجوز" />
        </div>

        <div className={styles.footerBgLine}></div>
      </footer>
    </>
  );
}
