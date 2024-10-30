import React from "react";
import styles from './Categories.module.css';
import BikeCard from "./BikeaCard";
import SideBar from "../SideBar/SideBar";

const products = [
  { id: 1, name: "Bike 1", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg" },
  { id: 2, name: "Bike 2", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg" },
  { id: 3, name: "Bike 3", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg"  },
  { id: 4, name: "Bike 4", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg"  },
  { id: 5, name: "Bike 4", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg"  },
  { id: 6, name: "Bike 4", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg"  },
  { id: 7, name: "Bike 4", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg"  },
  { id: 8, name: "Bike 4", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg"  },
  { id: 9, name: "Bike 4", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg"  },
  { id: 10, name: "Bike 4", price: "₹1,20,000", image: "/bikeImages/Bike1.jpg"  },
];

const Categories = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
       <SideBar/>
        <div className={styles.grid}>
          {products.map((product) => (
            <BikeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
