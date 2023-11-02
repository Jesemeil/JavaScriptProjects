const sum = (arr) => arr.reduce((sum, num) => sum + num, 0);

const array = [1, 2, 3, 4, 5, 6, 7, 9, 10, 12];

console.log(sum(array));

let total= (...numbers) => numbers.reduce((total, num)=> total + num, 0);

console.log(total(1, 3, 5, 6, 7));