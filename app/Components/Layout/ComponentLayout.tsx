import React from 'react'

type Props = {
  children:React.ReactNode
};

const ComponentLayout = ({children}: Props) => {
  return (
    <div className="w-full mobile:px-[20px] mobile:pt-10 tabletXL:pt-16 laptop:pt-20 desktop:pt-20 tabletXL:px-[60px] desktop:px-[100px] desktopXL:px-[200px]">
      {children}
    </div>
  );
}

export default ComponentLayout