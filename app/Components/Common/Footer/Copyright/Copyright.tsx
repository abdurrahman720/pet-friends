import React from "react";

type Props = {};

const Copyright = (props: Props) => {
  return (
    <div className="bg-secondary  laptop:border-t border-t-cyan-950  ">
      <div className="flex mobile:flex-col laptop:flex-row justify-center items-center mobile:h-max">
        <div className="mobile:py-1 laptop:py-3 mobile:mb-3 laptop:mb-0">
          <p className="text-[14px] text-gray-500 mobile:text-center laptop:text-left">
            © 2024{" "}
            <span className=" text-gray-800 font-bold hover:text-primary">
              Pet Sample
            </span>
            {","} All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
