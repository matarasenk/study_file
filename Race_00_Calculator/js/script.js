let operations = document.getElementsByClassName('operations')[0];
let outputValue = document.getElementsByClassName('output-value')[0];
let operator = '';
let numberValue = '';
let resArray = [];
let numberArr = [];
let operatorsArr = [];

let action = (event) => {
  const val = event.target.value

  if (event && val) {
    if(val === 'C') {
      resetVal();
    }
    else if (!+val && val !== '=' && val !== '.' && val !== '0') {
      if (val === '+/-') {
        numberValue *= -1
      }
      if (numberValue)
        resArray.push(numberValue);
      if (!!+resArray[resArray.length - 1] && val !== '+/-' ) {
        resArray.push(val);
        numberValue = '';
      }
    } else if (val !== '=') {
      numberValue += val;
    }
      else if (resArray[resArray.length - 1] !== numberValue) {
        resArray.push(numberValue)
      }
      if (val === '=') {
        resArray.map((item) => {
          if (+item) {
            numberArr.push(+item)
          }
          else {
            operatorsArr.push(item);
          }
        })
        resArray = [];
      }

    console.log(resArray);
  }
}

let resetVal = () => {
  operator = '';
  numberValue = '';
  resArray = [];
  operations.innerHTML = '';
  outputValue.innerHTML = '0'
}