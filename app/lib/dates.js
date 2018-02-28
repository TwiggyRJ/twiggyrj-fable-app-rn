import moment from "moment";

export function date() {
  return moment().format("DD/MM/YYYY");
}

export function dateTime() {
  return moment().format("DD/MM/YYYY HH:mm:ss");
}

export function dateKey() {
  return moment().format("DD-MM-YYYY");
}

export function dateRFC() {
  return moment().format("YYYY-MM-DD");
}

export function dateAmerican() {
  return moment().format("YYYY/MM/DD");
}

export function dateUTC() {
  return moment().toISOString();
}

export function dateFormated() {
  return moment().format("Do MMMM YYYY");
}

export function getDateUnderscore(date) {
  return moment(date, "DD-MM-YYYY").format("DD_MM_YYYY");
}

export function getDateUTC(date) {
  return moment(date).toISOString();
}

export function getDateUTCKey(date) {
  return moment(date, "DD-MM-YYYY").toISOString();
}

export function getDateRFC(date) {
  return moment(date).format("YYYY-MM-DD");
}

export function getDateFormated(date) {
  return moment(date).format("Do MMMM YYYY");
}

export function getTimeFormated(date) {
  return moment(date).format("HH:mm:ss");
}

export function getDateFormatedKey(date) {
  return moment(date, "DD-MM-YYYY").format("Do MMMM YYYY");
}

export function getDateUTCOffset(date) {
  return moment(date, "YYYY-MM-DD").format("YYYY-MM-DDThh:mm:ssTZ");
}

export function getMonth() {
  return moment().format("01-MM-YYYY");
}

export function getMonthFrom(date) {
  console.log(date);
  return moment(date, "YYYY-MM-DD")
    .startOf("month")
    .format("01-MM-YYYY");
}

export function getDayBefore(date) {
  return moment(date, "DD-MM-YYYY")
    .subtract(1, "days")
    .startOf("day")
    .format("DD-MM-YYYY");
}

export function getMonthLastDay() {
  return moment().daysInMonth() + moment().format("-MM-YYYY");
}

export function getMonthLastDayFrom(date) {
  return moment(date, "YYYY-MM-DD").daysInMonth() + moment().format("-MM-YYYY");
}

export function getWeekBeginning() {
  return moment()
    .startOf("isoweek")
    .format("DD-MM-YYYY");
}

export function getWeekBeginningFrom(date) {
  console.log(date);
  return moment(date, "YYYY-MM-DD")
    .startOf("isoweek")
    .format("DD-MM-YYYY");
}

export function getQuarterEndFrom(date) {
  return moment(date, "YYYY-MM-DD")
    .add(3, "months")
    .format("01-MM-YYYY");
}

export function getYearEndFrom(date) {
  return moment(date, "YYYY-MM-DD")
    .add(1, "years")
    .format("01-MM-YYYY");
}

export function getWeekEnd() {
  return moment()
    .isoWeekday(7)
    .format("DD-MM-YYYY");
}

export function getWeekEndFrom(date) {
  return moment(date, "YYYY-MM-DD")
    .isoWeekday(7)
    .format("DD-MM-YYYY");
}

export function dateDiffSeconds(a, b) {
  return moment(a).diff(moment(b), "seconds");
}

export function dateDiffHours(a, b) {
  return moment(a).diff(moment(b), "hours");
}

export function dateDiffDays(a, b) {
  return moment(a, "YYYY-MM-DD").diff(moment(b, "YYYY-MM-DD"), "days");
}

export function dateDiffDaysKey(a, b) {
  return moment(a, "DD-MM-YYYY").diff(moment(b, "DD-MM-YYYY"), "days");
}

export function dateDiffMonths(a, b) {
  return moment(a).diff(moment(b), "months");
}

export function dateDiffYears(a, b) {
  return moment(a).diff(moment(b), "years");
}

export function futureDay(date, increment) {
  return moment(date)
    .add(increment, "day")
    .toISOString();
}

export function futureDayByHours(date, increment) {
  return moment(date)
    .add(increment, "hours")
    .toISOString();
}

export function futureDayBySeconds(date, increment) {
  return moment(date)
    .add(increment, "seconds")
    .toISOString();
}

export function checkWeekday(date) {
  let weekday = moment(date).weekday();
  if (weekday !== 0 && weekday !== 6) {
    return true;
  } else {
    return false;
  }
}

