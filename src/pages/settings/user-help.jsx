import React ,{useContext} from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Modal from "/src/components/Modal.jsx";
import { GlobalContext } from "../api/context/context";


const Help = () => {
  const context = useContext(GlobalContext);
  return (
    <Modal isVisible={context?.helpModalOpen} onClose={() => context?.setHelpModalOpen(false)}>
      <div className="p-5">
        <div className="flex items-center justify-center">
          <div className="text-xl font-bold text-center">Help & Support</div>
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
  );
};

export default Help;
