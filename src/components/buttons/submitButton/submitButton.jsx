import React from "react";

const SubmitButton = ({title , className}) => {
  return (
    <div>
      <div className="flex justify-center">
        <button
          type="submit"
          className={`w-1/2 bg-black text-white py-2 rounded-xl ${className}`}
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
