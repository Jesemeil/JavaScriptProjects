let contacts = [
    {
        "firstName" : "Akira",
        "lastName"  : "Laine",
        "number"    : "0543236543",
        "likes"     : ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName" : "Harry",
        "lastName"  : "Potter",
        "number"    : "0994372684",
        "likes"     : ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName" : "Sherlock",
        "lastName"  : "Holmes",
        "number"    : "0487345643",
        "likes"     : ["Intriguing Cases", "Violin"]
    },
    {
        "firstName" : "Kristian",
        "lastName"  : "Vos",
        "number"    : "unknown",
        "likes"     : ["Javascript", "Gaming", "Foxes"]
    }
];

function lookupProfile(name, prop) {
    for(let index = 0; index < contacts.length; index++){
        if(contacts[index].firstName === name){
            return contacts[index][prop] || "No property found"
        }
    }
    return "No contact found"
}

console.log(lookupProfile("Kristian", "likes"));
console.log(lookupProfile("Sherlock", "number"));
