import { DaysOfWeek } from "../enums/DaysOfWeek.enum"
import { Time } from "./Time"

export type GameDate = {
    [weekDay: number]: Time[]
}

export type GameDateWithAway = {
    [weekDay: number]: GameDateWithAwayAndTime
}

export type GameDateWithAwayAndTime = {
    day: DaysOfWeek,
    daysAway: number,
    gameTimes: Time[]
}