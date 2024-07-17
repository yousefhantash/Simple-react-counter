import './App.css';
import Button from './components/Button';
import ElementCard from './components/ElementCard';
import Footer from './components/Footer';
import Nav from './components/Nav';
import PageButton from './components/PageButton';
import PageComponent from './components/PageComponent';

import Icon from './img/Icon.png';
import photo1 from './img/photo1.png';
import photo2 from './img/photo2.png';
import photo3 from './img/photo3.png';
import photo4 from './img/photo4.png';
import photo5 from './img/photo5.png';

function App() {
  
  const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.";
  




  return (
    <div className="App">

     <Nav nav_button = {"By Now"}/>
     <PageButton photo={photo5}/>
     <PageComponent photo={photo1} text = {text1} heading={"Light, Fast & Powerful"}/>
     <ElementCard icon = {Icon}  photo = {photo4}/>
     <PageComponent photo={photo2} text = {text1} heading={"Light, Fast & Powerful"}/>
     <PageComponent photo={photo3} text = {text1} heading={"Light, Fast & Powerful"}>
       <Button  button_name = {"Purchase Now"}/>
     </PageComponent>
     <Footer/>
    
    </div>
    
  );
}

export default App;
