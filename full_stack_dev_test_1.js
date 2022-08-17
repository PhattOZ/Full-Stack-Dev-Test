function isAvailable(node, dateTime) {
  // The test has an ambiguous part saying "check if datetime is which day of the week"
  // I noticed the return value is boolean (true) therefore return a day might not
  // be the preferred answer

  // Later, I thought of using the given node.weekdayFrequency but the given datetime
  // is 1 January 2020 which is Wednesday (3rd index) which is not included in node.weekdayFrequency

  // const isInWorkingDay = node.weekdayFrequency.includes(dateTime.getUTCDay());

  // if (!isInWorkingDay) {
  //   return false;
  // }

  const startTime = node.startTime;
  const endTime = node.endTime;
  const endTimeIsInTheNextDay = startTime > endTime;

  let isBetweenStartAndEndTime;

  const hour = ("0" + dateTime.getUTCHours()).slice(-2);
  const inputTime = hour + ":" + dateTime.getUTCMinutes();

  if (endTimeIsInTheNextDay) {
    isBetweenStartAndEndTime = startTime < inputTime || inputTime < endTime;
  } else {
    isBetweenStartAndEndTime = startTime < inputTime && inputTime < endTime;
  }

  return isBetweenStartAndEndTime;
}

const node = {
  id: 1,
  startTime: "22:00",
  endTime: "02:00",
  weekdayFrequency: [0, 1, 2, 6],
};

const secondNode = {
  id: 1,
  startTime: "01:00",
  endTime: "22:00",
  weekdayFrequency: [0, 1, 2, 6],
};

const datetime = new Date("2020-01-01T01:30:00Z");

console.log(isAvailable(node, datetime));
console.log(isAvailable(secondNode, datetime));
