"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const [activeCategory, setActiveCategory] = useState("Used");

  return (
    <div className={styles.sidebar}>
      <div className={styles.titleHeading}>
        <h2>Shop in Bikes</h2>
      </div>
      <div className="p-4">
        <div className={styles.category}>
          {/* Add the active class based on the state */}
          <Link
            href="#"
            className={`${styles.categoryLink} ${
              activeCategory === "Used" ? styles.active : ""
            }`}
            onClick={() => setActiveCategory("Used")}
          >
            Used
          </Link>
          <Link
            href="#"
            className={`${styles.categoryLink} ${
              activeCategory === "New" ? styles.active : ""
            }`}
            onClick={() => setActiveCategory("New")} 
          >
            New
          </Link>
        </div>
        <ul className={styles.brands}>
          <li>
            <div className={styles.icon}>
              <Image
                src="/Harley.png"
                alt="Harley Davidson"
                width={36}
                height={36}
              />
            </div>
            <Link href="#" className="text-blue-500">
              Harley - Davidson
            </Link>
          </li>
          <li>
            <div className={styles.icon}>
              <Image
                src="/Hero.png"
                alt="Royal Enfield"
                width={36}
                height={36}
              />
            </div>
            <Link href="#" className="text-blue-500">
              Royal - Enfield
            </Link>
          </li>
          <li>
            <div className={styles.icon}>
              <Image src="/Honda.png" alt="OLA" width={36} height={36} />
            </div>
            <Link href="#" className="text-blue-500">
              OLA
            </Link>
          </li>
          <li>
            <div className={styles.icon}>
              <Image
                src="/Honda.png"
                alt="Honda"
                width={36}
                height={36}
              />
            </div>
            <Link href="#" className="text-blue-500">
              Honda
            </Link>
          </li>
          <li>
            <div className={styles.icon}>
              <Image src="/Royal.png" alt="Hero" width={36} height={36} />
            </div>
            <Link href="#" className="text-blue-500">
              Hero
            </Link>
          </li>
          <li>
            <div className={styles.icon}>
              <Image
                src="/Ola.png"
                alt="Suzuki"
                width={36}
                height={36}
              />
            </div>
            <Link href="#" className="text-blue-500">
              Suzuki
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
