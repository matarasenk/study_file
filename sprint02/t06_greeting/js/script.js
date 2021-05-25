let userName = new RegExp("^[a-z A-Z]*$");
let firstName = prompt("Whats you're first name?")

if (!userName.test(firstName)) {
    alert("Wrong input!");
    console.log("Wrong input!");
} else {
    let lastName = prompt("Whats you're last name?");

    if (!userName.test(lastName)) {
        alert("Wrong input!");
        console.log("Wrong input!");
    } else {
        alert('Hello, ' + firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1) + '!');
        console.log('Hello, ' + firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1) + '!');
    }
}

