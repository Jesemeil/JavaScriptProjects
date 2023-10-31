var globalVar = "I'm a global var";
let globalLet = "I'm a global let";
const globalConst = "I'm a global const";

function compare(val) {
    if (val === 7) {
        var localVar = "I'm a local var";
        let localLet = "I'm a local let";
        const localConst = "I'm a local const";
        return "equal";
    }
    return "not equal";
}

console.log(globalVar); // Access globalVar (var)
console.log(globalLet); // Access globalLet (let)
console.log(globalConst); // Access globalConst (const)

console.log(localVar); // Access localVar (var) globally
console.log(localLet); // Error: localLet is not defined globally
console.log(localConst); // Error: localConst is not defined globally

console.log(compare(7)); // Access compare function with its local variables

