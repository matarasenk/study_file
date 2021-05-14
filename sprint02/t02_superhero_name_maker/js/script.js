'use strict'

let regularName = new RegExp("^[a-z, A-Z]*$");
let regularGender = new RegExp("(^male$)| (^female$)");
let regularAge = new RegExp("(^[1-9]\d*$)")

const inputName = prompt("What animal is the superhero most similar to?");

if (!inputName || inputName.lenght > 20)
    alert("Error input")
else {
    let gender = prompt("Is the superhero male or female? Leave blank if unknown or other");

    let age = prompt ("How old is the superhero?")
    if (!age || age.length > 5)
        alert ("Wrong input");
    else
        allResult (inputName, gender, age);
}

function allResult(inputName, gender, age) {
    let result = "The superhero name is: " + inputName + "-"
    if (gender === "male" && +age > 18)
        result += "boy"
}
