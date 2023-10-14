function addDigits(number) {
    while (number >= 10) {
      let sum = 0;
      while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
      }
      number = sum;
    }
    return number;
  }
  
  // Example usage:
  const number = 12345;
  const result = addDigits(number);
  console.log(`The sum of the digits of ${number} is: ${result}`);
  