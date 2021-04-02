const addDays = require("date-fns/addDays");

const getDate = (days) => {
  const addDate = addDays(new Date(2020, 7, 22), days);
  const day = addDate.getDate();
  const month = addDate.getMonth();
  const year = addDate.getFullYear();
  const newDate = `${day}-${month + 1}-${year}`;
  return newDate;
};
module.exports = getDate;
