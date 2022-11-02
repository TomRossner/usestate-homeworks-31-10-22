import "../index.css";
import Counter from "./Counter";

const Div = ({configurations}) => {
    const setColor = (min, max) => {
        min = Number(min);
        max = Number(max);
        if(min <= 0 && max < 20){return "lightcoral"}
        if(min <= 10 && max < 50){return "lightgreen"}
        if(min <= 15 && max < 100){return "lightyellow"}
        if(isNaN(min) || isNaN(max)){return "black"}
        else return "pink";
      }
    return (
        <div className="Div" style={{backgroundColor: `${setColor(configurations.minNum, configurations.maxNum)}`}}>
                <Counter configurations={configurations}/>
        </div>
    )
}

export default Div;