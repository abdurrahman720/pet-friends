import React from 'react'

type Props = {}

const ReviewCarousel = (props: Props) => {
  return (
      <div className="bg-primary flex flex-col items-center justify-center h-full gap-8 ">
          <h3 className="text-white text-4xl">
              Comments About
          </h3>
          <p className="text-white font-sans font-light max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione praesentium eligendi exercitationem consequatur delectus unde accusamus aut ab. Eaque distinctio, et laboriosam nisi eveniet error expedita illo odio tempore.
          </p>
          <p className='bg-white p-2 text-primary text-lg'>
              John Turner
          </p>
    </div>
  )
}

export default ReviewCarousel