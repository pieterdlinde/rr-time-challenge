export type Timer = {
    days: DoubleNumberChar,
    hours: DoubleNumberChar,
    minutes: DoubleNumberChar,
    seconds: DoubleNumberChar
}

export type DoubleNumberChar = [NumberChar, NumberChar]

export const validDoubleChar = (arr: string[]) => arr.length === 2 && charIsNumberChar(arr[0]) && charIsNumberChar(arr[1]);

export type NumberChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export const charIsNumberChar = (char: string): boolean => !isNaN(Number.parseInt(char)) && /^\d$/.test(char);