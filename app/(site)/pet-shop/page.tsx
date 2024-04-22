import ComponentLayout from '@/app/Components/Layout/ComponentLayout'
import Banner from '@/app/Components/PetShop/Banner/Banner'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
      <div>
          <ComponentLayout>
          <Banner/>
          </ComponentLayout> 
    </div>
  )
}

export default Page