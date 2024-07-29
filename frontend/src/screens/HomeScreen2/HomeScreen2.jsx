import React from 'react';
import img from './image2.jpg';
import './HomeScreen2.css';

const HomeScreen2 = () => {
  return (
    <div className="HomeScreen2">
        <div className='image-container'>
          <img src={img} alt="main-image" className="image-main"/>
        </div>

           <h1 className="tagline-heading">OOH, THAT'S LAZY AF***</h1>

         <div className='image-grid'>

           <div className="flex-cards">
              <img src={img} alt="" className='flex-cards-image' />
            </div>

            <div className="flex-cards">
            <img src={img} alt="" className='flex-cards-image' />
</div>
<div className="flex-cards">
<img src={img} alt="" className='flex-cards-image' />
</div>
<div className="flex-cards">
<img src={img} alt="" className='flex-cards-image' />
</div>
<div className="flex-cards">
<img src={img} alt="" className='flex-cards-image' />
</div>
<div className="flex-cards">
<img src={img} alt="" className='flex-cards-image' />
</div>


         </div>




    </div>
  )
}

export default HomeScreen2