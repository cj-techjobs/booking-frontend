
//car category images
import hatchback from "/src/assets/carsSvg/hatchback.svg";
import lsedan from "/src/assets/carsSvg/lsedan.svg";
import lsuv from "/src/assets/carsSvg/lsuv.svg";
import mpv from "/src/assets/carsSvg/mpv.svg";
import sedan from "/src/assets/carsSvg/sedan.svg";
import suv from "/src/assets/carsSvg/suv.svg";

//bike category Images
import sportBike from '/src/assets/bikesSvg/sportBike.svg';
import adventure from '/src/assets/bikesSvg/adventure.svg';
import cafeRider from '/src/assets/bikesSvg/cafeRider.svg';
import cruiser from '/src/assets/bikesSvg/cruiser.svg';
import scooter from '/src/assets/bikesSvg/scooter.svg';
import superBike from '/src/assets/bikesSvg/superBike.svg';

//bike brand Images
import aprilla from '/src/assets/bikesSvg/brand/aprilla.svg';
import bmw from '/src/assets/bikesSvg/brand/bmw.svg';
import harly from '/src/assets/bikesSvg/brand/harly.svg';
import hero from '/src/assets/bikesSvg/brand/hero.svg';
import honda from '/src/assets/bikesSvg/brand/honda.svg';
import indian from '/src/assets/bikesSvg/brand/indian.svg';
import jawa from '/src/assets/bikesSvg/brand/jawa.svg';
import ktm from '/src/assets/bikesSvg/brand/ktm.svg';
import royal from '/src/assets/bikesSvg/brand/royal.svg';
import suzuki from '/src/assets/bikesSvg/brand/suzuki.svg';
import ola from '/src/assets/bikesSvg/brand/ola.svg';

//car specification icons
import milage from '/src/assets/carsSvg/specificationIcon/milage.svg'
import groundClear from '/src/assets/carsSvg/specificationIcon/groundClear.svg'
import displacement from '/src/assets/carsSvg/specificationIcon/displacement.svg'
import bootSpace from '/src/assets/carsSvg/specificationIcon/bootSpace.svg'
import seating from '/src/assets/carsSvg/specificationIcon/seating.svg'
import tankCapacity from '/src/assets/carsSvg/specificationIcon/tankCapacity.svg'

//car category list
export const carCategory = [
  {
    id: "1",
    title: "Hatchback",
    image: hatchback,
  },
  {
    id: "2",
    title: "Sedan",
    image: sedan,
  },
  {
    id: "3",
    title: "SUV",
    image: suv,
  },
  {
    id: "4",
    title: "MPV",
    image: mpv,
  },
  {
    id: "5",
    title: "Luxury Sedan",
    image: lsedan,
  },
  {
    id: "6",
    title: "Luxury SUV",
    image: lsuv,
  },
];

//bike category list
export const bikeCategory = [
  {
    id: "1",
    title: "Sport Bike",
    image: sportBike,
  },
  {
    id: "2",
    title: "Scooter",
    image: scooter,
  },
  {
    id: "3",
    title: "Adventure",
    image: adventure,
  },
  {
    id: "4",
    title: "Cafe Rider",
    image: cafeRider,
  },
  {
    id: "5",
    title: "Cruiser",
    image: cruiser,
  },
  {
    id: "6",
    title: "Super Bike",
    image: superBike,
  },
];

//bike brand list
export const bikeFilterList = [
  {
    id:"1",
    title:"Harley - Davidson",
    image:harly
  },
  {
    id:"2",
    title:"Royal - Enfield",
    image:royal
  },
  {
    id:"3",
    title:"OLA",
    image:ola
  },
  {
    id:"4",
    title:"Honda",
    image:honda
  },
  {
    id:"5",
    title:"Suzuki",
    image:suzuki
  },
  {
    id:"6",
    title:"Jawa",
    image:jawa
  },
  {
    id:"7",
    title:"K.T.M",
    image:ktm
  },
  {
    id:"8",
    title:"B.M.W",
    image:bmw
  },
  {
    id:"9",
    title:"Aprila",
    image:aprilla
  },
  {
    id:"10",
    title:"Indian motorcycle",
    image:indian
  },
]

//filter list
export const FilterList = [
  {
    id: "1",
    title: "Price Range",
  },
  {
    id: "2",
    title: "Brands + Models",
    visible: "false",
  },
  {
    id: "3",
    title: "Year",
    visible: "false",
  },
  {
    id: "4",
    title: "Kms Driven",
    visible: "false",
  },
  {
    id: "5",
    title: "Fuel Type",
    visible: "false",
  },
  {
    id: "6",
    title: "Body Type",
    visible: "false",
  },
  {
    id: "7",
    title: "Transmission",
    isVisible: "false",
  },
  {
    id: "8",
    title: "Color",
  },
  {
    id: "9",
    title: "Features",
    visible: "false",
  },
  {
    id: "10",
    title: "Seats",
    visible: "false",
  },
  {
    id: "11",
    title: "Owner",
    visible: "false",
  },
];

//car color list
export const color = [
  { id: 1, available: "20", name: "Red", color: "#ff0000" },
  { id: 2, available: "22", name: "Green", color: "#008000" },
  { id: 3, available: "222", name: "Blue", color: "#0000ff" },
  { id: 4, available: "24", name: "Yellow", color: "#ffff00" },
  { id: 5, available: "1", name: "Pink", color: "#ff00ff" },
  { id: 6, available: "30", name: "Cyan", color: "#00ffff" },
  { id: 7, available: "50", name: "Black", color: "#000" },
  { id: 8, available: "98", name: "White", color: "#fff" },
  { id: 9, available: "2", name: "Orange", color: "#FFA500" },
  { id: 10, available: "26", name: "Lime Green", color: "#89f336" },
  { id: 11, available: "12", name: "Silver", color: "#C0C0C0" },
  { id: 12, available: "42", name: "Violet", color: "#7F00FF" },
];

