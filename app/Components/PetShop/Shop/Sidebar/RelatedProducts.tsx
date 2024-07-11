
import React from "react";
import cotton from "/public/assets/images/related/cotton.jpg";
import mouse from "/public/assets/images/related/mouse.jpg";
import pj from "/public/assets/images/related/pj.jpg";

import Product from "./Product";

type Props = {};

const RelatedProducts = (props: Props) => {
  return (
    <div className="bg-secondary p-5 rounded-md min-h-96">
      <h3 className="text-h4 bg-primary text-white p-2 w-[60%] rounded-md">
        Related Products
      </h3>
      <Product productName="Cotton ball" price={38} img={cotton} />
      <Product productName="Cotton ball" price={38} img={mouse} />
      <Product productName="Cotton ball" price={38} img={pj} />
    </div>
  );
};

export default RelatedProducts;
