import ProductCard from "./ProductCard";
import styles from "./ProductSection.module.css";

export default function ProductSection({ title, products }) {
  return (
    <section className={styles.productSection}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <a href="#" className={styles.viewAll}>
          مشاهده همه
        </a>
      </div>

      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}