import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ShopPage2 from '../../screens/ShopPage/Shoppage2';
import MenuScreen2 from '../../screens/MenuScreen2/MenuScreen2';
import CommonNavigation from '../../Components/CommonNavigation/CommonNavigation';


const CommonMenuShopScreen = () => {
  const location = useLocation();

  return (
    <div>
      <CommonNavigation/> 

      {location.pathname === '/mens' && <ShopPage2 />}
      {location.pathname === '/womens' && <ShopPage2 />}
      {location.pathname === '/footwear' && <ShopPage2 />}
      {location.pathname === '/menu2' && <MenuScreen2 />}
    </div>
  );
};

export default CommonMenuShopScreen;
