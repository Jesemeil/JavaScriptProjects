

let product = 1;
for(let outerIndex= 0; outerIndex < ourArray.length; outerIndex++) {
    for(innerIndex = 0; innerIndex < ourArray[outerIndex].length; innerIndex++) {
        product *= ourArray[outerIndex][innerIndex];

    }
}

let ourArray = [[1,2], [3,4],[4,5,6]];
console.log(product);