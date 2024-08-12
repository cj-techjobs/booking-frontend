import movie1 from "../assets/images/movie1.svg";
import movie2 from "../assets/images/movie2.svg";
import movie3 from "../assets/images/movie3.svg";
import movie4 from "../assets/images/movie4.svg";
import timeTransform from "../functions/timeTransform";

const MovieData = [
  {
    id: `d9f40307-6fdd-4c9f-a7c9-9c8b4161dc76`,
    title: `Abubhav singh bassi XYZ hall`,
    imageUrl: movie1,
    price: `₹ 600`,
    category: `Movies`,
    details: {
      duration: `2 Hours`,
      dateTime: timeTransform(new Date().getTime() + 86400),
      location: `Jantar Mantar, New Delhi`,
      language: `Hindi, English`,
    },
  },
  {
    id: `4ace608e-1362-4161-8c2b-a9d42ff88aab`,
    title: `Allen walker ABC statium`,
    imageUrl: movie2,
    price: `₹ 600`,
    category: `Music Shows`,
    details: {
      duration: `3 Hours`,
      dateTime: timeTransform(new Date().getTime() + 86400),
      location: `Mumbai, Maharashtra`,
      language: `Hindi, English`,
    },
  },
  {
    id: `c366896e-65dd-485e-886c-1eb646bd4a35`,
    title: `Seedhe Maut India Tour Aplha club`,
    imageUrl: movie4,
    price: `₹ 600`,
    category: `Dance`,
    details: {
      duration: `4 Hours`,
      dateTime: new Date().toLocaleString(),
      // dateTime: timeTransform(new Date().getTime() + 86400),
      location: `Alpha Club, Bengaluru`,
      language: `Hindi, English`,
    },
    cast: [
      {
        name: `Encore ABJ`,
      },
      {
        name: `They call me calm`,
      },
    ],
  },
  {
    id: `cf3ae0d9-2ec9-4e1e-b62e-7e52d0d5ba4b`,
    title: `Dandiya Nights With DJ SA Greater Farms`,
    imageUrl: movie3,
    price: `₹ 600`,
    category: `Music Shows`,
    details: {
      duration: `2.5 Hours`,
      dateTime: timeTransform(new Date().getTime() + 86400),
      location: `Surat, Gujarat`,
      language: `Hindi, English`,
    },
  },
];

export default MovieData;
