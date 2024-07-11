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
    <div className="bg-neutral w-full tablet:min-h-72 rounded-lg relative flex justify-center items-center p-5 group">
      <Image src={img} alt="image" fill className="" />
      <div className="flex-1 flex flex-col items-start tablet:items-center h-full z-10 ml-28 mobile:ml-28 ">
        <h3 className="text-3xl text-tprimary group-hover:text-primary relative z-10">
          Cat Care
          <div
            className="bg-white w-full h-full absolute top-0 left-1/2 -translate-x-1/2  -z-10 opacity-0 group-hover:opacity-100
          group-hover:animate-spread_full"
          ></div>
        </h3>

        <p className="text-sm  tablet:text-lg text-tsecondary font-sans font-extralight ">
          From nutrition to health care. <br /> Everything in one place.
        </p>
      </div>
    </div>
  );
};

export default Card;
