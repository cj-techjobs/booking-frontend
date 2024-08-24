import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { IoSearchOutline } from "react-icons/io5";
import { Popover } from "@mui/material";
import profilephoto from "/src/assets/accountImages/profile.svg";
import { GlobalContext } from "../../pages/api/context/context";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./profile";
import OtpModal from "../signIn-signUp-password/otpModal";
import SignIn_signUp from "../signIn-signUp-password/signIn_signUp";
import ForgotPass from "../signIn-signUp-password/forgotPassword";
import NewPassword from "../signIn-signUp-password/newPassword";

const Header = () => {
  const context = useContext(GlobalContext);
  const [mobileNumber, setMobileNumber] = useState("");
  const [token, setToken] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <header className="bg-white sticky top-0 z-20 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link href="/">
            <Image src="/images/logo.svg" alt="six" width={150} height={40} />
          </Link>
          <select
            name="select"
            className="font-normal text-sm w-full border border-[#EFEFEF] my-2.5 bg-[#f7f6f6] rounded-2xl px-4 py-2 drop-shadow-md text-[#000000]"
          >
            <option value="Deoghar">Deoghar</option>
          </select>
        </div>

        <div className="relative w-1/2">
          <input
            type="search"
            className="rounded-lg border bg-white w-full drop-shadow-md py-2 px-10 outline-none"
            placeholder="Search"
            onClick={() => router.push("/search")}
          />
          <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>

        {!context?.isLoggedin ? (
          <div>
            <div className="text-gray-600 font-bold">New user?</div>
            <p
              className="ml-2 text-gray-800 font-bold text-2xl cursor-pointer"
              onClick={() => context?.setModalOpen(true)}
            >
              Login
            </p>
          </div>
        ) : (
          <div>
            <div className="text-gray-600 text-sm font-bold">Welcome</div>
            <p className="text-gray-800 font-bold text-xl">{context?.name}</p>
          </div>
        )}

        {!context?.isLoggedin ? (
          <div className="relative w-fit p-2 border border-black text-2xl rounded-full shadow-sm">
            <FaUser />
          </div>
        ) : (
          <div
            className="relative w-fit rounded-full shadow-sm cursor-pointer"
            onClick={handleClick}
            aria-describedby={id}
          >
            <Image src={profilephoto} width={45} height={40} alt="profile" />
          </div>
        )}

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Profile name={context?.name} id={id} />
        </Popover>
      </div>
      <SignIn_signUp
        mobileNumber={mobileNumber}
        setMobileNumber={setMobileNumber}
        setToken={setToken}
      />
      <OtpModal mobileNumber={mobileNumber} token={token} />
      <ForgotPass
        mobileNumber={mobileNumber}
        setMobileNumber={setMobileNumber}
        setToken={setToken}
      />
      <NewPassword />
      <ToastContainer autoClose={2000} transition={Flip} />
    </header>
  );
};

export default React.memo(Header);
