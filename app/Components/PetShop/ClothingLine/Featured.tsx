import Image from 'next/image'
import React from 'react'
import petDog from "/public/assets/images/shop/clothingDog.jpg";

type Props = {}

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
    </div>
  );
}

export default Featured