import "../index.css";

const Input = ({setConfigurations}) => {

    const {setMinNum, setMaxNum, setInitial, setSteps} = setConfigurations;
    
    return (
        <div className="inputs-container">
            <input type="number" placeholder="Min number" onInput={(e) => setMinNum(e.target.value)}></input>
            <input type="number" placeholder="Max number" onInput={(e) => setMaxNum(e.target.value)}></input>
            <input type="number" placeholder="Initial number" onInput={(e) => setInitial(e.target.value)}></input>
            <input type="number" placeholder="Steps" onInput={(e) => setSteps(e.target.value)}></input>
        </div>
    )
}

export default Input;