function Calculator() {
    this.result = 0;

    this.init = function init_numb(number) {
        this.result = number;
        return this;
    };
    this.add = function add_number(number) {
        this.result += number;
        return this;
    };
    this.sub = function sub_number(number) {
        this.result -= number;
        return this;
    }
    this.mul = function mul_number(number) {
        this.result *= number;
        return this;
    }
    this.div = function div_number(number) {
        this.result /= number;
        return this;
    }
    this.alert = function alert_res() {
        function sleep(ms) {
            ms += new Date().getTime();
        while (new Date() < ms){}
        }
        sleep(5000);
        alert(this.result);
    }

}

const calc = new Calculator();
console.log(
    calc.init(2)
    .add(2)
    .mul(3)
    .div(4)
    .sub(2)
    .result
    );

    calc.alert();