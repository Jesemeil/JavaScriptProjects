function findKey (object, value) {
    for(let key in object){
        if(object[key] === value){
            return key;
        }
       
    }
    return null;
    

}

let lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta"   : "Denver",
    "echo"    : "Easy",
    "foxtrot" : "Frank"
}

console.log(findKey(lookup, "Denver"));






