// Modal.js
import React, { useEffect, useRef } from "react";

const Modal = ({ isVisible, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 rounded shadow-md overflow-y-auto">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-md relative w-1/5"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
