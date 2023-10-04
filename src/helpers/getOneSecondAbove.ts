import { ClockType } from "../enums/ClockType"
import { DoubleNumberChar, NumberChar, Timer } from "../types/Timer"

const getNewPositiveNumber = (char: NumberChar, resetTo: number): NumberChar => {
    let intNumber = Number.parseInt(char);
    intNumber++;
    if (intNumber > resetTo) intNumber = 0;
    return String(intNumber) as NumberChar;
}

const getNewPositiveNumberFromDouble = (chars: DoubleNumberChar, resetTo: number): DoubleNumberChar => {
    const newSecondNumber = getNewPositiveNumber(chars[1], 9);
    let firstNumber = chars[0];
    if (newSecondNumber === '0') firstNumber = getNewPositiveNumber(chars[0], resetTo);
    return [firstNumber, newSecondNumber];
}

const getOneSecondAbove = (currentTime: DoubleNumberChar, type: ClockType): DoubleNumberChar => {
    switch (type) {
        case ClockType.DAY:
            return getNewPositiveNumberFromDouble(currentTime, 9);
        case ClockType.HOUR:
            return getNewPositiveNumberFromDouble(currentTime, 6);
        case ClockType.MINUTE:
            return getNewPositiveNumberFromDouble(currentTime, 6);
        case ClockType.SECOND:
            return getNewPositiveNumberFromDouble(currentTime, 6);
    }
}

export const getOneSecondAboveTimer = (currentTime: Timer) => {
    return {
        days: getOneSecondAbove(currentTime.days, ClockType.DAY),
        hours: getOneSecondAbove(currentTime.hours, ClockType.HOUR),
        minutes: getOneSecondAbove(currentTime.minutes, ClockType.MINUTE),
        seconds: getOneSecondAbove(currentTime.seconds, ClockType.SECOND)
    };
}