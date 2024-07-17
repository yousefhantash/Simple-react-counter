import React from 'react';
import Button from './Button';
import './Nav.css';

function Nav({nav_button}) {

  return (
    <nav>
    <ul>
       <li><a href="#">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Contact</a></li>
    </ul> 
    <h1 className='landing'>Landing</h1>
    <Button button_name = {nav_button}/>
    


    </nav>
  );
};

export default Nav;