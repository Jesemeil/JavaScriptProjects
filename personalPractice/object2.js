let myObj = {
    "slogan" : "smartWork",
    "faith"  : "christainity",
    "hobby"  : "codingAllday"
};

function checkAvailableKeys (keys) {
    if(myObj.hasOwnProperty(keys)){
        return myObj[keys];
    }
    return "Not Found"
}
console.log(checkAvailableKeys("cat"));