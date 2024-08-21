import React, { useState, useContext, useEffect } from "react";
import { resetPassword } from "../../pages/api/api";
import { toast } from "react-toastify";
import Modal from "../Modal";
import { GlobalContext } from "../../pages/api/context/context";

const NewPassword = () => {
  const context = useContext(GlobalContext);
    const [passOne, setPassOne] = useState("");
    const [passTwo, setPassTwo] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  
    useEffect(() => {
      setIsPasswordMatch(passOne === passTwo && passOne.length > 0);
    }, [passOne, passTwo]);
  
    const handlePasswordChange = async (e) => {
      e.preventDefault();
  
      if (!isPasswordMatch) {
        toast.error("Passwords do not match or are empty.");
        return;
      }
  
      const mobileNumber = localStorage.getItem("mobile_number");
      try {
        const response = await resetPassword(mobileNumber, passTwo);
        if (response && response.message) {
          toast.success('Password reset successfully!');
          context?.setNewPassModal(false);
          context?.setModalOpen(true);
        } else {
          throw new Error("Unexpected response structure");
        }
      } catch (error) {
        toast.error("Error during password reset.");
        console.error("Error during password reset:", error);
      }
    };
  
  return (
    <Modal
    isVisible={context?.newPassModal}
    onClose={() => context?.setNewPassModal(false)}
  >
    <div className="p-4">
    <div className="text-center text-2xl">
      Create <span className="text-red-500">New Password</span>
    </div>
    <form onSubmit={handlePasswordChange}>
      <div id="form" className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="passOne">New Password</label>
          <input
            type="password"
            id="passOne"
            placeholder="Password"
            value={passOne}
            onChange={(e) => setPassOne(e.target.value)}
            className="outline-none border-2 border-black px-2 rounded-lg py-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="passTwo">Confirm Password</label>
          <input
            type="password"
            id="passTwo"
            placeholder="Confirm Password"
            value={passTwo}
            onChange={(e) => setPassTwo(e.target.value)}
            className="outline-none border-2 border-black px-2 rounded-lg py-2"
          />
        </div>
      </div>
      <div id="footer" className="flex justify-center">
        <button
          id="footerText"
          disabled={!isPasswordMatch}
          className={`w-1/2 bg-black text-white py-2 rounded-xl cursor-pointer mt-2 ${!isPasswordMatch ? 'opacity-35' : ''}`}
          type="submit"
        >
          Continue to Sign In
        </button>
      </div>
    </form>
  </div>
  </Modal>
  );
};

export default NewPassword;
