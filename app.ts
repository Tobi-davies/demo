type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create server"],
  startDate: new Date(),
};

console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addition(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name " + emp.name);
  // console.log('Name ', emp.privileges)

  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadingCargo(amount: number) {
    console.log("Loading cargo " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if ("loadingCargo" in vehicle) {
    vehicle.loadingCargo(300);
  }

  if (vehicle instanceof Truck) {
    vehicle.loadingCargo(300);
  }
}

// useVehicle(v1);
// useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if ("flyingSpeed" in animal) {
    console.log("Flyingspeed :" + animal.flyingSpeed);
  }

  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;

    default:
      break;
  }

  console.log("Moving at speed :" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 30 });

// let userInput = <HTMLInputElement>document.getElementById("text-input")!;
// let userInput = document.getElementById("text-input")! as HTMLInputElement;

// userInput.value = "kjlhgkvjgc";

// console.log(userInput);

let userInput = document.getElementById("text-input");

if (userInput) {
  (userInput as HTMLInputElement).value = "kjlhgkvjgc";
}
