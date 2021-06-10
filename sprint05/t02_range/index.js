exports.checkDivision = (a = 1, b = 60) => {
    let result = ' ';
    if (a <= b && Number.isInteger(a) && Number.isInteger(b)) {
        for (let i = a; i <= b; i++) {
            let output = false;
            result += `The number ${i}`;
            if (i % 2 === 0) {
                result += ' is divisible by 2'
                output = true
            }
            if (i % 3 === 0) {
                result += (output ? ',' : ' ') + ' is divisible by 3'
                ouput = true
            }
            if (i % 10 === 0) {
                result += (output ? ',' : ' ') + ' is divisible by 10'
                ouput = true
            }
            if (!output) {
                result += ' - '
            }
            result += '\n'
        }
        console.log(result)
    } else {
        console.log('Wrong input, first number must be smaller than second')
    }
}


/*
  Task name: Range
*/

const i = require('./index');

console.log('*** Range is 3 - 7 checkDivision(3,7) ***');
i.checkDivision(3, 7);

console.log('\n*** Range is 58 - ... checkDivision(58) ***');
i.checkDivision(58);

console.log('\n*** Range is ... - ... checkDivision() ***');
i.checkDivision();
























