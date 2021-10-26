let cat = {
    name: "Garfield",
    numLegs: 4,
    sayName: function() {return "The name of this cat is" + this.name + ".";}
};
duck.sayName();

function Dog() {
    this.name = "Clifford";
    this.color = "red";
    this.numLegs = 4;
}

let redDog = new Dog();

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}


let terrier = new Dog();
terrier.name = "Spot";
terrier.color = "black";

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}


let yorkie = {
    name: "Bubbles",
    color: "Brown",
    numLegs: 4
};
yorkie instanceof Dog;

Dog.prototype.numLegs = 4;
console.log(dog.numLegs);
console.log(yorkie.numLegs);
