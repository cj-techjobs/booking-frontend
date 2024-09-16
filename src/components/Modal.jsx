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
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 rounded shadow-md overflow-y-auto">
    //   <div
    //     ref={modalRef}
    //     className="bg-white rounded-2xl shadow-md relative lg:w-1/3 md:w-1/2 w-[400px] xl:w-1/4 2xl:w-1/5"
    //   >
    //     {children}
    //   </div>
    // </div>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 rounded shadow-md overflow-y-auto">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-md relative max-w-full max-h-full p-4  w-[400px] 2xl:w-1/5 overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
