import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useContext, useRef } from "react";
import logo from "../../../public/images/logo.svg";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { IoSearchOutline } from "react-icons/io5";

import Modal from "../Modal";
import { Popover } from "@mui/material";
import profilephoto from "/src/assets/accountImages/profile.svg";
import { usePathname } from "next/navigation";
import { GlobalContext } from "../../pages/api/context/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./profile";
import OtpModal from "./otpModal";
import SignIn_signUp from "./signIn_signUp";
import ForgotPass from "./forgotPassword";
import NewPassword from "./newPassword";

function Header() {
  const context = useContext(GlobalContext);
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [token, setToken] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [forgotPassModal, setForgotPassModal] = useState(false);
  const [newPassModal, setNewPassModal] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let name = localStorage.getItem("fullName");
      setName(name);
    }
  }, [context]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <header className="bg-white sticky top-0 shadow-md">
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
            onClick={() => router.push("/search")}
          />
          <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
        {pathname === "/login" ? (
          <div className="">
            <div className="text-gray-600 font-bold">New user ?</div>
            <p
              className="ml-2 text-gray-800 font-bold text-2xl cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              Login
            </p>
          </div>
        ) : (
          <div className="">
            <div className="text-gray-600 text-sm font-bold">Welcome</div>
            <p className="text-gray-800 font-bold text-xl">{name}</p>
          </div>
        )}
        {pathname === "/login" ? (
          <div>
            <div className="relative w-fit p-2 border border-black text-2xl rounded-full shadow-sm">
              <FaUser />
            </div>
          </div>
        ) : (
          <div>
            <div
              className="relative w-fit rounded-full shadow-sm cursor-pointer"
              onClick={handleClick}
              aria-describedby={id}
            >
              <Image src={profilephoto} width={45} height={45} alt="profile" />
            </div>
          </div>
        )}
        {modalOpen && (
          <Modal isVisible={modalOpen} onClose={() => setModalOpen(false)}>
            <SignIn_signUp
              setModalOpen={setModalOpen}
              setIsSignUp={setIsSignUp}
              setForgotPassModal={setForgotPassModal}
              setOtpModalOpen={setOtpModalOpen}
              mobileNumber={mobileNumber}
              setMobileNumber={setMobileNumber}
              setToken={setToken}
            />
          </Modal>
        )}
        {otpModalOpen && (
          <Modal
            isVisible={otpModalOpen}
            onClose={() => setOtpModalOpen(false)}
          >
            <OtpModal
              mobileNumber={mobileNumber}
              isSignUp={isSignUp}
              setIsSignUp={setIsSignUp}
              token={token}
              setOtpModalOpen={setOtpModalOpen}
              setNewPassModal={setNewPassModal}
            />
          </Modal>
        )}
        {forgotPassModal && (
          <Modal
            isVisible={forgotPassModal}
            onClose={() => setForgotPassModal(false)}
          >
            <ForgotPass
              mobileNumber={mobileNumber}
              setMobileNumber={setMobileNumber}
              setToken={setToken}
              setOtpModalOpen={setOtpModalOpen}
              setModalOpen={setModalOpen}
              setForgotPassModal={setForgotPassModal}
            />
          </Modal>
        )}
        {newPassModal && (
          <Modal
            isVisible={newPassModal}
            onClose={() => setNewPassModal(false)}
          >
            <NewPassword
              setModalOpen={setModalOpen}
              setNewPassModal={setNewPassModal}
            />
          </Modal>
        )}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Profile name={name} id={id} />
        </Popover>
      </div>
      <ToastContainer />
    </header>
  );
}
export default Header;
