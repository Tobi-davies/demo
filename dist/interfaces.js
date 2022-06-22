"use strict";
let added;
added = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 25;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("hi");
        }
    }
}
// let user1: Person;
let user1;
// user1 = new Person("Lolo");
user1 = new Person();
// user1 = {
//   name: "bade",
//   age: 23,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };
user1.greet("My name is");
console.log(user1);
