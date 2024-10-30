import React, { useState } from "react";
import "./Modal.css"; // Import the CSS file
import FilterModal from "../FilterModal/FilterModal";
import Image from "next/image";

const Modal = ({ showModal, onClose }) => {
  // if (!showModal) return null;
  // const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Move useState here

  if (!showModal) return null;
  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-wrapper">
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
        <div className="modal-content">
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <img
                src="/Sitelogo.png"
                alt="Six Logo"
                style={{ height: "49px", width: "71px" }}
              /> */}
              <Image
                src="/Sitelogo.png"
                alt="Six Logo"
                width={71}
                height={49}
              />
              <p style={{ fontSize: "24px", fontWeight: "400" }}>Bikes</p>
            </div>
          </div>
          <div className="titleWrapper">
            <div className="left">
              <div className="border"></div>
              <div className="modal-section-title">Select Modal</div>
            </div>
            <div className="right">
              <FilterModal show={modalVisible} handleClose={() => setModalVisible(false)} />
            </div>
          </div>

          {/* Example of an item */}
          <div className="modal-item">
            <div className="modal-image-wrapper">
              <img
                className="modal-image"
                src="/Bike.jpg"
                alt="Bike 1 model 1"
              />
            </div>
            <div className="modal-info-wrapper">
              <h3 className="modal-item-title">Bike 1 model 1</h3>
              <ul className="modal-features">
                <li className="modal-feature">Feature 1</li>
                <li className="modal-feature">Feature 2</li>
                <li className="modal-feature">Feature 3</li>
              </ul>
            </div>
            <div className="modal-price">Rs. xx - xx</div>
          </div>

          <div className="modal-item">
            <div className="modal-image-wrapper">
              <img
                className="modal-image"
                src="/Bike.jpg"
                alt="Bike 1 model 1"
              />
            </div>
            <div className="modal-info-wrapper">
              <h3 className="modal-item-title">Bike 1 model 1</h3>
              <ul className="modal-features">
                <li className="modal-feature">Feature 1</li>
                <li className="modal-feature">Feature 2</li>
                <li className="modal-feature">Feature 3</li>
              </ul>
            </div>
            <div className="modal-price">Rs. xx - xx</div>
          </div>

          <div className="modal-item">
            <div className="modal-image-wrapper">
              <img
                className="modal-image"
                src="/Bike.jpg"
                alt="Bike 1 model 1"
              />
            </div>
            <div className="modal-info-wrapper">
              <h3 className="modal-item-title">Bike 1 model 1</h3>
              <ul className="modal-features">
                <li className="modal-feature">Feature 1</li>
                <li className="modal-feature">Feature 2</li>
                <li className="modal-feature">Feature 3</li>
              </ul>
            </div>
            <div className="modal-price">Rs. xx - xx</div>
          </div>

          <div className="modal-item">
            <div className="modal-image-wrapper">
              <img
                className="modal-image"
                src="/Bike.jpg"
                alt="Bike 1 model 1"
              />
            </div>
            <div className="modal-info-wrapper">
              <h3 className="modal-item-title">Bike 1 model 1</h3>
              <ul className="modal-features">
                <li className="modal-feature">Feature 1</li>
                <li className="modal-feature">Feature 2</li>
                <li className="modal-feature">Feature 3</li>
              </ul>
            </div>
            <div className="modal-price">Rs. xx - xx</div>
          </div>

          {/* Duplicate the modal-item block for more items */}
        </div>
      </div>
    </>
  );
};

export default Modal;
