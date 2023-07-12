import { days, months } from "../constants/constants";

export default function makeDate(dateValue) {
    let date = new Date(dateValue * 1000);
    let hoursValue = date.getHours();
    if (hoursValue < 10) {
        hoursValue = `0${hoursValue}`;
    }

    let minutesValue = date.getMinutes();
    if (minutesValue < 10) {
        minutesValue = `0${minutesValue}`;
    }
    return({
        month: months[date.getMonth()],
        date: date.getDate(),
        day: days[date.getDay()],
        hours: hoursValue,
        minutes: minutesValue
    });
}