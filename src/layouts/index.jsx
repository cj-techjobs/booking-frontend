import React from "react";
import "../styles/globals.css";
import "../styles/globals.scss";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-white">
        <Header />
        <main className="h-full w-full bg-white">{children}</main>
      </div>
      {/* <html>
        <body className="h-full w-full bg-white flex justify-center">
          {children}
        </body>
      </html> */}
    </>
  );
}
