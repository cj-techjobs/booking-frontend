import React, { useState , useContext } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import rocketImage from "/src/assets/settingsModalSvg/rocket.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { orange } from "@mui/material/colors";
import SettingsButton from "../../components/buttons/settingsButton/settingsButton";
import Modal from "/src/components/Modal.jsx";
import { GlobalContext } from "../api/context/context";


const Membership = ({ setMembershipModalOpen, setProMembershipModalOpen }) => {
  const context = useContext(GlobalContext);
  const [value, setValue] = useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // membership modal slick settings
  var settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    auto: 100,
    infinite: true,
  };
  const membershipData = [
    {
      id: "1",
      value: "option1",
      version: "Pro",
      details: "Get the ultimate file management experience",
      price: "21.42",
    },
    {
      id: "2",
      value: "option2",
      version: "Standerd",
      details: "Unlock advanced features for professionals",
      price: "16.42",
    },
    {
      id: "3",
      value: "option3",
      version: "Starter",
      details: "Unlock additional features & more storage",
      price: "8.99",
    },
  ];
  return (
    <Modal
      isVisible={context?.membershipModalOpen}
      onClose={() => context?.setMembershipModalOpen(false)}
    >
      <div className="p-4">
        <div
          onClick={() => context?.setMembershipModalOpen(false)}
          className="rounded-full w-7 h-7 bg-gray-500 absolute right-3 items-center justify-center z-50"
        >
          <CloseRoundedIcon fontSize="small" className="ms-1 text-white" />
        </div>
        <Slider {...settings}>
          <div>
            <div className="mt-7 flex flex-col items-center justify-center">
              <Image
                height={100.28}
                width={110.86}
                src={rocketImage}
                alt="membership"
              />
              <div className="mt-2 text-base font-bold">
                Unlock Premium Features
              </div>
              <div className="text-sm">
                Enjoy exclusive features and the newest updates
              </div>
            </div>
          </div>
          <div>
            <div className="mt-7 flex flex-col items-center justify-center">
              <Image
                height={100.28}
                width={110.86}
                src={rocketImage}
                alt="rocket"
              />
              <div className="mt-2 text-base font-bold">
                Unlock Premium Features
              </div>
              <div className="text-sm">
                Enjoy exclusive features and the newest updates
              </div>
            </div>
          </div>
          <div>
            <div className="mt-7 flex flex-col mb-8 items-center justify-center">
              <Image
                height={100.28}
                width={110.86}
                src={rocketImage}
                alt="rocket"
              />
              <div className="mt-2 text-base font-bold">
                Unlock Premium Features
              </div>
              <div className="text-sm">
                Enjoy exclusive features and the newest updates
              </div>
            </div>
          </div>
          <div>
            <div className="mt-7 flex flex-col items-center justify-center">
              <Image
                height={100.28}
                width={110.86}
                src={rocketImage}
                alt="rocket"
              />
              <div className="mt-2 text-base font-bold">
                Unlock Premium Features
              </div>
              <div className="text-sm">
                Enjoy exclusive features and the newest updates
              </div>
            </div>
          </div>
        </Slider>
        {membershipData.map((data) => (
          <div
            key={data.id}
            className="p-4 mt-2 cursor-pointer rounded-xl border-2 border-orange-300"
          >
            <div className="flex justify-between items-center">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <div className="flex items-center">
                  <FormControlLabel
                    type="radio"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: orange[500],
                          },
                        }}
                      />
                    }
                    value={data.value}
                  />{" "}
                  <span className=" text-base mb-1">{data.version}</span>
                </div>
              </RadioGroup>
              {data.id === "1" ? (
                <div className="py-1 px-1 text-xs rounded-lg bg-yellow-400">
                  Recommend
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="text-lg mt-2 font-extrabold">
              ${data.price} /month
            </div>
            <div className="mt-1 text-gray-400 text-sm">{data.details}</div>
            <div className="mt-2 text-xs">
              Details <ArrowForwardRoundedIcon fontSize="small" />
            </div>
          </div>
        ))}
        <SettingsButton
          title={"Continue"}
          click={() => {
            context?.setMembershipModalOpen(false);
            context?.setProMembershipModalOpen(true);
          }}
        />
      </div>
    </Modal>
  );
};

export default Membership;
