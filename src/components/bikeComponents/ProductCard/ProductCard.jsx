// components/ProductCard.js

import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai"; // Icons
import { IoMdAddCircleOutline } from "react-icons/io";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-content">
        <div className="rightContent">
          <h3>{product.title}</h3>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                color={i < product.rating ? "gold" : "#ddd"}
              />
            ))}
          </div>
        </div>
        <div className="leftContent">
          <div className="icon">
            <IoMdAddCircleOutline style={{width: 37, height: 38, color: '#565656'}}/>
          </div>
          <div className="price">
            <span>{`₹${product.price}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
