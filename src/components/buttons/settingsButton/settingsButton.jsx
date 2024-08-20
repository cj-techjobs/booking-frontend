import React from "react";

const SettingsButton = ({title , click}) => {
  return (
    <div>
      <button
        type="submit"
        className="bg-red-500 py-2 mt-3 text-center text-white font-semibold w-full rounded-md"
        onClick={click}
      >
        {title}
      </button>
    </div>
  );
};

export default SettingsButton;
