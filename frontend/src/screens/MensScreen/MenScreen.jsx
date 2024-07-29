import React from 'react';

import './MensScreen.css';

function MenScreen() {
  return (
    <div className='wrapper'>

      <div className='content-box' id='left-box'>
        <h2>LAZY LUGGAGE</h2> 
        <h3>MENS</h3>
        <br />
        <br />

        <div className="list-items">
          <ul>
            <li>New Arrivals</li>
            <li>Core Collection</li>
            <li>Shirting</li>
            <li>Jersey</li>
            <li>Outerwear</li>
            <li>Jeans</li>
            <li>Leather</li>
            <li>KnitWear</li>
            <li>Suting</li>
            <li>Trousers</li>
            <li>Shorts</li>
          </ul>
        </div>
      </div>
      <div className='content-box' id='right-box'>
        
      </div>
    </div>
  )
}

export default MenScreen;