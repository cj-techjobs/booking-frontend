"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import apple from "/src/assets/settingsModalSvg/apple.svg";
import rocketImage from "/src/assets/settingsModalSvg/rocket.svg";
import proMemeberSlider from "/src/assets/settingsModalSvg/promemberSlider.svg";
import Image2 from "/src/assets/accountImages/lock.svg";
import Image1 from "/src/assets/accountImages/profile.svg";
import Image3 from "/src/assets/accountImages/membership.svg";
import Image4 from "/src/assets/accountImages/location.svg";
import Image5 from "/src/assets/accountImages/help.svg";
import Image6 from "/src/assets/accountImages/payment.svg";
import Image7 from "/src/assets/accountImages/order.svg";
import profilephoto from "/src/assets/accountImages/profile.svg";
import emoji from "/src/assets/settingsModalSvg/finalEmoji.png";
import visa from "/src/assets/settingsModalSvg/visa.svg";
import upi from "/src/assets/settingsModalSvg/upi.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "/src/components/Modal.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { orange, red } from "@mui/material/colors";
import { GlobalContext, useData } from "../api/context/context";

const Account = () => {
  const context = useContext(GlobalContext);
  const router = useRouter();
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentConfirmModalOpen, setPaymentConfirmModalOpen] = useState(false);
  const [proMemebershipModalOpen, setProMembershipModalOpen] = useState(false);
  const [lastModalOpen, setLastModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [value, setValue] = useState("female");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const nameLocal = localStorage.getItem("fullName");
      const phone = localStorage.getItem("mobile Number");
      const passwordLocal = localStorage.getItem("password");
      const emailLocal = localStorage.getItem("email");
      const dob = localStorage.getItem("dob");

      setFullName(nameLocal);
      setPhoneNumber(phone);
      setPassword(passwordLocal);
      setEmail(emailLocal);
      setBirthdate(dob);
    }
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("mobile Number", phoneNumber);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    localStorage.setItem("dob", birthdate);
    setProfileModalOpen(false);
    context.setIsUpdateUser(!context.isUpdateUser);
  };

  const [profileSettings, setProfileSettings] = useState([
    {
      title: `Profile`,
      name: `Profile`,
      about: `Change name, email, phone, photos and phone number`,
      modalOpen: setProfileModalOpen,
      img: Image1,
    },
    {
      title: `Login & security`,
      name: `LoginAndSecurity`,
      about: `Edit login, name and mobile number`,
      modalOpen: setProfileModalOpen,
      img: Image2,
    },
    {
      title: `Premium Membership`,
      name: `Membership`,
      about: `View benefits and payment settings`,
      modalOpen: setMembershipModalOpen,
      img: Image3,
    },
    {
      title: `Your Addresses`,
      nmae: `Address`,
      about: `Edit addresses for orders and gifts`,
      img: Image4,
    },
    {
      title: `Help and Suppport`,
      name: `Help`,
      about: ``,
      modalOpen: setHelpModalOpen,
      img: Image5,
    },
    {
      title: `Payment options`,
      name: `PaymentOption`,
      about: `Edit or add payment methods`,
      modalOpen: setPaymentModalOpen,
      img: Image6,
    },
    {
      title: `Your orders`,
      name: `Orders`,
      about: `Track, return, or buy things again`,
      img: Image7,
    },
  ]);

  const membershipDataBenefits = [
    {
      id: "1",
      benefit: "Ad-free experience",
    },
    {
      id: "2",
      benefit: "Access to all features and functionalities",
    },
    {
      id: "3",
      benefit: "Priority customer support",
    },
    {
      id: "4",
      benefit: "Early access to new features and updates",
    },
  ];
  const membershipData = [
    {
      id: "1",
      value: "option1",
      version: "Pro",
      details: "Get the ultimate file management experience",
      price: "21.42",
    },
    {
      id: "2",
      value: "option2",
      version: "Standerd",
      details: "Unlock advanced features for professionals",
      price: "16.42",
    },
    {
      id: "3",
      value: "option3",
      version: "Starter",
      details: "Unlock additional features & more storage",
      price: "8.99",
    },
  ];

  const paymentConfirmDetail = [
    {
      id: "1",
      title: "Pro Membership",
      data: "$21.42",
    },
    {
      id: "2",
      title: "Billing",
      data: "Monthly",
    },
    {
      id: "3",
      title: "Method",
      data: "****** 2334",
    },
    {
      id: "4",
      title: "Discount",
      data: "$3.40",
    },
    {
      id: "5",
      title: "Total",
      data: "$19.02",
    },
  ];
  // membership modal slick settings
  var settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    auto: 100,
    infinite: true,
  };

  return (
    <>
      <div className="pt-10 h-[calc(100vh-80px)] container mx-auto">
        <h2 className="mb-6 text-2xl font-bold">Your Account</h2>
        <div className="grid grid-cols-3 gap-8">
          {profileSettings.map((m, i) => (
            <div
              key={i}
              onClick={() => m.modalOpen(true)}
              className="flex gap-4 border rounded-md py-4 cursor-pointer px-2 shadow-[0_5px_2px_0_rgba(255,233,228,1)]"
            >
              <div className=" flex ml-2">
                <Image width={50} height={50} src={m.img} alt="asd" />
              </div>
              <div className="">
                <h4 className="font-bold text-lg">{m.title}</h4>
                <p className="font-semibold">{m.about}</p>
              </div>
            </div>
          ))}
          {profileModalOpen && (
            <Modal
              isVisible={profileModalOpen}
              onClose={() => setProfileModalOpen(false)}
            >
              <div className="p-4">
                <div className="flex items-center justify-center">
                  <div className="text-2xl text-center">Settings</div>
                  <CloseRoundedIcon
                    className="absolute right-3"
                    onClick={() => setProfileModalOpen(false)}
                  />
                </div>
                <div className="justify-center items-center flex mt-5">
                  <div className="rounded-full h-7 w-7 flex items-center justify-center bg-red-500 absolute top-[60px] right-[150px]">
                    <BorderColorRoundedIcon
                      className="text-white"
                      fontSize="small"
                    />
                  </div>
                  <div className=" w-fit rounded-full border-4 border-gray-400 shadow-sm cursor-pointer">
                    <Image
                      src={profilephoto}
                      width={80}
                      height={80}
                      alt="profile"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <form className="gap-2 flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                      <label className="font-normal text-lg">Name</label>
                      <input
                        type="text"
                        className="py-2 bg-gray-100 appearance-none outline-none rounded-md ps-2"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-normal text-lg">Phone</label>
                      <input
                        type="text"
                        className="py-2 bg-gray-100 appearance-none outline-none rounded-md ps-2"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-normal text-lg">Email</label>
                      <input
                        type="email"
                        className="py-2 bg-gray-100 appearance-none outline-none rounded-md ps-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-normal text-lg">Password</label>
                      <input
                        type="password"
                        className="py-2 bg-gray-100 appearance-none outline-none rounded-md ps-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-normal text-lg">Birthday</label>
                      <input
                        type="text"
                        className="py-2 bg-gray-100 appearance-none outline-none rounded-md ps-2"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-red-500 py-2 mt-3 text-center text-white font-semibold w-full rounded-md"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </Modal>
          )}
          {helpModalOpen && (
            <Modal
              isVisible={helpModalOpen}
              onClose={() => setHelpModalOpen(false)}
            >
              <div className="p-5">
                <div className="flex items-center justify-center">
                  <div className="text-xl font-bold text-center">
                    Help & Support
                  </div>
                </div>
                <div>
                  <input
                    type="search"
                    placeholder="Describe your issue"
                    className="py-1.5 mt-4 rounded-md ps-7 appearance-none outline-none bg-gray-100 w-full"
                  />
                  <SearchRoundedIcon
                    fontSize="small"
                    className="absolute top-[84px] left-6 transform -translate-y-1/2 w-5 h-5"
                  />
                </div>
                <div className="mt-10">
                  <div className="font-bold">Popular</div>
                  <div className="flex gap-2 flex-col mt-3 text-blue-500">
                    <a href="#">Change or add an email address</a>
                    <a href="#">Reset your password</a>
                    <a href="#">Close your account</a>
                    <a href="#">Cancel subscription</a>
                    <a href="#">Visibility of shared posts</a>
                    <a href="#">Share profile with your network</a>
                  </div>
                </div>
              </div>
            </Modal>
          )}
          {membershipModalOpen && (
            <Modal
              isVisible={membershipModalOpen}
              onClose={() => setMembershipModalOpen(false)}
            >
              <div className="p-4">
                <div
                  onClick={() => setMembershipModalOpen(false)}
                  className="rounded-full w-7 h-7 bg-gray-500 absolute right-3 items-center justify-center z-50"
                >
                  <CloseRoundedIcon
                    fontSize="small"
                    className="ms-1 text-white"
                  />
                </div>
                <Slider {...settings}>
                  <div>
                    <div className="mt-7 flex flex-col items-center justify-center">
                      <Image
                        height={100.28}
                        width={110.86}
                        src={rocketImage}
                        alt=""
                      />
                      <div className="mt-2 text-base font-bold">
                        Unlock Premium Features
                      </div>
                      <div className="text-sm">
                        Enjoy exclusive features and the newest updates
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-7 flex flex-col items-center justify-center">
                      <Image
                        height={100.28}
                        width={110.86}
                        src={rocketImage}
                        alt=""
                      />
                      <div className="mt-2 text-base font-bold">
                        Unlock Premium Features
                      </div>
                      <div className="text-sm">
                        Enjoy exclusive features and the newest updates
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-7 flex flex-col mb-8 items-center justify-center">
                      <Image
                        height={100.28}
                        width={110.86}
                        src={rocketImage}
                        alt=""
                      />
                      <div className="mt-2 text-base font-bold">
                        Unlock Premium Features
                      </div>
                      <div className="text-sm">
                        Enjoy exclusive features and the newest updates
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-7 flex flex-col items-center justify-center">
                      <Image
                        height={100.28}
                        width={110.86}
                        src={rocketImage}
                        alt=""
                      />
                      <div className="mt-2 text-base font-bold">
                        Unlock Premium Features
                      </div>
                      <div className="text-sm">
                        Enjoy exclusive features and the newest updates
                      </div>
                    </div>
                  </div>
                </Slider>
                {membershipData.map((data) => (
                  <div
                    key={data.id}
                    className="p-4 mt-2 cursor-pointer rounded-xl border-2 border-orange-300"
                  >
                    <div className="flex justify-between items-center">
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <div className="flex items-center">
                          <FormControlLabel
                            type="radio"
                            control={
                              <Radio
                                sx={{
                                  "&.Mui-checked": {
                                    color: orange[500],
                                  },
                                }}
                              />
                            }
                            value={data.value}
                          />{" "}
                          <span className=" text-base mb-1">
                            {data.version}
                          </span>
                        </div>
                      </RadioGroup>
                      {data.id === "1" ? (
                        <div className="py-1 px-1 text-xs rounded-lg bg-yellow-400">
                          Recommend
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="text-lg mt-2 font-extrabold">
                      ${data.price} /month
                    </div>
                    <div className="mt-1 text-gray-400 text-sm">
                      {data.details}
                    </div>
                    <div className="mt-2 text-xs">
                      Details <ArrowForwardRoundedIcon fontSize="small" />
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => {
                    setMembershipModalOpen(false);
                    setProMembershipModalOpen(true);
                  }}
                  className="bg-red-500 py-2 mt-3 text-center text-white font-normal w-full rounded-md"
                >
                  Continue
                </button>
              </div>
            </Modal>
          )}
          {proMemebershipModalOpen && (
            <Modal
              isVisible={proMemebershipModalOpen}
              onClose={() => setProMembershipModalOpen(false)}
            >
              <div className="p-4">
                <div className="flex items-center justify-center">
                  <div
                    className="absolute left-5"
                    onClick={() => {
                      setProMembershipModalOpen(false);
                      setMembershipModalOpen(true);
                    }}
                  >
                    <ChevronLeftRoundedIcon />
                  </div>
                  <div className="text-lg text-center">Pro Membership</div>
                </div>
                <div>
                  <Slider {...settings}>
                    <div className="mb-10">
                      <div className="mt-7 w-[350px] p-2 flex flex-row items-center bg-gray-100 rounded-xl justify-center">
                        <div className="p-2">
                          <div className="mt-2 text-sm font-bold">
                            Managing Made Easy
                          </div>
                          <div className="text-xs">
                            Effortlessly manage, organise, and analyse your
                            files.
                          </div>
                        </div>
                        <Image height={80} width={108} src={proMemeberSlider} />
                      </div>
                    </div>
                    <div>
                      <div className="mt-7 w-[350px] p-2 flex flex-row items-center bg-gray-100 rounded-xl justify-center">
                        <div className="p-2">
                          <div className="mt-2 text-sm font-bold">
                            Managing Made Easy
                          </div>
                          <div className="text-xs">
                            Effortlessly manage, organise, and analyse your
                            files.
                          </div>
                        </div>
                        <Image height={80} width={108} src={proMemeberSlider} />
                      </div>
                    </div>
                    <div>
                      <div className="mt-7 w-[350px] p-2 flex flex-row items-center bg-gray-100 rounded-xl justify-center">
                        <div className="p-2">
                          <div className="mt-2 text-sm font-bold">
                            Managing Made Easy
                          </div>
                          <div className="text-xs">
                            Effortlessly manage, organise, and analyse your
                            files.
                          </div>
                        </div>
                        <Image height={80} width={108} src={proMemeberSlider} />
                      </div>
                    </div>
                    <div>
                      <div className="mt-7 w-[350px] p-2 flex flex-row items-center bg-gray-100 rounded-xl justify-center">
                        <div className="p-2">
                          <div className="mt-2 text-sm font-bold">
                            Managing Made Easy
                          </div>
                          <div className="text-xs">
                            Effortlessly manage, organise, and analyse your
                            files.
                          </div>
                        </div>
                        <Image height={80} width={108} src={proMemeberSlider} />
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="flex mt-2 justify-between">
                  <div className="text-lg">$21.42 /month</div>
                  <div className="py-1 px-1 text-xs rounded-lg bg-yellow-400">
                    Recommend
                  </div>
                </div>
                <div className="flex gap-4 text-gray-500 mt-4">
                  <LaptopMacRoundedIcon />
                  <div>Unlimited devices</div>
                </div>
                <div className="flex gap-4 text-gray-500 mt-2">
                  <BackupOutlinedIcon />
                  <div>25GB monthly</div>
                </div>
                <div className="flex gap-4 text-gray-500 mt-2">
                  <InsertDriveFileOutlinedIcon />
                  <div>300 MB per note</div>
                </div>
                <div className="py-6">
                  <div className="text-lg">The package also includes</div>
                </div>
                {membershipDataBenefits.map((data) => (
                  <div key={data.id} className="flex py-1 gap-4 text-gray-500">
                    <CheckRoundedIcon />
                    {data?.benefit}
                  </div>
                ))}
                <button
                  onClick={() => {
                    setProMembershipModalOpen(false);
                    setPaymentModalOpen(true);
                  }}
                  className="bg-red-500 py-2 text-lg mt-3 text-center text-white font-normal w-full rounded-md"
                >
                  Proceed with payment
                </button>
              </div>
            </Modal>
          )}
          {paymentModalOpen && (
            <Modal
              isVisible={paymentModalOpen}
              onClose={() => setPaymentModalOpen(false)}
            >
              <div className="p-4">
                <div className="flex items-center justify-center mb-4">
                  <div
                    className="absolute left-5 cursor-pointer"
                    onClick={() => {
                      setPaymentModalOpen(false);
                      setProMembershipModalOpen(true);
                    }}
                  >
                    <ChevronLeftRoundedIcon />
                  </div>
                  <div className="text-lg font-bold text-center">Payment</div>
                </div>
                <div className="py-3 px-3 flex ite bg-[#FFFAE1] mb-4 rounded-lg">
                  <VerifiedRoundedIcon className="text-[#9C7F00]" />
                  <div className="ms-2 text-sm">
                    A discount is applied for the first month
                  </div>
                </div>
                <div className="text-center rounded-xl p-6 mb-2 bg-[#FAFAFB]">
                  <div className="text-sm font-semibold">TOTAL</div>
                  <div className="text-[32px] font-bold mt-2">$19.02</div>
                  <div className="text-sm mt-1">
                    On 23/12/23, your plan will be renewed on its own. The
                    monthly cost will be $21.42
                  </div>
                </div>
                <div className="text-xl font-semibold mb-4">
                  Payment methods
                </div>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <div className="flex items-center p-2 py-3 border gap-4 cursor-pointer hover:border-red-500 border-gray-300 rounded-md">
                    <FormControlLabel
                      type="radio"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: red[400],
                            },
                          }}
                        />
                      }
                      value="visa"
                    />
                    <div className="absolute flex items-center gap-3 ms-6">
                      <Image
                        className="ms-2"
                        height={30}
                        width={30}
                        src={visa}
                        alt="visa"
                      />
                      <div className="text-sm">****** 2334</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 p-2 py-3 border gap-4 cursor-pointer hover:border-red-500 border-gray-300 rounded-md">
                    <FormControlLabel
                      type="radio"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: red[400],
                            },
                          }}
                        />
                      }
                      value="apple"
                    />
                    <div className="absolute flex items-center gap-3 ms-6">
                      <Image
                        className="ms-2"
                        height={30}
                        width={30}
                        src={apple}
                        alt="visa"
                      />
                      <div className="text-sm ">Apple Pay</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 p-2 py-4 border gap-4 cursor-pointer hover:border-red-500 border-gray-300 rounded-md">
                    <FormControlLabel
                      type="radio"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: red[400],
                            },
                          }}
                        />
                      }
                      value="upi"
                    />
                    <div className="absolute flex items-center gap-3 ms-6">
                      <Image
                        className="ms-2"
                        height={30}
                        width={30}
                        src={upi}
                        alt="visa"
                      />
                      <div className="text-sm">abc@okupi</div>
                    </div>
                  </div>
                </RadioGroup>
                <div className="text-[#6D31ED] mt-3 text-center text-lg mb-10">
                  + Add New Card
                </div>
                <button
                  onClick={() => {
                    setPaymentModalOpen(false);
                    setPaymentConfirmModalOpen(true);
                  }}
                  className="bg-red-500 py-2 text-lg mt-3 text-center text-white font-normal w-full rounded-md"
                >
                  Continue
                </button>
              </div>
            </Modal>
          )}
          {paymentConfirmModalOpen && (
            <Modal
              isVisible={paymentConfirmModalOpen}
              onClose={() => setPaymentConfirmModalOpen(false)}
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-10">
                  <div
                    className="absolute left-5 cursor-pointer"
                    onClick={() => {
                      setPaymentConfirmModalOpen(false);
                      setPaymentModalOpen(true);
                    }}
                  >
                    <ChevronLeftRoundedIcon />
                  </div>
                  <div className="text-lg font-bold text-center">Payment</div>
                </div>
                {paymentConfirmDetail.map((data) => (
                  <div
                    key={data.id}
                    className="flex items-center justify-between px-2 py-2"
                  >
                    <div className="text-sm text-gray-500 ">{data.title}</div>
                    <div className="text-lg ">{data.data}</div>
                  </div>
                ))}
                <div className="mt-36 flex">
                  <input type="checkbox" className="h-4 absolute w-4 mt-1.5" />
                  <span className="text-base ms-6">
                    By confirming your payment, you agree to our terms and
                    conditions.
                  </span>
                </div>
                <button
                  onClick={() => {
                    setPaymentConfirmModalOpen(false);
                    setLastModalOpen(true);
                  }}
                  className="bg-red-500 py-2 text-lg mt-3 text-center text-white font-normal w-full rounded-md"
                >
                  Continue
                </button>
              </div>
            </Modal>
          )}
          {lastModalOpen && (
            <Modal
              isVisible={lastModalOpen}
              onClose={() => setLastModalOpen(false)}
            >
              <div className="p-4 w-[390px]">
                <div className="flex justify-center mt-44 items-center">
                  <Image src={emoji} height={40} width={40} />
                </div>
                <div className="text-2xl font-bold text-center">
                  Welcome new member
                </div>
                <div className="text-sm px-8 py-2 mb-20 text-center">
                  Thank you for upgrading. Happy exploring and enjoy your Pro
                  membership to the fullest!
                </div>
                <button
                  onClick={() => {
                    router.push("/");
                  }}
                  className="bg-red-500 py-2 text-lg mt-3 text-center text-white font-normal w-full rounded-md"
                >
                  Start Exploring
                </button>
                <button
                  disabled
                  onClick={{}}
                  className="bg-red-300 py-2 text-lg mt-3 text-center text-white font-normal w-full rounded-md"
                >
                  Back to Home
                </button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default Account;
