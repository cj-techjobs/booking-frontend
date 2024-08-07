import React from "react";
import "../styles/globals.css";
import "../styles/globals.scss";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <>
        <div className="bg-white">
        {children}
        </div>
    </>
  );
}
