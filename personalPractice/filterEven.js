const filterEven = (arr) => arr.filter((x) => x % 2 === 0);

const originalArray = [1,2, 4, 5, 6];

console.log(filterEven(originalArray));

const calculateSum = (arr1) => arr1.reduce((sum, num ) => sum + num, 0);

const originalArray1 = [1, 3, 4, 5, 6];

console.log(calculateSum(originalArray1));
