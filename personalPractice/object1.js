function phoneticLookup (val) {
    let lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta"   : "Denver",
        "echo"    : "Easy",
        "foxtrot" : "Frank"
    };

    return lookup[val];


}

console.log(phoneticLookup("foxtrot"));