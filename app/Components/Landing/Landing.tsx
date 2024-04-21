import React from "react";
import ComponentLayout from "../Layout/ComponentLayout";
import Card from "./Services/Card";
import SectionHeader from "./SectionHeader";
import ProductCard from "./Product/ProductCard";
import dog from "/public/assets/images/dog.jpg";
import Team from "./Team/Team";
import sophia from "/public/assets/images/team/sophia.jpg";
import george from "/public/assets/images/team/george.jpg";
import hannah from "/public/assets/images/team/hannah.jpg";
import Gallery from "./Gallery/Gallery";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="w-full h-fit">
      <ComponentLayout>
        <div className="flex flex-col items-center justify-center tablet:flex-row gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </ComponentLayout>
      <ComponentLayout>
        <SectionHeader
          heading="Read the latest blog posts "
          subHeading="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus. "
        />

        <div className="grid grid-cols-1 tablet:grid-cols-2 tabletXL:grid-cols-2 laptop:grid-cols-4 gap-5">
          <ProductCard name="Mouse bell" rating={4} img={dog} price={58} />
          <ProductCard name="Mouse bell" rating={4} img={dog} price={58} />
          <ProductCard name="Mouse bell" rating={4} img={dog} price={58} />
          <ProductCard name="Mouse bell" rating={4} img={dog} price={58} />
          <ProductCard name="Mouse bell" rating={4} img={dog} price={58} />
          <ProductCard name="Mouse bell" rating={4} img={dog} price={58} />
        </div>
      </ComponentLayout>
      <ComponentLayout>
        <SectionHeader
          heading="Meet our wonderful team "
          subHeading="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus. "
        />
        <div className="grid grid-cols-1 tabletXL:grid-cols-2 laptop:grid-cols-3">
          <Team
            name="Sophia Lane"
            img={sophia}
            designation="Surgery, Oprthopedics"
          />
          <Team
            name="George Hart"
            img={george}
            designation="Surgery, Oprthopedics"
          />
          <Team
            name="Hannah Riley"
            img={hannah}
            designation="Surgery, Oprthopedics"
          />
        </div>
      </ComponentLayout>
      <div className="mobile:pt-10 tabletXL:pt-16 laptop:pt-20 desktop:pt-20">
        <Gallery />
      </div>
    </div>
  );
};

export default Landing;
