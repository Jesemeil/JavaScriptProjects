var obj1 = {
  name: "Donald",
  population: 10,
  temperature: 13,
  currency: "naira",
};

var obj2 = {
  name: "Don",
  population: 20,
  temperature: 15,
  currency: "naira",
};

var obj3 = {
  name: "Tunde",
  population: 30,
  temperature: 26,
  currency: "naira",
};

var obj4 = {
  name: "Lam",
  population: 40,
  temperature: 7,
  currency: "naira",
};

var obj5 = {
  name: "Ken",
  population: 50,
  temperature: 1,
  currency: "naira",
};

var obj6 = {
  name: "Den",
  population: 60,
  temperature: 15,
  currency: "naira",
};

var obj7 = {
  name: "Kel",
  population: 70,
  temperature: 11,
  currency: "naira",
};

var obj8 = {
  name: "cot",
  population: 80,
  temperature: 33,
  currency: "naira",
};

var obj9 = {
  name: "Donald",
  population: 90,
  temperature: 5,
  currency: "naira",
};

var objects = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];

var sum = 0;

for (var i = 0; index < objects.length; i++) {
  if (objects[index].temperature > 10) {
    sum += objects[index].population;
  }
}

console.log("Sum of population with temperature above 10:", sum);
