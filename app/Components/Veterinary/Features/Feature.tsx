import React from 'react'
import Card from './Card';

type Props = {}

const Feature = (props: Props) => {
  return (
    <div className='flex flex-col tabletXL:flex-row justify-between items-center gap-5'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Feature;