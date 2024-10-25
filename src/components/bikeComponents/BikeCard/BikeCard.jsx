import Image from "next/image";
import style from "./BikeCard.module.css";

export default function BikeCard({ product }) {
  return (
    <div className={style.card}>
      <Image
        src="/Bike.jpg"
        alt="Picture"
        layout="responsive"
        width={700}
        height={475}
        className={style.image}
      />
      <div className="p-4">
        <h3 className="mt-1 mb-2 text-black">{product?.name}</h3>
        <p className="mt-2 mb-2 text-red-500">{product?.price}</p>
      </div>
    </div>
  );
}
