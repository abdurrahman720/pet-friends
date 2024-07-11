import React from "react";
import Button from "../../Common/Button";

type Props = {};

const BannerText = (props: Props) => {
  return (
    <div className="bg-primary flex flex-col items-center justify-center  h-full tablet:min-h-104 text-center px-10 py-8 gap-5">
      <h4 className="bg-white text-primary text-h1 p-1">50% Sale</h4>
      <h3 className="text-white text-h2">Shopping made easy</h3>
      <p className="text-white font-sans font-light max-w-xl text-lg">
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
