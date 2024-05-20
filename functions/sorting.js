let val = [200, 1, 25, 6, 2, 3];
let firstPointer = 0;
let secondPointer = 1;

while (firstPointer < val.length - 1) {
    if (val[firstPointer] > val[secondPointer]) { 
        let temp = val[firstPointer];
        val[firstPointer] = val[secondPointer];
        val[secondPointer] = temp;
    }
    secondPointer++;

    if (secondPointer == val.length) {
        firstPointer++;
        secondPointer = firstPointer + 1;
    }
}

console.log(val);




