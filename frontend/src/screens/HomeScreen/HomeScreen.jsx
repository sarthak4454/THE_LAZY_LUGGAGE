// import React from 'react';
// import img from './image2.jpeg';
// import './HomeScreen.css';
// import Homepagecard from '../../Components/Homepagecard/Homepagecard';


// function HomeScreen() {
//   return (
//     <>
//     <div className="Home-Screen">
//       <div className='image-container'>
//       <img  src={img} alt="main-image" width={1600} height={720}/>
//       </div>
//       <h1 className='tag-line'>
//        OOH, THAT'S LAZY AF***
//       </h1>
//       <Homepagecard />
//       <Homepagecard />
//       <Homepagecard />
      
//     </div>
  
//     </>
//   );
// }

// export default HomeScreen;

//  {/* <div className="left-container">
//           {/* <img className="home-img" src={img} alt="Left" /> */}
//           // </div>
//           // <div className="right-container">
//             {/* <img className="home-img" src={img} alt="Right" /> */}
//           // {/* </div> */}
//           // } */

import React from 'react';
import img from './image2.jpeg';
import './HomeScreen.css';
import Homepagecard from '../../Components/Homepagecard/Homepagecard';
import Header from '../../Components/Header/Header'; // Import Header

function HomeScreen() {
  return (
    <>
      {/* <Header /> Add Header component here */}
      <div className="Home-Screen">
        <div className='image-container'>
          <img src={img} alt="main-image" width={1600} height={720} />
        </div>
        <h1 className='tag-line'>
          OOH, THAT'S LAZY AF***
        </h1>
        <Homepagecard />
        <Homepagecard />
        <Homepagecard />
      </div>
    </>
  );
}

export default HomeScreen;
