import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CommonNavigation.css';

const CommonNavigation = () => {
 const location = useLocation();
  return (
    <div className="CommonScreen">
      <ul className='common-screen-list'>
        

        { location.pathname === '/mens' && (<li><Link to="/mens">MENS</Link></li>) }
        { location.pathname === '/womens' && (<li><Link to="/womens">WOMENS</Link></li>) }
        { location.pathname === '/footwear' && (<li><Link to="/footwear">FOOTWEAR</Link></li>) }


      </ul>
    </div>
  );
};

export default CommonNavigation;
