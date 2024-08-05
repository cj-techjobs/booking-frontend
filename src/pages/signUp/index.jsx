import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { useRouter } from "next/router";
import Flag from "react-world-flags";

function Login() {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    console.log("Signup:", { fullName, mobileNumber });
  };
  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen w-1/5 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full relative ">
        <>
          <h1 className="text-4xl font-semibold mb-4 justify-start text-red-500">
            Welcome
          </h1>
          <p className="mb-6 text-black font-medium">
            Create an account to get started
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label
                className="text-[#333230] text-sm font-bold ml-4"
                htmlFor="fullName"
              >
                FULL NAME
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-3 py-2 border rounded-xl mt-3"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Arya Utkarsh"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="text-[#333230] text-sm font-bold ml-4"
                htmlFor="mobileNumber"
              >
                MOBILE NUMBER
              </label>
              <div className="flex">
                <span className="flex items-center bg-white border border-gray-300 mt-3 rounded-l-xl pl-3 w-[100px]">
                  <Flag code="IN" className="w-5 h-5 mr-2" />
                  +91
                </span>
                <input
                  type="text"
                  id="mobileNumber"
                  className="w-full px-3  py-2 border rounded-r-xl mt-3"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="9876543210"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center my-8">
              <button
                type="submit"
                className="w-1/2 bg-black text-white py-2 rounded-xl"
              >
                Next
              </button>
            </div>
          </form>
        </>
        <div className="flex items-center mt-4 mb-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">
            OR CONTINUE WITH
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <div>
            <button className="bg-white border border-gray-300 py-2 px-4 rounded-full">
              <FcGoogle className="h-6 w-6" />
            </button>
            <p className="text-xs text-center">Google</p>
          </div>

          <div>
            <button className="bg-white border border-gray-300 py-2 px-4 rounded-full">
              <FaFacebookF className="h-6 w-6 text-blue-600" />
            </button>
            <p className="text-xs text-center">Facebook</p>
          </div>
          <div>
            {" "}
            <button className="bg-white border border-gray-300 py-2 px-4 rounded-full">
              <AiFillApple className="h-6 w-6 text-black" />
            </button>
            <p className="text-xs text-center">Apple</p>
          </div>
        </div>
        <p className="text-center pt-6">
          Already have an account?{" "}
          <a className="text-blue-500" onClick={handleLogin}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
