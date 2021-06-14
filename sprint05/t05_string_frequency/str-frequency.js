module.exports = class StrFrequency {
  constructor(str) {
    this.str = str;
    this.strUp = str.toUpperCase();
  }
  obj;
  letterFrequencies() {
    this.obj = {};
    let regExp = /[A-Z]/i;
    for (let i = 0; i < this.strUp.length; i++) {
      if (regExp.test(this.strUp[i])) {
        if (this.obj[this.strUp[i]]) {
          this.obj[this.strUp[i]] += 1
        } else {
          this.obj[this.strUp[i]] = 1
        }
      }
      return this.obj;
    }
  }
  wordFrequencies() {
    let result = '';
    this.obj = {};
    let regExp = /[a-z\s]/i; 
    for (let i = 0; i < this.strUp.length; i++) {
      if (regExp.test(this.strUp[i])) {
        result += this.strUp[i]
      }
    }
    result.split(' ').map(item => {
      if (item.length > 0) {
        this.obj[item] = this.obj[item] ? this.obj[item] + 1 : 1
      }
    });
    return this.obj
  }
  reverseString() {
    return [...this.str].reverse().join('')
  }
}


/*
  Task name: String frequency
*/

const StrFrequency = require('./str-frequency');

function test(str) {
  const sf = new StrFrequency(str);
  console.log(`Letters in ${str}`);
  for (const [k, v] of Object.entries(sf.letterFrequencies())) {
    console.log(`Letter ${k} is repeated ${v} times`);
  }

  console.log(`Words in ${str}`);
  for (const [k, v] of Object.entries(sf.wordFrequencies())) {
    console.log(`Word ${k} is repeated ${v} times`);
  }

  console.log(`Reverse of the string: ${str}`);
  console.log(`${sf.reverseString()}`);
}

test("Face it, Harley-- you and your Puddin' are kaput!");
console.log('*************');
test('  Test test 123 45 !0 f   HeLlO wOrLd  ');
console.log('*************');
test('');
