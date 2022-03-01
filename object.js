const car = {
    name: "Rolls-Royce",
    model: "20-2015",
    weight: "900kg",
    start: function () {
        this.drive();
        console.log("car has started");
    },
    drive: function () {
        console.log("car has driving");
    },
};

console.log(car.weight);
console.log(car['model']);
car.start();

// Another object define

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

person.fullName();

let x = "Reyad" // literal syntax
console.log(typeof (x));
let y = new String("Hossain") // this is an object
console.log(typeof (y)); 