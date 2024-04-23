import Image from "next/image";
import React from "react";
import bgDog from "/public/assets/images/shop/backgroundDog.jpg";

type Props = {};

const Sale = (props: Props) => {
  return (
    <div className="h-100 w-full relative">
      <Image
        src={bgDog}
        alt="pet friends"
        fill
        quality={100}
        className="object-cover"
      />
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <div className="flex flex-col items-start  gap-5 h-full w-full p-8 tablet:p-10 tabletXL:p-16 laptop:p-20">
          <h4 className="bg-white text-primary text-h1 p-3">
            50% Sale
          </h4>
          <h5 className="text-white text-h2">
            Discounts All year around
          </h5>
          <p className="text-white font-light font-sans max-w-xl text-lg">
            Quis ipsum suspendisse ultrices gravida dictum fusce ut. Diam donec
            adipiscing tristique risus. Rhoncus est pellentesque elit
            ullamcorper dignissim cras tincidunt lobortis feugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
