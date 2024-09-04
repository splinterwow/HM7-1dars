import React, { useEffect, useState } from "react";
import data from "../../../src/data/data.json";
import styles from "./index.module.css";

function Cards({ filters }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let filteredProducts = data.data;

    if (filters.searchx) {
      filteredProducts = filteredProducts.filter((product) =>
        product.attributes.title
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase())
      );
    }

    if (filters.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.attributes.category === filters.category
      );
    }

    if (filters.company) {
      filteredProducts = filteredProducts.filter(
        (product) => product.attributes.company === filters.company
      );
    }

    filteredProducts = filteredProducts.filter(
      (product) => product.attributes.price / 100 <= filters.price
    );

    if (filters.sort) {
      filteredProducts.sort((a, b) => {
        if (filters.sort === "az") {
          return a.attributes.title.localeCompare(b.attributes.title);
        } else if (filters.sort === "za") {
          return b.attributes.title.localeCompare(a.attributes.title);
        } else if (filters.sort === "high") {
          return b.attributes.price - a.attributes.price;
        } else if (filters.sort === "low") {
          return a.attributes.price - b.attributes.price;
        }
        return 0;
      });
    }

    setProducts(filteredProducts);
  }, [filters]);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.attributes.image}
              alt={product.attributes.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{product.attributes.title}</h3>
            <p className={styles.price}>
              ${(product.attributes.price / 100).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
