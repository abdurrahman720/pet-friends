import React from 'react'
import ReviewCarousel from './ReviewCarousel'
import Image from 'next/image'
import reviewImg from '/public/assets/images/review.jpg'

type Props = {}

const Review = (props: Props) => {
  return (
    <div className="flex flex-col tabletXL:flex-row justify-center w-full">
      <div className='flex-1'>
        <ReviewCarousel />
      </div>
      <div className="flex-1 relative w-full h-[400px]">
        <Image src={reviewImg} fill alt="review" />
      </div>
    </div>
  );
}

export default Review