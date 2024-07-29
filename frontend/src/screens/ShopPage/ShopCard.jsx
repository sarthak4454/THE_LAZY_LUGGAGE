import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import './style.css';

function ShopCard() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const clickHandler = () => {
    console.log("Card Clicked");
    navigate("/product");
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={clickHandler}>
      <div className="right-card">
        <img
          src={isHovered ? image1 : image2}
          alt="Product"
          className="right-image"
        />
        <div className="caption">
          {isHovered ? 'It supports Floating Tencel' : 'Floating Shirt'}
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