export function getDate(toGet) {
  return moment()
    .add(toGet, "days")
    .format("YYYY-MM-DD");
}

export function getDateSlash(date) {
  return moment(date, "DD-MM-YYYY").format("DD/MM/YYYY");
}

export function getDateSlashRFC(date) {
  return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
}

export function getDateKey(date) {
  return moment(date).format("DD-MM-YYYY");
}

export function normaliseDate(date) {
  if (date.length >= 10) {
    if (date.indexOf("/") !== -1 && date.indexOf("-") === -1) {
      if (moment(date, "DD/MM/YYYY", true).isValid()) {
        return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
      } else {
        return "invalid-date-error";
      }
    } else if (
      date.indexOf("-") !== -1 &&
      moment(date, "DD-MM-YYYY").format("DD-MM-YYYY") === date &&
      date.indexOf("/") === -1
    ) {
      if (moment(date, "DD-MM-YYYY", true).isValid()) {
        return moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");
      } else {
        return "invalid-date-error";
      }
    } else if (
      date.indexOf("-") !== -1 &&
      moment(date, "YYYY-MM-DD").format("YYYY-MM-DD") === date &&
      date.indexOf("/") === -1
    ) {
      return date;
    } else {
      return "format-error";
    }
  } else if (date) {
    if (date.length === 0) {
      return "no-date-error";
    } else {
      return "short-error";
    }
  } else {
    return "no-date-error";
  }
}

export function convertMilliSecondsToSeconds(ms) {
  return ms * 1000;
}

export function getDay(day) {
  return moment().add(day, "days");
}

export function getWeekDays(start, end) {
  let dates = [];
  let currentDate = moment(start).startOf("day");
  let endDate = moment(end).startOf("day");

  while (currentDate.add(1, "days").diff(endDate) < 0) {
    if (currentDate.isoWeekday() !== 6 && currentDate.isoWeekday() !== 7) {
      dates.push({
        date: currentDate.clone().format("DD/MM/YYYY"),
        formatted: currentDate.clone().format("Do MMMM YYYY"),
        value: currentDate.clone().format("YYYY-MM-DD")
      });
    }
  }
  return dates;
}

export function getWeekDaysUTC(start, end) {
  let dates = [];
  let currentDate = moment(start).startOf("day");
  let currentDateUTC = moment(start);
  let endDate = moment(end).startOf("day");

  while (currentDate.add(1, "days").diff(endDate) < 0 && currentDateUTC.add(1, "days").diff(endDate) < 0) {
    if (currentDate.isoWeekday() !== 6 && currentDate.isoWeekday() !== 7) {
      dates.push({
        date: currentDate.clone().format("DD/MM/YYYY"),
        formatted: currentDate.clone().format("Do MMMM YYYY"),
        rfc: currentDate.clone().format("YYYY-MM-DD"),
        value: currentDateUTC.clone().toISOString()
      });
    }
  }
  return dates;
}

export function getDates(date) {
  return {
    date: moment(date, "YYYY-MM-DD").format("DD/MM/YYYY"),
    formatted: moment(date, "YYYY-MM-DD").format("Do MMMM YYYY"),
    value: moment(date, "YYYY-MM-DD").format("YYYY-MM-DD"),
    year: moment(date, "YYYY-MM-DD").format("YYYY")
  };
}

export function isMinutesAgo(minutes, date) {
  const minutesAgo = moment().subtract(minutes, "minutes");
  return moment(date, "DD/MM/YYYY HH:mm:ss").isAfter(minutesAgo);
}

export function isDaysAgo(days) {
  return moment()
    .add(days, "days")
    .format("YYYY-MM-DD");
}

export function isDaysFrom(date, from) {
  return moment(date, "YYYY-MM-DD")
    .add(from, "days")
    .format("YYYY-MM-DD");
}

export function getDateFormattedShort(date) {
  return moment(date, "YYYY-MM-DD").format("Do MMMM");
}

export function getDateFormattedShortDay(date) {
  return moment(date, "YYYY-MM-DD").format("ddd Do");
}

export function getDateFormattedShortDayNum(date) {
  return moment(date, "YYYY-MM-DD").format("Do");
}

export function sameDate(date, secondDate) {
  return moment(date).isSame(secondDate);
}
