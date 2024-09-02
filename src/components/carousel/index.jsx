import React, { use, useContext, useEffect, useState } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoMdSettings } from "react-icons/io";
import { FaTag } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import Leave from "/src/assets/images/leave.png";
import Lemon from "/src/assets/images/Lemon.png";
import Donut from "/src/assets/images/donut.png";
import Orange from "/src/assets/images/orange.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Modal from "/src/components/Modal.jsx";
import SellItem from "./sellItem";
import SellCar from "./sellCar";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import uploadSvg from "/src/assets/homeModalSvg/uploadSvg.svg";
import { GlobalContext } from "../../pages/api/context/context";
import TextField from "@mui/material/TextField";
import PostAnAdd from "./postAnAdd";
import { toast } from "react-toastify";
import Category from "../Choose-Category/Category";

const CarouselComponent = () => {
  const context = useContext(GlobalContext);
  const router = useRouter();
  const [carouselData, setCarouselData] = useState([]);
  const [quickAccess, setQuickAccess] = useState([]);
  const [products, setProducts] = useState([]);
  const [sellItemModal, setSelltemModal] = useState(false);
  const [carModal, setCarModal] = useState(false);
  const [uploadImageModal, setUploadImageModal] = useState(false);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const data = [
      {
        title: "cars",
        bgColor: "#d96849",
        modal: setCarModal,
      },
      {
        title: "bikes",
        bgColor: "#ead795",
      },
      {
        title: "property",
        bgColor: "#b0d0db",
      },
      {
        title: "appliances",
        bgColor: "#fbe0c4",
      },
      {
        title: "books",
        bgColor: "#6d8891",
      },
      {
        title: "furniture",
        bgColor: "#44596e",
      },
      {
        title: "clothing",
        bgColor: "#e3af99",
      },
      {
        title: "Free Auctions",
        bgColor: "#b8e2d8",
      },
      {
        title: "jobs",
        bgColor: "#ffbd31",
      },
      {
        title: "Movies & Events",
        bgColor: "#c33863",
      },
      {
        title: "electronics",
        bgColor: "#5c7b5d",
      },
      {
        title: "vacation",
        bgColor: "#fec523",
      },
    ];

    const product = [
      {
        title: `Leave`,
        rating: 4,
        price: `₹ 250`,
        productImage: Leave,
      },
      {
        title: `Lemon`,
        rating: 3,
        price: `₹ 200`,
        productImage: Lemon,
      },
      {
        title: `Donut`,
        rating: 4,
        price: `₹ 125`,
        productImage: Donut,
      },
      {
        title: `Orange`,
        rating: 4.5,
        price: `₹ 100`,
        productImage: Orange,
      },
    ];

    const products = new Array(5).fill(product).flat(Infinity);

    setProducts(products);

    setQuickAccess([
      {
        modal: setCarModal,
        path: "",
        content: "",
      },
      {
        path: "/settings",
        content: (
          <IoMdSettings
            style={{ color: "#ffffff", width: "32px", height: "32px" }}
          />
        ),
      },
      {
        // path: "/settings",
        modal: setSelltemModal,
        content: (
          <FaTag style={{ color: "#ffffff", width: "32px", height: "32px" }} />
        ),
      },
      {
        path: "/settings",
        content: (
          <MdNotifications
            style={{ color: "#ffffff", width: "32px", height: "32px" }}
          />
        ),
      },
      {
        path: "/settings",
        content: (
          <BsFillBoxSeamFill
            style={{ color: "#ffffff", width: "32px", height: "32px" }}
          />
        ),
      },
      {
        path: "/settings",
        content: (
          <FaUser style={{ color: "#ffffff", width: "32px", height: "32px" }} />
        ),
      },
      //
    ]);

    setCarouselData(data);
  }, []);

  const getBgColor = (index) => {
    return carouselData[index].bgColor;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Amount", amount);
    setUploadImageModal(false);
  };

  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h2 className="text-[#000852] mt-4 text-center font-bold text-2xl mb-6">
          SHOP WHAT YOU LIKE USING
          <span className="text-red-500"> CATAGORIES</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          {carouselData.map((item, i) => (
            <div
              key={i}
              className="w-32 h-28 flex items-center justify-center rounded-lg cursor-pointer"
              style={{ backgroundColor: getBgColor(i) }}
              onClick={() =>
                router.push(
                  `/${item?.title === "Movies & Events"
                    ? "movies"
                    : item?.title === "vacation"
                      ? "bookings/hotel-search"
                      : item?.title === "clothing"
                        ? "matrimony"
                        : item?.title
                  }`
                )
              }
            >
              <div className="text-white capitalize font-bold text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mb-8 gap-8">
        <div className="h-56 w-1/3 bg-[#50006d] rounded-lg flex items-end justify-center">
          <h2 className="text-white font-bold text-2xl py-12">
            Best Product At Lowest Price
          </h2>
        </div>
        <div className="h-56 p-4 bg-[#ececec] rounded-lg flex flex-col items-center justify-between">
          <h2 className="text-black-400 text-xl ">Quick Access</h2>
          <div className="grid grid-cols-3 place-items-center gap-4">
            {quickAccess.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center cursor-pointer w-16 h-16 rounded-full bg-[#fc6e6e]"
                onClick={() =>
                  context?.isLoggedin
                    ? item.path
                      ? router.push(item?.path)
                      : item.modal(true)
                    : {}
                }
              >
                {item?.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-6 gap-4">
          {products.map((m, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 shadow-xl rounded-lg p-2"
            >
              <div className="flex-1">
                <Image
                  src={m.productImage.src}
                  className=""
                  alt="product image"
                  height={220}
                  width={230}
                />
              </div>
              <div className="flex justify-between px-2">
                <div>
                  <h4>{m.title}</h4>
                  <p>{m.rating}</p>
                </div>
                <div className="flex flex-col items-center">
                  <FiPlusCircle style={{ width: "24px", height: "24px" }} />
                  <p className="font-bold">{m.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {sellItemModal && (
        <Modal isVisible={sellItemModal} onClose={() => setSelltemModal(false)}>
          <SellItem />
          {/* <PostAnAdd /> */}
        </Modal>
      )}
      {carModal && (
        <Modal isVisible={carModal} onClose={() => setCarModal(false)}>
          <SellCar>
            <Category
              modal={() => {
                setCarModal(false);
                setUploadImageModal(true);
              }}
            />
          </SellCar>
        </Modal>
      )}

      {uploadImageModal && (
        <Modal
          isVisible={uploadImageModal}
          onClose={() => setUploadImageModal(false)}
        >
          <div className="p-4">
            <div className="flex items-center justify-center mb-10">
              <div
                className="absolute left-5 cursor-pointer"
                onClick={() => {
                  setCarModal(true);
                  setUploadImageModal(false);
                }}
              >
                <ChevronLeftRoundedIcon />
              </div>
              <div className="text-lg font-bold text-center">
                You are Almost There
              </div>
            </div>
            <div className="px-4">
              <Input
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment className="font-extrabold" position="start">
                    ₹
                  </InputAdornment>
                }
                className="w-full"
                placeholder="Enter Your price*/No of days"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="mt-4 text-base">
                Rs. 5,000 will be your security money and the responsibility of
                car is our
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-28">
              <div className="cursor-pointer">
                <label htmlFor="upload-file" className="cursor-pointer">
                  <Image
                    src={uploadSvg}
                    alt="upload-Image"
                    height={100}
                    width={100}
                  />
                </label>
                <input
                  type="file"
                  name="file"
                  id="upload-file"
                  className="absolute opacity-0 -z-20"
                />{" "}
                <span className="text-xs left-[140px] tracking-tighter font-bold absolute">
                  click and upload
                </span>
              </div>
              <div className="text-xl mt-6">Upload Images of your Products</div>
              <div className="px-4 py-2 rounded-md border-2 border-black bg-[#FFB017] mt-8">
                <button
                  onClick={handleSubmit}
                  className="text-base tracking-tighter"
                >
                  Click and Upload
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CarouselComponent;
