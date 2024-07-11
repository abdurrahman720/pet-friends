import React from "react";
import cat from "/public/assets/images/cat.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
};

const SingleBlog = ({ title, description }: Props) => {
  return (
    <div className="flex-1 flex flex-col items-center  gap-4 group mb-5 h-full">
      <div
        className="bg-neutral w-full h-[300px]  tablet:h-[400px]  flex items-center justify-center relative rounded-md
       translate-x-0 hover:translate-x-1 transition-transform hover:cursor-pointer"
      >
        <Image src={cat} alt="cat" fill className="rounded-md " />
      </div>
      <div className="flex flex-col items-start gap-4">
        <h4 className="text-2xl hover:text-primary">{title || "title"}</h4>
        <p className="font-sans font-light text-tsecondary">
          {description || "description"}
        </p>
        <Link
          href={"#"}
          className="flex items-center justify-center gap-2  hover:scale-105 transition-transform"
        >
          <h4 className="text-2xl text-primary">Read More</h4>
          <i className="fa-solid fa-paw text-primary rotate-90 mt-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
