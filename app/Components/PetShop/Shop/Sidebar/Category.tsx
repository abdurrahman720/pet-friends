import React from 'react'

type Props = {
    category: string;
    index: number;
}

const Category = ({ category, index }: Props) => {
  return (
    <div className="flex justify-between items-center mt-8">
      <p className="font-sans font-thin text-tsecondary">{category}</p>
      <span className="w-full  h-1 border-b border-black border-dotted mx-2">
        {" "}
      </span>
      <p className="font-sans font-thin text-tsecondary">{index}</p>
    </div>
  );
};

export default Category