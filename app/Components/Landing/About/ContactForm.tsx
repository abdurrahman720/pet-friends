import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="bg-primary flex flex-col  gap-4 h-full p-10 rounded">
      <h3 className="text-3xl text-white">
        Feel Free to ask <span className="text-primary bg-white">Anything</span>
      </h3>
      <p className="text-white font-sans font-light text-base">
        Sit et legLorem ipsum dolor sit amet, est ei error insolens ullamcorper,
        ut erant aliquip quaerendum sed.
      </p>
      <input
        type="text"
        placeholder="your email..."
        className="bg-white w-full p-5 rounded placeholder:font-sans placeholder:font-light"
      />
      <textarea
        placeholder="Message..."
        rows={4}
        cols={4}
        className="bg-white w-full p-5 rounded placeholder:font-sans placeholder:font-light"
      />
      <button className="bg-white w-32 p-3 text-primary rounded">Contact Us</button>
    </div>
  );
};

export default ContactForm;
