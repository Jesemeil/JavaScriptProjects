const person = {
    name: "Ajay",
    height: "6.5ft",
    age: 32,
};

for(const key in person){
    console.log(`${key}: ${person[key]}`);
}





var myDog = {
    "name" : "Bingo",
    "age"  :  "6years",
    "height" : "3ft",
};

// changing the values of name and age
myDog.name = "Buhari";
myDog["age"] = "8 years";

  console.log(myDog.name);

  for(var key in myDog){
  console.log(`${key} : ${myDog[key]}`);
  }

// Adding a key to the object "myDog"
myDog.food = "Bones and flakes";

console.log(myDog);

// Deleting a key in the object "myDog"
delete myDog.food;

console.log(myDog);
