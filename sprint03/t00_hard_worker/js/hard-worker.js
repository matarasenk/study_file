class HardWorker  {

  constructor() {
    this.name;
  }

  set age (age) {
    if (age && age >= 1 && age < 100)
    return this.testAge = age;
  }

  get age () {
    return this.testAge;
  }

  set salary (salary) {
    if (salary && salary >= 100 && salary < 10000) {
      return this.testSalary = salary;
    }
  }

  get salary () {
    return this.testSalary;
  }

  toObject = () => {
    return {
      name: this.name,
      age: this.age,
      salary: this.salary
    }
  }
}

// console.log(HardWorker.name);

// worker = new HardWorker; 

// worker.name = 'Bruce';
// console.log(worker.name);
// //Bruce

// worker.age = 50;
// worker.salary = 1500;
// console.log(worker.toObject());
// // Object { name: "Bruce", age: 50, salary: 1500 }

// worker.name= 'Linda';
// worker.age = 140;
// console.log(worker.toObject());
// // Object { name: "Linda", age: 50, salary: 1500 }