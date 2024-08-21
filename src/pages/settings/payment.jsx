import React, { useState ,useContext } from "react";
import Image from "next/image";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import apple from "/src/assets/settingsModalSvg/apple.svg";
import visa from "/src/assets/settingsModalSvg/visa.svg";
import upi from "/src/assets/settingsModalSvg/upi.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { red } from "@mui/material/colors";
import SettingsButton from "../../components/buttons/settingsButton/settingsButton";
import Modal from '/src/components/Modal.jsx'
import { GlobalContext } from "../api/context/context";

const Payment = () => {
  const context = useContext(GlobalContext);
  const [value, setValue] = useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Modal
    isVisible={context?.paymentModalOpen}
    onClose={() => context?.setPaymentModalOpen(false)}
  >
      <div className="p-4">
        <div className="flex items-center justify-center mb-4">
          <div
            className="absolute left-5 cursor-pointer"
            onClick={() => {
              context?.setPaymentModalOpen(false);
              context?.setProMembershipModalOpen(true);
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
            On 23/12/23, your plan will be renewed on its own. The monthly cost
            will be $21.42
          </div>
        </div>
        <div className="text-xl font-semibold mb-4">Payment methods</div>
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
        <SettingsButton
          title={"Continue"}
          click={() => {
            context?.setPaymentModalOpen(false);
            context?.setPaymentConfirmModalOpen(true);
          }}
        />
      </div>
    </Modal>
  );
};

export default Payment;
