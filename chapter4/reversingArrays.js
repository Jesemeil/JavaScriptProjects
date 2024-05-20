function reverseArray(arr) {
    let reversed = [];
    for (let index = arr.length - 1; index >= 0; index--) {
      reversed.push(arr[index]);
    }
    return reversed;
  }
  
  function reverseArrayInPlace(arr) {
    for (let index = 0; index < Math.floor(arr.length / 2); index++) {
      let temp = arr[index];
      arr[index] = arr[arr.length - 1 - index];
      arr[arr.length - 1 - index] = temp;
    }
  }
  
  let originalArray = [1, 2, 3, 4, 5];
  let reversedArray = reverseArray(originalArray);
  console.log(reversedArray); 

  reverseArrayInPlace(originalArray);
  console.log(originalArray);
  