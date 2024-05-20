let left_operand = 10;
let right_operand = 5;
let operator = "+";

let ans = "";
switch(operator){
    case "+":
        ans = right_operand + left_operand;
        break;
    case "-":
        ans = right_operand - left_operand;
        break;
    case "*":
        ans = right_operand * left_operand;
        break;
    case "/":
        if(right_operand != 0) 
        ans = left_operand / right_operand;
        else ans = NaN;
        break;
    default:
        ans = NaN;
        break;        
}

console.log(ans);