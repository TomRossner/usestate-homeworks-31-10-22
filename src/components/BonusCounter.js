import { useState } from "react";
import "../index.css";
import Button from "./Button";
import Counter from "./Counter";

const NewCounter = ({configurations}) => {

    const [counterList, setCounterList] = useState([]);
    const addDiv = () => {
        setCounterList(counterList.concat(<Counter configurations={configurations} key={counterList.length}/>))
    };
    return (
        <div className="new-counter">
            <Button onClick={addDiv}>Submit</Button>
            <div className="results-container">
                {counterList}
            </div>
        </div>
    )
}

export default NewCounter;