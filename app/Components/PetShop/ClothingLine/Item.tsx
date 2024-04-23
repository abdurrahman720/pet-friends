import Image from "next/image";
import jersey from "/public/assets/images/shop/jersy.jpg";
import Link from "next/link";

type Props = {
  name: string;
  price: string | number;
};

const Item = ({ name, price = 25 }: Props) => {
  return (
    <div className="col-span-1">
      <div className="bg-secondary relative w-full h-full flex justify-center items-center group z-20">
        <Image
          src={jersey}
          alt="dog jersey"
          fill
          className="object-cover rounded-md opacity-100 group-hover:opacity-0 group-hover:hidden
          "
        />
        <Link
          href={"#"}
          className=" flex flex-col items-center justify-center gap-2
         opacity-0 group-hover:opacity-100 
        "
        >
          <p className="text-tprimary text-base tablet:text-lg tabletXL:text-xl">
            {name}
          </p>
          <p className="text-primary text-base tablet:text-lg tabletXL:text-xl">
            {`$${price}`}
          </p>
          <button
            // href={"#"}
            className="flex items-center justify-center gap-2  hover:scale-105 transition-transform"
          >
            <p className="text-base text-primary font-light">Add to Cart</p>
            <i className="fa-solid fa-paw text-primary rotate-90 mt-1"></i>
          </button>

          <div className="bg-white rounded-full w-[70%] h-[70%] absolute -z-10 group-hover:animate-spread_70"></div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
