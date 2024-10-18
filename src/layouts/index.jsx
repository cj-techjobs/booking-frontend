import React from "react";
import "../styles/globals.css";
import "../styles/globals.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-white w-full min-h-screen">
        {children}
      </div>
    </>
  );
}
