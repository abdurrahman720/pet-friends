import ComponentLayout from '@/app/Components/Layout/ComponentLayout'
import Banner from '@/app/Components/PetShop/Banner/Banner'
import ClothGallery from '@/app/Components/PetShop/ClothingLine/ClothGallery'
import Sale from '@/app/Components/PetShop/Sale/Sale'
import Shop from '@/app/Components/PetShop/Shop/Shop'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div>
      <ComponentLayout>
        <Banner />
      </ComponentLayout>
      <ComponentLayout>
        <Shop />
      </ComponentLayout>
      <ComponentLayout>
        <Sale />
      </ComponentLayout>
      <ComponentLayout>
        <ClothGallery />
      </ComponentLayout>
    </div>
  );
}

export default Page