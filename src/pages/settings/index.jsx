"use client";

import React, { useEffect, useState } from "react";
// import lockImg from '/src/assets/images/lock.svg'
import Image from "next/image";
import Image2 from '/src/assets/accountImages/lock.svg'
import Image1 from '/src/assets/accountImages/profile.svg'
import Image3 from '/src/assets/accountImages/membership.svg'
import Image4 from '/src/assets/accountImages/location.svg'
import Image5 from '/src/assets/accountImages/help.svg'
import Image6 from '/src/assets/accountImages/payment.svg'
import Image7 from '/src/assets/accountImages/order.svg'
const Account = () => {
  const [profileSettings, setProfileSettings] = useState([]);

  useEffect(() => {
    setProfileSettings([
      {
        title: `Profile`,
        about: `Change name, email, phone, photos and phone number`,
        img: Image1     
      },
      {
        title: `Login & security`,
        about: `Edit login, name and mobile number`,
        img: Image2 
      },
      {
        title: `Premium Membership`,
        about: `View benefits and payment settings`,
        img: Image3      
      },
      {
        title: `Your Addresses`,
        about: `Edit addresses for orders and gifts`,
        img: Image4      
      },
      {
        title: `Help and Suppport`,
        about: ``,
        img: Image5      
      },
      {
        title: `Payment options`,
        about: `Edit or add payment methods`,
        img: Image6      
      },
      {
        title: `Your orders`,
        about: `Track, return, or buy things again`,
        img: Image7      
      },
    ]);
  }, []);
  return (
    <>
      <div className="pt-10 container mx-auto">
      <h2 className="mb-6 text-2xl font-bold">Your Account</h2>
      <div className="grid grid-cols-3 gap-8">
        {profileSettings.map((m, i) => (
          <div key={i} className="flex gap-4 border rounded-md py-4 px-2 shadow-[0_5px_2px_0_rgba(255,233,228,1)]">
            <div className=" flex ml-2"><Image width={50} height={50} src={m.img} alt="asd"/></div>
            <div className="">
              <h4 className="font-bold text-lg">{m.title}</h4>
              <p className="font-semibold">{m.about}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

    </>
  );
};

export default Account;
