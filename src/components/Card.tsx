import { forwardRef, useImperativeHandle } from "react";
import { NumberChar } from "../types/Timer";
import "./Card.css";

type CardProps = {
    number: NumberChar
}

const Card = forwardRef(({number}: CardProps, ref) => {
    const animate = () => {
        // silence is golden
    }

    useImperativeHandle(ref, () => ({
        animate
    }))

    return (
        <div className="card">
            <span className="top">{number}</span>
            <span className="bottom">{number}</span>
        </div>
    )
});

export default Card;