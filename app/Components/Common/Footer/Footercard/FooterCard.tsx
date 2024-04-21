import { ReactNode } from "react";

type Props = {
    title: string;
    children:ReactNode
}

const FooterCard = ({title,children}: Props) => {
  return (
    <div className="mobile:mt-5 laptop:mt-0 col-span-1">
      <div>
        <p className="text-xl laptop:text-2xl desktopXL:text-3xl font-bold text-gray-500">
          {title}
        </p>
      
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default FooterCard