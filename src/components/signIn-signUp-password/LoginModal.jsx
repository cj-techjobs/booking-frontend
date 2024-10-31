// components/LoginModal.js
"use client";
import { useState } from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Genos } from 'next/font/google';
import { Inria_Serif } from 'next/font/google';
import { useGlobalContext } from "../../pages/api/context/context";

const inriaSerif = Inria_Serif({
    subsets: ['latin'],
    weight: '400', // Regular weight
});

const genos = Genos({
    subsets: ['latin'],
    weight: '400', // Regular weight
});

const LoginModal = ({ isOpen, onClose }) => {
    const { isLogin, setIsLogin, handleSignIn, handleSignUp } = useGlobalContext();
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    if (!isOpen) return null;

    // Handle form submission for login or signup
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error before submission
        try {
            if (isLogin) {
                // Attempt to sign in
                await handleSignIn(mobileNumber, password);
            } else {
                // Attempt to sign up
                await handleSignUp(mobileNumber, password);
            }
            setMobileNumber("");
            setPassword("");
            onClose(); // Close the modal on successful action
        } catch (err) {
            setError(err.message); // Display error if sign-in/sign-up fails
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-3/4 max-w-sm h-[600px] p-8 rounded-lg shadow-lg relative">
                {/* Header */}
                <h2 className={`text-[40px] font-bold ${inriaSerif.className} text-[#FF4545]`}>
                    {isLogin ? "Login" : "Welcome"}
                </h2>

                <p className={`text-[20px] font-medium text-gray-600 mt-2 ${genos.className}`}>
                    {isLogin ? "Welcome back, enter your login credentials below" : "Create an account to get started"}
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className={`block text-md font-semibold text-gray-700 ${genos.className}`}>Mobile Number</label>
                        <input
                            type="text"
                            placeholder="9876543210"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-red-500"
                        />
                    </div>

                    <div>
                        <label className={`block text-md font-semibold text-gray-700 ${genos.className}`}>Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 outline-none"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="w-3/4 h-12 bg-black text-white rounded-md font-semibold flex items-center justify-center">
                            {isLogin ? "Next" : "Sign Up"}
                        </button>
                    </div>
                </form>

                {/* Footer Links */}
                <p className="text-sm text-center mt-6">
                    {isLogin ? (
                        <>
                            Don’t have an account?{" "}
                            <span onClick={() => setIsLogin(false)} className="text-blue-500 font-semibold cursor-pointer">
                                Sign up
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <span onClick={() => setIsLogin(true)} className="text-blue-500 font-semibold cursor-pointer">
                                Log in
                            </span>
                        </>
                    )}
                </p>

                {/* Social Login */}
                <div className={`flex items-center mt-8 ${genos.className}`}>
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-sm text-gray-500">OR CONTINUE WITH</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-center mt-4 space-x-6 text-2xl">
                    <FaGoogle className="text-red-500 cursor-pointer" />
                    <FaFacebook className="text-blue-600 cursor-pointer" />
                    <FaApple className="text-black cursor-pointer" />
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default LoginModal;
