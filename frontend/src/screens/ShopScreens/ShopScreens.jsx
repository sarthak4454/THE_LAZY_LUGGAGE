import React from 'react'
import ShopPage2 from '../ShopPage/Shoppage2';
const data = [
    {
        "product" : "Mens"
    },
    {
        "product" : "Womens"
    },
    {
        "product" : "Footwear"
    },
    {
        "product" : "Accessories"
    },
    {
        "product" : "WorkShop"
    }
]

const ShopScreens = () => {

  return (
    <div className='ShopScreens'>
        <ShopPage2 title ={data[1].product}/>
    </div>
  )
}

export default ShopScreens