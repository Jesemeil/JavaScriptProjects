function outerFunction(x) {
    function innerFunction(y){
        return x + y;

    }  
    return innerFunction;     
 }
 let ofFive = outerFunction(5);
 console.log(ofFive(5));
 console.log(ofFive(6));
 console.log(ofFive(7));
 console.log(ofFive(8));
