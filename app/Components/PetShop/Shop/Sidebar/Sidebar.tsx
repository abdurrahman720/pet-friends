import React from 'react'
import Categories from './Categories';
import RelatedProducts from './RelatedProducts';
import Contact from './Contact';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className="grid grid-rows-3 gap-10">
      <Categories />
    <RelatedProducts/>
    <Contact/>
    </div>
  );
}

export default Sidebar