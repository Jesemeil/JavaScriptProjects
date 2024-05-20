function ashley() {
    let gender;

    let obj = {
        name: "",

        setName(newName){
            this.name = newName;
        },

        getName() {
            return this.name;
        },

        setGender(newGender){
            gender = newGender;
        },

        getGender() {
            return gender;
        }
    }
    
    return obj;
}

let ashleyBlakes = ashley()
ashleyBlakes.setGender("female")
console.log(ashleyBlakes.getGender())