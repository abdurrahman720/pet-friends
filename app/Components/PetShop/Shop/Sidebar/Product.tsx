import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  productName: string;
  price: number;
  img: string | StaticImageData;
};

const Product = ({ productName, price, img }: Props) => {
  return (
    <div className="flex items-center justify-start">
      <Image src={img} alt="cotton ball" width={100} height={100} />
      <div>
        <p className="text-lg text-tprimary    ">{productName}</p>
        <p className="text-lg text-primary">${price}</p>
      </div>
    </div>
  );
};

export default Product;
