import "../index.css";
import { useState } from "react";

const Counter = ({configurations}) => {
    const {minNum, maxNum, initial, steps} = configurations;
    const [counter, setCounter] = useState(Number(initial));
    
    const add = () => {
        if (counter + Number(steps) > Number(maxNum)) return;
        else setCounter((counter) => counter + Number(steps));
    }
    const subtract = () => {
        if (counter - Number(steps) < Number(minNum)) return;
        else setCounter((counter) => counter - Number(steps));
    }

    const setColor = (min, max) => {
        min = Number(min);
        max = Number(max);
        if(min <= 0 && max < 20) return "lightcoral";
        if(min <= 10 && max < 50) return "skyblue";
        if(min <= 15 && max < 100) return "lightgreen";
        else return "pink";
      }

    return (
        <div className="container">
            <div className="counter" style={{backgroundColor: `${setColor(minNum, maxNum)}`}}>{counter}</div>
            <div className="buttons-container">
                <button disabled={counter === Number(maxNum) ? true : false} onClick={add} className="btn">+</button>
                <button disabled={counter === Number(minNum) ? true : false} onClick={subtract} className="btn">-</button>
            </div>
        </div>
    )
}

export default Counter;