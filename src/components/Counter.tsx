import { useEffect, useState, useCallback } from "react";
import "./Counter.css";
import { getNextGame } from "../helpers/getNextGeoTasticGame";
import { DoubleNumberChar, Timer, NumberChar } from "../types/Timer";
import { ChangedTime } from "../types/ChangedTime";
import { TimeDurations } from "../consts/TimeDurations";
import Card from "./Card";
import { getOneSecondBelowTimer } from "../helpers/getOneSecondBelow";

const convertNumberToTwoDigits = (number: number): DoubleNumberChar => {
  const numberString = number.toString().padStart(2, "0").split("");
  return [numberString[0] as NumberChar, numberString[1] as NumberChar];
};

const Counter = () => {
  const [date, setDate] = useState(getNextGame());
  const [counterDown, setCountDown] = useState({
    days: convertNumberToTwoDigits(0),
    hours: convertNumberToTwoDigits(0),
    minutes: convertNumberToTwoDigits(0),
    seconds: convertNumberToTwoDigits(0),
  } as Timer);

  const [secondCounterDown, setSecondCounterDown] = useState({
    days: convertNumberToTwoDigits(0),
    hours: convertNumberToTwoDigits(0),
    minutes: convertNumberToTwoDigits(0),
    seconds: convertNumberToTwoDigits(0),
  } as Timer);

  const [changedNumber, setChangedNumber] = useState({
    days: [false, false],
    hours: [false, false],
    minutes: [false, false],
    seconds: [false, false],
  } as ChangedTime);

  const getDifferenceInTime = useCallback((): Timer => {
    if (date !== null) {
      const t = date.valueOf() - new Date().getTime();

      let days = Math.floor(t / TimeDurations.day);
      let hours = Math.floor((t % TimeDurations.day) / TimeDurations.hour);
      let minutes = Math.floor((t % TimeDurations.hour) / TimeDurations.minute);
      let seconds = Math.floor(
        (t % TimeDurations.minute) / TimeDurations.second
      );

      if (days < 0) days = 0;
      if (hours < 0) hours = 0;
      if (minutes < 0) minutes = 0;
      if (seconds < 0) seconds = 0;

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0)
        setDate(getNextGame());

      return {
        days: convertNumberToTwoDigits(days),
        hours: convertNumberToTwoDigits(hours),
        minutes: convertNumberToTwoDigits(minutes),
        seconds: convertNumberToTwoDigits(seconds),
      };
    }

    return {
      days: convertNumberToTwoDigits(0),
      hours: convertNumberToTwoDigits(0),
      minutes: convertNumberToTwoDigits(0),
      seconds: convertNumberToTwoDigits(0),
    };
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      const difference = getDifferenceInTime();
      const currentDifference = counterDown;
      const changed: ChangedTime = {
        days: [
          difference.days[0] !== currentDifference.days[0],
          difference.days[1] !== currentDifference.days[1]
        ],
        hours: [
          difference.hours[0] !== currentDifference.hours[0],
          difference.hours[1] !== currentDifference.hours[1]
        ],
        minutes: [
          difference.minutes[0] !== currentDifference.minutes[0],
          difference.minutes[1] !== currentDifference.minutes[1]
        ],
        seconds: [
          difference.seconds[0] !== currentDifference.seconds[0], 
          difference.seconds[1] !== currentDifference.seconds[1]]
      };

      setChangedNumber(changed);

      setCountDown(difference);
      setSecondCounterDown(getOneSecondBelowTimer(difference));
      
      setTimeout(() => {
        setChangedNumber({
          days: [false, false],
          hours: [false, false],
          minutes: [false, false],
          seconds: [false, false],
        });
      }, 750);
    }, 1000);
    return () => clearInterval(i);
  }, [counterDown, getDifferenceInTime]);

  return (
    <div className="counterDiv">
      <div className="doublecard days">
        <Card
          number={counterDown.days[0]}
          showAnimation={changedNumber.days[0]}
          bottomNumber={secondCounterDown.days[0]}
        />
        <Card
          number={counterDown.days[1]}
          showAnimation={changedNumber.days[1]}
          bottomNumber={secondCounterDown.days[1]}
        />
      </div>
      <div className="doublecard hours">
        <Card
          number={counterDown.hours[0]}
          showAnimation={changedNumber.hours[0]}
          bottomNumber={secondCounterDown.hours[0]}
        />
        <Card
          number={counterDown.hours[1]}
          showAnimation={changedNumber.hours[1]}
          bottomNumber={secondCounterDown.hours[1]}
        />
      </div>
      <div className="doublecard minutes">
        <Card
          number={counterDown.minutes[0]}
          showAnimation={changedNumber.minutes[0]}
          bottomNumber={secondCounterDown.minutes[0]}
        />
        <Card
          number={counterDown.minutes[1]}
          showAnimation={changedNumber.minutes[1]}
          bottomNumber={secondCounterDown.minutes[1]}
        />
      </div>
      <div className="doublecard seconds">
        <Card
          number={counterDown.seconds[0]}
          showAnimation={changedNumber.seconds[0]}
          bottomNumber={secondCounterDown.seconds[0]}
        />
        <Card
          number={counterDown.seconds[1]}
          showAnimation={changedNumber.seconds[1]}
          bottomNumber={secondCounterDown.seconds[1]}
        />
      </div>
    </div>
  );
};

export default Counter;
