import "../index.css";
import Counter from "./Counter";

const Div = ({configurations}) => {
    return (
        <div className="Div">
                <Counter configurations={configurations}/>
        </div>
    )
}

export default Div;