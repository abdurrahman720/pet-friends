import Image from "next/image";
import React from "react";
import petDog from "/public/assets/images/shop/clothingDog.jpg";

type Props = {};

const Featured = (props: Props) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={petDog}
        alt="pet dog"
        fill
        quality={100}
        className="object-cover rounded-md"
      />
      <h2 className="text-primary text-h3 absolute bottom-5 left-5">
              Clothing Line <span className="bg-primary text-white">
                  2019/2
        </span>
      </h2>
    </div>
  );
};

export default Featured;
