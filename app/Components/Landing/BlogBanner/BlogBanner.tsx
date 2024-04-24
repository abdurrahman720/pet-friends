import React from "react";
import blogVideo from "/public/assets/images/blogVideo.jpg";
import Image from "next/image";
import BannerText from "./BannerText";

type Props = {};

const BlogBanner = (props: Props) => {
  return (
    <div className="flex flex-col tabletXL:flex-row justify-center w-full h-full">
      <div className="tabletXL:flex-1 h-64 tablet:h-104 ">
        <div className="relative h-full w-full">
          <Image src={blogVideo} fill alt="review" className=" " />
        </div>
      </div>
      <div className="flex-1 ">
        <BannerText />
      </div>
    </div>
  );
};

export default BlogBanner;
