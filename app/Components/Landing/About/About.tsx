import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image';
import moreDog from '/public/assets/images/more_dog.jpg'

type Props = {}


const About = (props: Props) => {
  return (
    <div className="flex flex-col tabletXL:flex-row justify-center w-full relative">
      <div className="flex-1 ">
        <div className={"flex flex-col justify-start gap-5 h-full max-w-lg"}>
          <h2 className="text-5xl text-tprimary font-bold">More About Us</h2>
          <p className="font-sans font-extralight text-tsecondary">
            Sit et legLorem ipsum dolor sit amet, est ei error insolens
            ullamcorper, ut erant aliquip quaerendum sed. Errem phaedrum id vix.
            Ea cibo nullam fuisset eam.ere alienum omittam, pri utinam nonumy
            at, malis tollit habemus est ad. Ea cibo nullam fuisset eam.
          </p>
          <Image src={moreDog} alt="dog" width={500} height={500} className='absolute bottom-0 rounded'/>
        </div>
      </div>
      <div className="flex-1">
        <ContactForm />
      </div>
    </div>
  );
}

export default About