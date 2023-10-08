function countBs(input){
    let count = 0;
    for(let index = 0; index < input.length; index++){
       if(input[index] == "B"){
        count++;
       }
    }
    return count;
}

function countChar(input, charToCount){
    let count = 0;
    for(let index = 0; index < input.length; index++){
        if(input[index] == charToCount){
            count++;
        }
    }
    return count;
}
let result1 = countBs("BBbBarrew");
let result2 = countChar("AHHAAAHA", "H")
console.log(result1);
console.log(result2);