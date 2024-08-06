"use client";

import React, { useEffect, useState } from "react";

const Account = () => {
  const [profileSettings, setProfileSettings] = useState([]);

  useEffect(() => {
    setProfileSettings([
      {
        title: `Profile`,
        about: `Change name, email, phone, photos and phone number`,
      },
      {
        title: `Login & security`,
        about: `Edit login, name and mobile number`,
      },
      {
        title: `Premium Membership`,
        about: `View benefits and payment settings`,
      },
      {
        title: `Your Addresses`,
        about: `Edit addresses for orders and gifts`,
      },
      {
        title: `Help and Suppport`,
        about: ``,
      },
      {
        title: `Payment options`,
        about: `Edit or add payment methods`,
      },
      {
        title: `Your orders`,
        about: `Track, return, or buy things again`,
      },
    ]);
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Your Account</h2>
      <div className="grid grid-cols-3 gap-8">
        {profileSettings.map((m, i) => (
          <div className="flex gap-4 rounded-md py-4 px-2 shadow-[0_5px_2px_0_rgba(255,233,228,1)]">
            <div className="min-w-16 h-16 border rounded-full"></div>
            <div className="">
              <h4 className="font-bold">{m.title}</h4>
              <p>{m.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
