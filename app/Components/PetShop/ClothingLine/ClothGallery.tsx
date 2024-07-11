import React from "react";
import Featured from "./Featured";
import Item from "./Item";

type Props = {};

const ClothGallery = (props: Props) => {
  return (
    <div className="grid grid-cols-1 tabletXL:grid-cols-2 gap-5 h-104 w-full ">
      <div className="col-span-1">
        <Featured />
      </div>
      <div className="grid grid-cols-2 gap-5 w-full">
        <Item name="Toy Ball Shaped" price={25} />
        <Item name="Toy Ball Shaped" price={25} />
        <Item name="Toy Ball Shaped" price={25} />
        <Item name="Toy Ball Shaped" price={25} />
      </div>
    </div>
  );
};

export default ClothGallery;
