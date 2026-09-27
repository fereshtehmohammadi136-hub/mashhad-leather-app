import styles from "./FloatingButtons.module.css";

export default function FloatingButtons() {
  return (
    <>
      
      <a
        className={styles.baleButton}
        href="https://web.bale.ai/@mlcrm"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="اپلیکیشن بله"
      >
        <img
          src="/images/bale.png"
          alt="اپلیکیشن بله"
          width="38"
          height="38"
        />
      </a>

      
      <button
        type="button"
        className={styles.chatButton}
        aria-label="پشتیبانی آنلاین"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 12.5 3h.5a8.48 8.48 0 0 1 8 8z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className={styles.messageCount}>2</span>
      </button>
    </>
  );
}