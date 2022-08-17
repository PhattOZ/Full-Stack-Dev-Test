// There are multiple unary operations that are able to convert String to number
// without using a built in function including bitwise operations and arithmetic Operations

// In this case I am using unary plus which is supposedly the fastest
// because it does not perform any other operations on the number
function stringToNumber(str) {
  return +str;
}

console.log(stringToNumber("NotNumberReturnsNaN")); // NaN

console.log(stringToNumber("21")); // 21
