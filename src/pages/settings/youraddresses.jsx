import React, { useContext } from "react";
import Modal from "/src/components/Modal.jsx";
import { GlobalContext } from "../api/context/context";
// import imageas from '../../assets/settingsModalSvg/imageas.png';
import imageas from '../../assets/settingsModalSvg/imageas.png'
import Clock from '../../assets/settingsModalSvg/Clock.png';
import Vector from '../../assets/settingsModalSvg/Vector.png';
import Deliveryfast  from '../../assets/settingsModalSvg/Deliveryfast.png';
import Image from "next/image";
const Youraddresses = () => {
  const context = useContext(GlobalContext);
  return (
    <Modal isVisible={context?.youraddresses} onClose={() => context?.setYouraddresses(false)}>
      <div className="">
        <div className="p-5 flex flex-col items-center justify-center">
          <div className="text-[18px] font-medium text-center">Estimated delivery time</div>
          <div className="text-[18px] font-medium text-center">3-4 days</div>
        </div>
        <div>
          <Image src={imageas} className="" alt="images" />
        </div>
        <div className="p-5 ">
          <div className="font-bold">Delivery Tracking</div>
          <div className="flex gap-2 flex-col mt-3">
            <div className="flex items-center gap-[0.5rem]">
            <Image alt="images" src={Clock} width={20} height={20} />
              <h1 className="text-[#9095A0]">Order Placed</h1>
            </div>
           <div className=" p-1 flex flex-col">
           <Image alt="images" src={Vector} className="mb-[5px]" width={7} height={7} />
            <Image alt="images" src={Vector} className="mb-[5px]" width={7} height={7} />
            <Image alt="images" src={Vector} className="mb-[9px]" width={7} height={7} />

            <Image alt="images" src={Vector} className="mb-[5px]" width={7} height={7} />
            <Image alt="images" src={Vector} className="mb-[5px]" width={7} height={7} />
            <Image alt="images" src={Vector} className="" width={7} height={7} />

           </div>

           <div className="flex items-center mb-[35px] gap-[0.5rem]">
            <Image alt="images" src={Deliveryfast } width={20} height={20} />
              <div>
              <h1 className=" text-[14px] font-normal text-[#9095A0]">In Transit</h1>
              <p className=" font-normal text-[#000000] text-[8px]">Tracking id #4651418463</p>
              </div>
            </div>
            <div className="flex items-center p-[2px] gap-[0.5rem]">
            <Image alt="images" src={Deliveryfast } width={20} height={20} />
              <div>
              <h1 className=" text-[14px] font-normal text-[#9095A0]">Deliverd</h1>
              <p className=" font-normal text-[#000000] text-[18px]">201 Katlian No.21 Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Youraddresses;