//transmisson options
export const manual = [
  {
    id: "1",
    gear: "4 Gears",
    available: "50",
  },
  {
    id: "2",
    gear: "5 Gears",
    available: "50",
  },
  {
    id: "3",
    gear: "6 Gears",
    available: "50",
  },
  {
    id: "4",
    gear: "7 Gears",
    available: "50",
  },
];
export const auto = [
  {
    id: "1",
    gear: "DCT",
    available: "50",
  },
  {
    id: "2",
    gear: "AMT",
    available: "50",
  },
];

//seats
export const seats = [
  {
    id: "1",
    type: "2 Seater",
    available: "30",
  },
  {
    id: "2",
    type: "3 Seater",
    available: "20",
  },
  {
    id: "3",
    type: "4 Seater",
    available: "10",
  },
  {
    id: "4",
    type: "6 Seater",
    available: "13",
  },
];

//brand + modal
export const brand = [
  {
    id: "1",
    name: "Tata",
    available: "221",
    modals: [
      {
        id: "1",
        name: "Tiago",
      },
      {
        id: "2",
        name: "Nexon",
      },
      {
        id: "3",
        name: "Harrier",
      },
    ],
  },

  {
    id: "2",
    name: "Honda",
    available: "21",
    modals: [
      {
        id: "1",
        name: "WR-V",
      },
      {
        id: "2",
        name: "BR-V",
      },
      {
        id: "3",
        name: "CR-V",
      },
    ],
  },
  {
    id: "3",
    name: "Maruti Suzuki",
    available: "210",
    modals: [
      {
        id: "1",
        name: "WR-V",
      },
      {
        id: "2",
        name: "BR-V",
      },
      {
        id: "3",
        name: "CR-V",
      },
    ],
  },
  {
    id: "2",
    name: "Hyundai",
    available: "1",
    modals: [
      {
        id: "1",
        name: "WR-V",
      },
      {
        id: "2",
        name: "BR-V",
      },
      {
        id: "3",
        name: "CR-V",
      },
    ],
  },
  {
    id: "2",
    name: "Renault",
    available: "11",
    modals: [
      {
        id: "1",
        name: "WR-V",
      },
      {
        id: "2",
        name: "BR-V",
      },
      {
        id: "3",
        name: "CR-V",
      },
    ],
  },
  {
    id: "2",
    name: "Volkswagen",
    modals: [
      {
        id: "1",
        name: "WR-V",
      },
      {
        id: "2",
        name: "BR-V",
      },
      {
        id: "3",
        name: "CR-V",
      },
    ],
  },
];

//KMS Driven
export const kms = [
  {
    id: "1",
    kms: "210,000",
    available: "230",
  },
  {
    id: "2",
    kms: "50,000",
    available: "220",
  },
  {
    id: "3",
    kms: "10,000",
    available: "250",
  },
  {
    id: "4",
    kms: "140,000",
    available: "120",
  },
  {
    id: "5",
    kms: "120,000",
    available: "720",
  },
  {
    id: "6",
    kms: "200,000",
    available: "10",
  },
];

//Year
export const year = [
  {
    id: "1",
    value: "option1",
    year: "2018",
    available: "899",
  },
  {
    id: "1",
    value: "option2",
    year: "2012",
    available: "510",
  },
  {
    id: "3",
    value: "option3",
    year: "2008",
    available: "401",
  },
  {
    id: "4",
    value: "option4",
    year: "2006",
    available: "321",
  },
  {
    id: "5",
    value: "option5",
    year: "2004",
    available: "121",
  },
  {
    id: "6",
    value: "option6",
    year: "2002",
    available: "221",
  },
];

//Owner
export const owner = [
  {
    id: "1",
    value: "option1",
    owner: "1st",
    available: "899",
  },
  {
    id: "1",
    value: "option2",
    owner: "2nd",
    available: "510",
  },
  {
    id: "3",
    value: "option3",
    owner: "3rd",
    available: "401",
  },
];

export const carSpecification = [
  {
    id:"1",
    title:"Mileage (ARAI)",
    data:"20.9 kmpl",
    icon: milage
  },
  {
    id:"2",
    title:"Ground clearance",
    data:"180 mm",
    icon: groundClear
  },
  {
    id:"3",
    title:"Boot space",
    data:"260 litres",
    icon: bootSpace
  },
  {
    id:"4",
    title:"Seating capacity",
    data:"5 units",
    icon: seating
  },
  {
    id:"5",
    title:"Fuel tank capacity",
    data:"32 litres",
    icon: tankCapacity
  },
  {
    id:"6",
    title:"Displacement",
    data:"1197 cc",
    icon: displacement
  },
]

export const carOverview = [
  {
    id:"1",
    title:"Make Year",
    data:"Nov 2022"
  },
  {
    id:"2",
    title:"Reg. Year",
    data:"Nov 2022"
  },
  {
    id:"3",
    title:"Fuel",
    data:"Petrol"
  },
  {
    id:"4",
    title:"Km driven",
    data:"1OK km"
  },
  {
    id:"5",
    title:"Transmission",
    data:"Automatic (AMT) @"
  },
  {
    id:"6",
    title:"No. of Owner(s)",
    data:"1st Owner"
  },
  {
    id:"7",
    title:"Insurance Validity",
    data:"Nov 2024"
  },
  {
    id:"8",
    title:"Insurance Type",
    data:"Comprehensive"
  },
  {
    id:"9",
    title:"RTO",
    data:"MH47"
  },
  {
    id:"10",
    title:"Car Location",
    data:"Deoghar,Jharkhand"
  },
]