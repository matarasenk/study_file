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
  


export{HardWorker};