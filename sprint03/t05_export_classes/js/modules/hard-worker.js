class HardWorker {
  get age(){
      return this.fuck;
  }
  set age(value) {
      if(value >= 1 && value < 100){
          this.fuck = value;
      } 
  }
  get salary(){
      return this._salary
  }
  set salary(value){
      if(value >= 100 && value < 10000){
          this._salary = value;
      }
      
  }
  toObject() {
    return {name: this.name, age: this.age, salary: this.salary};
    // return this
  }
}


export{HardWorker};