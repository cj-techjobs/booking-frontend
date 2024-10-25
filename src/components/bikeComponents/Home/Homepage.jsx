import React from "react";
import styles from "./home.module.css";
const Homepage = () => {
  const categories = [
    { id: 1, label: "Cars", image: "/bikeImages/car.png", link: "/cars" },
    { id: 2, label: "Bikes", image: "/bikeImages/bike.png", link: "/bikes" },
    { id: 3, label: "Property", image: "/bikeImages/prop.png", link: "/property" },
    { id: 4, label: "Appliances", image: "/bikeImages/Appliance.png", link: "/appliances" },
    { id: 5, label: "Books", image: "/bikeImages/books.png", link: "/books" },
    { id: 6, label: "Furniture", image: "/bikeImages/furn.png", link: "/furniture" },
    { id: 7, label: "Clothing", image: "bikeImages/clot.png", link: "/clothing" },
    { id: 8, label: "Free Auctions", image: "/bikeImages/auction.png", link: "/auctions" },
    { id: 9, label: "Jobs", image: "/bikeImages/jobs.png", link: "/jobs" },
    { id: 10, label: "Movies & Events", image: "/bikeImages/movies-image.png", link: "/movies" },
    { id: 11, label: "Electronics", image: "/bikeImages/electronics-image.png", link: "/electronics" },
    { id: 12, label: "Vacation", image: "/bikeImages/vacation-image.png", link: "/vacation" },
  ];
  
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
          SHOP WHAT YOU LIKE USING{" "}
          <span className={styles.categoryText}>CATEGORIES</span>
        </h2>
        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category}>
              <a href={category.link}>
                <img
                  src={category.image}
                  alt={category.label}
                  className={styles.image}
                />
              </a>
            </div>
          ))}
        </div>
  
        {/* Section 3 */}
        <div className={styles.section_3}>
          <div className={styles.product_banner}>
            <img src="/bikeImages/product_Banner.png" />
            <div className={styles.overlay}></div>
            <p className={styles.overlayText}>Best Product At Lowest Price</p>
          </div>
  
          <div className={styles.quick_accessWrapper}>
            <p className={styles.quick_accessText}>Quick Access</p>
            <div className={styles.quick_access}>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/setting.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/setting.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/notification.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/pricetag.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/box.svg" alt="" />
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/bikeImages/user.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Homepage;
