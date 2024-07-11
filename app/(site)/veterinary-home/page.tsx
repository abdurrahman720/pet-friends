import Team from "@/app/Components/Common/Team/Team";
import SectionHeader from "@/app/Components/Landing/SectionHeader";
import ComponentLayout from "@/app/Components/Layout/ComponentLayout";
import BlogBanner from "@/app/Components/Veterinary/BlogBanner/BlogBanner";
import Feature from "@/app/Components/Veterinary/Features/Feature";
import mary from "/public/assets/images/team/mary.jpg";
import clark from "/public/assets/images/team/clark.jpg";
import sandra from "/public/assets/images/team/sandra.jpg";
import blog1 from "/public/assets/images/blog/1.jpg";
import blog2 from "/public/assets/images/blog/2.jpg";
import blog3 from "/public/assets/images/blog/3.jpg";
import BlogCard from "@/app/Components/Common/Blog/BlogCard";
import Plans from "@/app/Components/Veterinary/Plans/Plans";

type Props = {};

const VeterinaryHome = (props: Props) => {
  return (
    <div>
      <ComponentLayout>
        <Feature />
      </ComponentLayout>
      <div className="mobile:pt-10 tabletXL:pt-16 laptop:pt-20 desktop:pt-20 ">
        <BlogBanner />
      </div>
      <ComponentLayout>
        <SectionHeader
          heading="Team of amazing experts
"
          subHeading="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus."
        />
        <div className="grid grid-cols-1 tabletXL:grid-cols-2 laptop:grid-cols-3 gap-3">
          <Team
            name="Mary Rodgers"
            img={mary}
            designation="Surgery, Oprthopedics"
          />
          <Team
            name="Clark Hudson"
            img={clark}
            designation="Surgery, Oprthopedics"
          />
          <Team
            name="Sandra Kohn"
            img={sandra}
            designation="Surgery, Oprthopedics"
          />
        </div>
      </ComponentLayout>
      <ComponentLayout>
        <SectionHeader
          heading="Check out our health tips"
          subHeading="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus. "
        />
        <div className="grid grid-cols-1 tabletXL:grid-cols-2 laptop:grid-cols-3">
          <BlogCard
            title="Understanding The Five Senses of Your Dog"
            description="Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei"
            img={blog1}
          />
          <BlogCard
            title="How Can You Tell if Dogs are Playing or Fighting?"
            description="Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei"
            img={blog2}
          />
          <BlogCard
            title="7 Surprising Ways that Dogs Show Affection"
            description="Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei"
            img={blog3}
          />
        </div>
      </ComponentLayout>
      <ComponentLayout>
        <SectionHeader
          heading="Choose monthly or anual plans"
          subHeading="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus. "
              />
              <Plans/>
      </ComponentLayout>
    </div>
  );
};

export default VeterinaryHome;
