import { TimeDurations } from "../consts/TimeDurations";
import { gameDates } from "../dates/GameDates";
import { DaysOfWeek, DaysOfWeekUtil } from "../enums/DaysOfWeek.enum";
import {
  GameDateWithAway,
  GameDateWithAwayAndTime,
} from "../types/GameDate";



const getAmountOfDaysBetween = (
  fromDay: DaysOfWeek,
  toDay: DaysOfWeek
): number => {
  let amountOfDays = -1;
  let currentDay = fromDay;
  for (const _ of Object.keys(DaysOfWeek)) {
    amountOfDays++;
    if (currentDay === toDay) {
      return amountOfDays;
    }
    currentDay = DaysOfWeekUtil.getNextDay(currentDay);
  }
  return amountOfDays;
};

const getLowestDaysAway = (
  gameDates: GameDateWithAway
): GameDateWithAwayAndTime[] => {
  const values = Object.values(gameDates);

  values.sort((a, b) => a.daysAway - b.daysAway);

  return values;
};

const getNextGame = (): Date | null => {
  const currentTime = new Date();
  const today = DaysOfWeekUtil.getDayFromIndex(currentTime.getDay());
  const awayList: GameDateWithAway = {};
  for (const day of Object.keys(gameDates)) {
    const d = Number.parseInt(day);
    const enumDay = DaysOfWeekUtil.getDayFromIndex(d);
    const daysAway = getAmountOfDaysBetween(today, enumDay);
    if (!Object.keys(awayList).includes(day)) {
      awayList[d] = {
        day: DaysOfWeekUtil.getDayFromIndex(d),
        daysAway,
        gameTimes: gameDates[Number(day)],
      };
    }
  }
  const days = getLowestDaysAway(awayList);
  let nextGame: GameDateWithAwayAndTime | null = null;
  for (const day of days) {
    for (const times of day.gameTimes) {
      if (day.day === today) {
        if (
          nextGame === null &&
          (times.hour > currentTime.getHours() ||
            (times.hour === currentTime.getHours() &&
              times.minutes > currentTime.getMinutes()))
        ) {
          nextGame = {
            day: day.day,
            daysAway: day.daysAway,
            gameTimes: [times],
          };
          continue;
        }
      } else {
        if (nextGame === null) {
          nextGame = {
            day: day.day,
            daysAway: day.daysAway,
            gameTimes: [times],
          };
          continue;
        }
        if (
          nextGame !== null &&
          (times.hour < nextGame.gameTimes[0].hour ||
            (times.hour === nextGame.gameTimes[0].hour &&
              times.minutes < nextGame.gameTimes[0].minutes))
        ) {
          nextGame.gameTimes = [times];
        }
      }
    }
    if (nextGame !== null) break;
  }
  if (nextGame !== null) {
    const nextDate = new Date(
      new Date().getTime() + TimeDurations.day * nextGame.daysAway
    );
    nextDate.setHours(nextGame.gameTimes[0].hour);
    nextDate.setMinutes(nextGame.gameTimes[0].minutes);
    nextDate.setSeconds(0);
    return nextDate;
  }
  return null;
};

export { getNextGame, DaysOfWeek };
