const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput() {
  rl.question("Enter a value (A, B, C, D, or Q to exit the program): ", function(input) {
    const sanitizedInput = input.toUpperCase().trim();
    
    switch (sanitizedInput) {
      case "A":
        console.log("You chose A");
        rl.close();
        break;
  
      case "B":
        console.log("You chose B");
        break;
  
      case "C":
        console.log("You chose C");
        break;
  
      case "D":
        console.log("You chose D");
        break;

      case "Q":
        console.log("Exiting the program");
        rl.close();
        break;

      default:
        console.log("Invalid Choice");
        getUserInput();
        break;
    }
  });
}

getUserInput();

