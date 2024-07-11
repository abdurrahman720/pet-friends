import Image from "next/image";
import pet1 from "/public/assets/images/gallery/pet1.jpg";
import pet2 from "/public/assets/images/gallery/pet2.jpg";
import pet3 from "/public/assets/images/gallery/pet3.jpg";
import pet4 from "/public/assets/images/gallery/pet4.jpg";
import pet5 from "/public/assets/images/gallery/pet5.jpg";
import pet6 from "/public/assets/images/gallery/pet6.jpg";
import eye from "/public/assets/images/eye.gif";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div className="w-full h-full grid grid-cols-1 tablet:grid-cols-4 gap-3 place-items-center">
      <div className="col-span-1 tablet:col-span-2 laptop:col-span-1 relative h-[350px] w-full group  ">
        <Image src={pet1} alt="pets" fill quality={100} />
        <Image
          src={eye}
          alt="eye"
          width={100}
          height={100}
          quality={100}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity "
        />
      </div>
      <div className="col-span-1 tablet:col-span-2 laptop:col-span-1 relative h-[350px] w-full group">
        <Image src={pet2} alt="pets" fill quality={100} />
        <Image
          src={eye}
          alt="eye"
          width={100}
          height={100}
          quality={100}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity "
        />
      </div>
      <div className="col-span-2 tablet:col-span-4 laptop:col-span-2 relative h-[350px] w-full group">
        <Image src={pet3} alt="pets" fill quality={100} />
        <Image
          src={eye}
          alt="eye"
          width={100}
          height={100}
          quality={100}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity "
        />
      </div>
      <div className="col-span-1 tablet:col-span-2 laptop:col-span-1 relative h-[350px] w-full group">
        <Image src={pet4} alt="pets" fill quality={100} />
        <Image
          src={eye}
          alt="eye"
          width={100}
          height={100}
          quality={100}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity "
        />
      </div>
      <div className="col-span-1 hidden tablet:block laptop:hidden  tablet:col-span-2 relative h-[350px] w-full group">
        <Image src={pet6} alt="pets" fill quality={100} />
        <Image
          src={eye}
          alt="eye"
          width={100}
          height={100}
          quality={100}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity "
        />
      </div>
      <div className="col-span-2 tablet:col-span-4 laptop:col-span-2 relative h-[350px] w-full group">
        <Image src={pet5} alt="pets" fill quality={100} />
        <Image
          src={eye}
          alt="eye"
          width={100}
          height={100}
          quality={100}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity "
        />
      </div>
      <div className="col-span-1 block  tablet:col-span-2 laptop:col-span-1 laptop:block tablet:hidden relative h-[350px] w-full group">
        <Image src={pet6} alt="pets" fill quality={100} />
        <Image
          src={eye}
          alt="eye"
          width={100}
          height={100}
          quality={100}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity "
        />
      </div>
    </div>
  );
};

export default Gallery;
