import React from 'react';
import './Button.css';

export default function Button({button_name}) {

  return (
    <button className='button'>
     {button_name}
    </button>
  );
};