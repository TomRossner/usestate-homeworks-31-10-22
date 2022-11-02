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

    const setColor = (min, max) => {
        min = Number(min);
        max = Number(max);
        if(min <= 0 && max < 20) return "lightcoral";
        if(min <= 10 && max < 50) return "lightgreen";
        if(min <= 15 && max < 100) return "lightyellow";
        if(isNaN(min) || isNaN(max)) return "black";
        else return "pink";
      }

    return (
        <div className="container">
            <div className="counter" style={{backgroundColor: `${setColor(configurations.minNum, configurations.maxNum)}`}}>{counter}</div>
            <div className="buttons-container">
                <button disabled={counter === Number(configurations.maxNum) ? true : false} onClick={add} className="btn">+</button>
                <button disabled={counter === Number(configurations.minNum) ? true : false} onClick={subtract} className="btn">-</button>
            </div>
        </div>
    )
}

export default Counter;