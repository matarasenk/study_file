
let inputNumber = prompt("Take a number from 1 to 10")
let num = ""
switch (inputNumber) {
    case '1':
        num = "Back to square 1";
        break;
    case '2':
        num = "Goody 2-shoes";
        break;
    case '3':
        num = "Two's company, three's a crowd";
        break;
    case '4':
        num = "Counting sheep";
        break;
    case '5': {
        num = "Take five";
        break;
    }
    case '6':
        num = "Two's company, three's a crowd";
        break;
    case '7':
        num = "Seventh heaven";
        break;
    case '8':
        num = 'Behind the eight-ball';
        break;
    case '9':
        num = "Counting sheep";
        break;
    case '10':
        num = "Cheaper by the dozen"
        break;
    default:
        num = "Error input"
        break;
}
alert(num);


