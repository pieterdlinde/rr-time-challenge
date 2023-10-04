import { DaysOfWeek } from "../enums/DaysOfWeek.enum";
import { GameDate } from "../types/GameDate";

export const gameDates: GameDate = {
    [DaysOfWeek.MONDAY]: [
      {
        hour: 12,
        minutes: 40,
      },
      {
        hour: 16,
        minutes: 30,
      },
    ],
    [DaysOfWeek.TUESDAY]: [
      {
        hour: 12,
        minutes: 40,
      },
      {
        hour: 16,
        minutes: 30,
      },
    ],
    [DaysOfWeek.WEDNESDAY]: [
      {
        hour: 12,
        minutes: 40,
      },
      {
        hour: 15,
        minutes: 30
      },
      {
        hour: 16,
        minutes: 30,
      },
    ],
    [DaysOfWeek.THURSDAY]: [
      {
        hour: 12,
        minutes: 40,
      },
      {
        hour: 16,
        minutes: 30,
      },
    ],
    [DaysOfWeek.FRIDAY]: [
      {
        hour: 12,
        minutes: 40,
      },
      {
        hour: 16,
        minutes: 30,
      },
    ],
  };