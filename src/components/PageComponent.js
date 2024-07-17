import React from 'react';
import './PageComponent.css';

function PageComponent({ photo, heading = "no head", text= " no text" , children = "" }) {

  return (
    
       <div className='container' style={{ display: 'flex', alignItems: 'center', margin:"10px" , padding:"20px" , height: "60vh", width: "90vw" }}>
       
             <div className='image-page' style={{ flex: 1 }}>
             <img src={photo} alt="no image" style={{ width: '50%', height: 'auto' }} />
             </div>
      
             <div className='text-page' style={{ flex: 1, padding: '20px',alignItems: 'flex-end', textAlign:"left" }}>
             <h1 style={{ color:'#091133' , textAlign:"left", fontSize:"36px"}} >{heading}</h1>
             <p style={{ color:'#6F7CB2', textAlign:"left"}} >{text}</p>
             {children}
             
             </div>
          
          
        </div>

  );
};

export default PageComponent;