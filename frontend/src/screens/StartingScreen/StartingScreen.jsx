import React from 'react'
import "./StartingScreen.css" 
import logo from './logo192.png';

export default function StartingScreen() {
  return (
    <div className="App">
      <div className="container">

        <div className='img-div'>
        <img src={logo} alt=" " className="logo" />
        </div>
        
        <div className="btn-div">
        <div className='left' ><button className="left-button" >KOREAN</button></div>
        
        <div className='right' ><button className="right-button">ENGLISH</button></div>
        </div>
      </div>

      
    </div>
  )
}
