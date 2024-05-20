// let emptyArray= [];
// emptyArray.push({ name: "cat", value: 2000 });
// emptyArray.push({ name: "Truck", value: 500 });
// emptyArray.push({ name: "Bike", value: 6500 });
// emptyArray.push({ name: "Scooter", value: 1500 });
// emptyArray[0]["Brand"] = ["Toyota", "Nissan"];
// emptyArray[1]["Brand"] = ["Ford"];
// emptyArray[2]["Brand"] = ["Honda"];

// console.table(emptyArray);
// let array = [];



let array = [];
let row1 = [];

let obj1 = {
    name: "James",
    population: 1000,
    temperature: 10,
    currency: "NGN"
}

let obj2 = {
    name: "John",
    population: 1500,
    temperature: 8,
    currency: "NGN"
}

let obj3 = {
    name: "Jane",
    population: 1200,
    temperature: 12,
    currency: "NGN"
}

row1.push(null);
row1.push(obj1);
row1.push(obj2);
row1.push(obj3);
array.push(row1);

let row2 = []
let obj4 = {
    name: "Maya",
    population: 1200,
    temperature: 6,
    currency: "NGN"
}

let obj5 = {
    name: "bala",
    population: 1200,
    temperature: 9,
    currency: "NGN"
}

let obj6 = {
    name: "",
    population: 1200,
    temperature: 6,
    currency: "NGN"
}

row2.push(null);
row2.push(obj4);
row2.push(obj5);
row2.push(obj6);
array.push(row2);

let row3 = []
let obj7 = {
    name: "Tunde",
    population: 1500,
    temperature: 11,
    currency: "NGN"
}

let obj8 = {
    name: "Bola",
    population: 1500,
    temperature: 7,
    currency: "NGN"
}

let obj9 = {
    name: "Bola",
    population: 1500,
    temperature: 3,
    currency: "NGN"
}

row3.push(null);
row3.push(obj7);
row3.push(obj8);
row3.push(obj9);
array.push(row3);

let totalPopulation = 0;

for(let a = 0; a < array.length; a++){
   for(let b = 0; b < array[a].length; b++){
    console.log(array[a][b])
    let population =array[a][b]
    if(population && population.temperature <= 10){
        totalPopulation += population.population
    }
   }
}
console.log("\n The total population with the temperatre less than or equal 10 is: " + totalPopulation
)






  
  
 
