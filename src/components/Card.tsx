import { useEffect, useState } from "react";
import { NumberChar } from "../types/Timer";
import "./Card.css";
import { usePrevious } from "../hooks/usePrevious";

type CardProps = {
    number: NumberChar,
    bottomNumber: NumberChar,
}

const Card = ({number, bottomNumber}: CardProps) => {
    const [animationStateEnabled, setAnimationStateEnabled] = useState(false);
    const [animate, setAnimate] = useState(false);
    const prevNumber = usePrevious(number);

    useEffect(() => {
        setAnimationStateEnabled(false);
        setAnimate(number !== prevNumber)
    }, [number])

    const endingTopLayerAnimation = () => {
        setAnimationStateEnabled(true)
        setAnimate(false);
    }

    return (
        <div className="card">
            <div className="bottom-layer">
                <span className={`bottom ${animationStateEnabled ? 'animate' : ''}`}>{bottomNumber}</span>
                <span className="top">{bottomNumber}</span>
            </div>
            <div className="top-layer">
                <span className="bottom">{number}</span>
                <span className={`top ${animate ? 'animate' : ''}`} onAnimationEnd={endingTopLayerAnimation}>{animationStateEnabled ? bottomNumber : number}</span>
            </div>
        </div>
    )
};

export default Card;