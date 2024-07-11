import React from "react";
import cat from "/public/assets/images/blog/cat-bandage.jpg";
import Image from "next/image";
import BannerText from "./BannerText";

type Props = {};

const BlogBanner = (props: Props) => {
  return (
    <div className="flex flex-col tabletXL:flex-row justify-center w-full h-104">
      <div className="flex-1 ">
        <div className="relative h-full w-full">
          <Image src={cat} fill alt="review" />
        </div>
      </div>
      <div className="flex-1 relative w-full h-full">
        <BannerText />
      </div>
    </div>
  );
};

export default BlogBanner;
