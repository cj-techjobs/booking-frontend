import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/images/logo.svg";
import { FaFacebookF, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { IoSearchOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Flag from "react-world-flags";
import Modal from "../Modal";
import { AiFillApple } from "react-icons/ai";

function Header() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { mobileNumber, password });
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link href="/">
            <Image src={logo} alt="Emerge" className="w-20 h-full" />
          </Link>
          <div className="">
            <select
              name="select"
              // value="Deoghar"
              className="font-normal text-sm w-full border-[1px] border-[#EFEFEF] my-2.5 bg-[#f7f6f6] rounded-2xl px-4 py-2 drop-shadow-md text-[#000000]"
            >
              <option value="Deoghar">Deoghar</option>
            </select>
          </div>
        </div>

        <div className="relative w-1/2">
          <input
            type="search"
            className="rounded-lg border bg-white w-full drop-shadow-md py-2 px-10 outline-none"
            placeholder="Search"
          />
          <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
        <div className="">
          <div className="text-gray-600 font-bold">New user ?</div>
          <p
            className="ml-2 text-gray-800 font-bold text-2xl cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            Login
          </p>
        </div>
        <div
          className="relative w-fit bg-black p-2 rounded-full shadow-sm cursor-pointer"
          onClick={() => {}}
        >
          <FaUser className="text-white w-5 h-5" />
        </div>
      </div>

      {modalOpen && (
        <Modal isVisible={modalOpen} onClose={() => setModalOpen(false)}>
          {/* <div className="bg-white p-4 w-full relative rounded-2xl">
            <>
              <h1 className="text-5xl font-semibold mb-3 justify-start text-red-500">
                Login
              </h1>
              <p className="mb-6 text-black font-medium">
                Welcome back, enter your login <br /> credentials below
              </p>
              <form onSubmit={handleSubmit}>
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
                      className="w-full px-3 py-2 border rounded-r-xl mt-3"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="9876543210"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="text-[#333230] text-sm font-bold ml-4"
                    htmlFor="password"
                  >
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-xl mt-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    required
                  />
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
              <p className="text-center">
                Don&apos;t have an account?
                <a href="#" className="text-blue-500" onClick={handleSignUp}>
                  Sign up
                </a>
              </p>
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
                <button className="bg-white border border-gray-300 py-2 px-4 rounded-full">
                  <AiFillApple className="h-6 w-6 text-black" />
                </button>
                <p className="text-xs text-center">Apple</p>
              </div>
            </div>
          </div> */}
          <div className="bg-white p-4 w-full relative rounded-2xl">
            {isLogin ? (
              <>
                <h1 className="text-5xl font-semibold mb-3 justify-start text-red-500">
                  Login
                </h1>
                <p className="mb-6 text-black font-medium">
                  Welcome back, enter your login <br /> credentials below
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="text-[#333230] text-sm font-bold ml-4"
                      htmlFor="mobileNumber"
                    >
                      MOBILE NUMBER
                    </label>
                    <div className="flex">
                      <span className="flex items-center bg-white border border-gray-300 mt-3 rounded-l-xl pl-3 w-[100px]">
                        <Flag code="IN" className="w-5 h-5 mr-2" /> +91
                      </span>
                      <input
                        type="text"
                        id="mobileNumber"
                        className="w-full px-3 py-2 border rounded-r-xl mt-3"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="9876543210"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 ">
                    <label
                      className="text-[#333230] text-sm font-bold ml-4"
                      htmlFor="password"
                    >
                      PASSWORD
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border rounded-xl mt-3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      required
                    />
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
                <p className="text-center">
                  Don&apos;t have an account?
                  <a
                    href="#"
                    className="text-blue-500"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign up
                  </a>
                </p>
              </>
            ) : (
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
                        <Flag code="IN" className="w-5 h-5 mr-2" /> +91
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
            )}
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
            {!isLogin && (
              <p className="text-center pt-6">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-500"
                  onClick={() => setIsLogin(true)}
                >
                  Log in
                </a>
              </p>
            )}
          </div>
        </Modal>
      )}
    </header>
  );
}

export default Header;
