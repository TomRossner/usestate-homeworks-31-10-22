import "../index.css";
import { useState } from "react";

const Counter = ({configurations}) => {
    const [counter, setCounter] = useState(0);
    const add = () => {
        if (counter === Number(configurations.maxNum)) return;
        else setCounter((counter) => counter + Number(configurations.steps));
    }
    const subtract = () => {
        if (counter === Number(configurations.minNum)) return;
        else setCounter((counter) => counter - Number(configurations.steps));
    }

    return (
        <div className="container">
            <div className="counter">{counter}</div>
            <div className="buttons-container">
            <button disabled={counter === Number(configurations.maxNum) ? true : false} onClick={add} className="btn">+</button>
            <button disabled={counter === Number(configurations.minNum) ? true : false} onClick={subtract} className="btn">-</button>
            </div>
        </div>
    )
}

export default Counter;