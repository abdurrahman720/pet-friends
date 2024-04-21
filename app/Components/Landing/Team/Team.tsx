import Image, { StaticImageData } from "next/image";


type Props = {
  name: string;
  img: string | StaticImageData;
  designation: string;
};

const Team = ({ name, img, designation }: Props) => {
  return (
    <div className="w-[400px] relative group">
      <Image
        src={img}
        alt={name}
        width={400}
        height={400}
        className="rounded w-full"
      />

      <h4 className="bg-white text-primary text-xl absolute bottom-3 group-hover:bottom-20 left-1/2 transform-gpu -translate-x-1/2 p-1 text-center w-fit text-nowrap opacity-0 group-hover:opacity-100 translate-y-1/2 scale-0 group-hover:scale-100  transition-all delay-200">
              {/* Surgery{","} Opthropedics */}
              {designation}
      </h4>

      <h3 className="bg-white text-primary text-3xl absolute bottom-3 left-1/2 transform-gpu -translate-x-1/2 p-1 text-center  group-hover:bg-primary group-hover:text-white transition-all delay-200 ">
       {name}
      </h3>
    </div>
  );
};

export default Team;
