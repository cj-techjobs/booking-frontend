import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const messageData = [
    {
      id: "1",
      name: "Aditya",
      message: "How are you?",
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

  const ProfileButton = ({ icon, text, extraClasses, onClick }) => (
    <div
      className={`mt-4 cursor-pointer w-[382px] flex gap-4 rounded-full py-4 px-2 align-middle ${extraClasses}`}
      onClick={onClick}
    >
      {icon}
      <div className="font-bold">{text}</div>
    </div>
  );

  return (
    <div className="p-4 bg-white w-[420px]">
      <div className="flex gap-4">
        <div
          className="relative w-fit rounded-full shadow-sm cursor-pointer"
          onClick={handleClick}
          aria-describedby={id}
        >
          <Image src={profilephoto} width={45} height={45} alt="profile" />
        </div>
        <div>
          <div className="text-gray-600 font-bold text-xl">Welcome</div>
          <p className="text-gray-800 text-sm font-bold cursor-pointer">
            {name}
          </p>
        </div>
      </div>

      <ProfileButton
        icon={<LocalOfferIcon className="ml-4" />}
        text="Sell / Post an Ad"
        extraClasses="border text-gray-500 bg-[#FBFDFF] shadow-[0_5px_2px_0_rgba(87,159,255,0.25)]"
      />

      <ProfileButton
        icon={<EmailIcon className="ml-4" />}
        text="Inbox"
        extraClasses="bg-[#000852] text-white"
      >
        <div className="px-1 absolute end-12 text-sm mt-0.5 rounded-md bg-gray-500">12</div>
      </ProfileButton>

      <div className="mt-4 flex justify-between">
        <h2 className="text-gray-500 font-bold">Recents</h2>
        <h2
          className="text-red-500 cursor-pointer flex items-center"
          onClick={() => router.push("/message")}
        >
          <RemoveRedEyeIcon className="mr-1" /> View all
        </h2>
      </div>

      {messageData.map(({ id, name, message, profileImg, inboxNumber }) => (
        <div key={id} className="mt-4 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="relative w-fit rounded-full pt-1 shadow-sm cursor-pointer">
              <Image src={profileImg} width={40} height={40} alt="profile" />
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-gray-500 text-xs">{message}</div>
            </div>
          </div>
          <div className="relative flex items-center">
            {inboxNumber !== "0" && (
              <div className="rounded-full w-fit px-1.5 py-0.5 text-white text-xs bg-red-500 absolute -right-10 top-1">
                {inboxNumber}
              </div>
            )}
            <MessageIcon className="mr-3" />
          </div>
        </div>
      ))}

      <ProfileButton
        icon={<Image src={orderIcon} className="ml-4" alt="order icon" width={25} height={25} />}
        text="My Orders"
        extraClasses="border text-gray-500 bg-[#FBFDFF] shadow-[0_5px_2px_0_rgba(87,159,255,0.25)]"
        onClick={() => router.push("/orders")}
      />

      <ProfileButton
        icon={<SettingsIcon className="ml-4" />}
        text="Settings"
        extraClasses="border text-gray-500 bg-[#FBFDFF] shadow-[0_5px_2px_0_rgba(87,159,255,0.25)]"
        onClick={() => router.push("/settings")}
      />
    </div>
  );
};

export default Profile;
