import React from "react";
import ReviewCarousel from "./ReviewCarousel";
import Image from "next/image";
import reviewImg from "/public/assets/images/review.jpg";

type Props = {};

const Review = (props: Props) => {
  return (
    <div className="flex flex-col tabletXL:flex-row justify-center w-full h-full">
      <div className="flex-1 h-104">
        <ReviewCarousel />
      </div>
      <div className="tabletXL:flex-1 h-64 tablet:h-104 ">
        <div className="relative h-full w-full">
          <Image src={reviewImg} fill alt="review" className=" " />
        </div>
      </div>
    </div>
  );
};

export default Review;
