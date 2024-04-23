import React from 'react'
import Button from '../../Common/Button';

type Props = {}

const BannerText = (props: Props) => {
  return (
    <div className="bg-primary flex flex-col items-center justify-center h-full gap-4 p-5  text-center">
      <h1 className="bg-white text-primary text-h1 p-3">
        Discount
      </h1>
      <h2 className="text-white text-h2">
      Online Shop
      </h2>
      <p className="text-white font-sans font-light max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione
        praesentium eligendi 
      </p>
      <Button variant="secondary">Read More</Button>
    </div>
  );
}

export default BannerText