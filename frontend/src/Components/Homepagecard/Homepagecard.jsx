// import React from 'react';
// import img from './image.avif';
// import './Homepagecard.css';

// function Homepagecard() {
//   return (
//     <div>

// <div className="home-content">
//         <div   className="left-content">
//           <h1 className='left-content-title-1'>Lazy_Luggage</h1>
//           <h2 className='left-content-title-2'>Splash</h2>
//           <h2 className='left-content-title-3'>Mens</h2>
//         </div>

//         <div className="right-content">
//           <img className='image' src={img} alt="" />
//         </div>

        
//       </div>    
//     </div>
//   )
// }

// export default Homepagecard


import React from 'react';
import img from './image2.jpeg';
import './Homepagecard.css';

function Homepagecard() {
  return (
    <div className="home-content">
      <div className="left-content">
        <div className='left-sticky'>
        <h1 className="left-content-title-1">Lazy Luggage</h1>
        <h1 className="left-content-title-2">Splash</h1>
        <h2 className="left-content-title-3">Mens</h2>
        </div>
      </div>
      <div className="right-content">
        <img className="image" src={img} alt="Product" />
      </div>
    </div>
  );
}

export default Homepagecard;
