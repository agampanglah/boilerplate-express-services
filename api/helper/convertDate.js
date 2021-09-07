const moment = require("moment-timezone")

const formatDateName = "DD-MM-YYYY";

const convertFormatDateName = (date) => {
  let localDate = moment.utc(date).local().format(formatDateName);
  return localDate;
}

const formatYears = "YYYY";
const convertFormatYears = (year) => {
  let localYear = moment.utc(year).local().format(formatYears);
  return localYear;
}

const yearToMonthDate = "YYYYMMDD";

const convertYearToMonthDate = (date) => {
  let dateMonth = moment.utc(date).local().format(yearToMonthDate);
  return dateMonth;
}

module.exports = {
  convertFormatDateName,
  convertFormatYears,
  convertYearToMonthDate
}