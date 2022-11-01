import "../index.css";

const Button = ({onClick}) => {
    return (
            <button className="btn" onClick={onClick}>Submit</button>
    )

}

export default Button;