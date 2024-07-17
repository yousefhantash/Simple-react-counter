import React from 'react';
import Button from './Button';
import './PageButton.css';
function PageButton({photo}) {

  return (
<section className="hero">

<div className="text-container">
          <h1>Light, Fast & Powerful</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
           
          <Button button_name = "Purchase UI Kit"/>
          <Button button_name = "Learn More"/>

        </div>
        <div className="image-container">
          <img  src={photo} alt="no image" />
        </div>
</section>
  );
};

export default PageButton;