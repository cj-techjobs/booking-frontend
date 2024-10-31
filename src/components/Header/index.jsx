import React, { useState, useEffect, useContext, useRef } from "react";
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
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);

  const router = useRouter();
  const suggestionsRef = useRef();

  const suggestions = [
    "Sport accessories",
    "Sports Shoes",
    "Sports Technology",
    "Team Sports Gear",
    "Outdoor Sports Gear",
    "Sports Supplements",
    "Sports Books and DVDs",
    "Sports Memorabilia",
  ];

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSearchClick = () => {
    if (searchValue === "") {
      router.push("/search");
    }
  };

  const handleSearchChange = (event) => {
    const input = event.target.value;
    setSearchValue(input);
    setShowSuggestions(true);

    if (input.trim() !== "") {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setShowSuggestions(false);
    setSearchValue(suggestion);

    if (suggestion === "Sport accessories") {
      router.push(`/Sport/Sportaccessories`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const showSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    // <header className="bg-white sticky top-0 z-20 shadow-md">
    //   <div className="container mx-auto px-4 flex justify-between items-center">
    //     <div className="flex gap-8 items-center">
    //       <Link href="/">
    //         <Image src="/images/logo.svg" alt="six" width={150} height={40} />
    //       </Link>
    //       <select
    //         name="select"
    //         className="font-normal text-sm w-full border border-[#EFEFEF] my-2.5 bg-[#f7f6f6] rounded-2xl px-4 py-2 drop-shadow-md text-[#000000]"
    //       >
    //         <option value="Deoghar">Deoghar</option>
    //       </select>
    //     </div>

    //     <div className="relative w-1/2">
    //       <input
    //         type="search"
    //         className="rounded-lg border bg-white w-full drop-shadow-md py-2 px-10 outline-none"
    //         placeholder="Search"
    //         value={searchValue}
    //         onClick={handleSearchClick} // Redirect on click if input is empty
    //         onChange={handleSearchChange} // Show suggestions dynamically
    //       />
    //       <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
    //       {/* Clear Button */}
    //       {showSuggestions && filteredSuggestions.length > 0 && (
    //         <div
    //           ref={suggestionsRef}
    //           className="absolute top-full mt-1 w-full bg-white shadow-md rounded-lg z-10"
    //         >
    //           {filteredSuggestions.map((suggestion, index) => (
    //             <div
    //               key={index}
    //               className="p-2 cursor-pointer hover:bg-gray-100"
    //               onClick={() => handleSuggestionClick(suggestion)}
    //             >
    //               {suggestion}
    //             </div>
    //           ))}
    //         </div>
    //       )}
    //     </div>

    //     {!context?.isLoggedin ? (
    //       <div>
    //         <div className="text-gray-600 font-bold">New user?</div>
    //         <p
    //           className="ml-2 text-gray-800 font-bold text-2xl cursor-pointer"
    //           onClick={() => context?.setModalOpen(true)}
    //         >
    //           Login
    //         </p>
    //       </div>
    //     ) : (
    //       <div>
    //         <div className="text-gray-600 text-sm font-bold">Welcome</div>
    //         <p className="text-gray-800 font-bold text-xl">{context?.name}</p>
    //       </div>
    //     )}

    //     {!context?.isLoggedin ? (
    //       <div className="relative w-fit p-2 border border-black text-2xl rounded-full shadow-sm">
    //         <FaUser />
    //       </div>
    //     ) : (
    //       <div
    //         className="relative w-fit rounded-full shadow-sm cursor-pointer"
    //         onClick={handleClick}
    //         aria-describedby={id}
    //       >
    //         <Image src={profilephoto} width={45} height={40} alt="profile" />
    //       </div>
    //     )}

    //     <Popover
    //       id={id}
    //       open={open}
    //       anchorEl={anchorEl}
    //       onClose={handleClose}
    //       onClick={handleClose}
    //       anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    //       transformOrigin={{ vertical: "top", horizontal: "right" }}
    //     >
    //       <Profile name={context?.name} id={id} />
    //     </Popover>
    //   </div>
    //   <SignIn_signUp
    //     mobileNumber={mobileNumber}
    //     setMobileNumber={setMobileNumber}
    //     setToken={setToken}
    //   />
    //   <OtpModal mobileNumber={mobileNumber} token={token} />
    //   <ForgotPass
    //     mobileNumber={mobileNumber}
    //     setMobileNumber={setMobileNumber}
    //     setToken={setToken}
    //   />
    //   <NewPassword />
    //   <ToastContainer autoClose={2000} transition={Flip} />
    // </header>
    // <header className="bg-white sticky top-0 z-20 shadow-md">
    //   <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
    //     <div className="flex justify-center flex-row items-center lg:gap-8 w-full lg:w-auto mb-4 lg:mb-0">
    //       <Link href="/" className="flex-shrink-0 ">
    //           <Image src="/images/logo.svg" alt="six" width={80} height={10} />
    //       </Link>
    //       <select
    //         name="select"
    //         className="font-normal text-sm border border-[#EFEFEF] bg-[#f7f6f6] rounded-2xl px-4 py-2 drop-shadow-md text-[#000000] mt-2 lg:mt-0 lg:w-auto"
    //       >
    //         <option value="Deoghar">Deoghar</option>
    //       </select>
    //     </div>

    //     <div className="relative w-full lg:w-1/2 mb-4 lg:mb-0">
    //       <input
    //         type="search"
    //         className="rounded-lg border bg-white w-full drop-shadow-md py-2 px-10 outline-none"
    //         placeholder="Search"
    //         value={searchValue}
    //         onClick={handleSearchClick}
    //         onChange={handleSearchChange}
    //       />
    //       <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
    //       {showSuggestions && filteredSuggestions.length > 0 && (
    //         <div
    //           ref={suggestionsRef}
    //           className="absolute top-full mt-1 w-full bg-white shadow-md rounded-lg z-10"
    //         >
    //           {filteredSuggestions.map((suggestion, index) => (
    //             <div
    //               key={index}
    //               className="p-2 cursor-pointer hover:bg-gray-100"
    //               onClick={() => handleSuggestionClick(suggestion)}
    //             >
    //               {suggestion}
    //             </div>
    //           ))}
    //         </div>
    //       )}
    //     </div>

    //     <div className="flex items-center gap-4">
    //       {!context?.isLoggedin ? (
    //         <div className="text-center lg:text-left">
    //           <div className="text-gray-600 font-bold">New user?</div>
    //           <p
    //             className="ml-2 text-gray-800 font-bold text-lg cursor-pointer"
    //             onClick={() => context?.setModalOpen(true)}
    //           >
    //             Login
    //           </p>
    //         </div>
    //       ) : (
    //         <div className="text-center lg:text-left">
    //           <div className="text-gray-600 text-sm font-bold">Welcome</div>
    //           <p className="text-gray-800 font-bold text-xl">{context?.name}</p>
    //         </div>
    //       )}

    //       <div
    //         className="relative w-fit cursor-pointer"
    //         onClick={context?.isLoggedin ? handleClick : undefined}
    //         aria-describedby={id}
    //       >
    //         {context?.isLoggedin ? (
    //           <Image src={profilephoto} width={45} height={40} alt="profile" />
    //         ) : (
    //           <div className="p-2 border border-black text-2xl rounded-full shadow-sm">
    //             <FaUser />
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   <Popover
    //     id={id}
    //     open={open}
    //     anchorEl={anchorEl}
    //     onClose={handleClose}
    //     onClick={handleClose}
    //     anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    //     transformOrigin={{ vertical: "top", horizontal: "right" }}
    //   >
    //     <Profile name={context?.name} id={id} />
    //   </Popover>

    //   <SignIn_signUp
    //     mobileNumber={mobileNumber}
    //     setMobileNumber={setMobileNumber}
    //     setToken={setToken}
    //   />
    //   <OtpModal mobileNumber={mobileNumber} token={token} />
    //   <ForgotPass
    //     mobileNumber={mobileNumber}
    //     setMobileNumber={setMobileNumber}
    //     setToken={setToken}
    //   />
    //   <NewPassword />

    //   <ToastContainer autoClose={2000} transition={Flip} />
    // </header>
    <header className="bg-white sticky top-0 z-20 shadow-md w-full">
      <div className="mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="hidden lg:flex justify-center flex-row items-center gap-8 w-full lg:w-auto mb-4 lg:mb-0">
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/logo.svg" alt="logo" width={80} height={10} />
          </Link>
          <select
            name="select"
            className="font-normal text-sm border border-[#EFEFEF] bg-[#f7f6f6] rounded-2xl px-4 py-2 drop-shadow-md text-[#000000] mt-2 lg:mt-0 lg:w-auto"
          >
            <option value="Deoghar">Deoghar</option>
          </select>
        </div>

        {/* Search bar for larger screens */}
        <div className="relative hidden lg:flex w-full lg:w-1/2 mb-4 lg:mb-0">
          <input
            type="search"
            className="rounded-lg border bg-white w-full drop-shadow-md py-2 px-10 outline-none"
            placeholder="Search"
            value={searchValue}
            onClick={handleSearchClick}
            onChange={handleSearchChange}
          />
          <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div
              ref={suggestionsRef}
              className="absolute top-full mt-1 w-full bg-white shadow-md rounded-lg z-10"
            >
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {!context?.isLoggedin ? (
            <div className="text-center lg:text-left">
              <div className="text-gray-600 font-bold">New user?</div>
              <p
                className="ml-2 text-gray-800 font-bold text-lg cursor-pointer"
                onClick={() => context?.setModalOpen(true)}
              >
                Login
              </p>
            </div>
          ) : (
            <div className="text-center lg:text-left">
              <div className="text-gray-600 text-sm font-bold">Welcome</div>
              <p className="text-gray-800 font-bold text-xl">{context?.name}</p>
            </div>
          )}

          <div
            className="relative w-fit cursor-pointer"
            onClick={context?.isLoggedin ? handleClick : undefined}
            aria-describedby={id}
          >
            {context?.isLoggedin ? (
              <Image src={profilephoto} width={45} height={40} alt="profile" />
            ) : (
              <div className="p-2 border border-black text-2xl rounded-full shadow-sm">
                <FaUser />
              </div>
            )}
          </div>
        </div>

        {/* Toggle button for smaller screens */}
      </div>

      {/* Toggle menu for mobile screens */}
      <div className="lg:hidden flex justify-end w-full">
        <button
          className="lg:hidden text-gray-500 p-4"
          onClick={() => setHeaderOpen(!headerOpen)}
        >
          {headerOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Hidden menu for smaller screens */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-1/2 h-screen bg-white shadow-md z-30 transition-transform duration-300 ${headerOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4">
          <button
            className="text-gray-500 text-2xl"
            onClick={() => setHeaderOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center w-full">
          <Link href="/" className="flex-shrink-0 mb-4">
            <Image src="/images/logo.svg" alt="logo" width={80} height={10} />
          </Link>
          <select
            name="select"
            className="font-normal text-sm border border-[#EFEFEF] bg-[#f7f6f6] rounded-2xl px-4 py-2 drop-shadow-md text-[#000000] mb-4"
          >
            <option value="Deoghar">Deoghar</option>
          </select>

          {/* Mobile search bar */}
          <div className="relative w-[150px] md:w-[250px] mb-4 lg:mb-0">
            <input
              type="search"
              className="rounded-lg border bg-white w-full drop-shadow-md py-2 px-10 outline-none"
              placeholder="Search"
              value={searchValue}
              onClick={handleSearchClick}
              onChange={handleSearchChange}
            />
            <IoSearchOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>

          {!context?.isLoggedin ? (
            <div className="py-2">
              <p
                className="text-gray-800 font-bold cursor-pointer"
                onClick={() => context?.setModalOpen(true)}
              >
                Login
              </p>
            </div>
          ) : (
            <div className="py-2 text-gray-800 font-bold">{context?.name}</div>
          )}

          <div className="py-2">
            {context?.isLoggedin ? (
              <Image src={profilephoto} width={45} height={40} alt="profile" />
            ) : (
              <div className="p-2 border border-black text-2xl rounded-full shadow-sm">
                <FaUser />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>

  );
};

export default React.memo(Header);
