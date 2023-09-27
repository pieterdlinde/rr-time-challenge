import { IndexOutOfBoundsException } from "../exceptions/IndexOutOfBoundsException";

export enum DaysOfWeek {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
}

export class DaysOfWeekUtil {
    static getNextDay(currentDay: DaysOfWeek): DaysOfWeek {
        const currentIndex = this.getIndexFromDay(currentDay);
        const newIndex = (currentIndex + 1)  % 7;
        return this.getDayFromIndex(newIndex);
    }

    static getDayFromIndex(index: number): DaysOfWeek {
        switch (index) {
            case 0:
                return DaysOfWeek.SUNDAY
            case 1:
                return DaysOfWeek.MONDAY;
            case 2:
                return DaysOfWeek.TUESDAY;
            case 3:
                return DaysOfWeek.WEDNESDAY;
            case 4:
                return DaysOfWeek.THURSDAY;
            case 5:
                return DaysOfWeek.FRIDAY;
            case 6:
                return DaysOfWeek.SATURDAY;
            default:
                throw new IndexOutOfBoundsException(`Index: ${index} does not exists on enum DaysOfWeek`);
        }
    }

    static getIndexFromDay(day: DaysOfWeek): number {
        switch(day) {
            case DaysOfWeek.SUNDAY:
                return 0;
            case DaysOfWeek.MONDAY:
                return 1;
            case DaysOfWeek.TUESDAY:
                return 2;
            case DaysOfWeek.WEDNESDAY:
                return 3;
            case DaysOfWeek.THURSDAY:
                return 4;
            case DaysOfWeek.FRIDAY:
                return 5;
            case DaysOfWeek.SATURDAY:
                return 6;
            default:
                return -1;
        }
    }
}