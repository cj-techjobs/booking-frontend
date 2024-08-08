"use client";

import React, { useEffect, useState } from "react";
// import lockImg from '/src/assets/images/lock.svg'
import Image from "next/image";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import rocketImage from "/src/assets/rocket.svg";
import proMemeberSlider from '/src/assets/promemberSlider.svg'
import Image2 from "/src/assets/accountImages/lock.svg";
import Image1 from "/src/assets/accountImages/profile.svg";
import Image3 from "/src/assets/accountImages/membership.svg";
import Image4 from "/src/assets/accountImages/location.svg";
import Image5 from "/src/assets/accountImages/help.svg";
import Image6 from "/src/assets/accountImages/payment.svg";
import Image7 from "/src/assets/accountImages/order.svg";
import profilephoto from "/src/assets/accountImages/profile.svg";
import Modal from "./Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { version } from "os";

const Account = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Detials:", { name, password, email, phoneNumber, birthdate });
    setProfileModalOpen(false);
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
      modalOpen: setHelpModalOpen,
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
      img: Image6,
    },
    {
      title: `Your orders`,
      name: `Orders`,
      about: `Track, return, or buy things again`,
      img: Image7,
    },
  ]);

  const membershipData = [
    {
      id: "1",
      version: "Pro",
      details: "Get the ultimate file management experience",
      price: "21.42",
    },
    {
      id: "2",
      version: "Standerd",
      details: "Unlock advanced features for professionals",
      price: "16.42",
    },
    {
      id: "3",
      version: "Starter",
      details: "Unlock additional features & more storage",
      price: "8.99",
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
      <div className="pt-10 container mx-auto">
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                  {/* <CloseRoundedIcon
                    className="absolute right-3"
                    onClick={() => setProfileModalOpen(false)}
                  /> */}
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
              <div className="p-4 w-[390px]">
                <div
                  onClick={() => setMembershipModalOpen(false)}
                  className="rounded-full w-7 h-7 bg-gray-500 absolute right-3 items-center justify-center "
                >
                  <CloseRoundedIcon
                    fontSize="small"
                    className="ms-1 text-white"
                  />
                </div>
                <Slider {...settings}>
                  <div>
                    <div className="mt-7 flex flex-col items-center justify-center">
                      <Image height={100.28} width={110.86} src={rocketImage} />
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
                      <Image height={112.28} width={134.86} src={rocketImage} />
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
                      <Image height={112.28} width={134.86} src={rocketImage} />
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
                      <Image height={112.28} width={134.86} src={rocketImage} />
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
                    className="p-4 mt-2 w-[350px] cursor-pointer rounded-xl border-2 border-orange-300"
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          className="w-5 h-5 border-orange-300 accent-orange-300"
                        />{" "}
                        <span className="ms-2 text-base mb-1">
                          {data.version}
                        </span>
                      </div>
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
                    setPaymentModalOpen(true);
                  }}
                  className="bg-red-500 py-2 mt-3 text-center text-white font-normal w-full rounded-md"
                >
                  Continue
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
                <div className="flex items-center justify-center">
                <div
                className="absolute left-5"
                  onClick={() => {
                    setPaymentModalOpen(false);
                    setMembershipModalOpen(true);
                  }}
                >
                  <ChevronLeftRoundedIcon />
                </div>
                  <div className="text-lg text-center">Pro Membership</div>
                </div>
                <Slider {...settings}>
                  <div>
                    <div className="mt-7 flex flex-row items-center bg-gray-100 rounded-xl justify-center">
                      <div>
                      <div className="mt-2 text-sm font-bold">
                      Managing Made Easy
                      </div>
                      <div className="text-xs">
                      Effortlessly manage, organise, and analyse your files.
                      </div>
                      <Image height={80} width={108} src={proMemeberSlider} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-7 flex flex-col items-center justify-center">
                      <Image height={112.28} width={134.86} src={rocketImage} />
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
                      <Image height={112.28} width={134.86} src={rocketImage} />
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
                      <Image height={112.28} width={134.86} src={rocketImage} />
                      <div className="mt-2 text-base font-bold">
                        Unlock Premium Features
                      </div>
                      <div className="text-sm">
                        Enjoy exclusive features and the newest updates
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default Account;
