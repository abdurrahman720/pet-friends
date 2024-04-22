import Image from "next/image";
import React from "react";
import cat from "/public/assets/images/cat.jpg";

type Props = {};

const PlanCard = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col  gap-4 group mb-5 h-full">
      <div
        className="bg-neutral w-[300px] h-[400px] tablet:w-[400px] flex items-center justify-center relative rounded-md
       translate-x-0 hover:translate-x-1 transition-transform hover:cursor-pointer"
      >
        <Image src={cat} alt="dog" fill className="rounded-md " />
      </div>
      <div className="flex  justify-evenly items-start">
        <div className="flex flex-col gap-2">
          <p className="font-mono bg-[#479bac] text-white text-xl font-light py-3 px-5">
            $90
          </p>
          <p className="text-tsecondary font-thin font-sans">monthly</p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="text-2xl text-tprimary hover:text-primary">
              {"Great Plan"}
            </h4>
            <p className="font-sans font-light text-tsecondary">
              {"description"}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
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
      </div>
    </div>
  );
};

export default PlanCard;
