import React from 'react'
import styles from "./AdBanner.module.css";

const AdBanner = () => {
  return (
    <>
    <div className={styles.adBanner}>
      <div className={styles.banner} >
        <div className={styles.bannerText}>
            <p>ad</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdBanner
