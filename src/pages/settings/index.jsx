"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import Image2 from "/src/assets/accountImages/lock.svg";
import Image1 from "/src/assets/accountImages/profile.svg";
import Image3 from "/src/assets/accountImages/membership.svg";
import Image4 from "/src/assets/accountImages/location.svg";
import Image5 from "/src/assets/accountImages/help.svg";
import Image6 from "/src/assets/accountImages/payment.svg";
import Image7 from "/src/assets/accountImages/order.svg";
import emoji from "/src/assets/settingsModalSvg/finalEmoji.png";
import Modal from "/src/components/Modal.jsx";
import { useRouter } from "next/navigation";
import SettingsButton from "../../components/buttons/settingsButton/settingsButton";
import { GlobalContext } from "../api/context/context";
import Profile from "./user-profile";
import Payment from "./payment";
import Membership from "./select-membership";
import Help from "./user-help";
import PaymentConfirmation from "./payment-confirmation";
import ProMembership from "./pro-membership";
import Youraddresses from "./youraddresses";

const Account = () => {
  const router = useRouter();
  const context = useContext(GlobalContext);
  const [profileSettings, setProfileSettings] = useState([
    {
      title: `Profile`,
      name: `Profile`,
      about: `Change name, email, phone, photos and phone number`,
      modalOpen: context?.setProfileModalOpen,
      img: Image1,
    },
    {
      title: `Login & security`,
      name: `LoginAndSecurity`,
      about: `Edit login, name and mobile number`,
      modalOpen: context?.setProfileModalOpen,
      img: Image2,
    },
    {
      title: `Premium Membership`,
      name: `Membership`,
      about: `View benefits and payment settings`,
      modalOpen: context?.setMembershipModalOpen,
      img: Image3,
    },
    {
      title: `Your Addresses`,
      nmae: `Address`,
      about: `Edit addresses for orders and gifts`,
      modalOpen: context?.setYouraddresses,
      img: Image4,
    },
    {
      title: `Help and Suppport`,
      name: `Help`,
      about: ``,
      modalOpen: context?.setHelpModalOpen,
      img: Image5,
    },
    {
      title: `Payment options`,
      name: `PaymentOption`,
      about: `Edit or add payment methods`,
      modalOpen: context?.setPaymentModalOpen,
      img: Image6,
    },
    {
      title: `Your orders`,
      name: `Orders`,
      about: `Track, return, or buy things again`,
      img: Image7,
    },
  ]);

  return (
    <>
      <div className="pt-10 container mx-auto">
        <h2 className="mb-6 text-2xl font-bold">Your Account</h2>
        <div className="md:grid md:grid-cols-2 grid grid-cols-1 lg:grid lg:grid-cols-3 gap-8 px-4">
          {profileSettings.map((m, i) => (
            <div
              key={i}
              onClick={() => {
                if (typeof m.modalOpen === 'function') {
                  m.modalOpen(true); // Call the modal function only if it exists
                }
              }}
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
          {context?.lastModalOpen && (
            <Modal
              isVisible={context?.lastModalOpen}
              onClose={() => context?.setLastModalOpen(false)}
            >
              <div className="p-4">
                <div className="flex justify-center mt-44 items-center">
                  <Image src={emoji} height={40} width={50} alt="happy emoji" />
                </div>
                <div className="text-2xl font-bold text-center">
                  Welcome new member
                </div>
                <div className="text-sm px-8 py-2 mb-20 text-center">
                  Thank you for upgrading. Happy exploring and enjoy your Pro
                  membership to the fullest!
                </div>
                <SettingsButton
                  title={"Start Exploring"}
                  click={() => {
                    router.push("/");
                  }}
                />
                <SettingsButton title={"Back to Home"} click={""} />
              </div>
            </Modal>
          )}

          <Profile />
          <Payment />
          <Membership />
          <Help />
          <PaymentConfirmation />
          <ProMembership />
          <Youraddresses />
        </div>
      </div>
    </>
  );
};

export default Account;
