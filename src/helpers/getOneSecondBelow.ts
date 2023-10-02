import { ClockType } from "../enums/ClockType"
import { DoubleNumberChar, NumberChar, Timer } from "../types/Timer"

const getNewPositiveNumber = (char: NumberChar, resetTo: number): NumberChar => {
    let intNumber = Number.parseInt(char);
    intNumber--;
    if (intNumber < 0) intNumber = resetTo;
    return String(intNumber) as NumberChar;
}

const getNewPositiveNumberFromDouble = (chars: DoubleNumberChar, resetTo: number): DoubleNumberChar => {
    const newSecondNumber = getNewPositiveNumber(chars[1], 9);
    let firstNumber = chars[0];
    if (newSecondNumber === '9') firstNumber = getNewPositiveNumber(chars[0], resetTo);
    return [firstNumber, newSecondNumber];
}

const getOneSecondBelow = (currentTime: DoubleNumberChar, type: ClockType): DoubleNumberChar => {
    switch (type) {
        case ClockType.DAY:
            return getNewPositiveNumberFromDouble(currentTime, 9);
        case ClockType.HOUR:
            return getNewPositiveNumberFromDouble(currentTime, 5);
        case ClockType.MINUTE:
            return getNewPositiveNumberFromDouble(currentTime, 5);
        case ClockType.SECOND:
            return getNewPositiveNumberFromDouble(currentTime, 5);
    }
}

export const getOneSecondBelowTimer = (currentTime: Timer) => {
    return {
        days: getOneSecondBelow(currentTime.days, ClockType.DAY),
        hours: getOneSecondBelow(currentTime.hours, ClockType.HOUR),
        minutes: getOneSecondBelow(currentTime.minutes, ClockType.MINUTE),
        seconds: getOneSecondBelow(currentTime.seconds, ClockType.SECOND)
    };
}