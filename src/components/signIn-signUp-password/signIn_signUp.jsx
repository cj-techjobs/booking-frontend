import React, { useState, useEffect, useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import Flag from "react-world-flags";
import { AiFillApple } from "react-icons/ai";
import { GlobalContext } from "../../pages/api/context/context";
import { signIn, signUp } from "../../pages/api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "../buttons/submitButton/submitButton";
import Modal from "../Modal";

const AuthForm = ({
  isLogin,
  mobileNumber,
  password,
  setMobileNumber,
  setPassword,
  onSubmit,
  onForgotPassword,
}) => (
  <form onSubmit={onSubmit}>
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
      {isLogin && (
        <div
          className="text-blue-500 flex justify-end cursor-pointer"
          onClick={onForgotPassword}
        >
          Forgot password?
        </div>
      )}
    </div>
    <div className="my-8">
      <SubmitButton title={"Next"} />
    </div>
  </form>
);

const SocialButtons = () => (
  <div className="flex justify-center space-x-4">
    <SocialButton icon={<FcGoogle className="h-6 w-6" />} label="Google" />
    <SocialButton
      icon={<FaFacebookF className="h-6 w-6 text-blue-600" />}
      label="Facebook"
    />
    <SocialButton
      icon={<AiFillApple className="h-6 w-6 text-black" />}
      label="Apple"
    />
  </div>
);

const SocialButton = ({ icon, label }) => (
  <div>
    <button className="bg-white border border-gray-300 py-2 px-4 rounded-full">
      {icon}
    </button>
    <p className="text-xs text-center">{label}</p>
  </div>
);

const SignIn_signUp = ({ mobileNumber, setMobileNumber, setToken }) => {
  const context = useContext(GlobalContext);
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const mobile = localStorage.getItem("mobile_number");
      setMobileNumber(mobile || "");
    }
  }, [context, setMobileNumber]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("mobile_number", mobileNumber);
    try {
      if (isLogin) {
        const response = await signIn(mobileNumber, password);
        if (response?.data?.authToken) {
          localStorage.setItem("authintication_token", response.data.authToken);
          toast.success("Login Successfully");
          context?.setModalOpen(false);
          router.push("/");
        } else {
          throw new Error("Token not received in login response");
        }
      } else {
        const response = await signUp(mobileNumber, password);
        if (response?.data?.verifyToken) {
          setToken(response.data.verifyToken);
          localStorage.setItem("verification_token", response.data.verifyToken);
          localStorage.setItem("user_id", response.data.id);
          toast.success("OTP sent successfully");
          context?.setIsSignUp(true);
          context?.setModalOpen(false);
          context?.setOtpModalOpen(true);
        } else {
          throw new Error("Token not received in signUp response");
        }
      }
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <Modal
      isVisible={context?.modalOpen}
      onClose={() => context?.setModalOpen(false)}
    >
      <div className="bg-white p-4 w-full relative rounded-2xl">
        <h1 className="text-5xl font-semibold mb-3 justify-start text-red-500">
          {isLogin ? "Login" : "Welcome"}
        </h1>
        <p className="mb-6 text-black font-medium">
          {isLogin
            ? "Welcome back, enter your login credentials below"
            : "Create an account to get started"}
        </p>
        <AuthForm
          isLogin={isLogin}
          mobileNumber={mobileNumber}
          password={password}
          setMobileNumber={setMobileNumber}
          setPassword={setPassword}
          onSubmit={handleSubmit}
          onForgotPassword={() => {
            context?.setModalOpen(false);
            context?.setForgotPassModal(true);
          }}
        />
        <div className="flex items-center mt-4 mb-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">
            OR CONTINUE WITH
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <SocialButtons />
        <p className="text-center pt-6">
          {isLogin ? (
            <>
              Don{"'"}t have an account?{" "}
              <a
                href="#"
                className="text-blue-500"
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-500"
                onClick={() => setIsLogin(true)}
              >
                Log in
              </a>
            </>
          )}
        </p>
      </div>
    </Modal>
  );
};

export default SignIn_signUp;
