function random(myMin, myMax) {
    return Math.floor(Math.random() * (myMax -myMin + 1)) + myMin;
}

console.log(random(5, 15));