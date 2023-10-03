export type Timer = {
    days: DoubleNumberChar,
    hours: DoubleNumberChar,
    minutes: DoubleNumberChar,
    seconds: DoubleNumberChar
}

export const TimerEquals = (a: Timer, b: Timer): boolean => DoubleNumberCharEquals(a.days, b.days) && DoubleNumberCharEquals(a.hours, b.hours) && DoubleNumberCharEquals(a.minutes, b.minutes) && DoubleNumberCharEquals(a.seconds, b.seconds);

export type DoubleNumberChar = [NumberChar, NumberChar]

export const DoubleNumberCharEquals = (a: DoubleNumberChar, b: DoubleNumberChar): boolean => NumberCharEquals(a[0], b[0]) && NumberCharEquals(a[1], b[1]);

export const validDoubleChar = (arr: string[]) => arr.length === 2 && charIsNumberChar(arr[0]) && charIsNumberChar(arr[1]);

export type NumberChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export const NumberCharEquals = (a: NumberChar, b: NumberChar): boolean => a === b;

export const charIsNumberChar = (char: string): boolean => !isNaN(Number.parseInt(char)) && /^\d$/.test(char);