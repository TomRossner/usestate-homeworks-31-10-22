import { useState } from "react";
import "../index.css";
import Div from "./Div";
import Button from "./Button";

const NewCounter = ({configurations}) => {

    const [inputList, setInputList] = useState([])
    const addDiv = () => {
        setInputList(inputList.concat(<Div configurations={configurations} key={inputList.length}/>))
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