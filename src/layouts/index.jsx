import React from "react";
import "../styles/globals.css";
// import "../src/styles/globals.css";

export default function Layout({ children }) {
  return (
    <>
      {/* <div className="h-full flex-wrap">Header</div> */}
      <main className="h-full w-full bg-gray-100 flex justify-center">
        {children}
      </main>
    </>
  );
}
