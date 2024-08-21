import React,{useContext} from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import SettingsButton from "../../components/buttons/settingsButton/settingsButton";
import Modal from "/src/components/Modal.jsx";
import { GlobalContext } from "../api/context/context";

const PaymentConfirmation = () => {
  const context = useContext(GlobalContext);

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

  return (
    <Modal
      isVisible={context?.paymentConfirmModalOpen}
      onClose={() => context?.setPaymentConfirmModalOpen(false)}
    >
      <div className="p-8">
        <div className="flex items-center justify-center mb-10">
          <div
            className="absolute left-5 cursor-pointer"
            onClick={() => {
              context?.setPaymentConfirmModalOpen(false);
              context?.setPaymentModalOpen(true);
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
            By confirming your payment, you agree to our terms and conditions.
          </span>
        </div>
        <SettingsButton
          title={"Continue"}
          click={() => {
            context?.setPaymentConfirmModalOpen(false);
            context?.setLastModalOpen(true);
          }}
        />
      </div>
    </Modal>
  );
};

export default PaymentConfirmation;
