import React from 'react';
import './ElementCard.css';

function ElementCard({icon ,photo}) {

  return (
<section className="hero">

<div className="text-container">
          <h1>Light, Fast & Powerful</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <div className="features">
            <div className="feature">
              <img src={icon} alt="Icon" />
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
            <div className="feature">
              <img src={icon} alt="Icon" />
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={photo} alt="Illustration" />
        </div>
</section>
  );
};

export default ElementCard;