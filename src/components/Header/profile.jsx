import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useContext, useRef } from "react";
import profilephoto from "/src/assets/accountImages/profile.svg";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailIcon from "@mui/icons-material/Email";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SettingsIcon from "@mui/icons-material/Settings";
import orderIcon from "/src/assets/settingsModalSvg/order.svg";
import MessageIcon from "@mui/icons-material/Message";
import "react-toastify/dist/ReactToastify.css";

const Profile = ({ name, id }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const messageData = [
    {
      id: "1",
      name: "Aditya",
      message: "How are you ?",
      profileImg: profilephoto,
      inboxNumber: "2",
    },
    {
      id: "2",
      name: "Messie",
      message: "Order details",
      profileImg: profilephoto,
      inboxNumber: "0",
    },
    {
      id: "3",
      name: "Roman",
      message: "I like your products",
      profileImg: profilephoto,
      inboxNumber: "5",
    },
  ];

  return (
    <div>
      <div className="p-4 bg-white w-[420px]">
        <div className="flex gap-4 flex-row">
          <div
            className="relative w-fit rounded-full shadow-sm cursor-pointer"
            onClick={handleClick}
            aria-describedby={id}
          >
            <Image src={profilephoto} width={45} height={45} alt="profile" />
          </div>
          <div>
            <div className="text-gray-600 font-bold text-xl ">Welcome</div>
            <p className="text-gray-800 text-sm font-bold cursor-pointer">
              {name}
            </p>
          </div>
        </div>
        <div className="mt-4 cursor-pointer w-[382px] flex gap-4 border text-gray-500 rounded-full py-4 px-2 align-middle bg-[#FBFDFF] shadow-[0_5px_2px_0_rgba(87,159,255,0.25)]">
          <LocalOfferIcon className="ml-4" />
          <button>Sell / Post an Ad</button>
        </div>
        <div className="mt-4 cursor-pointer w-[382px] flex gap-4 bg-[#000852] text-white rounded-full py-4 px-2 align-middle">
          <EmailIcon className="ml-4" />
          <div className="font-bold">Inbox</div>
          <div className="px-1 absolute end-12 text-sm mt-0.5 rounded-md bg-gray-500">
            12
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <h2 className="text-gray-500 font-bold">Recents</h2>
          <h2
            className="text-red-500 cursor-pointer"
            onClick={() => router.push("/message")}
          >
            <RemoveRedEyeIcon /> View all
          </h2>
        </div>
        {messageData?.map((data) => (
          <div key={data.id} className="mt-4 flex justify-between">
            <div className="flex gap-4 items-center">
              <div className="relative w-fit rounded-full pt-1 shadow-sm cursor-pointer">
                <Image
                  src={data?.profileImg}
                  width={40}
                  height={40}
                  alt="profile"
                />
              </div>
              <div>
                <div className="font-bold">{data?.name}</div>
                <div className="text-gray-500 text-xs">{data?.message}</div>
              </div>
            </div>
            <div>
              {data.inboxNumber === "0" ? (
                ""
              ) : (
                <div className="rounded-full mt-1 w-fit px-1.5 py-[0.3px] absolute left-[380px] text-white text-xs bg-red-500">
                  {data?.inboxNumber}
                </div>
              )}
              {/* <div className="rounded-full w-fit px-1.5 absolute right-6 top-[272px] text-white text-xs bg-red-500">{data.inboxNumber}</div> */}
              <MessageIcon className="mr-3 mt-3 " />
            </div>
          </div>
        ))}
        <div className="mt-4 cursor-pointer w-[382px] flex gap-4 border text-gray-500 rounded-full py-4 px-2 align-middle bg-[#FBFDFF] shadow-[0_5px_2px_0_rgba(87,159,255,0.25)]">
          <Image
            src={orderIcon}
            className="ml-4"
            alt="order icon"
            width={25}
            height={25}
          />
          <button>My Orders</button>
        </div>
        <div
          onClick={() => router.push("/settings")}
          className="mt-4 cursor-pointer w-[382px] flex gap-4 border text-gray-500 rounded-full py-4 px-2 align-middle bg-[#FBFDFF] shadow-[0_5px_2px_0_rgba(87,159,255,0.25)]"
        >
          <SettingsIcon className="ml-4" />
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
