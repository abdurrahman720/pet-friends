import Image from 'next/image'
import pet1 from '/public/assets/images/gallery/pet1.jpg'
import pet2 from '/public/assets/images/gallery/pet2.jpg'
import pet3 from '/public/assets/images/gallery/pet3.jpg'
import pet4 from '/public/assets/images/gallery/pet4.jpg'
import pet5 from '/public/assets/images/gallery/pet5.jpg'
import pet6 from '/public/assets/images/gallery/pet6.jpg'

type Props = {}

const Gallery = (props: Props) => {
  return (
    <div className="w-full grid grid-cols-2 laptop:grid-cols-4 gap-3 place-items-center">
      <div className="col-span-1 relative h-[350px] w-full">
        <Image src={pet1} alt="pets" fill quality={100}  />
      </div>
      <div className="col-span-1 relative h-[350px] w-full">
        <Image src={pet2} alt="pets" fill quality={100}  />
      </div>
      <div className="col-span-2 relative h-[350px] w-full">
        <Image src={pet3} alt="pets" fill quality={100}  />
      </div>
      <div className="col-span-1 relative h-[350px] w-full">
        <Image src={pet4} alt="pets" fill quality={100}  />
      </div>
      <div className="col-span-2 relative h-[350px] w-full">
        <Image src={pet5} alt="pets" fill quality={100}  />
      </div>
      <div className="col-span-1 relative h-[350px] w-full">
        <Image src={pet6} alt="pets" fill quality={100}  />
      </div>
    </div>
  );
}

export default Gallery