import { useState } from "react";
import './style.css';

function Counter() {

const [count , setCount] = useState(0);

function increment(){
    setCount(count + 1);
}

function decrement(){
    setCount(count - 1);
}

function reset(){
    setCount(0);
}

return (
    <>  
        <div className="container">
            <h1 className="title">React simple counter project</h1>
            <h1 className="number">{count}</h1>
        </div>
        <section className="btns-container">
            <button onClick={increment} className="btn">+</button> 
            <button onClick={reset} className="btn">reset</button> 
            <button onClick={decrement} className="btn">-</button> 
        </section>
    </>
)
}

export default Counter
