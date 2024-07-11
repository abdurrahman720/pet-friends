import React from "react";

import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  price: number;
  rating: number;
  img: string | StaticImageData;
};

const ProductCard = ({ name, price,img, rating=4 }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 group mb-5">
      <div className="bg-neutral w-full h-[325px] flex items-center justify-center relative rounded-md">
        <div className="relative w-full h-full">
          <Image src={img} alt="dog" fill className="object-cover"/>
        </div>
        <button className="absolute translate-y-1/2  group-hover:opacity-90  group-hover:translate-y-1  transition-all duration-300  bg-primary py-3 px-5 rounded opacity-0 overflow-hidden z-10">
          <p className="font-sans text-white">Add to cart</p>
        </button>
        <button className="absolute translate-y-1/2 bottom-0 right-1/2 mx-1 group-hover:opacity-90  group-hover:translate-y-1  transition-all duration-300  bg-white py-3 px-5 rounded opacity-0 overflow-hidden z-10">
          <i className="fa-regular fa-heart text-primary"></i>
        </button>
        <button className="absolute translate-y-1/2  bottom-0 left-1/2 mx-1 group-hover:opacity-90  group-hover:translate-y-1  transition-all duration-300  bg-white py-3 px-5 rounded opacity-0 overflow-hidden z-10">
          <i className="fa-regular fa-eye text-primary"></i>
        </button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h4 className="text-2xl hover:text-primary">{name}</h4>
        <div className="flex items-center justify-center">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
        </div>
        <h4 className="text-2xl text-primary">${price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
