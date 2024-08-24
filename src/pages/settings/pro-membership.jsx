import React, { useContext } from "react";
import Image from "next/image";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import proMemeberSlider from "/src/assets/settingsModalSvg/promemberSlider.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SettingsButton from "../../components/buttons/settingsButton/settingsButton";
import Modal from "/src/components/Modal.jsx";
import { GlobalContext } from "../api/context/context";

const ProMembership = () => {
  const context = useContext(GlobalContext);
  const membershipDataBenefits = [
    {
      id: "1",
      benefit: "Ad-free experience",
    },
    {
      id: "2",
      benefit: "Access to all features and functionalities",
    },
    {
      id: "3",
      benefit: "Priority customer support",
    },
    {
      id: "4",
      benefit: "Early access to new features and updates",
    },
  ];
  var settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    auto: 100,
    infinite: true,
  };


  return (
    <Modal
      isVisible={context?.proMemebershipModalOpen}
      onClose={() => context?.setProMembershipModalOpen(false)}
    >
      <div className="p-4">
        <div className="flex items-center justify-center">
          <div
            className="absolute left-5"
            onClick={() => {
              context?.setProMembershipModalOpen(false);
              context?.setMembershipModalOpen(true);
            }}
          >
            <ChevronLeftRoundedIcon />
          </div>
          <div className="text-lg text-center">Pro Membership</div>
        </div>
        <div>
          <Slider {...settings}>
            <div className="mb-10">
              <div className="mt-7 w-[350px] p-2 flex flex-row items-center bg-gray-100 rounded-xl justify-center">
                <div className="p-2">
                  <div className="mt-2 text-sm font-bold">
                    Managing Made Easy
                  </div>
                  <div className="text-xs">
                    Effortlessly manage, organise, and analyse your files.
                  </div>
                </div>
                <Image
                  height={80}
                  width={108}
                  src={proMemeberSlider}
                  alt="manage"
                />
              </div>
            </div>
            <div>
              <div className="mt-7 w-[350px] p-2 flex flex-row items-center bg-gray-100 rounded-xl justify-center">
                <div className="p-2">
                  <div className="mt-2 text-sm font-bold">
                    Managing Made Easy
                  </div>
                  <div className="text-xs">
                    Effortlessly manage, organise, and analyse your files.
                  </div>
                </div>
                <Image
                  height={80}
                  width={108}
                  src={proMemeberSlider}
                  alt="manage"
                />
              </div>
            </div>
            <div>
              <div className="mt-7 w-[350px] p-2 flex flex-row items-center bg-gray-100 rounded-xl justify-center">
                <div className="p-2">
                  <div className="mt-2 text-sm font-bold">
                    Managing Made Easy
                  </div>
                  <div className="text-xs">
                    Effortlessly manage, organise, and analyse your files.
                  </div>
                </div>
                <Image
                  height={80}
                  width={108}
                  src={proMemeberSlider}
                  alt="manage"
                />
              </div>
            </div>
            <div>
              <div className="mt-7 w-[350px] p-2 flex flex-row items-center bg-gray-100 rounded-xl justify-center">
                <div className="p-2">
                  <div className="mt-2 text-sm font-bold">
                    Managing Made Easy
                  </div>
                  <div className="text-xs">
                    Effortlessly manage, organise, and analyse your files.
                  </div>
                </div>
                <Image
                  height={80}
                  width={108}
                  src={proMemeberSlider}
                  alt="manage"
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex mt-2 justify-between">
          <div className="text-lg">$21.42 /month</div>
          <div className="py-1 px-1 text-xs rounded-lg bg-yellow-400">
            Recommend
          </div>
        </div>
        <div className="flex gap-4 text-gray-500 mt-4">
          <LaptopMacRoundedIcon />
          <div>Unlimited devices</div>
        </div>
        <div className="flex gap-4 text-gray-500 mt-2">
          <BackupOutlinedIcon />
          <div>25GB monthly</div>
        </div>
        <div className="flex gap-4 text-gray-500 mt-2">
          <InsertDriveFileOutlinedIcon />
          <div>300 MB per note</div>
        </div>
        <div className="py-6">
          <div className="text-lg">The package also includes</div>
        </div>
        {membershipDataBenefits.map((data) => (
          <div key={data.id} className="flex py-1 gap-4 text-gray-500">
            <CheckRoundedIcon />
            {data?.benefit}
          </div>
        ))}
        <SettingsButton
          title={"Proceed with payment"}
          click={() => {
            context?.setProMembershipModalOpen(false);
            context?.setPaymentModalOpen(true);
          }}
        />
      </div>
    </Modal>
  );
};

export default ProMembership;
