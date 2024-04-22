import React from "react";
import Button from "../../Common/Button";

type Props = {};

const BannerText = (props: Props) => {
  return (
    <div className="bg-primary flex flex-col items-center justify-center h-full gap-8 ">
      <h4 className="bg-white text-primary text-xl tabletXL:text-4xl laptop:text-6xl p-3">
        50% Sale
      </h4>
      <h3 className="text-white text-xl tabletXL:text-3xl laptop:text-5xl">
        Shopping Made Easy
      </h3>
      <p className="text-white font-sans font-light max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione
        praesentium eligendi exercitationem consequatur delectus unde accusamus
        aut ab. Eaque distinctio, et laboriosam nisi eveniet error expedita illo
        odio tempore.
      </p>
      <Button variant="secondary">Read More</Button>
    </div>
  );
};

export default BannerText;
