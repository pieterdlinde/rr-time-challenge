import { useEffect, useState } from "react"
import "./Counter.css";

type Timer = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

const Counter = () => {
    const [date, setDate] = useState(new Date(new Date().getTime() + 100000));
    const [counterDown, setCountDown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

    const getDifferenceInTime = (): Timer => {
        const t = date.valueOf() - new Date().getTime();

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);

        if (days < 0) days = 0;
        if (hours < 0) hours = 0;
        if (minutes < 0) minutes = 0;
        if (seconds < 0) seconds = 0;

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    useEffect(() => {
        const i = setInterval(() => {
            setCountDown(getDifferenceInTime());
        }, 100);

        return () => clearInterval(i);
    });

    return (
        <div className="counterDiv">
            <div className="countItem">{counterDown.days}</div>
            <div className="countItem">{counterDown.hours}</div>
            <div className="countItem">{counterDown.minutes}</div>
            <div className="countItem">{counterDown.seconds}</div>
        </div>
    )
}

export default Counter;