let superhero;
let idLife;
let idFeet;
let feedButton;
class Human {
  feedButton = false;
  superhero = false;
  idLife;
  idFeet;
  constructor(img, firstName, lastName, gender, age, calories) {
    this.img = img;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
  }
  sleepFor() {
    let howLong = prompt("How long do you want sleep in seconds?");
    nomNomNom.innerHTML = `I'm sleeping`;
    nomNomNom.classList.add("show");
    document.querySelector("img").src = "assets/images/sleep.gif";
    setTimeout(() => {
      if (!this.superhero) {
        document.querySelector("img").src = "https://media1.giphy.com/media/LmNwrBhejkK9EFP504/200.gif";
      } else if (human.calories > 500 && this.superhero) {
        document.querySelector("img").src = "assets/images/super_man.gif";
        document.querySelector("#fly").classList.add("show");
        document.querySelector("#fight").classList.add("show");
      } else if (human.calories < 500 && this.superhero) {
        document.querySelector("img").src = "assets/images/super_man.gif";
        document.querySelector("#fly").classList.add("show");
        document.querySelector("#fight").classList.add("show");
      }
      nomNomNom.innerHTML = `I'm awake now`;
      setTimeout(() => {
        nomNomNom.classList.remove("show");
      }, 2000);
    }, howLong * 1000);
  }
  feed() {
    if (!this.feedButton) {
      nomNomNom.innerHTML = `Nom Nom Nom`;
      if (human.calories < 500) {
        nomNomNom.classList.add("show");
        document.querySelector("img").src = "assets/images/giphy.gif";

        idFeet = setInterval(() => {
          this.calories += 200 / 100;
          document.querySelector(".calories").innerHTML = Math.floor(
            this.calories
          );
        }, 100);

        setTimeout(() => {
          if (human.calories < 500 && !this.superhero) {
            nomNomNom.classList.remove("show");
            document.querySelector("img").src = "https://media1.giphy.com/media/LmNwrBhejkK9EFP504/200.gif";
          } else if (human.calories > 500 && !this.superhero) {
            nomNomNom.classList.remove("show");
            document.querySelector("img").src = "https://media1.giphy.com/media/LmNwrBhejkK9EFP504/200.gif";
          } else if (human.calories > 500 && this.superhero) {
            nomNomNom.classList.remove("show");
            document.querySelector("img").src = "assets/images/super_man.gif";
          }
          clearInterval(idFeet);
        }, 10000);
      } else if (human.calories > 500) {
        nomNomNom.innerHTML = `I'm full`;
        nomNomNom.classList.add("show");
        setTimeout(() => {
          nomNomNom.classList.remove("show");
        }, 3000);
      }
    }else{
      clearInterval(this.idFeet)
    }
  }
  checkCalories() {
    document.querySelector('#hungry').classList.add('show')
  }
  startLife() {
    this.idLife = setInterval(() => {
      this.calories -= 200 / (100 * 60);
      document.querySelector(".calories").innerHTML = Math.floor(this.calories);
    }, 10);
  }
  humanDead() {
    clearInterval(this.idLife);
    document.querySelector("img").src = "https://external-preview.redd.it/0bgVnu2j6hZ-QpYAAjeCp2L-y_BqIRAqX2Vytuw4qjM.jpg?auto=webp&s=6d116041be8f42bc1e345995968cfa4b6ccc6cbc";
    document.querySelector("#feed").classList.add("hide");
    document.querySelector("#sleep").classList.add("hide");
    document.querySelector("#turn").classList.add("hide");
    nomNomNom.innerHTML = `GAME OVER`;
    document.querySelector('#programmer').innerHTML = `R.I.P.`
  }

  startHero() {
    this.superhero = true;
  }
}
class Superhero extends Human {
  constructor(hum) {
    super(
      hum.img,
      hum.firstName,
      hum.lastName,
      hum.gender,
      hum.age,
      hum.calories
    );
  }
  fly() {
    nomNomNom.innerHTML = `I'm flying`;
    nomNomNom.classList.add("show");
    document.querySelector("img").src = "assets/images/fly.gif";
    setTimeout(() => {
      document.querySelector("img").src = "assets/images/super_man.gif";
      nomNomNom.remove("show");
    }, 10000);
    
  }
  fightWithEvil() {
    nomNomNom.innerHTML = `Khhhh-chh... Bang-g-g-g... Evil is defeated!`;
    document.querySelector("img").src = "assets/images/fight.gif";
    setTimeout(() => {
      document.querySelector("img").src = "assets/images/super_man.gif";
      nomNomNom.classList.remove("show");
    }, 3500);
  }
}

let human = new Human(
  "https://media1.giphy.com/media/LmNwrBhejkK9EFP504/200.gif",
  "Yarik",
  "Hacker",
  "male",
  23,
  300
);

let createText = `
<div id="nom_nom_nom" class="hide"></div>
<div id="hungry" class="hide">I'm hungry, please feed me</div>
<h2 id="programmer">Programmer</h2>
<button onclick="intoSuper()" id="turn">Turn into superhero</button>
<div class="card">
  <img src="${human.img}" alt="human" />
</div>
<p>First Name: ${human.firstName}</p>
<p>Last Name: ${human.lastName}</p>
<p>Gender: ${human.gender}</p>
<p>Age: ${human.age}</p>
<p class="calories">Calories: ${human.calories}</p>
<button onclick="human.sleepFor()" id="sleep">Sleep</button>
<button onclick="human.feed()" id="feed">Feed</button>
<button class="hide" id="fly" onclick="superhero.fly()">Fly</button>
<button class="hide" id="fight" onclick="superhero.fightWithEvil()">Fight with Evil</button>`;
let box = document.querySelector(".box");

box.insertAdjacentHTML("afterbegin", createText);

let nomNomNom = document.querySelector("#nom_nom_nom");
// let hungry = document.querySelector('#hungry');

let turnInto = document.querySelector(".turn_into");

let check = true;

human.startLife();
  setTimeout(() => {
      human.checkCalories();
}, 5000);


function intoSuper() {
  if (human.calories <= 500) {
    nomNomNom.innerHTML = `I'm still hungry, please feed me`;
    nomNomNom.classList.add("show");
    setTimeout(() => {
      nomNomNom.classList.remove("show");
    }, 2000);
  } else if (human.calories > 500) {
    superhero = new Superhero(human);
    human.startHero();
    document.querySelector("img").src = "assets/images/super_man.gif";
    document.querySelector("#fly").classList.add("show");
    document.querySelector("#fight").classList.add("show");
  }
}

setInterval(() => {
  if (human.calories < 0.2) {
    human.humanDead();
  }
  if (human.superhero) {
    document.querySelector("#programmer").innerHTML = `Super-Programmer`;
  }
  if(human.calories >= 500){
    setTimeout(() =>{
      document.querySelector('#hungry').classList.remove('show')
    },3500)
  }
}, 100);