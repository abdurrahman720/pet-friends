import React from 'react'
import Button from '../../Common/Button';

type Props = {}

const BannerText = (props: Props) => {
  return (
    <div className="bg-primary flex flex-col items-center justify-center h-full gap-4 p-5  text-center">
      <h4 className="bg-white text-primary text-xl tabletXL:text-4xl laptop:text-6xl p-3">
        Discount
      </h4>
      <h3 className="text-white text-xl tabletXL:text-3xl laptop:text-5xl">
      Online Shop
      </h3>
      <p className="text-white font-sans font-light max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione
        praesentium eligendi 
      </p>
      <Button variant="secondary">Read More</Button>
    </div>
  );
}

export default BannerText