import React from 'react'

type Props = {
  children:React.ReactNode
};

const ComponentLayout = ({children}: Props) => {
  return (
    <div className="w-full px-5 tablet:px-20 pt-10 tablet:pt-16 laptop:pt-20 desktop:pt-20 ">
      {children}
    </div>
  );
}

export default ComponentLayout