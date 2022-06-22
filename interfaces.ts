// interface Person {
//   name: string;
//   age: number;
//   // greet: (phrase: string) => void;
//   greet(phrase: string): void;
// }
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let added: AddFn;

added = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  output?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  // age = 25;
  // constructor(public name: string) {}
  // greet(phrase: string) {
  //   console.log(phrase + " " + this.name);
  // }

  name?: string;
  age = 25;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("hi");
    }
  }
}

// let user1: Person;

let user1: Greetable;
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
