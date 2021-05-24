let beginRange = prompt("Input first number");
let endRange = prompt("Input second number");
let result = "";

checkDivision(beginRange, endRange);

function checkDivision(beginRange, endRange) {
    if (!+beginRange || !+endRange || endRange < beginRange) {
        beginRange = 1;
        endRange = 100;
    }
    for (let i = beginRange; i <= endRange; i++) {
        result += i + ' ';
        if (i % 2 == 0) {
            result += 'is even'
            if (i % 3 == 0) {
                result += ', is a multitiple of 3';
                if (i % 10 == 0) {
                    result += ', is a multitiple of 10';
                    // result = result + i + ' is even';
                }
            } else {
                if (i % 10 == 0) {
                    result += ', is a multitiple of 10';
                }
            } 
        } else {
            if (i % 3 == 0) {
                result += 'is a multitiple of 3';
            } else {
                result += '-'
            }
        } 
        console.log(result);
        result = '';
    }
}