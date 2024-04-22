import React from "react";
import blogVideo from "/public/assets/images/blogVideo.jpg";
import Image from "next/image";
import BannerText from "./BannerText";

type Props = {};

const BlogBanner = (props: Props) => {
  return (
    <div className="flex flex-col tabletXL:flex-row justify-center w-full">
      <div className="flex-1 ">
        <div className="relative h-full w-full">
          <Image src={blogVideo} fill alt="review" />
        </div>
      </div>
      <div className="flex-1 relative w-full h-104">
        <BannerText />
      </div>
    </div>
  );
};

export default BlogBanner;
