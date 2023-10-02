import { useState } from "react";
import { NumberChar } from "../types/Timer";
import "./Card.css";

type CardProps = {
    number: NumberChar,
    bottomNumber: NumberChar,
    showAnimation: boolean
}

const Card = ({number, showAnimation, bottomNumber}: CardProps) => {
    const [animationStateEnabled, setAnimationStateEnabled] = useState(false);

    const endingTopLayerAnimation = () => {
        setAnimationStateEnabled(true)
    }

    const endingBottomLayerAnimatino = () => {
        setAnimationStateEnabled(false);
    }

    return (
        <div className="card">
            <div className="bottom-layer">
                <span className={`bottom ${animationStateEnabled ? 'animate' : ''}`} onAnimationEnd={endingBottomLayerAnimatino}>{bottomNumber}</span>
                <span className="top">{bottomNumber}</span>
            </div>
            <div className="top-layer">
                <span className="bottom">{number}</span>
                <span className={`top ${showAnimation ? 'animate' : ''}`} onAnimationEnd={endingTopLayerAnimation}>{animationStateEnabled ? bottomNumber : number}</span>
            </div>
        </div>
    )
};

export default Card;