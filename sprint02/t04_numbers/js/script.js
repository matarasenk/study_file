let beginRange = prompt("Input first number");
let endRange = prompt("Input second number");
let str = "";

function checkDivision(beginRange, endRange) {
    
    for (let i = beginRange; i <= endRange; i++) {
        if (i % 2 === 0) {
            console.log(str += i + " is even\n");

            if (i % 3 === 0)
                console.log(str += i + " is multiple of 3\n"); 

            if (i % 10 === 0)
                console.log(str += i + " is multiple of 10\n");
            }
        }
        console.log(str);
}

checkDivision(beginRange, endRange)