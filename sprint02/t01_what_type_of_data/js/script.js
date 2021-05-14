let numberVar = 1
let bigIntVar = BigInt(214748364844)
let stringVar = 'Hello'
let booleanVar = true
let nullVar = null
let undefinedVar = undefined
let objectVar = {}
let symbolVar = Symbol('a')
let functionVar = function showMessage() {}

let allTypesVars = `numberVar is ${typeof(numberVar)}
bigIntVar is ${typeof(bigIntVar)}
stringVar is ${typeof(stringVar)}
booleanVar is ${typeof(booleanVar)}
nullVar is null
undefinedVar is ${typeof(undefinedVar)}
objectVar is ${typeof(objectVar)}
a is ${typeof(symbolVar)}
functionVar is ${typeof(functionVar)}`


alert(allTypesVars)
