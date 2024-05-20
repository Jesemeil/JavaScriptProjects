function range(start, end, step = 1){
    result = [];
    if(step > 0){
        for(index = start; index <=end; index += step){
            result.push(index)
        }
    }
    else if(step < 0){
        for(index = start; index >= end; index += step){
            result.push(index)
        }
    }
    return result;
}

function sum(numbers){
    let total = 0;
    for(let number of numbers){
        total+= number;
    }
    return total;
}


console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));      
console.log(sum(range(5, 2, -1)));  