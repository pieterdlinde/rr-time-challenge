import { DAYS_OF_WEEK } from "../enums/DaysOfWeek.enum";

const gameDates: {[weekDay: number]: {hour:number, minutes:number}[]} = {
    [DAYS_OF_WEEK.MONDAY]: [
        {
            hour: 12,
            minutes: 40
        },
        {
            hour: 16,
            minutes: 30
        }
    ]
};

const getNextGame = () => {
    const currentTime = new Date();
    let gameDate = new Date();
    const currentDay = currentTime.getDay();
    const gameDays = Object.keys(gameDates);
    let nextStartingTime: {hour:number, minutes:number} | null = null;
    for (const day of gameDays) {
        const d = Number.parseInt(day);
        if (d === currentDay) {
            for (const time of gameDates[d]) {
                if (time.hour > currentTime.getHours() && time.minutes > currentTime.getMinutes()) continue;
                if (!(nextStartingTime !== null && (time.hour < nextStartingTime.hour || (time.hour === nextStartingTime.hour && time.minutes < nextStartingTime.minutes)))) continue;
                nextStartingTime = time;
            }
            if (nextStartingTime !== null) break;
        }
        
    }
}

export {getNextGame, DAYS_OF_WEEK};