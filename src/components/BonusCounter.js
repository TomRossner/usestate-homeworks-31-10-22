import { useState } from "react";
import "../index.css";
import Button from "./Button";
import Counter from "./Counter";

const NewCounter = ({configurations}) => {

    const [inputList, setInputList] = useState([])
    const addDiv = () => {
        setInputList(inputList.concat(<Counter configurations={configurations} key={inputList.length}/>))
    };
    return (
        <div className="new-counter">
            <Button onClick={addDiv}>Submit</Button>
            <div className="results-container">
                {inputList}
            </div>
        </div>
    )
}

export default NewCounter;