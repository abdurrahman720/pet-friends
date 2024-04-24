import { ReactNode } from "react";
import Header from "../Components/Common/Header/Header";
import Footer from "../Components/Common/Footer/Footer";


type Props = {
  type?: "common" | "alt" | "landing";
  children: ReactNode;
};

const MainLayout = ({ type, children }: Props) => {
  return (
    <div>
      {/* <Header/> */}
      <div>{children}</div>
      <Footer />
    </div>
  );  
};

export default MainLayout;
