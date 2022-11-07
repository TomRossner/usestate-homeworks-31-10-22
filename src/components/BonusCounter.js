import { useState } from "react";
import "../index.css";
import Button from "./Button";
import Counter from "./Counter";

const NewCounter = ({configurations}) => {

    const [counterList, setCounterList] = useState([]);
    const addCounter = () => {
        setCounterList(counterList.concat(<Counter configurations={configurations} key={counterList.length}/>))
    };
    return (
        <div className="new-counter">
            <Button onClick={addCounter}>Submit</Button>
            <div className="results-container">
                {counterList}
            </div>
        </div>
    )
}

export default NewCounter;