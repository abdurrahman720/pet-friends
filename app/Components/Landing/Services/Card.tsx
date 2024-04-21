import React from "react";
import img from "/public/assets/images/pet.png";
import Image from "next/image";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="bg-neutral w-[425px] h-[200px] rounded-lg relative flex px-5 group">
      <Image
        src={img}
        alt="image"
        width={100}
        height={200}
        className="flex-1"
      />
      <div className="flex flex-col justify-center items-center h-full ">
        <h3 className="text-4xl text-tprimary group-hover:text-primary bg-transparent group-hover:bg-white  transition duration-300 ease-in group-hover:ease-in-out group-hover:scale-125 p-2 ">
          Cat Care
        </h3>
        <p className="text-base text-tsecondary font-sans font-extralight group-hover:translate-y-2 transition">
          From nutrition to health care. <br /> Everything in one place.
        </p>
      </div>
    </div>
  );
};

export default Card;
