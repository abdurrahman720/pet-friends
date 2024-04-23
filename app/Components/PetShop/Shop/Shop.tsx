import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products";

type Props = {};

const Shop = (props: Props) => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 tabletXL:grid-cols-3 desktop:grid-cols-4 h-full">
      <div className="col-span-1 hidden desktop:block">
        <Sidebar />
      </div>
      <div className="col-span-1 tablet:col-span-2 tabletXL:col-span-3">
        <Products />
      </div>
    </div>
  );
};

export default Shop;
