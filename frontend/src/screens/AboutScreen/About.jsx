import React from 'react';
import './About.css';
import backgroundImage from './image1.jpg';

const AboutUs = () => {
  return (
    <div 
      className="about-us" 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}
    >
      <div className="top-space"></div>
      <div className="content">
        <h2>Our Story</h2>
        <p>
          'Merely Made' advocates normalism, minimalism, and a simplistic approach.
          The brand finds the right balance and juggles between quality, innovation, and modernity.
        </p>
        <p>
          Created in 2018 by Hong Loco in Seoul, 'Merely Made's main goal is to make people look their best effortlessly.
          The garments crafted by this brand are meticulously designed using top-notch fabrics, predominantly sourced from Japan.
          With its impeccable fit, tasteful palette, and intricate silhouettes, 'Merely Made' distinguishes itself by imbuing each new collection
          with a sense of novelty, whether in the form of creative design choices or innovative fabric selection.
        </p>
        <p>
          The brand has a unique approach, where each new collection is inspired by a particular country or city from around the globe.
          Through simple and modern silhouettes, the brand is inclusive of all genders and morphologies.
        </p>
        <p>
          'Merely Made for you'
        </p>
      </div>
      <div className="bottom-space"></div>
    </div>
  );
}

export default AboutUs;
