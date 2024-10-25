import React from "react";
import styles from "./brand.module.css";

const Brands = ({brand, onBrandClick }) => {
  return (
      <div className={styles.brandCard}  onClick={() => onBrandClick(brand)} >
        <div className={styles.imageWrapper}>
          <img src={brand.image} alt={brand.title} />
        </div>
        <div className={styles.brandContent}>
          <h3 className="title">{brand.title}</h3>
        </div>
      </div>
  );
};

export default Brands;
