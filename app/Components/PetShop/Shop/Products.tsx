import React from "react";
import ProductCard from "../../Landing/Product/ProductCard";
import dog from "/public/assets/images/dog.jpg";

type Props = {};

const Products = (props: Props) => {
  const arr = Array.from(Array(9).keys());

    return (
      <div className="grid grid-cols-3">
        {arr.map((index) => (
          <ProductCard
            key={index}
            name="Party Hat"
            img={dog}
            price={58}
            rating={4}
          />
        ))}
      </div>
    );
};

export default Products;
