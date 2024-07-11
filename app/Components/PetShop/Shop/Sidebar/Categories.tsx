import React from "react";
import Category from "./Category";

const categories = [
  {
    category: "Dog",
  },
  {
    category: "Cats",
  },
  {
    category: "Clothes",
  },
  {
    category: "Toys",
  },
  {
    category: "Accesories",
  },
  {
    category: "Nutrition",
  },
];

type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="bg-secondary p-5 rounded-md min-h-96">
      <h3 className="text-h4 bg-primary text-white p-2 w-[50%] rounded-md">
        Categories
      </h3>
      {
        categories.map((item, index) => (
          <Category key={index} category={item.category} index={index} />
        ))
      }
    </div>
  );
};

export default Categories;
