let beginRange = prompt("Input first number");
let endRange = prompt("Input second number");
let str = "";

function checkDivision(beginRange, endRange) {

    for (let i = beginRange; i <= endRange; i++) {
        if (i % 2 === 0) {
            str += i + " is even\n";

            if (i % 3 === 0)
                str += i + " is multiple of 3\n";

            if (i % 10 === 0)
                str += i + " is multiple of 10\n";
        }
    } else { if (i % 10 === 0) 
            str += ", is a multiple of 10";
            
            else if (i % 3 === 0)
            str += i + ", is a multitiple of 3";

            else if (i % 2 == 0 && i % 10 == 0);
            str += i + ",is even, is a multitiple of 10"

            else 
            str += i + "-";

            str += "\n"
        }
        
       
    }
    console.log(str);
}

checkDivision(beginRange, endRange)