import React from 'react';
import './style.css';
import ShopCard from './ShopCard';
import CommonMenuShopScreen from '../CommonMenuShopScreen/CommonMenuShopScreen';

function ShopPage2(props) {
  const { title } = props;

  return (
    <div className="shoppage">
      <div id="left">
        {/* <CommonMenuShopScreen /> */}
        {/* <CommonMenuShopScreen /> */}
        <div className="shop-items">
          <h3>New Arrivals</h3>
          <ul className="list-type">
            {[
              'Core Collection',
              'Shirting',
              'Jersey',
              'Outerwear',
              'Jeans',
              'Leather',
              'Knitwear',
              'Suiting',
              'Trousers',
              'Shorts',
            ].map((item, index) => (
              <li key={index} className="list-items">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div id="right">
        {Array.from({ length: 8 }).map((_, index) => (
          <ShopCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage2;
