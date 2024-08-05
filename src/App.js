import "./index.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
// import SignUp from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route
            path="/"
            element={
              <h1 className="text-4xl font-bold text-blue-500">Hello!!</h1>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
