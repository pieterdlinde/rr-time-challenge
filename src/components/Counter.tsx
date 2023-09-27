import { useEffect, useState, useCallback } from "react"
import "./Counter.css";
import {getNextGame} from "../helpers/getNextGeoTasticGame";
import { DoubleNumberChar, Timer, NumberChar } from "../types/Timer";
import { TimeDurations } from "../consts/TimeDurations";

const convertNumberToTwoDigits = (number: number): DoubleNumberChar => {
    const numberString = number.toString().padStart(2, "0").split("");
    return [numberString[0] as NumberChar, numberString[1] as NumberChar];
}

const Counter = () => {
    const [date, setDate] = useState(getNextGame());
    const [counterDown, setCountDown] = useState({
        days: convertNumberToTwoDigits(0),
        hours: convertNumberToTwoDigits(0),
        minutes: convertNumberToTwoDigits(0),
        seconds: convertNumberToTwoDigits(0)
    });

    const getDifferenceInTime = useCallback((): Timer => {
        if (date !== null) {
            const t = date.valueOf() - new Date().getTime();

            let days = Math.floor(t / TimeDurations.day);
            let hours = Math.floor((t % TimeDurations.day) / TimeDurations.hour);
            let minutes = Math.floor((t % TimeDurations.hour) / TimeDurations.minute);
            let seconds = Math.floor((t % TimeDurations.minute) / TimeDurations.second);

            if (days < 0) days = 0;
            if (hours < 0) hours = 0;
            if (minutes < 0) minutes = 0;
            if (seconds < 0) seconds = 0;

            if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) setDate(getNextGame())

            return {
                days: convertNumberToTwoDigits(days),
                hours: convertNumberToTwoDigits(hours),
                minutes: convertNumberToTwoDigits(minutes),
                seconds: convertNumberToTwoDigits(seconds)
            };
        }

        return {
            days: convertNumberToTwoDigits(0),
            hours: convertNumberToTwoDigits(0),
            minutes: convertNumberToTwoDigits(0),
            seconds: convertNumberToTwoDigits(0)
        }
    }, []);

    useEffect(() => {
        const i = setInterval(() => {
            setCountDown(getDifferenceInTime());
        }, 1000);
        return () => clearInterval(i);
    }, [counterDown, getDifferenceInTime]);

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