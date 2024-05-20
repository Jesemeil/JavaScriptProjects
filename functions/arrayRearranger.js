function moveZerosToTheEnd(input) {
    let nonZeroCount = 0;

    for (let index = 0; index < input.length; index++) {
        if (input[index] !== 0) {
            input[nonZeroCount] = input[index];
            nonZeroCount++;
        }
    }
    
    while (nonZeroCount < input.length) {
        input[nonZeroCount] = 0;
        nonZeroCount++;
    }

    return input;
}
const inputArray = [4, 3, 0, 2, 0, 4, 10, 12];
const rearrangedArray = moveZerosToTheEnd(inputArray);
console.log(rearrangedArray);

function moveZerosToTheEnd(arr) {
    let nonZeroCount = 0;

    for(let index = 0; index < arr.length; index++) {
        if(arr[index] != 0){
            let temp = arr[index];
            arr[index] = arr[nonZeroCount];
            arr[nonZeroCount] = temp;
            nonZeroCount = temp

        }
    }
    return arr
}
const array = [1, 2, 0, 3, 0, 0, 4, 5, 6]
const result = moveZerosToTheEnd(array)
console.log(result)
