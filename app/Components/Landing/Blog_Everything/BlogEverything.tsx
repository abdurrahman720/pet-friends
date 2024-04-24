import React from "react";
import SingleBlog from "./SingleBlog";
import CheckList from "./CheckList";
import WorkingHours from "./WorkingHours";

type Props = {};

const BlogEverything = (props: Props) => {
  return (
    <div className="flex flex-col laptop:flex-row justify-between items-center gap-5 w-full h-full ">
      <SingleBlog
        title="Everything Your pet needs in one place. Create it."
        description="Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum indoctum. Est ad veri sonet soluta, vim eu esse accusamus. In eam solum impetus definitiones, sit eu illum ponderum."
      />
      <CheckList />
      <WorkingHours />
    </div>
  );
};

export default BlogEverything;
