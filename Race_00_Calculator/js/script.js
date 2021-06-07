let operations = document.getElementsByClassName('operations')[0];
let outputValue = document.getElementsByClassName('output-value')[0];
let operator = '';
let numberValue = '';
let resArray = [];
let resultValue = 0;

let action = (event) => {
  const val = event.target.value

  if (event && val) {
    if(val === 'C') {
      resetVal();
    }
    else if (!+val && val !== '=' && val !== '.' && val !== '0') {
      if (numberValue) {
        operations.innerHTML += val
        resArray.push(numberValue);
      } 
      if (+resArray[resArray.length - 1] && val !== '+/-' ) {
        resArray.push(val);
        numberValue = '';
      }
    } else if (val !== '=') {
      operations.innerHTML += val
      numberValue += val;
    }
      else if (resArray[resArray.length - 1] !== numberValue) {
        resArray.push(numberValue)
      }
      if (val === '=') {
        for (let i = 0; i < resArray.length; i++) {
          if (i === 0) {
            resultValue = +resArray[i];
          }
          switch (resArray[i]) {
            case '+': {
              i++;
              resultValue += +resArray[i];
              break;
            }
            case '-': {
              i++;
              resultValue -= +resArray[i];
              break;
            }
            case '*': {
              i++;
              resultValue *= +resArray[i];
              break;
            }
            case '/': {
              i++;
              resultValue /= +resArray[i];
              break;
            }
            case '%': {
              i++;
              resultValue %= +resArray[i];
              break;
            }
          }
        }
        outputValue.innerHTML = resultValue;
      }
  }
}

let resetVal = () => {
  operator = '';
  numberValue = '';
  resArray = [];
  resultValue = 0;
  operations.innerHTML = '';
  outputValue.innerHTML = '0'
}
