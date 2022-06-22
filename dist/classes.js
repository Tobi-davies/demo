"use strict";
// const person = {
//   name: "TY",
//   age: 23,
// };
// console.log(person.name);
// const userName = "Max";
// console.log(userName);
// console.log("The code works?");
// //this is it
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // name: string;
        // private readonly id: string;
        // private employees: string[] = [];
        this.employees = [];
        // this.name = n;
        // this.id = id;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
// const accounting = new Department("Accounting", "D1");
const employee1 = Department.createEmployee("MANU");
console.log(employee1, Department.fiscalYear);
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
    describe() {
        console.log("n.m, nmAccounting Dept -" + this.id);
    }
}
const IT = new ITDepartment("M1", ["ml;kljhk"]);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super("AD", id);
        this.reports = reports;
        this.latestReport = reports[0];
    }
    get mostRecentReport() {
        if (this.latestReport) {
            return this.latestReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReports(value);
    }
    static getInstance() {
        //THIS ALSO WORKS
        // if(this.instance){
        //   return this.instance
        // }
        if (AccountingDepartment.instance) {
            return AccountingDepartment.instance;
        }
        this.instance = new AccountingDepartment("A1", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting department ID -" + this.id);
    }
    addEmployee(name) {
        if (name === "MAX") {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
        this.latestReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
// const AD = new AccountingDepartment("A1", []);
const AD = AccountingDepartment.getInstance();
// AD.mostRecentReport = "another";
// AD.addReports("bla bla bla");
// AD.addEmployee("MAX");
// AD.addEmployee("MARK");
// AD.printEmployee();
AD.describe();
// console.log(AD.mostRecentReport);
console.log(AD);
// AD.addReports("bla bla bla");
// accounting.id = "lkjkh";
// const accountingCopy = { name: "MIKE", describe: accounting.describe };
console.log(IT);
IT.describe();
// console.log(accountingCopy);
// accountingCopy.describe();
// accounting.describe();
// IT.describe();
// accounting.addEmployee("BALLACK");
// accounting.addEmployee("DROGBA");
// accounting.employees[2] = "kljhj";
// accounting.printEmployee();
// console.log(accounting);
