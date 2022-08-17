function numberToDate(number) {
  if (typeof number !== "number" || number < 0 || 6 < number) {
    return "error";
  }

  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return DAYS[number];
}

console.log(numberToDate(-1)); // error
console.log(numberToDate("bloom")); // error

console.log(numberToDate(0)); // Sunday
console.log(numberToDate(5)); // Friday
