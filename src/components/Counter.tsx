import { useEffect, useState, useCallback } from "react"
import "./Counter.css";
import {getNextGame} from "../helpers/getNextGeoTasticGame";
import { Timer } from "../types/Timer";
import { TimeDurations } from "../consts/TimeDurations";



const Counter = () => {
    const [date, setDate] = useState(new Date(new Date().getTime() + 100000));
    const [counterDown, setCountDown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

    const getDifferenceInTime = useCallback((): Timer => {
        const t = date.valueOf() - new Date().getTime();

        let days = Math.floor(t / TimeDurations.day);
        let hours = Math.floor((t % TimeDurations.day) / TimeDurations.hour);
        let minutes = Math.floor((t % TimeDurations.hour) / TimeDurations.minute);
        let seconds = Math.floor((t % TimeDurations.minute) / TimeDurations.second);

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
    }, []);

    useEffect(() => {
        getNextGame();
        const i = setInterval(() => {
            setCountDown(getDifferenceInTime());
        }, 100);

        return () => clearInterval(i);
    }, [date, getDifferenceInTime]);

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