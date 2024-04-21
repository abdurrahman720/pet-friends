import React from 'react'

type Props = {
  children:React.ReactNode
};

const ComponentLayout = ({children}: Props) => {
  return (
    <div className="w-full mobile:px-[20px] mobile:pt-10 tabletXL:pt-16 laptop:pt-20 desktop:pt-20 tabletXL:px-[40px] desktop:px-[70px] desktopXL:px-[80px]">
      {children}
    </div>
  );
}

export default ComponentLayout