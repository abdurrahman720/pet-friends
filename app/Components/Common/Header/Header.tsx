import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const navLinks = [
    {
      label: "Home",
      path: "/",
      icon: "fa-solid fa-caret-down",
    },
    {
      label: "Pages",
      path: "/about",
      icon: "fa-solid fa-caret-down",
    },
    {
      label: "Shop",
      path: "/services",
      icon: "fa-solid fa-caret-down",
    },
    {
      label: "Blog",
      path: "/team",
      icon: "fa-solid fa-caret-down",
    },
    {
      label: "Portfolio",
      path: "/contact",
      icon: "fa-solid fa-caret-down",
    },
  ];

  return (
    <div className="bg-white flex justify-between items-center p-8 border border-b-gray-300 sticky top-0 z-10">
      <div className="flex justify-center items-center  gap-5">
        <h2 className="text-4xl text-primary font-bold">Pet Friends</h2>
        {navLinks.map((item, i) => (
          <Link
            href={item.path}
            className="flex items-center mx-3 group text-3xl"
            key={i}
          >
            <p className=" group-hover:text-white font-extrabold  text-sm uppercase  transition-all delay-150 group-hover:bg-primary group-hover:p-2 rounded-md">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div>
          <Link
            href={"#"}
            className="flex justify-center items-center mx-3 group text-3xl gap-1"
          >
            <p className=" group-hover:text-white font-extrabold  text-sm uppercase  transition-all delay-150 group-hover:bg-primary group-hover:p-2 rounded-md">
              Search
            </p>
            <i className="fa-solid fa-magnifying-glass" />
          </Link>
        </div>
        <div>
          <Link
            href={"#"}
            className="flex items-center mx-3 group text-3xl gap-1"
          >
            <p className=" group-hover:text-white font-extrabold  text-sm uppercase  transition-all delay-150 group-hover:bg-primary group-hover:p-2 rounded-md">
              wishList
            </p>
            <i className="fa-regular fa-heart" />
          </Link>
        </div>
        <div>
          <Link href={"#"} className="flex items-center mx-3 group text-3xl">
            <i className="fa-solid fa-ellipsis" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
