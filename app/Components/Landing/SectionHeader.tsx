import React from 'react'

type Props = {
    heading: string;
    subHeading: string;
}

const SectionHeader = ({heading, subHeading}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 max-w-[650px] mx-auto text-center my-10">
      <h3 className="text-tprimary text-5xl">{heading}</h3>
      <p className='text-tsecondary font-sans font-light text-xl'>
        {" "}
        {subHeading}
      </p>
    </div>
  );
}

export default SectionHeader