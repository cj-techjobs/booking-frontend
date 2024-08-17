import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect, useContext, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { verifyOtp, resendSignUpOtp } from "../../pages/api/api";
import { useRouter } from "next/navigation";

const OtpModal = ({ mobileNumber, token , setOtpModalOpen}) => {
  const router = useRouter();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(true);
  const timerDisplay = useRef(null);
  const inputRefs = useRef([]);

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    const Otp = otp.join("");
    if (otp.length === 6) {
      if (timeLeft > 0) {
        try {
          const response = await verifyOtp({
            mobileNumber: mobileNumber,
            otp: Otp,
            token: token,
          });
          if(response){
            toast.success("OTP verified successfully!");
            setOtpModalOpen(false);
            router.push("/");
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
    const userId = localStorage.getItem("user_id");
    if (canResend) {
      try {
        const response = await resendSignUpOtp(mobileNumber, userId);
        console.log(response, "Resend OTP DATA");
        toast.success("OTP resent successfully!!");
      } catch (error) {
        toast.error(
          "Error: " + (error.message || "An unexpected error occurred")
        );
      }
      startTimer();
      setOtp(Array(6).fill(""));
      inputRefs.current[0].focus();
    } else {
      alert("Cannot resend code. Time has expired.");
    }
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerId.current) clearInterval(timerId.current);
    };
  }, []);

  const handleInputChange = (index, event) => {
    const value = event.target.value.slice(0, 1);
    setOtp(otp.map((input, i) => (i === index ? value : input)));

    if (value.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };
  const timerId = useRef(null);

  const startTimer = () => {
    setTimeLeft(120);
    setCanResend(true);
    if (timerId.current) clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerId.current);
          setCanResend(true);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
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
              onKeyDown={(e) => handleInputKeyDown(index, e)}
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
          Didn{"'"}t receive the code?
          {timeLeft > 0 ? (
            <span
              className="resend-link px-2"
              style={{ cursor: "not-allowed", color: "grey" }}
            >
              Resend Code
            </span>
          ) : (
            <span
              className="resend-link px-2 cursor-pointer"
              onClick={handleResendOtp}
            >
              Resend Code
            </span>
          )}
          <span id="timer" className="text-red-500">
            {timeLeft > 0
              ? `(${minutes}:${seconds.toString().padStart(2, "0")})`
              : "Code expired"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
