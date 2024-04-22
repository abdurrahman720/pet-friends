import React from "react";
import Copyright from "./Copyright/Copyright";
import ComponentLayout from "../../Layout/ComponentLayout";
import Image from "next/image";
import FooterCard from "./Footercard/FooterCard";
import Ipost1 from "/public/assets/images/InstagramPosts/1.jpg";
import Ipost2 from "/public/assets/images/InstagramPosts/2.jpg";
import Ipost3 from "/public/assets/images/InstagramPosts/3.jpg";
import Ipost4 from "/public/assets/images/InstagramPosts/4.jpg";
import Ipost5 from "/public/assets/images/InstagramPosts/5.jpg";
import Ipost6 from "/public/assets/images/InstagramPosts/6.jpg";

type Props = {};

const Footer = (props: Props) => {
  const topLinks = [
    {
      title: "How it’s Work",
      path: "#",
    },
    {
      title: "Partners",
      path: "#",
    },
    {
      title: "Testimonials",
      path: "#",
    },
    {
      title: "Case Studies",
      path: "#",
    },
    {
      title: "Pricing",
      path: "#",
    },
  ];

  const info = [
    {
      title: "+123 456 7890",
      icon: "fa-phone-volume",
      path: "#",
    },
    {
      title: "info@corporatespectra.com",
      icon: "fa-envelope",
      path: "#",
    },
    {
      title: "123 Business Avenue, Metropolitan City, Australia.",
      icon: "fa-location-dot",
      path: "#",
    },
  ];

  const collage = [
    {
      image: Ipost1,
    },
    {
      image: Ipost2,
    },
    {
      image: Ipost3,
    },
    {
      image: Ipost4,
    },
    {
      image: Ipost5,
    },
    {
      image: Ipost6,
    },
  ];

  return (
    <div className="">
      <ComponentLayout>
        <div className=" grid grid-cols-2  laptop:grid-cols-4 gap-2 tablet:gap-16  place-items-center tablet:place-items-start mb-10 tabletXL:mb-28">
          <div className="col-span-2 tablet:col-span-1 laptop:col-span-1">
            <div className="w-full tablet:w-3/4 flex flex-col justify-center items-center tablet:justify-start tablet:items-start gap-5">
              <h2 className="text-4xl text-primary font-bold">Pet Friends</h2>
              <p className="text-gray-500 text-center tablet:text-start text-sm font-sans font-light focus:bg-primary">
                PawFriends is a ready-to go basis for your site & a theme that’s
                sure to be your new best friend.
              </p>

              <div className=" flex">
                <i className="fa-brands fa-facebook-f bg-secondary p-2 rounded-full  text-primary text-[20px]  mr-3"></i>
                <i className="fa-brands fa-x-twitter bg-secondary p-2 rounded-full  text-primary text-[20px]  mr-3"></i>
                <i className="fa-brands fa-instagram bg-secondary p-2 rounded-full  text-primary text-[20px]  mr-3"></i>
              </div>
            </div>
          </div>
          <FooterCard title={"Useful Links"}>
            <div className="grid grid-cols-1 gap-2  ">
              {topLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  className="text-gray-500 font-sans font-extralight hover:text-primary"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </FooterCard>
          <FooterCard title={"My Account"}>
            <div className="grid grid-cols-1 gap-2  ">
              {topLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  className="text-gray-500 font-sans font-extralight hover:text-primary"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </FooterCard>
          <div className="col-span-2 tablet:col-span-1">
            <FooterCard title={"Instagram Posts"}>
              <div className="grid grid-cols-3 gap-4">
                {collage.map((item, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-[5px] h-[80px]"
                  >
                    <Image
                      className="object-cover w-full h-full"
                      src={item.image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </FooterCard>
          </div>
        </div>
      </ComponentLayout>
      <Copyright />
    </div>
  );
};

export default Footer;
