function numberToDate(number) {
  if (typeof number !== "number" || number < 0 || 6 < number) {
    return "error";
  }

  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return DAYS[number];
}

console.log(numberToDate(-1));
console.log(numberToDate("bloom"));

console.log(numberToDate(0));
console.log(numberToDate(5));
