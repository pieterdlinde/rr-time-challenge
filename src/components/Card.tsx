import { NumberChar } from "../types/Timer";
import "./Card.css";

type CardProps = {
    number: NumberChar,
    showAnimation: boolean
}

const Card = ({number, showAnimation}: CardProps) => {   
    return (
        <div className="card">
            <span className="bottom">{number}</span>
            <span className={`top ${showAnimation ? 'animate' : ''}`}>{number}</span>
        </div>
    )
};

export default Card;