import React from 'react';
import Flag from 'react-world-flags';
import { FaAngleLeft } from 'react-icons/fa6';
import { forgotPassword } from '../../pages/api/api';
import { toast } from 'react-toastify';
import SubmitButton from '../buttons/submitButton/submitButton';

const ForgotPass = ({
  mobileNumber,
  setMobileNumber,
  setForgotPassModal,
  setOtpModalOpen,
  setModalOpen,
  setToken
}) => {
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword(mobileNumber);
      if (response && response.data) {
        const token = response?.data;
        setToken(token);
        localStorage.setItem('resetPass_token', token);
        localStorage.setItem('mobile_number', mobileNumber);
        toast.success("OTP sent successfully")
        setForgotPassModal(false);
        setOtpModalOpen(true);
      } else {
        throw new Error('Unexpected response structure');
      }
    } catch (error) {
      console.error('Failed to request OTP:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center text-2xl text-center mb-4">
        <div
          className="cursor-pointer"
          onClick={() => {
            setForgotPassModal(false);
            setModalOpen(true);
          }}
        >
          <FaAngleLeft />
        </div>
        <div className="flex-1 text-center">
          Forgot <span className="text-red-500">Password</span>
        </div>
      </div>
      <div className="text-center mb-4">Enter your registered phone number</div>
      <form onSubmit={handleForgotPassword}>
        <div className="flex mb-3">
          <span className="flex items-center bg-white border border-gray-300 rounded-l-xl pl-3 w-[100px]">
            <Flag code="IN" className="w-5 h-5 mr-2" /> +91
          </span>
          <input
            type="text"
            id="mobileNumber"
            className="w-full px-3 py-2 border rounded-r-xl"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="9876543210"
            required
          />
        </div>
        <SubmitButton title={"Get OTP"} />
      </form>
    </div>
  );
};

export default ForgotPass;
