export class TimeDurations {
    static readonly second: number = 1000;
    static readonly minute: number = 60 * this.second;
    static readonly hour: number = 60 * this.minute;
    static readonly day: number = 24 * this.hour;
    static readonly week: number = 7 * this.day;
}