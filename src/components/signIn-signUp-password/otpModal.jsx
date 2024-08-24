import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../../pages/api/context/context";
import "react-toastify/dist/ReactToastify.css";
import {
  verifyOtp,
  resendSignUpOtp,
  verifyForgotPasswordOtp,
} from "../../pages/api/api";
import { useRouter } from "next/navigation";
import Modal from "../Modal";

const OtpModal = ({ mobileNumber, token }) => {
  const context = useContext(GlobalContext);
  const router = useRouter();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const timerId = useRef(null);
  const inputRefs = useRef([]);

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      if (timeLeft > 0) {
        try {
          const response = context?.isSignUp
            ? await verifyOtp({ mobileNumber, otp: otpCode, token })
            : await verifyForgotPasswordOtp({
                mobileNumber,
                otp: otpCode,
                token,
              });
          if (response) {
            toast.success("OTP verified successfully!");
            context?.setOtpModalOpen(false);
            context?.isSignUp
              ? context?.setIsSignUp(false)
              : context?.setNewPassModal(true);
            if (context?.isSignUp) context?.setModalOpen(true);
            context?.setIsLogin(true);
          }
        } catch (error) {
          toast.error("Invalid OTP! Please check the code and try again.");
        }
      } else {
        toast.error("OTP has expired. Please request a new one.");
      }
    } else {
      toast.error("Please enter a 6-digit OTP");
    }
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    if (canResend) {
      try {
        await resendSignUpOtp(mobileNumber, localStorage.getItem("user_id"));
        toast.success("OTP resent successfully!");
        setOtp(Array(6).fill(""));
        inputRefs.current[0]?.focus();
        startTimer();
      } catch (error) {
        toast.error(
          `Error: ${error.message || "An unexpected error occurred"}`
        );
      }
    } else {
      toast.error("Cannot resend code. Time has expired.");
    }
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerId.current);
  }, []);

  const startTimer = () => {
    setTimeLeft(120);
    setCanResend(false);
    clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId.current);
          setCanResend(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handleInputChange = (index, event) => {
    const value = event.target.value.slice(0, 1);
    setOtp(otp.map((input, i) => (i === index ? value : input)));

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Modal
      isVisible={context?.otpModalOpen}
      onClose={() => context?.setOtpModalOpen(false)}
    >
      <div className="p-4">
        <h1 className="text-3xl text-center text-red-500 mb-4">
          <span className="text-black">Verify</span> O.T.P
        </h1>
        <p className="text-center mb-2">
          O.T.P has been sent to +91{" "}
          <span id="number" className="text-red-500">
            {mobileNumber}
          </span>
        </p>
        <div className="otp-input flex justify-center">
          {otp.map((input, index) => (
            <input
              key={index}
              type="number"
              min="0"
              max="9"
              className="border-2 border-black appearance-none rounded-md text-center mx-2 py-2"
              value={input}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => e.key === "Backspace" && handleBackspace(index)}
              ref={(el) => (inputRefs.current[index] = el)}
              required
            />
          ))}
        </div>
        <div className="flex justify-center mt-3">
          <button
            className="px-6 mb-2 py-1.5 text-xl bg-black rounded-lg text-white"
            onClick={handleSubmitOtp}
          >
            Verify
          </button>
        </div>
        <div className="resend-text">
          Didn{"'"}t receive the OTP?
          <span
            className={`resend-link px-2 ${
              timeLeft > 0 ? "text-grey cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={timeLeft <= 0 ? handleResendOtp : undefined}
          >
            Resend OTP
          </span>
          <span id="timer" className="text-red-500">
            {timeLeft > 0
              ? `(${minutes}:${seconds.toString().padStart(2, "0")})`
              : "Code expired"}
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default OtpModal;
