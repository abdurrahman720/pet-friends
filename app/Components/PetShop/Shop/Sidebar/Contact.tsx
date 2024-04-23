import Button from "@/app/Components/Common/Button";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="bg-secondary p-5 rounded-md min-h-96">
      <h3 className="text-h4 bg-white text-primary p-2 w-[60%] rounded-md">
        Register
      </h3>

      <div className="mt-8 flex flex-col gap-8">
        <input
          type="text"
          placeholder="your email..."
          className="bg-white w-full p-5 rounded placeholder:font-sans placeholder:font-light"
        />
        <input
          type="text"
          placeholder="Message..."
          className="bg-white w-full p-5 rounded placeholder:font-sans placeholder:font-light"
        />
        <Button variant="primary">Contact Us</Button>
      </div>
    </div>
  );
};

export default Contact;
