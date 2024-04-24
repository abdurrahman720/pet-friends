import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import moreDog from "/public/assets/images/more_dog.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col laptop:flex-row justify-center w-full h-full gap-10 ">
      <div className="flex-1 w-full  ">
        <div
          className={
            "flex flex-col justify-start gap-5 h-full w-full laptop:max-w-xl"
          }
        >
          <h2 className="text-5xl text-tprimary font-bold">More About Us</h2>
          <p className="font-sans font-extralight text-tsecondary">
            Sit et legLorem ipsum dolor sit amet, est ei error insolens
            ullamcorper, ut erant aliquip quaerendum sed. Errem phaedrum id vix.
            Ea cibo nullam fuisset eam.ere alienum omittam, pri utinam nonumy
            at, malis tollit habemus est ad. Ea cibo nullam fuisset eam.
          </p>
          <div className="relative w-full h-64  tablet:h-104">
            <Image src={moreDog} alt="dog" fill className=" rounded" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <ContactForm />
      </div>
    </div>
  );
};

export default About;
