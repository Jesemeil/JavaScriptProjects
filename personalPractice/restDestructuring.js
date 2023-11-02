const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeElements(list){
    const[, , ...arr] = list;
    return arr
}

console.log(removeElements(source));


