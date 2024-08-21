import React, { useState, useEffect, useContext } from "react";
import profilephoto from "/src/assets/accountImages/profile.svg";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import Image from "next/image";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { GlobalContext } from "../api/context/context";
import SettingsButton from "../../components/buttons/settingsButton/settingsButton";
import Modal from '/src/components/Modal.jsx'

const Profile = () => {
  const context = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let nameLocal = localStorage.getItem("fullName");
      let phone = localStorage.getItem("mobile_number");
      setFullName(nameLocal);
      setPhoneNumber(phone);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("mobile Number", phoneNumber);
    context?.setProfileModalOpen(false);
    context?.setIsUpdateUser(context?.isUpdateUser);
  };

  return (
    <div>
      <Modal
        isVisible={context?.profileModalOpen}
        onClose={() => context?.setProfileModalOpen(false)}
      >
        <div className="p-4">
          <div className="flex items-center justify-center">
            <div className="text-2xl text-center">Settings</div>
            <CloseRoundedIcon
              className="absolute right-3"
              onClick={() => context?.setProfileModalOpen(false)}
            />
          </div>
          <div className="justify-center items-center flex mt-5">
            <div className="rounded-full h-7 w-7 flex items-center justify-center bg-red-500 absolute top-[65px] right-[165px]">
              <BorderColorRoundedIcon className="text-white" fontSize="small" />
            </div>
            <div className=" w-fit rounded-full border-4 border-gray-400 shadow-sm cursor-pointer">
              <Image src={profilephoto} width={80} height={80} alt="profile" />
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
              <SettingsButton title={"Save Changes"} />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
