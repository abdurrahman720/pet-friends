import React from "react";
import diagnostic from "/public/assets/images/CardIcons/h6-icon-img-1.png";
import Image from "next/image";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Image src={diagnostic} alt="diagnostic" width={200} height={200}></Image>
      <h2 className="text-tprimary text-xl tabletXL:text-2xl desktopXL:text-3xl">
        Full Diagnostic
      </h2>
      <p className="font-sans font-thin text-center">
        Lorem ipsum dolor sit amet, set consectetur adipisicing elit
      </p>

      <div className="flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105 transition-transform">
        <h4 className="text-2xl text-primary">Read More</h4>
        <i className="fa-solid fa-paw text-primary rotate-90 mt-1"></i>
      </div>
    </div>
  );
};

export default Card;
