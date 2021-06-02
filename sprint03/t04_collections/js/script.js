// --- if you want test, just uncomment ---- //
const guestList = new WeakSet();

let maks = {},
    yarik = {},
    sveta = {},
    lena = {},
    bodya = {};

guestList.add(maks);
guestList.add(yarik);
guestList.add(sveta);
guestList.add(lena);
guestList.add(bodya);

// [{},{},{},{},{}]

// console.log(guestList.has(maks))// you can check if somebody in or not
// console.log(guestList.size)//privat info, it will not tell you size
// console.log(guestList.delete(lena))//you can remove someone, try it

const menu = new Map();

menu.set('pizza', '20$')
menu.set('hookah', '15.5$')
menu.set('water', '5.75$')
menu.set('sushi', '11.50$')
menu.set('wine', '2.30$')

// -------- you can ask to name every available dish and its price, one after the other -------//
//  for(let[key, item] of menu)
//  console.log(key + ' ' + item)
 // ---- iterate check ------ //

const bankVault = new WeakMap();

const o12345 = {},
      o67890 = {},
      o04321 = {},
      o55555 = {},
      o33333 = {};

      bankVault.set(o12345, 'Gold');
      bankVault.set(o67890, 'Silver');
      bankVault.set(o04321, 'Bronze');
      bankVault.set(o55555, 'UAH');
      bankVault.set(o33333, '$');
// ---- the only way to see the contents of a box, is to provide its correct credentials ----- //
//    console.log(bankVault.get(o04321))
// ----- test --- find elements ---- //


const coinCollection = new Set();

coinCollection.add(1)
coinCollection.add(20)
coinCollection.add(30)
coinCollection.add(40)
coinCollection.add(50)
// ------- if you want, you can see the entire collection ------ //
//  for(let item of coinCollection)console.log(item)