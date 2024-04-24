import Image from "next/image";
import React from "react";
import cat from "/public/assets/images/cat.jpg";

type Props = {};

const CheckList = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-4 group mb-5 w-full h-full">
      <div
        className="bg-neutral w-full h-[300px]  tablet:h-[400px]  flex items-center justify-center relative rounded-md
       translate-x-0 hover:translate-x-1 transition-transform hover:cursor-pointer"
      >
        <Image src={cat} alt="cat" fill className="rounded-md w-full" />
      </div>
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex justify-center items-center gap-3 ">
          <i className="fa-solid fa-check text-primary"></i>
          <p className="font-sans font-thin">Loving home for animals</p>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <i className="fa-solid fa-check text-primary"></i>
          <p className="font-sans font-thin">Loving home for animals</p>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <i className="fa-solid fa-check text-primary"></i>
          <p className="font-sans font-thin">
            Loving home for animals
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <i className="fa-solid fa-check text-primary"></i>
          <p className="font-sans font-thin">Loving home for animals</p>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <i className="fa-solid fa-check text-primary"></i>
          <p className="font-sans font-thin">Loving home for animals</p>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <i className="fa-solid fa-check text-primary"></i>
          <p className="font-sans font-thin">Loving home for animals</p>
        </div>
      </div>
    </div>
  );
};

export default CheckList;
