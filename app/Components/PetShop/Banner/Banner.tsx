import Image from 'next/image';
import React from 'react'
import BannerText from './BannerText';
import blog1 from '/public/assets/images/blog/cat-bandage.jpg'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className="flex flex-col tabletXL:flex-row justify-center w-full h-104">
      <div className="w-[70%] ">
        <div className="relative h-full w-full">
          <Image src={blog1} fill alt="review" />
        </div>
      </div>
      <div className="flex-1 relative w-full h-full ">
        <BannerText />
      </div>
    </div>
  );
}

export default Banner