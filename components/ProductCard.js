import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ name, price, image }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.productImage}
        />
      </div>

      <div className={styles.info}>
        <h3>{name}</h3>

        <p className={styles.price}>
          {price}
          <span> تومان</span>
        </p>
      </div>
    </article>
  );
}