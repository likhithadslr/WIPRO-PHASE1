
class Person {
    
    name: string;
    age: number;
    

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and Iam ${this.age} years old. `);
    }
}
var x=new Person("Likki" ,10);
x.greet();



class Employee extends Person {
    position: string;

    constructor(name:string , age: number, position: string) {
        super(name, age);
        this.position=position;
    }
    work() {
        console.log(`${this.name} is working as a ${this.position}.`);

    }
}

    const employee1=new Employee('Likki',22,'Developer');
    employee1.greet();
    employee1.work();