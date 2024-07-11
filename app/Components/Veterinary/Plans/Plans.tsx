import React from 'react'
import PlanCard from './PlanCard';

type Props = {}

const Plans = (props: Props) => {
  return (
    <div className="flex flex-col tabletXL:flex-row justify-between items-center gap-5 h-104">
     <PlanCard/>
     <PlanCard/>
     <PlanCard/>
    </div>
  );
}

export default Plans