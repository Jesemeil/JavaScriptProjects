// Default parameters
function record(name ="User",  greeting = "Hello") {
    console.log(`${greeting}, ${name}`);
}

record();
record("Aghogho");


// Conditional checks
function welcome(name, greeting){
    if(name && greeting){
        console.log(`${greeting}, ${name}`)
    }
    else if(name) {
        console.log (`Hello, ${name}`);
    }
    else if(greeting) {
        console.log(`${greeting}, User`)
    }
    else{
        console.log(`Hello, User`)
    }
}

welcome();
welcome("Ajay");
welcome("Ajay",  "Hi")
welcome("Hi")


// Using the arguments Objects

function greetWithArguments() {
    if(arguments.length === 0) {
        console.log(`Hello, Awesome User`)
    }
    else if (arguments.length === 1){
        console.log(`Hello, ${arguments[0]}`)
    }
    else if(arguments.length === 2) {
        console.log(`${arguments[1]}, ${arguments[0]}`)
    }
}
greetWithArguments();
greetWithArguments(`Ken`)
greetWithArguments('Ada', 'Hi')
