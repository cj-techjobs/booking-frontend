import React, { useState, useEffect, useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import Flag from "react-world-flags";
import { AiFillApple } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn, signUp } from "../../pages/api/api";
import { GlobalContext } from "../../pages/api/context/context";


const SignIn_signUp = ({setModalOpen , setOtpModalOpen , mobileNumber, setMobileNumber , setToken}) => {
  const context = useContext(GlobalContext);

  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [name, setName] = useState("");
//   const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let name = localStorage.getItem("fullName");
      setName(name);
    }
  }, [context]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("fullName", fullName);
    try {
      if (isLogin) {
        const response = await signIn(mobileNumber, password);
        if (response && response?.data?.authToken) {
          localStorage.setItem(
            "authintication_token",
            response?.data?.authToken
          );
        } else {
          toast.error("Error while login");
          throw new Error("Token not received in login response");
        }
        setModalOpen(false);
        router.push("/");
      } else {
        const response = await signUp(mobileNumber, password);
        if (response && response?.data?.verifyToken) {
          setToken(response?.data?.verifyToken);
          localStorage.setItem(
            "verification_token",
            response?.data?.verifyToken
          );
          localStorage.setItem("user_id", response?.data?.id);
        } else {
          throw new Error("Token not received in signUp response");
        }
        setModalOpen(false);
        setOtpModalOpen(true);
      }
      context.setIsUpdateUser(!context.isUpdateUser);
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div>
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
              Don&apos;t have an account?{" "}
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
                  className="text-[#333230] text-sm font-bold ml-4 mt-2"
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
    </div>
  );
};

export default SignIn_signUp;
